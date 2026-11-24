const http=require('http'),fs=require('fs'),path=require('path');
const { chromium } = require('/opt/npm-tools/node_modules/playwright');
const root='/home/claude/alkasser-loob-day-and-night/standalone-worlds';
const out=process.argv[2]; fs.mkdirSync(out,{recursive:true});
const PIXEL=Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==','base64');
(async()=>{
 const server=http.createServer((req,res)=>{const f=path.join(root,decodeURIComponent(req.url.split('?')[0]));if(!fs.existsSync(f)||fs.statSync(f).isDirectory()){res.writeHead(404);return res.end();}
  res.writeHead(200,{'content-type':f.endsWith('.js')?'text/javascript; charset=utf-8':f.endsWith('.html')?'text/html; charset=utf-8':'image/jpeg'});fs.createReadStream(f).pipe(res);}).listen(0);
 const base=`http://127.0.0.1:${server.address().port}/test/aspark.html`;
 const browser=await chromium.launch();
 const W=(process.env.ONLY||'tables,play,moto').split(',');
 const sizes=(process.env.SIZES||'390x844,1440x900').split(',');
 const report=[];
 for(const sz of sizes){const [w,h]=sz.split('x').map(Number);
  const ctx=await browser.newContext({viewport:{width:w,height:h},hasTouch:w<500});
  await ctx.route('https://alkasser.netlify.app/**',r=>r.fulfill({status:200,contentType:'image/png',body:PIXEL}));
  await ctx.route('https://fonts.googleapis.com/**',r=>r.fulfill({status:200,contentType:'text/css',body:''}));
  const page=await ctx.newPage(); page.on('pageerror',e=>report.push('ERR '+e.message));
  for(const world of W){
   await page.goto(`${base}?world=${world}`,{waitUntil:'networkidle'});
   await page.waitForSelector('.ak-khero');
   const n=await page.locator('.ak-khero .ak-slide').count();
   for(let i=0;i<n;i++){
     await page.evaluate(i=>document.querySelectorAll('.ak-khero__dots button')[i].click(),i);
     await page.waitForTimeout(900);
     const m=await page.evaluate(()=>{const s=document.querySelector('.ak-slide.is-on');const tx=s.querySelector('.ak-slide__tx');const b=tx.querySelector('b');const lines=Math.round(b.getBoundingClientRect().height/parseFloat(getComputedStyle(b).lineHeight));const r=tx.getBoundingClientRect(),k=document.querySelector('.ak-khero').getBoundingClientRect();
       return {sr:s.querySelector('.ak-sr').textContent,sub:(s.querySelector('em')||{}).textContent,cta:(s.querySelector('.ak-slide__go')||{}).textContent,href:s.getAttribute('href'),fx:b.className,out:r.top<k.top||r.bottom>k.bottom||r.left<k.left||r.right>k.right,bh:Math.round(b.getBoundingClientRect().height),lh:getComputedStyle(b).lineHeight,fs:getComputedStyle(b).fontSize}});
     // replay the motion and sample frames
     const durs=await page.evaluate(()=>{const kh=document.querySelector('.ak-khero');kh.classList.remove('is-still');const s=document.querySelector('.ak-slide.is-on');s.classList.remove('is-on');void s.offsetWidth;s.classList.add('is-on');
       const an=s.querySelector('.ak-slide__tx').getAnimations({subtree:true});return an.map(a=>{const t=a.effect.getComputedTiming();return Math.round(t.delay+t.activeDuration)})});
     const end=Math.max(0,...durs);
     report.push(`${sz} ${world} #${i+1} ${JSON.stringify(m)} motionEnd=${end}ms anims=${durs.length}`);
     for(const t of (process.env.FRAMES||'300,600,1000,1600').split(',').map(Number)){
       await page.evaluate(t=>{document.querySelector('.ak-slide.is-on').getAnimations({subtree:true}).forEach(a=>{a.pause();a.currentTime=t})},t);
       if(process.env.SHOTS!=='0') await page.locator('.ak-khero').screenshot({path:path.join(out,`${world}-${sz}-s${i+1}-t${t}.jpg`),type:'jpeg',quality:70});
     }
     await page.evaluate(()=>document.querySelector('.ak-slide.is-on').getAnimations({subtree:true}).forEach(a=>a.finish()));
   }
  }
  await ctx.close();}
 console.log(report.join('\n'));await browser.close();server.close();
})();
