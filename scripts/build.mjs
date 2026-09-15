import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const source=path.join(root,'public'), output=path.join(root,'dist');
fs.mkdirSync(output,{recursive:true});
fs.cpSync(source,output,{recursive:true});
let html=fs.readFileSync(path.join(output,'index.html'),'utf8');
const raw=process.env.SITE_URL;
if(raw){
 const url=new URL(raw);
 if(url.protocol!=='https:'||url.username||url.password||url.search||url.hash)throw new Error('SITE_URL must be a clean HTTPS production URL');
 html=html.replace('</head>',`<link rel="canonical" href="${url.origin}"><meta property="og:url" content="${url.origin}"></head>`);
 fs.writeFileSync(path.join(output,'index.html'),html);
}
if(!fs.existsSync(path.join(output,'yangchen-resume-public.pdf')))throw new Error('Public resume PDF is missing');
console.log('Production static assets built in dist/');
