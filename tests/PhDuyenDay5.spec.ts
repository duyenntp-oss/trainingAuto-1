/* Bài tập 1: Viết test đăng nhập (15')
Viết test case đăng nhập vào trang https://the-internet.herokuapp.com/login:

Bước	Hành động
ARRANGE	Mở trang đăng nhập
ACT	Nhập username tomsmith, password SuperSecretPassword!, click Login
ASSERT	Kiểm tra thông báo "You logged into a secure area!" xuất hiện*/
import { test, expect } from '@playwright/test';

test('test đăng nhập', async ({ page }) => {
  
    await page.goto('https://the-internet.herokuapp.com/login');

  
 await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
//  await page.waitForTimeout(100000)
  // ~~~~~~~~~~~~~~~~~~~~~~~~ ASSERT ~~~~~~~~~~~~~~~~~~~~~~~~~
  // 3. ASSERT
 await expect(page.locator('#flash')).toContainText('You logged into a secure area!')

});




/*📝 Bài tập 2: Viết test tìm kiếm Google (15')
Viết test case tìm kiếm trên Google:

Bước	Hành động
ARRANGE	Mở trang https://www.google.com
ACT	Nhập từ khóa "Playwright automation" vào ô tìm kiếm, nhấn Enter
ASSERT	Kiểm tra kết quả tìm kiếm xuất hiện (có ít nhất 1 kết quả)*/
//import { test, expect } from '@playwright/test';

test('Tìm kiếm google', async ({ page }) => {
await page.goto('https://www.bing.com/');
  await page.getByRole('combobox', { name: 'Enter your search here -' }).click();
  await page.getByRole('combobox', { name: 'Enter your search here -' }).fill('Playwright automation');
  await page.locator('textarea[name="q"]').press('Enter');
  await page.goto('https://www.bing.com/search?q=Playwright+automation&form=QBLH&sp=-1&ghc=1&lq=0&pq=playwright+automation&sc=12-21&qs=n&sk=&cvid=E5F89D0754354851BD93E6DA96BBF8ED');



    // await expect(page.locator('#search')).toBeVisible();

  // const results = page.locator('#search');
  // await expect(results).toBeVisible();

  await expect(page.locator('div').filter({ hasText: 'Playwright automation' }));
});

/*


📝 Bài tập 3: Data-driven test đăng nhập (20')
Tạo 2 file:

File 1: data/login-data.ts

Định nghĩa type LoginCase gồm: username, password, expectedResult
Tạo mảng chứa 3 bộ data: 1 đăng nhập đúng, 1 sai password, 1 trống
File 2: tests/login-driven.spec.ts

Import data từ file trên
Dùng vòng lặp for...of tạo test case tự động
Mỗi test: đăng nhập và kiểm tra kết quả thành công/thất bại*/
