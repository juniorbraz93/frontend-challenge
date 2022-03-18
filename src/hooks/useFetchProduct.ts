import {useState} from 'react';
import api from '../services/api';

export default function useFetchProduct() {
  const [products, setProducts]: any = useState([]);
  const [numberProduct, setNumberProduct]: any = useState([]);
  const [loadingProducts, setLoadingProducts]: any = useState(false);

  async function loadProducts(name: string, page = 1, limit = 10) {
    setLoadingProducts(true);
    try {
      const response = await api.get(
        `products?page=${page}&limit=${limit}&name=${name}`,
      );

      setNumberProduct(response.data.totalItems);
      setProducts(response.data.items);
      setLoadingProducts(false);
    } catch (error) {
      setLoadingProducts(false);
    }
  }

  return {products, numberProduct, loadProducts, loadingProducts};
}
