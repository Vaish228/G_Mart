import React from 'react';
import { FaShoppingCart, FaHeart, FaBars } from 'react-icons/fa';
import './Landingpage.css';
import heroImage from "../assets/1ST PAGE.png";
import groceryimage from "../assets/grocery and kitchen.jpg";
import Snacksimage from "../assets/Snacks and drink.png";
import Beautyimage from "../assets/Beauty and wellness.png";
import Vegetables from "../assets/Fresh vegetable.png";
import Fruits from "../assets/Fresh fruits.png";
import Dairy from "../assets/bread and egg.png";
import Oil from "../assets/oil and gee.png";
import Masala from "../assets/masalas.png";
import Cooldrink from "../assets/cool drink.png";
import Icecream from "../assets/ice cream.png";
import Chips from "../assets/chips.png";
import Chocolate from "../assets/chocolate.png";
import Noodle from "../assets/noodle.png";
import Makeup from "../assets/makeup.png";
import Perfume from "../assets/perfume.png";
import Serum from "../assets/serum.png";
import facewash from "../assets/shampoo.png";
import Shaving from "../assets/shaving.png";
import TrendingProducts from '../Trendingpagefiles/Trendingpage';
import { FaLocationPin } from 'react-icons/fa6';

export default function Landingpage() {
  return (
    <>
      <header className="header">
        <div className="left-section">
          <FaBars className="menu-icon" />
          <div className="logo-text">
            <span className="logo-circle">🛒</span>
            <span className="brand">G Mart</span>
          </div>
        </div>

        <div className="center-section">
          <select className="category-select">
            <option>Select by category</option>
            <option>Fruits</option>
            <option>Vegetables</option>
            <option>Snacks</option>
          </select>
          <input type="text" placeholder="Search your product" className="search-input" />
          <button className="search-btn">🔍</button>
        </div>

        <div className="right-section">
          <FaHeart className="icon" />
          <div className="cart-info">
            <FaShoppingCart className="icon" />
            <span className="price">₹ 540</span>
          </div>
          <button className="login-btn">Login</button>
        </div>
      </header>

      <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#">Product</a>
        <a href="#">Offers</a>
        <a href="#">Contact</a>
      </nav>

    <div className="navbar">
  <div className="left-menu">
  </div>

  <div className="delivery-info">
    <span className="location-icon"> <FaLocationPin></FaLocationPin></span>
    <div className="address-text">
      <div className="label"><strong>Delivery to</strong></div>
      <div className="address">123 2nd floor SP Park Chennai</div>
    </div>
  </div>
</div>


<main className="main-content">
  <section className="hero">
    <div className="hero-img-full">
      <img src={heroImage} alt="Fresh Organic Food" />
    </div>
  </section>
</main>

<div className="category-section">
  <div className="category-sidebar">
    <div className="sidebar-item active">
      <img src={groceryimage} alt="Grocery" />
      <p>Grocery And<br />Kitchen</p>
    </div>
    <div className="sidebar-item">
      <img src={Snacksimage} alt="Snacks" />
      <p>Snacks and<br />drinks</p>
    </div>
    <div className="sidebar-item">
      <img src={Beautyimage} alt="Beauty" />
      <p>Beauty and<br />wellness</p>
    </div>
  </div>

  <div className="category-main">
    <div className="category-heading">
  <p><strong>Top Categories</strong></p> 
      <hr />
    </div>

    <div className="category-row">
      <div className="category-item selected">
        <img src={Vegetables} alt="Fresh vegetable" />
        <p>Fresh vegetable</p>
      </div>
      <div className="category-item">
        <img src={Fruits} alt="Fruits" />
        <p>Fresh Fruits</p>
      </div>
      <div className="category-item">
        <img src={Dairy} alt="Dairy" />
        <p>Dairy,breads and eggs</p>
      </div>
      <div className="category-item">
        <img src={Oil}alt="Oil" />
        <p>Oil and ghee</p>
      </div>
      <div className="category-item">
        <img src={Masala} alt="Masalas" />
        <p>Masalas</p>
      </div>
    </div>
<hr></hr>
    <div className="category-row">
      <div className="category-item">
        <img src={Cooldrink} alt="Cool Drinks" />
        <p>Cool Drinks</p>
      </div>
      <div className="category-item">
        <img src={Icecream} alt="Ice Creams" />
        <p>Ice creams and<br />frozen desserts</p>
      </div>
      <div className="category-item">
        <img src={Chips} alt="Chips" />
        <p>Chips and<br />Namkeems</p>
      </div>
      <div className="category-item">
        <img src={Chocolate}alt="Chocolate" />
        <p>Chocolate and<br />sweets</p>
      </div>
      <div className="category-item">
        <img src={Noodle} alt="Noodles" />
        <p>Noodles,pasta,<br />vermicelli</p>
      </div>
    </div>
    <hr></hr>

    <div className="category-row">
      <div className="category-item">
        <img src={Makeup} alt="Makeup" />
        <p>Makeup Show<br />Stoppers</p>
      </div>
      <div className="category-item">
        <img src={Perfume} alt="Perfume" />
        <p>Scent-sational<br />Perfumes</p>
      </div>
      <div className="category-item">
        <img src={Serum} alt="Serum" />
        <p>Moisturisers<br />& serums</p>
      </div>
      <div className="category-item">
        <img src={facewash} alt="Face wash" />
        <p>Shampoo &<br />Face wash</p>
      </div>
      <div className="category-item">
        <img src={Shaving} alt="Shaving care" />
        <p>Shaving care</p>
      </div>
    </div>
  </div>
</div>
<hr></hr>
    </>
  );
}