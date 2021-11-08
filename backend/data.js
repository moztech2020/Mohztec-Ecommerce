import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Mohztec',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
        },
    

      
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
    products: [
      {
        
        name: 'Luminous inverter',
        category: 'Inverter',
        image: '/images/aut3.jpg',
        price: 120,
        countInStock:13,
        brand: 'Luminous',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
      
        name: 'luminous Battery',
        category: 'Inverter Batteries',
        image: '/images/auto.jpg',
        price: 100,
        countInStock:14,
        brand: 'Luminous',
        rating: 4.0,
        numReviews: 10,
        description: 'high quality product',
      },
      {

        name: 'Mohztec Solar panel',
        category: 'Solar panel',
        image: '/images/ele1.jpg',
        price: 220,
        countInStock:5,
        brand: 'Mohztec',
        rating: 4.8,
        numReviews: 17,
        description: 'high quality product',
      },
      {
  
        name: 'street light',
        category: 'Street Light',
        image: '/images/elct66.jpg',
        price: 78,
        countInStock:12,
        brand: 'Mohztec',
        rating: 4.5,
        numReviews: 14,
        description: 'high quality product',
      },
      {
      
        name: 'double rose',
        category: 'Chandelier',
        image: '/images/aut3.jpg',
        price: 65,
        countInStock:0,
        brand: 'AKT',
        rating: 4.5,
        numReviews: 10,
        description: 'high quality product',
      },
      {
        
        name: 'Mohztec Socket',
        category: 'Socket',
        image: '/images/auto77.jpg',
        price: 139,
        countInStock:15,
        brand: 'Mohztec',
        rating: 4.5,
        numReviews: 15,
        description: 'high quality product',
      },
    ],
  };
  export default data;