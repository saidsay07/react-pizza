import { createSlice } from "@reduxjs/toolkit";

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    pizzas: [
      {
        id: 1,
        image: ["pizza-1-thin.webp", "pizza-1.webp"],
        title: "Сырная",
        height: "традиционное",
        size: 40,
        price: 475,
        category: ["все", "вегетарианские"],
        rating: 5,
      },
      {
        id: 2,
        image: ["pizza-2-thin.webp", "pizza-2.webp"],
        title: "Песто",
        height: "традиционное",
        size: 40,
        price: 475,
        category: ["все", "гриль", "острые"],
        rating: 3,
      },
      {
        id: 3,
        image: ["pizza-3-thin.webp", "pizza-3.webp"],
        title: "Бургер Пицца",
        height: "традиционное",
        size: 40,
        price: 645,
        category: ["все", "мясные", "острые"],
        rating: 7,
      },
      {
        id: 4,
        image: ["pizza-4-thin.webp", "pizza-4.webp"],
        title: "Маргарита",
        height: "традиционное",
        size: 40,
        price: 645,
        category: ["все", "вегетарианские", "острые"],
        rating: 1,
      },
      {
        id: 5,
        image: ["pizza-5-thin.webp", "pizza-5.webp"],
        title: "Овощи и грибы",
        height: "традиционное",
        size: 40,
        price: 445,
        category: ["все", "вегетарианские", "острые"],
        rating: 9,
      },
      {
        id: 6,
        image: ["pizza-6-thin.webp", "pizza-6.webp"],
        title: "Деревенская",
        height: "традиционное",
        size: 40,
        price: 475,
        category: ["все", "вегетарианские", "острые"],
        rating: 4,
      },
      {
        id: 7,
        image: ["pizza-7-thin.webp", "pizza-7.webp"],
        title: "Супермясная",
        height: "традиционное",
        size: 40,
        price: 695,
        category: ["все", "мясные"],
        rating: 7,
      },
      {
        id: 8,
        image: ["pizza-8-thin.webp", "pizza-8.webp"],
        title: "Четыре сезона",
        height: "традиционное",
        size: 40,
        price: 695,
        category: ["все", "гриль", "мясные"],
        rating: 2,
      },
    ],
    cart: [],
    category: "все",
    sort: "популярности",
    isPopup: false,
    contentPopup: "",
  },
  reducers: {
    setCategory(state, action) {
      state.category = action.payload.category;
    },
    setSort(state, action) {
      state.sort = action.payload.sort;
    },
    setHeight(state, action) {
      const { id, height } = action.payload;
      state.pizzas = state.pizzas.map((pizza) => {
        if (pizza.id !== id) return pizza;

        return {
          ...pizza,
          price:
            pizza.height === "тонкое" && height === "традиционное"
              ? pizza.price + 100
              : pizza.height === "традиционное" && height === "традиционное"
                ? pizza.price
                : pizza.height === "традиционное" && height === "тонкое"
                  ? pizza.price - 100
                  : pizza.price,
          height: height,
        };
      });
    },
    setSize(state, action) {
      const { id, size } = action.payload;
      state.pizzas = state.pizzas.map((pizza) => {
        if (pizza.id !== id) return pizza;

        return {
          ...pizza,
          price:
            pizza.size === 26 && size === 30
              ? pizza.price + 50
              : pizza.size === 30 && size === 40
                ? pizza.price - 50 + 100
                : pizza.size === 26 && size === 40
                  ? pizza.price + 100
                  : pizza.size === 40 && size === 30
                    ? pizza.price - 50
                    : pizza.size === 30 && size === 26
                      ? pizza.price - 50
                      : pizza.size === 40 && size === 26
                        ? pizza.price - 100
                        : pizza.price,
          size: size,
        };
      });
    },
    addToCart(state, action) {
      const cartPizza = action.payload.pizza;
      const findPizza = state.cart.find(
        (pizza) =>
          pizza.id === cartPizza.id &&
          pizza.height === cartPizza.height &&
          pizza.size === cartPizza.size,
      );

      if (!findPizza) {
        state.cart.push({ ...action.payload.pizza, count: 1 });
      } else {
        state.cart = state.cart.map((pizza) => {
          if (
            !(
              pizza.id === cartPizza.id &&
              pizza.height === cartPizza.height &&
              pizza.size === cartPizza.size
            )
          )
            return pizza;

          return {
            ...pizza,
            count: findPizza.count + 1,
          };
        });
      }
    },
    clearCart(state) {
      state.cart = [];
    },
    removePizza(state, action) {
      state.cart = state.cart.filter((pizza) => {
        return !(
          pizza.id === action.payload.id &&
          pizza.height === action.payload.height &&
          pizza.size === action.payload.size
        );
      });
    },
    setPopup(state, action) {
      state.contentPopup = action.payload.title;
      state.isPopup = !state.isPopup;
    },
    decrementCount(state, action) {
      const { id, height, size } = action.payload;
      state.cart = state.cart.map((pizza) => {
        if (
          !(pizza.id === id && pizza.height === height && pizza.size === size)
        )
          return pizza;

        return {
          ...pizza,
          count: pizza.count - 1,
        };
      });
    },
    incrementCount(state, action) {
      const { id, height, size } = action.payload;
      state.cart = state.cart.map((pizza) => {
        if (
          !(pizza.id === id && pizza.height === height && pizza.size === size)
        )
          return pizza;

        return {
          ...pizza,
          count: pizza.count + 1,
        };
      });
    },
  },
});

export const {
  setCategory,
  setSort,
  setHeight,
  setSize,
  addToCart,
  clearCart,
  removePizza,
  setPopup,
  decrementCount,
  incrementCount,
} = pizzaSlice.actions;

export const pizzaReducer = pizzaSlice.reducer;
