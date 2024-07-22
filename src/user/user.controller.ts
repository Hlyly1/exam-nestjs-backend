import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

import * as svgCaptcha from 'svg-captcha';
import { ApiTags } from '@nestjs/swagger';
import { UserLogin } from './dto/UserLogin.dto';
@Controller('user')
@ApiTags('用户接口')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('list')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('code')
  createCode(@Req() req, @Res() res) {
    console.log(req.session);
    const captcha = svgCaptcha.create({
      size: 4, //生成几个验证码
      fontSize: 50, //文字大小
      width: 100, //宽度
      height: 34, //高度
      background: '#cc9966', //背景颜色
    });
    req.session.code = captcha.text; //存储验证码记录到session
    res.type('image/svg+xml');
    res.send(captcha.data);
  }
  @Post('create')
  createUser(@Req() req, @Body() body) {
    console.log(req.session.code, body);
    if (
      req.session.code.toLocaleLowerCase() === body?.code?.toLocaleLowerCase()
    ) {
      return {
        message: '验证码正确',
      };
    } else {
      return {
        message: '验证码错误',
      };
    }
  }
  @Post('login')
  async login(@Body() UserLogin: UserLogin, @Req() req, @Res() res) {
    // 假设这里有一个函数来验证用户凭证
    console.log(UserLogin, 'UserLogin');
    const user = await this.userService.validateUser(
      UserLogin.username,
      // UserLogin.password,
    );
    if (user) {
      // 用户验证成功，将用户ID保存到会话中
      req.session.userId = user.id;
      // 你可以继续设置其他会话信息，如用户名等
      req.session.username = user.username;

      // 登录成功后的响应
      res.send({ message: '登录成功' });
    } else {
      // 登录失败
      res.status(401).send({ message: '登录失败' });
    }
  }
}
