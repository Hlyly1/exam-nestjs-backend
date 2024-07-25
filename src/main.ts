import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const whiteList = ['/user/login', '/api/subject'];
  function middleWareAll(req, res, next) {
    if (whiteList.includes(req.originalUrl)) {
      next();
    } else {
      if (req.session) {
        const dateString = req.session.cookie._expires;
        const date = new Date(dateString);
        const timestamp = date.getTime();
        if (req.session.userId) {
          if (Date.now() < timestamp) {
            console.log(timestamp, Date.now());
            // 会话未过期，继续处理请求
            console.log(req.session, 'session');
            console.log('用户ID存在且会话未过期:', req.session.userId);
            next();
          }
        } else {
          // 会话已过期，处理会话过期逻辑
          console.log('会话已过期');
          res
            .status(401)
            .send({ code: 401, message: '会话已过期，请重新登录' });
        }
      } else {
        // 用户ID不存在，处理未授权访问
        console.log('未授权访问');
        res.status(401).send({ code: 401, message: '未授权访问' });
      }
    }
  }

  //创建app实例
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: '1212211',
      rolling: false,
      name: 'liyi.sid',
      cookie: { maxAge: 9911 },
    }),
  );
  app.use(cors());
  app.use(middleWareAll);
  const options = new DocumentBuilder()
    .setTitle('考试项目后端接口文档')
    .setDescription('接口文档')
    .setVersion('v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
  await app.listen(9090);
}
bootstrap();
