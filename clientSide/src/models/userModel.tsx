export default interface UserItem {
    UserId: number;
    name: string;
    surName: number;
    email: string;
    cart: { products: [], totalPrice: number };
}