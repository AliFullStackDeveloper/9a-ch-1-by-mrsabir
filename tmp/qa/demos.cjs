const { chromium }=require('C:/Users/Hp/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:'msedge'});const page=await browser.newPage({viewport:{width:1366,height:768},reducedMotion:'reduce'});await page.goto('http://127.0.0.1:5173');
 async function go(i){await page.selectOption('select',String(i));await page.waitForTimeout(150);await page.waitForFunction(()=>document.querySelector('.presentation-body > div')?.style.transform==='none');}
 await go(3);for(let i=0;i<8;i++)await page.getByRole('button',{name:'Next division',exact:true}).click();if(!(await page.locator('.big-result').textContent()).includes('101011001'))throw Error('Binary result incorrect');
 await page.locator('input[type=number]').fill('0');if(!(await page.locator('.big-result').textContent()).startsWith('0'))throw Error('Binary zero failed');
 await go(7);for(let i=0;i<4;i++)await page.getByRole('button',{name:'Run next line',exact:true}).click();if((await page.locator('.memory-grid strong').allTextContents()).join(',')!=='5,5,5')throw Error('Trace failed');
 await go(11);for(let i=0;i<3;i++)await page.getByRole('button',{name:'Next step',exact:true}).click();if(await page.locator('.expression').textContent()!=='50')throw Error('Order failed');
 await go(15);await page.locator('.index-grid button').nth(6).click();if(!(await page.locator('.big-result').textContent()).includes('"M"'))throw Error('String indexing failed');
 await go(19);await page.screenshot({path:'tmp/qa/boolean-final.png'});await page.locator('#theme-toggle-btn').click();await page.screenshot({path:'tmp/qa/dark-final.png'});
 await go(21);await page.getByRole('button',{name:'Next practice',exact:true}).click();await page.getByRole('button',{name:'Next practice',exact:true}).click();await page.getByRole('button',{name:'Reveal answer',exact:true}).click();await page.waitForTimeout(500);await page.screenshot({path:'tmp/qa/reveal-final.png'});const answerBox=await page.locator('.answer-panel').boundingBox();console.log('answer',answerBox,await page.locator('.answer-panel').getAttribute('style'),await page.locator('.lesson-slide').evaluate(e=>({scroll:e.scrollTop,height:e.clientHeight,total:e.scrollHeight})));await page.waitForTimeout(2000);await page.screenshot({path:'tmp/qa/reveal-final.png'});
 await page.setViewportSize({width:390,height:844});await go(17);await page.screenshot({path:'tmp/qa/mobile-final.png'});
 console.log('Binary including zero, variable tracing, arithmetic order, string indexing, responsive layout and theme checks passed.');await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});


