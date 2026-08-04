/*Tạo Page Class lib/pages/merchant.page.ts:

Ít nhất 5 Locator (XPath)
Ít nhất 5 Method (search, clickAdd, clickEdit, verifyResult, getRowCount...)
Kế thừa BasePage*/ 


import { Page, expect } from "@playwright/test";
import { BasePage } from "./base.page";

export class MerchantPage extends BasePage { // kế thừa base 
  constructor(page: Page) {
    super(page);
  }

  // ==========================
  // Locator (XPath)
  // ==========================

  // Ô tìm kiếm màn Merhchant
  
  
  searchTextbox = this.page.locator('input[name="keyword"]');
  // Nút Add
  addButton = this.page.locator('//button[@label="Tạo mới"]');

  // Nút Edit của dòng đầu tiên
  editButton = this.page.locator("(//td/a[@class='ng-star-inserted'])[1]"); 

  // Bảng dữ liệu Merchant
  merchantTable = this.page.locator('//*[@id="pr_id_10-table"]/tbody');

  // Kết quả tìm kiếm theo tên Merchant
  merchantName = this.page.locator("//*[@id'pr_id_10-table']/tbody/tr[1]"); 

  // ==========================
  // Methods
  // ==========================

  // Tìm kiếm Merchant
  async search(keyword: string) {
    await this.searchTextbox.fill(keyword);
    await this.page.keyboard.press("Enter");
  }

  // Click nút Add
  async clickAdd() {
    await this.addButton.click();
  }

  // Click nút Edit
  async clickEdit() {
    await this.editButton.click();
  }

  // Verify kết quả tìm kiếm 
  // //Tạo một hàm tên verifyResult.
  //  Khi được gọi, hàm sẽ nhận vào một chuỗi expectedName,
  //  sau đó đợi Playwright kiểm tra xem phần tử merchantName trên giao diện có chứa chuỗi đó hay không. 
  // Nếu có thì test tiếp tục, nếu không thì test sẽ thất bại.
  async verifyResult(expectedName: string) {
    await expect(this.merchantName).toContainText(expectedName);
  }

  // Đếm số dòng trong bảng
async getRowCount() {
  const rowCount = await this.merchantTable.count();

  console.log(rowCount);

  //return rowCount;
}
}