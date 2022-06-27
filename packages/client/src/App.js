import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  async function getProducts() {
    try {
      const products = await fetch('/api/ecommerce/products');
      console.log('Products', products);
    } catch (e) {
      console.error('Could not load products', e);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
