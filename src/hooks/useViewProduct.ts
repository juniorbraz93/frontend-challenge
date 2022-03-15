import {useEffect, useState} from 'react';
import api from '../services/api';

export default function useViewProduct(props: any) {
  const [products, setProducts]: any = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get(
          `products?name=${props.name}&limit=${props.id + 1}`,
        );

        setProducts(response.data.items[0]);
      } catch (error) {}
    }

    loadProducts();
  }, [props.id, props.name]);

  return {products};
}
