const products = [
  {
    "id": 1,
    "name": "Smartphone X200",
    "description": "A high-end smartphone with a stunning display and powerful processor.",
    "price": 942.63,
    "category": "Electronics",
    "picture": "https://5.imimg.com/data5/SELLER/Default/2023/6/312743853/CM/HM/IA/4630526/apple-iphone-14-pro-max-128gb-deep-purple-mobile-phone-500x500.png"
  },
  {
    "id": 2,
    "name": "Wireless Earbuds",
    "description": "Comfortable and high-quality sound wireless earbuds.",
    "price": 432.89,
    "category": "Electronics",
    "picture": "https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988"
  },
  {
    "id": 3,
    "name": "Smartwatch Pro",
    "description": "Feature-packed smartwatch with heart rate monitoring and GPS.",
    "price": 1810.44,
    "category": "Electronics",
    "picture": "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/25208116/2023/12/5/c1ea05d9-930a-42e5-a163-666b865a9f341701754783871-cmf-Watch-Pro-2391701754783718-1.jpg"
  },
  {
    "id": 4,
    "name": "Gold Pendant Necklace",
    "description": "A delicate gold necklace with a beautiful pendant.",
    "price": 1780.34,
    "category": "Jewellery",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6oXixlTD1R3LN8G1UqaTH5kPIBDmaKzqdw&s"
  },
  {
    "id": 5,
    "name": "Classic Leather Jacket",
    "description": "A stylish leather jacket perfect for a rugged look.",
    "price": 927.48,
    "category": "Men's Fashion",
    "picture": "https://devotedstore.com/cdn/shop/files/21.png?v=1711236966"
  },
  {
    "id": 6,
    "name": "Formal Shirt",
    "description": "A sleek and comfortable shirt for office wear.",
    "price": 1800.67,
    "category": "Men's Fashion",
    "picture": "https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/1/_/fit-in/1000x1333/1_bndr-4148-t-78-light-grey.jpg"
  },
  {
    "id": 7,
    "name": "Casual Sneakers",
    "description": "Trendy and comfortable sneakers for everyday use.",
    "price": 85.12,
    "category": "Men's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqwqw7kU8hEvPvmUgIvsvlJGY5i2qsPbNGQ&s"
  },
  {
    "id": 8,
    "name": "Sports Watch",
    "description": "A durable and functional watch for active men.",
    "price": 1500.72,
    "category": "Men's Fashion",
    "picture": "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/f/0/i/1-digital-sports-men-s-kids-watch-for-boys-watch-for-men-digital-original-imahydw9dddkmzfk.jpeg?q=20&crop=false"
  },
  {
    "id": 9,
    "name": "Floral Maxi Dress",
    "description": "Elegant and comfortable maxi dress with a floral design.",
    "price": 536.48,
    "category": "Women's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvte7W9jvVAKPoyvG7dTSmopb5h3CwJvZpA&s"
  },
  {
    "id": 10,
    "name": "Handbag Classic",
    "description": "A classy handbag that complements any outfit.",
    "price": 987.29,
    "category": "Women's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLurznVtzfeyY1pSE_gm7D3ACzHs43QrjmA&s"
  },
  {
    "id": 11,
    "name": "Heeled Sandals",
    "description": "Stylish and comfortable heeled sandals for parties.",
    "price": 479.67,
    "category": "Women's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeCarQqcJ2ksytljuDV6sR62pC-yqZFWS-A&s"
  },
  {
    "id": 12,
    "name": "Gold Pendant Necklace",
    "description": "A delicate gold necklace with a beautiful pendant.",
    "price": 1870.15,
    "category": "Jewellery",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_6oXixlTD1R3LN8G1UqaTH5kPIBDmaKzqdw&s"
  },
  {
    "id": 13,
    "name": "Sapphire Earrings",
    "description": "Luxury sapphire earrings, a timeless addition to your collection.",
    "price": 1220.03,
    "category": "Jewellery",
    "picture": "https://ornatejewels.com/cdn/shop/products/OJE0020BS.jpg?v=1719042011&width=900"
  },
  {
    "id": 14,
    "name": "Gaming Laptop Z15",
    "description": "A powerful gaming laptop with top-notch graphics and performance.",
    "price": 1395.23,
    "category": "Electronics",
    "picture": "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/dell-client-products/notebooks/alienware-notebooks/alienwar-x16-mlk/gallery/copilot-key/notebook-alienware-x16-r2-gy-copilot-gallery-1.psd?fmt=pjpg&pscan=auto&scl=1&wid=4381&hei=2667&qlt=100,1&resMode=sharp2&size=4381,2667&chrss=full&imwidth=5000"
  },
  {
    "id": 15,
    "name": "Classic Leather Jacket",
    "description": "A stylish leather jacket perfect for a rugged look.",
    "price": 1240.84,
    "category": "Men's Fashion",
    "picture": "https://devotedstore.com/cdn/shop/files/21.png?v=1711236966"
  },
  {
    "id": 16,
    "name": "Formal Shirt",
    "description": "A sleek and comfortable shirt for office wear.",
    "price": 627.13,
    "category": "Men's Fashion",
    "picture": "https://d118ps6mg0w7om.cloudfront.net/media/catalog/product/1/_/fit-in/1000x1333/1_bndr-4148-t-78-light-grey.jpg"
  },
  {
    "id": 17,
    "name": "Casual Sneakers",
    "description": "Trendy and comfortable sneakers for everyday use.",
    "price": 291.14,
    "category": "Men's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqwqw7kU8hEvPvmUgIvsvlJGY5i2qsPbNGQ&s"
  },
  {
    "id": 18,
    "name": "Sports Watch",
    "description": "A durable and functional watch for active men.",
    "price": 910.77,
    "category": "Men's Fashion",
    "picture": "https://rukminim2.flixcart.com/image/850/1000/xif0q/watch/f/0/i/1-digital-sports-men-s-kids-watch-for-boys-watch-for-men-digital-original-imahydw9dddkmzfk.jpeg?q=20&crop=false"
  },
  {
    "id": 19,
    "name": "Floral Maxi Dress",
    "description": "Elegant and comfortable maxi dress with a floral design.",
    "price": 545.92,
    "category": "Women's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgvte7W9jvVAKPoyvG7dTSmopb5h3CwJvZpA&s"
  },
  {
    "id": 20,
    "name": "Handbag Classic",
    "description": "A classy handbag that complements any outfit.",
    "price": 1021.39,
    "category": "Women's Fashion",
    "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJLurznVtzfeyY1pSE_gm7D3ACzHs43QrjmA&s"
  }
];


export default products
  