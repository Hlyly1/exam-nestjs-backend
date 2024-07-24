# nestjs

数据库连接

user

![1721482398256](C:\Users\15333\AppData\Roaming\Typora\typora-user-images\1721482398256.png)

DTO

![1721482657067](C:\Users\15333\AppData\Roaming\Typora\typora-user-images\1721482657067.png)



nestjs生成

先新建文件夹 在生成以下目录

nest g controller user

nest g service user

nest g module user



## 数据库连接教程

https://blog.csdn.net/lxy869718069/article/details/103408695





## session安装

npm i express-session -- save

npm i @types/express-session -D

```
import * as session from 'express-session';
app.use(
    session({
      secret: '1212211',
      rolling: false,
      name: 'liyi.sid',
      cookie: { maxAge: 9911 },
    }),
  );
```



## 安装验证码

npm install svg-captcha --save





## 中间件使用

middleware

局部中间件  一个单独模块设置中间件

全局中间件



## 后端请求允许跨域

npm install cros

npm install @types/cors  -D

```
import * as cors from 'cors';
app.use(cors());
```

## 上传文件  和   静态资源访问

## 下载文件的两种方法

直接下载

二进制流下载

## 响应拦截器

## 全局异常拦截器

## 管道转换

## UUid使用

npm install uuid -S

npm install @types/uuid -D



## 快速生成dto

nest g res xxx

nest g pi xxx   生成管道

## 守卫

## 自定义装饰器

## 集成swagger

npm install @nestjs/swagger swagger-ui-express

```js
const options = new DocumentBuilder()
    .setTitle('考试项目后端接口文档')
    .setDescription('接口文档')
    .setVersion('v1')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/api-docs', app, document);
```

Controller层

```
@ApiTags('用户接口')
```



## 实体类



## CRUD实例

![1721548083919](C:\Users\15333\AppData\Roaming\Typora\typora-user-images\1721548083919.png)

```

```



## 疑问

--save 是什么意思