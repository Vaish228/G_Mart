import React, { useState } from 'react';
import bestValue1 from '../assets/bestvalue1.png';
import bestValue2 from '../assets/bestvalue2.png';
import basmatiRice from '../assets/basmati rice.png';
import dal from '../assets/toor.png';
import facewash from '../assets/facewash.png';
import madangle from '../assets/mad angles.png';
import Tomato from '../assets/tomato.png';
import Onion from '../assets/onion.png';
import Beans from '../assets/beans.png';
import Carrot from '../assets/carrot.png';
import './DealsSection.css';

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
    img: dal,
    name: 'Tata Sampann Toor Dal',
    qty: '1 kg',
    price: 150,
    original: 170,
    discount: '10%',
    rating: 4.0,
  },
  {
    id: 3,
    img: facewash,
    name: 'Himalaya Neem Face Wash',
    qty: '100 ml',
    price: 145,
    original: 160,
    discount: '10%',
    rating: 4.3,
  },
  {
    id: 4,
    img: madangle,
    name: 'Bingo Mad Angles',
    qty: '80 gm',
    price: 20,
    original: 25,
    discount: '20%',
    rating: 4.1,
  },
];

const TrendingProducts = () => {
  const [activeTab, setActiveTab] = useState('Top rated');

  return (
    <div className="trending-container">
      <div className="trending-header">
        <h2>Trending Products</h2>
        <div className="tabs">
          {['Top rated', 'Latest', 'Best seller'].map((tab) => (
            <span
              key={tab}
              className={activeTab === tab ? 'tab active' : 'tab'}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>

      <div className="product-cards">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <span className="offer">{product.discount} off</span>
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.qty}</p>
            <p>₹{product.price} <s>₹{product.original}</s></p>
            <p>⭐ {product.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function DealsSection() {
  return (
    <div className="deals-section">
      <div className="best-value">
        <h2>Best Value</h2>
        <div className="best-value-cards">
          <img src={bestValue1} alt="100% Fresh Fruit" />
          <img src={bestValue2} alt="Save 37% on Every Order" />
        </div>
      </div>

      <TrendingProducts />
    </div>
  );
}
const hotDeals = [
  {
    id: 1,
    category: 'Vegetables',
    img: Tomato,
    name: 'Organic Tomatoes',
    qty: '1 kg',
    price: 48,
    original: 55,
    discount: '9%',
  },
  {
    id: 2,
    category: 'Vegetables',
    img: 'Onion',
    name: 'Red Onions',
    qty: '1 kg',
    price: 30,
    original: 35,
    discount: '15%',
  },
  {
    id: 3,
    category: 'Vegetables',
    img: 'Carrot',
    name: 'Carrots - Premium',
    qty: '1 kg',
    price: 60,
    original: 70,
    discount: '10%',
  },
  {
    id: 4,
    category: 'Vegetables',
    img: 'Beans',
    name: 'Fresh Green Beans',
    qty: '500 gm',
    price: 36,
    original: 45,
    discount: '20%',
  },
];

const HotDealsSection = () => {
  const [activeCat, setActiveCat] = useState('Vegetables');

  return (
    <div className="hot-deals-section">
      <h2>Hot Deals</h2>
      <div className="hot-tabs">
        {['Fruits', 'Vegetables', 'Snacks'].map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCat(cat)}
            className={activeCat === cat ? 'hot-tab active' : 'hot-tab'}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="hot-products">
        {hotDeals
          .filter(p => p.category === activeCat)
          .map(p => (
            <div className="hot-card" key={p.id}>
              <span className="hot-offer">{p.discount} OFF</span>
              <img src={p.img} alt={p.name} />
              <p>{p.name}</p>
              <p>{p.qty}</p>
              <p>₹{p.price} <s>₹{p.original}</s></p>
              <button>Add to Cart</button>
            </div>
          ))}
      </div>
    </div>
  );
};
