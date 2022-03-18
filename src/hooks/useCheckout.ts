import {useEffect, useState} from 'react';
import {IBodyProps} from '../types/checkout.types';

import {
  storageGetAll,
  getMultiple,
  storageGetItem,
  storageSetItem,
} from '../utils/AsyncStorage';

export default function useCheckout() {
  const [getItems, setGetItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalValue, setTotalValue] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  let value: number = 0;
  let quantity: number = 0;

  async function listItens() {
    setLoading(true);
    const getKeys = await storageGetAll();

    const cartItems = await getMultiple(getKeys);
    const mountItems: any = cartItems.map((item: any[]) => {
      return {...JSON.parse(item[1])};
    });

    mountItems.map((item: any) => {
      quantity = item.quantity + quantity;
      value = item.priceMember * item.quantity + value;
    });

    setTotalValue(value);
    setTotalItems(quantity);
    setGetItems(mountItems);
    setLoading(false);
  }

  async function setItem(data: IBodyProps, key: string) {
    setLoading(true);
    const item: any = await storageGetItem(String(data.id));

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

    const body: IBodyProps = {
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
      size: undefined,
    };

    await storageSetItem(String(body.id), body);
    setLoading(false);
  }

  useEffect(() => {
    listItens();
  }, []);

  return {getItems, setItem, loading, totalValue, totalItems, listItens};
}
