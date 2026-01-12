import { ItemCounter } from "./shopping-cart/ItemCounter";

interface ItemInCart {
  productName: string;
  quantity: number;
}

const itemsInCart: ItemInCart[] = [
  {
    productName: "Nintendo Switch 2",
    quantity: 2,
  },
  {
    productName: "Pro Controller",
    quantity: 3,
  },
  {
    productName: "Super Smash",
    quantity: 5,
  },
];

export function FirstStepApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {
        itemsInCart.map(({ productName, quantity }: ItemInCart) => (
          <ItemCounter key={productName} name={productName} quantity={quantity} />
        ))
      }
    </>
  );
}
