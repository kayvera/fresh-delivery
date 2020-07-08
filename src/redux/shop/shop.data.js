const SHOP_DATA = {
  protein: {
    id: 1,
    title: "Protein",
    routeName: "protein",
    items: [
      {
        id: 1,
        name: "Eggs and Bacon",
        imageUrl: "https://i.ibb.co/cTdSg18/protein-bacon.jpg",
        price: 9.95,
      },
      {
        id: 2,
        name: "Mediterranean Burger",
        imageUrl: "https://i.ibb.co/jkzmFjC/protein-burger-med.jpg",
        price: 9.95,
      },
      {
        id: 3,
        name: "Protein Pancake with Ham",
        imageUrl: "https://i.ibb.co/YZRb5ck/protein-pancake.jpg",
        price: 7.95,
      },
      {
        id: 4,
        name: "Chicken Quesadilla",
        imageUrl: "https://i.ibb.co/zHGh4vv/protein-quesadilla.jpg",
        price: 9.95,
      },
      {
        id: 5,
        name: "Turkey Burger",
        imageUrl: "https://i.ibb.co/Vvp99MT/protein-turkey-burger.jpg",
        price: 9.95,
      },
      {
        id: 6,
        name: "Steak and Sweet Potatoes",
        imageUrl: "https://i.ibb.co/gVn5H5L/protein-steak.jpg",
        price: 9.95,
      },
    ],
  },
  keto: {
    id: 2,
    title: "Keto",
    routeName: "keto",
    items: [
      {
        id: 7,
        name: "BBQ Steak",
        imageUrl: "https://i.ibb.co/xHF9G5Z/keto-bbq-steak.jpg",
        price: 9.95,
      },
      {
        id: 8,
        name: "Chicken and Zucchini",
        imageUrl: "https://i.ibb.co/k66vL4h/keto-chicken.jpg",
        price: 9.95,
      },
      {
        id: 9,
        name: "Meatloaf and Veggies",
        imageUrl: "https://i.ibb.co/QPYZ5GH/keto-meatloaf.jpg",
        price: 9.95,
      },
      {
        id: 10,
        name: "Keto Mediterranean Burger",
        imageUrl: "https://i.ibb.co/dgRtjsz/keto-med-burger.jpg",
        price: 9.95,
      },
      {
        id: 11,
        name: "Steak and Veggies",
        imageUrl: "https://i.ibb.co/WG9R6tF/keto-steak.jpg",
        price: 9.95,
      },
      {
        id: 12,
        name: "Keto Texan Burger",
        imageUrl: "https://i.ibb.co/z7VWxXG/keto-texan-burger.jpg",
        price: 9.95,
      },
    ],
  },
  vegan: {
    id: 3,
    title: "Vegan",
    routeName: "vegan",
    items: [
      {
        id: 13,
        name: "Rice and Bean Burrito",
        imageUrl: "https://i.ibb.co/LRyvDy4/vegan-burrito.jpg",
        price: 8.95,
      },
      {
        id: 14,
        name: "Blueberry Muffins",
        imageUrl: "https://i.ibb.co/M8Xy637/vegan-muffins.jpg",
        price: 7.95,
      },
      {
        id: 15,
        name: "Loaded Sweet Potato Fries",
        imageUrl: "https://i.ibb.co/KKxT5WR/vegan-fries.jpg",
        price: 9.95,
      },
      {
        id: 16,
        name: "French Toast with Faux Ham",
        imageUrl: "https://i.ibb.co/j4dTjHS/vegan-toast.jpg",
        price: 8.95,
      },
      {
        id: 17,
        name: "Tofu Quesadilla",
        imageUrl: "https://i.ibb.co/8cbT7Z1/vegan-tofu-quesadilla.jpg",
        price: 9.95,
      },
    ],
  },
  bulk: {
    id: 4,
    title: "Bulk",
    routeName: "bulk",
    items: [
      {
        id: 18,
        name: "BBQ Chicken with Potato Wedges",
        imageUrl: "https://i.ibb.co/dQcny8B/bulk-bbq-chicken.jpg",
        price: 9.95,
      },
      {
        id: 19,
        name: "Chicken Caprese",
        imageUrl: "https://i.ibb.co/7NBPx1V/bulk-chicken-caprese.jpg",
        price: 9.95,
      },
      {
        id: 20,
        name: "Mango Chicken",
        imageUrl: "https://i.ibb.co/ZgN0Mfc/bulk-mango-chicken.jpg",
        price: 9.95,
      },
      {
        id: 21,
        name: "Pineapple Chicken Stir Fry",
        imageUrl: "https://i.ibb.co/n1Dt3qF/bulk-pineapple-stir-fry.jpg",
        price: 9.95,
      },
      {
        id: 22,
        name: "Chicken and Sausage Jambalaya",
        imageUrl: "https://i.ibb.co/2kx41Kr/bulk-sausage-jambalaya.jpg",
        price: 9.95,
      },
      {
        id: 23,
        name: "Thai Salmon",
        imageUrl: "https://i.ibb.co/pZBK4CJ/bulk-thai-salmon.jpg",
        price: 9.95,
      },
    ],
  },
  cut: {
    id: 5,
    title: "Cut",
    routeName: "cut",
    items: [
      {
        id: 24,
        name: "BBQ Steak and Sweet Potatoes",
        imageUrl: "https://i.ibb.co/tDmGWPL/cut-bbq-steak.jpg",
        price: 9.95,
      },
      {
        id: 25,
        name: "BBQ Flatbread Pizza",
        imageUrl: "https://i.ibb.co/KzsvL5W/cut-flatbreak-bbq-pizza.jpg",
        price: 9.95,
      },
      {
        id: 26,
        name: "Lite Vanilla Muffins",
        imageUrl: "https://i.ibb.co/JxCtYfX/cut-light-muffins.jpg",
        price: 7.95,
      },
      {
        id: 27,
        name: "Meatballs and Zucchini",
        imageUrl: "https://i.ibb.co/kDQF0sv/cut-meatballs.jpg",
        price: 9.95,
      },
      {
        id: 28,
        name: "Teriyaki Chicken with Broccoli",
        imageUrl: "https://i.ibb.co/K6CbxMW/cut-teriyaki-chicken.jpg",
        price: 9.95,
      },
      {
        id: 29,
        name: "Turkey Burger with Coleslaw",
        imageUrl: "https://i.ibb.co/F83Q0J8/cut-turkey-burger.jpg",
        price: 9.95,
      },
    ],
  },
};

export default SHOP_DATA;
