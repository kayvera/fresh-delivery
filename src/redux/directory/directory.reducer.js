const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/W3CbjhL/pexels-photo-769289.jpg",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/wSmpRZB/pexels-photo-1305063.jpg",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/vxLtrhs/pexels-photo-1893563.jpg",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/bvLrsKP/pexels-photo-3026808.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/L6PtCm7/pexels-photo-257816.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
