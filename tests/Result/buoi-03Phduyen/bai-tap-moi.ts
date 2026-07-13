//  PHDUYEN//Bài 1:
 const orderStatus: string = 'shipped'
 if (orderStatus === 'pending') {
  console.log('Đơn hàng đang chờ xử lý');}
 else if (orderStatus === 'shipped') {
    console.log('Đơn hàng đã giao cho vận chuyển');}
else if (orderStatus === 'delivered') {
    console.log('Đơn hàng đã giao thành công');}
else if (orderStatus === 'canceled') {
    console.log('Đơn hàng đã bị hủy');
}
else{
    console.log('Trạng thái không xác định');
}





//PhDuyen//Bài 2:
const dailyRevenue: number[] = [150000,230000,0,180000,350000,420000,0];
let Tongdoanhthu: number =0; // gán tổng doanh thu ban đầu =0
let DemSoNgayNghi: number =0;// số ngày nghỉ ban đầu =0
// Duyệt từng Daily trong mảng dailyRevenue
let ListDoanhthutungngay: string =""; // ban đầu gán ListDoanhthutungngay là một chuỗi trống
for ( const Daily of dailyRevenue){

// Tính tổng doanh thu
// ban đầu tổng doanh thu = 0
/*
Vòng 1: 0 + daily 1 = 150000
sau vòng 1 thì Tổng doanh thu mưới = 150000
Vòng 2 : = tổng doanh thu vòng 1 + daily2 = 150000 +230000
tương tự các vòng còn lại*/
Tongdoanhthu = Tongdoanhthu + Daily; 
// Đếm số ngày có doanh thu = 0
if (Daily === 0 ) {

DemSoNgayNghi = DemSoNgayNghi+1;
}
/*giải thích : đếm số ngày nghỉ
Ban đầu DemSoNgayNghi =0
sử dụng điều kiện if
nếu như daily trong mảng dailyRevenue mà = 0 thì DemSoNgayNghi sẽ được cộng 1
Vòng 1 :daily khác 0 -> không có gì thay đổi,DemSoNgayNghi =0
Vòng 2 tương tự
Vòng 3 : vì daily = 0 -> DemSoNgayNghi sẽ được +1 = 0+1 = 1
Chạy tới cuối cùng   */
ListDoanhthutungngay = ListDoanhthutungngay + Daily +"đ,";
/*In ra list doanh thu từng ngày
Gán cho tham số ListDoanhthutungngay là kiểu chuỗi và ban đầu là rỗng
vòng 1 : chạy lần 1 sẽ bằng rỗng + giá trị daily1 + đ, = 150000đ,
Chạy tương tự tới giá trị cuối cùng
Kết thúc vòng for
thì console yêu cầu phải có thêm dấu 3 chấm cuối list
*/
}
console.log("Tổng doanh thu:", Tongdoanhthu + "đ");
console.log("Số ngày nghỉ :", DemSoNgayNghi);
console.log("Doanh thu từng ngày:", ListDoanhthutungngay + "..." );