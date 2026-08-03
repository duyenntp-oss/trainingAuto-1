/**Viết 5 test case trong tests/merchant-crud.spec.ts:

TC01: Tìm kiếm đơn vị theo tên chính xác
TC02: Tìm kiếm với data-driven (3+ bộ data, dùng vòng lặp)
TC03: Kiểm tra hiển thị danh sách mặc định
TC04: Tìm kiếm với từ khóa không tồn tại → hiển thị "Không có dữ liệu"
TC05: Click nút "Thêm Đơn Vị" → kiểm tra form hiển thị */

import { test, expect } from "@playwright/test";
import { LoginPage } from "../lib/pages/login.pageBTVN";
import { MerchantPage } from "../lib/pages/merchant.pageBTVN";
import { merchantData } from "../data/merchant.dataBTVN";


test.describe("Merchant CRUD Test", () => {


  let loginPage: LoginPage;
  let merchantPage: MerchantPage;


  test.beforeEach(async ({ page }) => {

    loginPage = new LoginPage(page);
    merchantPage = new MerchantPage(page);


    // Mở trang login
    await page.goto("https://dev42-iportal.opdev.vn/iportal/");


    // Login trước khi test Merchant
    await loginPage.login(
      "admin",
      "123456"
    );


    // Đi tới trang Merchant
    await page.goto("https://dev42-iportal.opdev.vn/iportal/");

  });



  // =====================================
  // TC01: Tìm kiếm đơn vị theo tên chính xác
  // =====================================

  test("TC01 - Search merchant by exact name", async () => {


    const merchant = merchantData[0];


    await merchantPage.search(
      merchant.name
    );


    await merchantPage.verifyResult(
      merchant.name
    );


  });



  // =====================================
  // TC02: Data-driven search với 3 data
  // =====================================

  merchantData.forEach((merchant) => {


    test(`TC02 - Search merchant: ${merchant.name}`, async () => {


      await merchantPage.search(
        merchant.name
      );


      await merchantPage.verifyResult(
        merchant.name
      );


    });


  });



  // =====================================
  // TC03: Kiểm tra hiển thị danh sách mặc định
  // =====================================

  test("TC03 - Verify default merchant list display", async () => {


    const rowCount = await merchantPage.getRowCount();


    expect(rowCount).toBeGreaterThan(0);


  });



  // =====================================
  // TC04: Search keyword không tồn tại
  // =====================================

  test("TC04 - Search merchant not exist", async () => {


    await merchantPage.search(
      "ABCXYZ123456"
    );


    const rowCount = await merchantPage.getRowCount();


    expect(rowCount).toBe(0);


  });



  // =====================================
  // TC05: Click Thêm Đơn Vị và kiểm tra form
  // =====================================

  test("TC05 - Click Add Merchant and verify form display", async () => {


    await merchantPage.clickAdd();


    const formTitle = merchantPage.page.locator(
      "//h1[contains(text(),'Thêm Đơn Vị')]"
    );


    await expect(formTitle)
      .toBeVisible();


  });


});