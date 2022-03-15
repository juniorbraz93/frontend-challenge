import {useEffect, useState} from 'react';
import api from '../services/api';

export default function useFetchProduct() {
  const [products, setProducts]: any = useState([]);
  const [numberProduct, setNumberProduct]: any = useState([]);

  async function loadProducts() {
    try {
      const response = await api.get('products?page=1&limit=65');

      setNumberProduct(response.data.totalItems);
      setProducts(response.data.items);
    } catch (error) {}
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return {products, numberProduct};
}
