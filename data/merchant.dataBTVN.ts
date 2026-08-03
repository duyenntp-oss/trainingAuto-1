//Tạo file data data/merchant.data.ts – chứa ít nhất 3 bộ data test (tên, mã số thuế, email, phone)
// data/merchant.data.ts
export type merchantData = {
    name : string;
    taxCode: string;
    email: string;
    phone: string,
}
export const merchantData = [
  {
    name: "Công ty TNHH ABC",
    taxCode: "0312345678",
    email: "abc@test.com",
    phone: "0901234567",
  },
  {
    name: "Công ty TNHH XYZ",
    taxCode: "0109876543",
    email: "xyz@test.com",
    phone: "0912345678",
  },
  {
    name: "Công ty Cổ phần Demo",
    taxCode: "0201122334",
    email: "demo@test.com",
    phone: "0987654321",
  },
];