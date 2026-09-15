import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..','public');
const entries=fs.readdirSync(root,{recursive:true}).filter(x=>fs.statSync(path.join(root,x)).isFile());
const forbidden=/chatgpt\.(?:com|site)|chat\.openai\.com|openai\.com|oaiusercontent\.com|sediment|artifact:|file:\/\//i;
for(const file of entries){
 if(!/\.(html|css|js|svg)$/.test(file))continue;
 const text=fs.readFileSync(path.join(root,file),'utf8');
 if(forbidden.test(text))throw new Error(`Non-independent resource reference: ${file}`);
}
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
for(const match of html.matchAll(/(?:src|href)="(\.\/[^"#]+)"/g)){
 if(!fs.existsSync(path.resolve(root,match[1])))throw new Error(`Missing asset: ${match[1]}`);
}
for(const match of html.matchAll(/href="#([^"]+)"/g)){
 if(!html.includes(`id="${match[1]}"`))throw new Error(`Missing section: ${match[1]}`);
}
for(const section of ['home','projects','skills','experience','education','resume'])if(!html.includes(`id="${section}"`))throw new Error('Missing '+section);
console.log(`Checked ${entries.length} public files, resource links and section anchors.`);
