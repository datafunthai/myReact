import './App.css';
import React, { Component } from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductItem from "./components/product/productItem";

// Comment 1
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductItem productName="A" unitPrice="300" />
        <ProductItem productName="B" unitPrice="100" />
        <Footer company="Unicorn Max" email="nattapong@bunditcenter.com"/>
      </div>
    );
  }
}

export default App;
