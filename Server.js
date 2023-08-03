const express = require('express');
const app = express();
const port = 3000; 

const menuData = {
    menu: [
      {
        id: 1,
        name: 'Spaghetti Carbonara',
        description: '“ Creamy chicken carbonara is inspired by a classic Italian (Roman) pasta dish made with bacon or pancetta, whisked egg, and hard cheese',
        price: 12.99,
        category: 'Pasta',
        image_url: '’https://hips.hearstapps.com/hmg-prod/images/hdm-chickencorbonara-14753-1564436398.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=1200:*',
      },
      {
        id: 2,
        name: 'Fettuccine Alfredo',
        description: 'Creamy Alfredo sauce Fettuccine pasta with a homemade decadent Alfredo sauce made with 5 simple ingredients parmesan cheese and butter.',
        price: 11.99,
        category: 'Pasta',
        image_url: 'https://amindfullmom.com/wp-content/uploads/2016/01/Light-Fettucine-Alfredo-Recipe.jpg',
      },
      {
        id: 3,
        name: 'Bake Ziti',
        description: 'A casserole with ziti pasta and a Neapolitan-style tomato sauce.',
        price: 10.99,
        category: 'Pasta',
        image_url: 'https://www.thecountrycook.net/wp-content/uploads/2020/02/EASY-BAKED-ZITI-thumbnail.jpg',
        id: 4,
        name: 'Lasagna',
        description: 'Made of very wide, flat sheets. Either term can also refer to an Italian dish made of stacked layers of lasagna alternating with fillings such as ragù, béchamel sauce, vegetables, cheeses, and seasonings and spices..',
        category: 'Pasta',
        image_url: 'https://houseofnasheats.com/wp-content/uploads/2020/09/classic-lasagna-recipe-22.jpg',

      },
     
    ],
  };
  app.get('/api/menu', (req, res) => {
    res.json(menuData);
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });

  module.exports = menuData;