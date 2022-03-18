import {useEffect, useState} from 'react';
import api from '../services/api';

export default function useViewProduct(props: any) {
  const [products, setProducts]: any = useState([]);
  const [addProducts, setAddProducts]: any = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get(
          `products?name=${props.name}&limit=${props.id + 1}`,
        );

        //

        const body = {
          id: response.data.items[0].id,
          image: response.data.items[0].image,
          name: response.data.items[0].name,
          price: response.data.items[0].price.toLocaleString('pt-BR', {
            //
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }),
          discount: response.data.items[0].discount,
          priceMember: response.data.items[0].priceMember.toLocaleString(
            'pt-BR',
            {
              //
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          ),
          priceNonMember: response.data.items[0].priceNonMember.toLocaleString(
            'pt-BR',
            {
              //
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            },
          ),
          type: response.data.items[0].type,
          classification: response.data.items[0].classification,
          size: response.data.items[0].size || response.data.items[0].volume,
          rating: response.data.items[0].rating,
          avaliations: response.data.items[0].avaliations,
          country: response.data.items[0].country,
          region: response.data.items[0].region,
          flag: response.data.items[0].flag,
          sommelierComment: response.data.items[0].sommelierComment,
        };

        setAddProducts(response.data.items[0]);
        setProducts(body);
      } catch (error) {}
    }

    loadProducts();
  }, [props.id, props.name]);

  return {products, addProducts};
}
