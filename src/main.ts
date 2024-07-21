import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as cors from 'cors';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
async function bootstrap() {
  const whiteList = ['/login'];

  function middleWareAll(req, res, next) {
    console.log(req.originalUrl, '我收全局的');
    if (whiteList.includes(req.originalUrl)) {
      next();
    } else {
      //权限校验
      next();
      // res.send({ code: 200 });
    }
  }

  //创建app实例
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: '1212211',
      rolling: true,
      name: 'lityi.sid',
      cookie: { maxAge: 99999121121 },
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
