/* Bài 1: Định nghĩa type & tạo object
Định nghĩa type CardData gồm:

cardNumber: string
cardHolder: string
expiryDate: string
cvv: string
bankCode: string
cardType: 'credit' | 'debit' | 'atm'
Tạo 3 object CardData cho 3 loại thẻ khác nhau.
*/
type CardData = {
cardNumber: string
cardHolder: string
expiryDate: string
cvv: string
bankCode: string
cardType: 'credit' | 'debit' | 'atm'
}
const CardData1: CardData = {
cardNumber: 'Card1',
cardHolder: 'Holder1',
expiryDate: '01/12/2002',
cvv: 'cvv1',
bankCode: 'bankCode1',
cardType: 'credit'
}
const CardData2: CardData = {
cardNumber: 'Card2',
cardHolder: 'Holder2',
expiryDate: '01/12/2002',
cvv: 'cvv2',
bankCode: 'bankCode2',
cardType: 'debit'
}
const CardData3: CardData = {
cardNumber: 'Card3',
cardHolder: 'Holder3',
expiryDate: '01/12/2002',
cvv: 'cvv3',
bankCode: 'bankCode3',
cardType: 'atm'
}
/*
📝 Bài 2: Mảng Object + Vòng lặp
Dùng type CardData từ bài 1, tạo mảng cardList: CardData[] chứa 3 thẻ.

Dùng for...of duyệt và in:

💳 1. 4111-****-****-1234 | VCB | credit
💳 2. 5111-****-****-5678 | TCB | debit
💳 3. 6111-****-****-9012 | ACB | atm
📊 Tổng: 3 thẻ

*/

type CardDataBai2 = {
cardNumber: string
bankCode: string
cardType: 'credit' | 'debit' | 'atm'
}
const CardBai2: CardDataBai2[]=[
    {cardNumber:'4111-****-****-1234',bankCode:'VCB',cardType:'credit'},
    {cardNumber:'5111-****-****-5678',bankCode:'TCB',cardType:'debit'},
    {cardNumber:'6111-****-****-9012',bankCode:'ACB',cardType:'atm'},
]
let Tongsoluong: number =0;
let STT : number=0;
for (const CardB2 of CardBai2 ){
    Tongsoluong=Tongsoluong+1,
    STT=STT+1;
    console.log(STT+'.'+ CardB2.cardNumber +'|'+CardB2.bankCode+'|'+CardB2.cardType)
    
}
console.log("tổng: "+Tongsoluong+" thẻ" )

/*
📝 Bài 3: Object truyền vào hàm
Cho hàm có sẵn:

function validateCard(card: CardData): string
Hàm kiểm tra:

expiryDate đã quá hạn chưa? (giả sử card hết hạn nếu expiryDate < '2027')
cardType là 'credit' hay 'debit' hay 'atm'?
Trả về chuỗi mô tả: "✅ Thẻ credit VCB còn hạn" hoặc "❌ Thẻ debit TCB đã hết hạn"
Tự tạo 3 object CardData và gọi validateCard().*/ 

type CardDataBai3 = {
cardNumber: string
cardHolder: string
expiryDate: string
cvv: string
bankCode: string
cardType: 'credit' | 'debit' | 'atm'
}
function validateCard(card: CardDataBai3): string {
  // Kiểm tra thẻ còn hạn hay đã hết hạn
  if (card.expiryDate < "2027") {
    console.log('Thẻ '+card.cardType+' '+card.bankCode + ' đã hết hạn' )
  } else {
      console.log('Thẻ '+card.cardType+' '+card.bankCode + ' còn hạn' )
  }
}
const card1: CardDataBai3 = {
  cardNumber: "1234567890123456",
  cardHolder: "Nguyen Van A",
  expiryDate: "2028",
  cvv: "123",
  bankCode: "VCB",
  cardType: "credit",
};

const card2: CardDataBai3 = {
  cardNumber: "9876543210987654",
  cardHolder: "Tran Thi B",
  expiryDate: "2026",
  cvv: "456",
  bankCode: "TCB",
  cardType: "debit",
};

const card3: CardDataBai3 = {
  cardNumber: "1111222233334444",
  cardHolder: "Le Van C",
  expiryDate: "2029",
  cvv: "789",
  bankCode: "MB",
  cardType: "atm",
};
console.log(validateCard(card1));
console.log(validateCard(card2));
console.log(validateCard(card3));