import { useEffect, useState } from 'react';

import { request } from './fetch';

import './App.css';

const { REACT_APP_PROXY = '' } = process.env;

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const json = await request('/api/ecommerce/products');
    const {
      data: { items },
    } = json;
    setProducts(items);
  }

  async function getUser() {
    setLoading(true);
    setUser(null);

    try {
      const json = await request('/api/user');

      if (json.data?.platformUserId) {
        setUser(json.data);
      }
    } catch (e) {
      console.error('Could not load user', e);
      setUser(null);
    }

    setLoading(false);
  }

  function renderBody() {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      return (
        <a
          href={`${REACT_APP_PROXY}/connect?redirectUrl=${encodeURIComponent(
            window.location.href,
          )}`}
        >
          Connect
        </a>
      );
    }

    return (
      <div>
        Logged in as: {user.platformUserId} from {user.platform}
      </div>
    );
  }

  useEffect(() => {
    if (user) {
      getProducts();
    }
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="App">
      {renderBody()}
      {user && products.length && (
        <ul>
          {products.map((product) => (
            <li key={`p-${product.id}`}>
              {product.images && product.images.length && (
                <div>
                  <img src={product.images[0]} alt="product" />
                </div>
              )}
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
