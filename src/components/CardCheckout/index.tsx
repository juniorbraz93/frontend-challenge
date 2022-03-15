import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {Colors} from '../../config/Colors';
import {
  ViewCarCheckout,
  ViewImageCardCheckout,
  ImageCarCheckout,
  ViewPriceDescription,
  ViewNameCheckoutProduct,
  NameCheckoutProduct,
  RemoveProduct,
  ViewDescriptionCheckoutProduct,
  DescriptionCheckoutProduct,
  ViewAreaPrice,
  ViewPrice,
  PriceNoMember,
  PriceMember,
  ViewQuantity,
  AddOrRemoveProduct,
  Quantity,
  ViewMemberPrice,
  TextRSPrice,
} from './styles';

import {
  storageGetAll,
  getMultiple,
  // storageClear,
} from '../../utils/AsyncStorage';

const CardCheckout: React.FC = () => {
  const [getItems, setGetItems] = useState([]);
  async function get() {
    const getItem = await storageGetAll();
    const cartItems = await getMultiple(getItem);
    // console.log(cartItems);
    const mountItems = cartItems.map((item: any[]) => {
      return {...JSON.parse(item[1])};
    });
    setGetItems(mountItems);
    // if (Array.isArray(cartItems)) {
    //   return;
    // }
    return [];

    // console.log(cartItems);
    // await storageClear();
  }

  useEffect(() => {
    // console.log(get());
    get();
  }, []);

  return (
    <ViewCarCheckout>
      <ViewImageCardCheckout>
        <ImageCarCheckout
          source={require('../../config/image/garrafa.png')}
          width={80}
          height={120}
        />
      </ViewImageCardCheckout>
      <ViewPriceDescription>
        <ViewNameCheckoutProduct>
          <NameCheckoutProduct>test</NameCheckoutProduct>
          <RemoveProduct>
            <Feather name="x" size={30} color={Colors.blackSearch} />
          </RemoveProduct>
        </ViewNameCheckoutProduct>
        <ViewDescriptionCheckoutProduct>
          <DescriptionCheckoutProduct>Teste</DescriptionCheckoutProduct>
        </ViewDescriptionCheckoutProduct>
        <ViewAreaPrice>
          <ViewPrice>
            <PriceNoMember>R$ 70,36</PriceNoMember>
            <ViewMemberPrice>
              <TextRSPrice>R$</TextRSPrice>
              <PriceMember> 59,81</PriceMember>
            </ViewMemberPrice>
          </ViewPrice>
          <ViewQuantity>
            <AddOrRemoveProduct>
              <Ionicons
                name="remove-circle-outline"
                size={28}
                color={Colors.blackSearch}
              />
            </AddOrRemoveProduct>
            <Quantity>01</Quantity>
            <AddOrRemoveProduct>
              <Ionicons
                name="md-add-circle-outline"
                size={28}
                color={Colors.pink}
              />
            </AddOrRemoveProduct>
          </ViewQuantity>
        </ViewAreaPrice>
      </ViewPriceDescription>
    </ViewCarCheckout>
  );
};

export default CardCheckout;
