/**
 * ============================================================
 * BUỔI 2 – DEMO 06: Các hàm thao tác trang thường dùng
 * ============================================================
 * Mục tiêu: Làm quen các hàm ACT (thao tác) cơ bản
 *
 * Chạy: npx playwright test tests/demo-06-page-actions.spec.ts
 */
/*Bài tập về nhà số 1
1.Module này dùng để kiểm tra việc thực hiện các hành động tương tác của người dùng trên trang web
2. Có 6 hàm test() trong module này
ACT-01 : Kiểm tra việc nhập văn bản  vào ô input - sử dụng hàm page.fill()
ACT-02 : Kiểm tra hành động Click chuột vào checkbox : toggle - sử dụng hàm page.click()
ACT-03: Kiểm tra việc nhấn phím enter/escape sau khi Nhập văn bản - sử dụng hàm page.keyboard.press('Enter')
ACT-04: Kiểm tra việc di chuột (hover) qua một phần tử để kích hoạt các hiệu ứng hoặc hiện các nút ẩn (nút Xóa) - sử dụng hàm  page.locator().hover()
ACT-05: Kiểm tra việc chọn một giá trị trong danh sách thả xuống (dropdown) - sử dụng hàm page.selectOption()
.
ACT-06: Kiểm tra việc  đánh dấu (check) hoặc bỏ đánh dấu (uncheck) một ô checkbox.- sử dụng hàm page.locator().check()
*/
import { test, expect } from '@playwright/test';

// modulte
test.describe('Các hàm thao tác (page actions) cơ bản', () => {

  test.beforeEach(async ({ page }) => {
    //1. arrange
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('ACT-01: page.fill() – Nhập text vào ô input', async ({ page }) => {
    //2. action
    // Nhập text
    await page.fill('input.new-todo', 'Nội dung cần nhập');
    await page.keyboard.press('Enter');
    //3. assert
    // Kiểm tra
    await expect(page.locator('.todo-list li'))
      .toContainText('Nội dung cần nhập');
  });

  test('ACT-02: page.click() – Click vào element', async ({ page }) => {
   //1. arrange
    // Thêm 1 task
    await page.fill('input.new-todo', 'Task cần hoàn thành');
    await page.keyboard.press('Enter');
      //2. Act
    // Click vào checkbox để đánh dấu hoàn thành
    await page.click('.todo-list li .toggle');
      //3. assert
    // Kiểm tra task đã được đánh dấu hoàn thành (class completed)
    await expect(page.locator('.todo-list li')).toHaveClass(['completed']);
  });

  test('ACT-03: page.keyboard.press() – Nhấn phím', async ({ page }) => {
    //2. act
    // Nhấn Enter sau khi fill
    await page.fill('input.new-todo', 'Task từ bàn phím');
    await page.keyboard.press('Enter');     // Nhấn Enter
    //3. assert
    // Nhấn Escape
    // await page.keyboard.press('Escape');

    await expect(page.locator('.todo-list li')).toHaveCount(1);
  });

  test('ACT-04: page.locator().hover() – Hover chuột', async ({ page }) => {
    //1.arrange
    // Thêm task trước
    await page.fill('input.new-todo', 'Task để hover');
    await page.keyboard.press('Enter');
    //2. act
    // Hover vào task để hiện nút Xóa
    await page.locator('.todo-list li').hover();
   
    // Click nút xóa (chỉ hiện khi hover)
    await page.click('.todo-list li .destroy');
     //3. assert
    // Kiểm tra task đã bị xóa
    await expect(page.locator('.todo-list li')).toHaveCount(1);
  });

  test('ACT-05: page.selectOption() – Chọn dropdown', async ({ page }) => {
   //1. arrange // Mở trang có dropdown
    await page.goto('https://the-internet.herokuapp.com/dropdown');
//2. act1
    // Chọn option trong dropdown
    await page.selectOption('#dropdown', '1');
//3. assert1
    // Kiểm tra giá trị đã được chọn
    await expect(page.locator('#dropdown')).toHaveValue('1');
//2. act2
    // Chọn option khác
    await page.selectOption('#dropdown', '2');
//3. assert2
    await expect(page.locator('#dropdown')).toHaveValue('2');
  });

  test('ACT-06: page.locator().check() – Check vào checkbox', async ({ page }) => {
    //1. arrange
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    // Lấy checkbox đầu tiên
    const checkbox1 = page.locator('input[type="checkbox"]').first();
//2. act1
    // Check vào checkbox (nếu chưa check)
    await checkbox1.check();
//3. assert1
    await expect(checkbox1).toBeChecked();

    // Uncheck checkbox

//2. act2
    await checkbox1.uncheck();
//3. assert2
    await expect(checkbox1).not.toBeChecked();
  });
});
