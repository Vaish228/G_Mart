import React, { useState } from 'react';
import './Trendingpage.css'; 
import basmatiRice from './basmatirice.png';
import dal from '../assets/toor.png';
import facewash from '../assets/facewash.png';
import madangle from '../assets/mad angles.png';
import mangodrink from '../assets/mangodrink.png';
import yipee from '../assets/yippee.png';
import surfexcel from '../assets/surfexcel.png';
import sunflower from '../assets/sunflower oil.png';
const products = [
  {
    id: 1,
    img: basmatiRice,
    name: 'India Gate Basmati Rice',
    qty: '5 kg',
    price: 430,
    original: 480,
    discount: '10%',
    rating: 4.5,
  },
  {
    id: 2,
    img: dal ,
    name: 'Tata Sampann Toor Dal',
    qty: '1 kg',
    price: 150,
    original: 170,
    discount: '10%',
    rating: 4.0,
  },
  {
    id: 3,
    img: facewash ,
    name: 'Himalaya Neem Face Wash',
    qty: '100 ml',
    price: 145,
    original: 160,
    discount: '10%',
    rating: 4.3,
  },
  {
    id: 4,
    img: madangle ,
    name: 'Bingo Mad Angles',
    qty: '80 gm',
    price: 20,
    original: 25,
    discount: '20%',
    rating: 4.1,
  },
  {
    id: 5,
    img: mangodrink ,
    name: 'Frooty mango drink',
    qty: '1.5l',
    price: 65,
    original: 70,
    discount: '10%',
    rating: 4.1,
  },
  {
    id: 6,
    img: yipee ,
    name: 'Sunfeast yippee noodle',
    qty: '4 pack',
    price: 80,
    original: 90,
    discount: '10%',
    rating: 4.1,
  },
  {
    id: 7,
    img: surfexcel ,
    name: 'Surf excel matic liquid',
    qty: '500 ml',
    price: 100,
    original: 150,
    discount: '15%',
    rating: 4.1,
  },
   {
    id: 8,
    img: sunflower ,
    name: 'Sunflower Oil',
    qty: '1L',
    price: 150,
    original: 170,
    discount: '10%',
    rating: 4.0,
  },
];

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState('Top rated');

  return (
    <div className="trending-container">
      <div className="trending-header">
        <h2>Trending Products</h2>
        <div className="tabs">
          {['Top rated', 'Latest', 'Best seller'].map(tab => (
            <span
              key={tab}
              className={activeTab === tab ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
        <a className="view-all">View All →</a>
      </div>

      <div className="product-grid">
        {products.map(prod => (
          <div className="product-card" key={prod.id}>
            <div className="discount-tag">{prod.discount} off</div>
            <img src={prod.img} alt={prod.name} />
            <h4>{prod.name}</h4>
            <p className="qty">{prod.qty}</p>
            <div className="price-section">
              ₹{prod.price}
              <span className="original">₹{prod.original}</span>
            </div>
            <div className="bottom-row">
              <button>Add to cart</button>
              <div className="rating-heart">
                     ⭐ {prod.rating}
                <span className="heart">♡</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
<hr></hr>
export default TrendingProducts;
