# 杨晨个人作品集

标准 HTML、CSS、JavaScript 静态网站。资源随项目部署，无账号认证、外部字体服务或运行时 API 依赖。

## 本地运行

```sh
npm install
npm run dev
```

默认地址由开发服务器输出。公开源文件位于 `public/`。

```sh
npm run check
npm run build
npm start
```

## 部署

Vercel 使用 `Other` 框架预设、`npm run build`、`dist` 输出目录。`vercel.json` 已配置构建。生产环境必须关闭访问认证和密码保护，并使用固定生产域名进行匿名访问验证。

可通过 `SITE_URL` 指定正式域名，构建时写入 canonical 和 og:url。未配置时不会写入错误地址。

## 内容与隐私

项目与实习以本人简历记载为依据，个人工作与项目结果分别展示。学习概念演示不作为研究或竞赛成果。项目中的 PDF 为公开简历摘要，不含手机号、邮箱、住址或个人照片。

字体及对应开源许可在 `public/fonts/`。本仓库不包含原始投递简历、账户凭证和本地审阅资料。
