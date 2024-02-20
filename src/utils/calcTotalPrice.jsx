export function calcTotalPrice(cart) {
  return cart.reduce((acc, pizza) => {
    return (acc += pizza.price * pizza.count);
  }, 0);
}
