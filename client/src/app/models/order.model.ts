export interface Order {
  fullName: string;
  phoneNumber: string;
  address: string;
  products: { id: number; quantity: number }[]; // Mảng các sản phẩm và số lượng
}
