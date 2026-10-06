const { chromium } = require('C:/Users/Hp/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const page=await browser.newPage({viewport:{width:1440,height:900},reducedMotion:'reduce'});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5173');
 await page.waitForSelector('select[aria-label="Jump to slide"]');
 const count=await page.locator('select option').count();
 let practiceCount=0;let screenshots=[];
 for(let i=0;i<count;i++) {
  await page.selectOption('select',String(i));
  if(i>0) await page.waitForSelector('.lesson-slide');
  await page.waitForTimeout(550);
  if(await page.locator('.practice-panel').count()) {
   const practices=Number((await page.locator('.practice-heading span').last().textContent()).split('/')[1]);
   for(let j=0;j<practices;j++) {
    if(await page.locator('.answer-panel').count()) throw new Error('Answer visible before reveal on slide '+(i+1));
    await page.getByRole('button',{name:'Reveal answer',exact:true}).click();
    await page.waitForSelector('.answer-panel');
    const answer=await page.locator('.answer-panel pre').textContent();
    if(!answer.trim()) throw new Error('Empty answer');
    await page.getByRole('button',{name:'Hide answer',exact:true}).press('Space');
    await page.waitForSelector('.answer-panel',{state:'detached'});
    if(await page.locator('select').inputValue()!==String(i)) throw new Error('Space navigated away from practice');
    practiceCount++;
    if(j<practices-1) await page.getByRole('button',{name:'Next practice',exact:true}).click();
   }
  }
  if([0,2,3,4,7,11,15,19,21].includes(i)) {const path=`tmp/qa/slide-${i+1}.png`;await page.screenshot({path});screenshots.push(path);}
 }
 await page.selectOption('select','19');await page.waitForTimeout(550);
 await page.getByRole('button',{name:'P: true',exact:true}).click();
 await page.getByRole('button',{name:'Q: false',exact:true}).click();
 const logic=await page.locator('.logic-results').textContent();
 if(!logic.includes('P AND Qfalse') || !logic.includes('P OR Qtrue')) throw new Error('Boolean demo failed');
 await page.locator('#theme-toggle-btn').click();await page.screenshot({path:'tmp/qa/dark.png'});
 await page.setViewportSize({width:390,height:844});await page.selectOption('select','17');await page.waitForTimeout(550);await page.screenshot({path:'tmp/qa/mobile.png'});
 const width=await page.evaluate(()=>document.documentElement.scrollWidth);if(width>390) throw new Error('Horizontal page overflow');
 console.log(JSON.stringify({slides:count,practiceAnswersChecked:practiceCount,errors,screenshots, mobileWidth:width}));
 await browser.close();if(errors.length)process.exit(1);
})().catch(e=>{console.error(e);process.exit(1)});
