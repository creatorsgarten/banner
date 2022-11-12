import fs from 'fs'
import path from 'path'
import puppeteer from 'puppeteer'
;(async () => {
  console.log('launching browser...')
  const browser = await puppeteer.launch({
    defaultViewport: {
      width: 2048,
      height: 1152,
    },
    headless: true,
  })

  console.log('navigating...')
  const page = await browser.newPage()
  await page.goto('http://localhost:3000', {
    waitUntil: 'networkidle2',
  })

  console.log('capturing...')
  const screenshot = await page.screenshot({
    type: 'png',
    encoding: 'binary',
  })

  await browser.close()

  console.log('writing...')
  const distDirectory = path.join(process.cwd(), 'dist')
  if (!fs.existsSync(distDirectory))
    fs.mkdirSync(distDirectory, {
      recursive: true,
    })

  fs.writeFileSync(path.join(distDirectory, 'screenshot.png'), screenshot)
})()
