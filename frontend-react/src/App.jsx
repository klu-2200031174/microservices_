import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/user/')
      .then(res => setUser(res.data))
      .catch(err => console.log('Auth fetch failed', err));

    axios.get('http://localhost:5000/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log('Product fetch failed', err));
  }, []);

  return (
    <div>
      <h1>Welcome {user?.username || 'Guest'}!</h1>
      <h2>Products:</h2>
      <ul>
        {products.map(p => <li key={p.id}>{p.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
