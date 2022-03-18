import {useEffect, useState} from 'react';

import {
  storageGetAll,
  getMultiple,
  storageGetItem,
  storageSetItem,
} from '../utils/AsyncStorage';

export default function useCheckout() {
  const [getItems, setGetItems]: any = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems]: any = useState(0);

  let value = 0;
  let quantity = 0;

  async function listItens() {
    setLoading(true);
    const getItem = await storageGetAll();
    const cartItems = await getMultiple(getItem);
    const mountItems = cartItems.map((item: any[]) => {
      return {...JSON.parse(item[1])};
    });

    mountItems.map(item => {
      quantity = item.quantity + quantity;
      value = item.priceMember * item.quantity + value;
    });
    setTotalValue(value);
    setTotalItems(quantity);
    setGetItems(mountItems);
    setLoading(false);
  }

  async function setItem(data: any, key?: string) {
    setLoading(true);
    const item: string | any = await storageGetItem(String(data.id));

    const parseItem = JSON.parse(item);

    const removeQuantityItem = parseItem
      ? parseItem.quantity - 1
      : data.quantity
      ? data.quantity - 1
      : 1;

    const setQuantityItem = parseItem
      ? parseItem.quantity + 1
      : data.quantity
      ? data.quantity + 1
      : 1;

    const body = {
      id: parseItem ? parseItem.id : data.id,
      image: parseItem ? parseItem.image : data.image,
      name: parseItem ? parseItem.name : data.name,
      country: parseItem ? parseItem.country : data.country,
      type: parseItem ? parseItem.type : data.type,
      volume: parseItem ? parseItem.volume : data.volume || data.size,
      priceNonMember: parseItem
        ? parseItem.priceNonMember
        : data.priceNonMember,
      priceMember: parseItem ? parseItem.priceMember : data.priceMember,
      quantity: key === 'remove' ? removeQuantityItem : setQuantityItem,
    };

    await storageSetItem(String(body.id), body);
    setLoading(false);
  }

  useEffect(() => {
    listItens();
  }, []);

  return {getItems, setItem, loading, totalValue, totalItems, listItens};
}
