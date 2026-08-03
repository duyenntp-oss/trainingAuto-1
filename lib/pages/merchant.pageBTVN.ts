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
  editButton = this.page.locator("(//button[contains(text(),'Edit')])[1]");

  // Bảng dữ liệu Merchant
  merchantTable = this.page.locator("//table//tbody//tr");

  // Kết quả tìm kiếm theo tên Merchant
  merchantName = this.page.locator("//table//tbody//tr[1]/td[1]");

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
  async verifyResult(expectedName: string) {
    await expect(this.merchantName).toContainText(expectedName);
  }

  // Đếm số dòng trong bảng
async getRowCount() {
  const rowCount = await this.merchantTable.count();
  return rowCount;
}
}