import React from 'react';
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
  ViewLoading,
} from './styles';
// import useCheckout from '../../hooks/useCheckout';
import {storageRemoveItem} from '../../utils/AsyncStorage';
import {ActivityIndicator} from 'react-native';

const CardCheckout = ({data, lastIndex, onPressAddItem, loading}: any) => {
  const price = data.priceMember * data.quantity;
  return (
    <>
      <ViewCarCheckout lastIndex={lastIndex} loading={loading}>
        <ViewImageCardCheckout>
          <ImageCarCheckout
            source={{uri: data.image}}
            width={80}
            height={120}
          />
        </ViewImageCardCheckout>
        <ViewPriceDescription>
          <ViewNameCheckoutProduct>
            <NameCheckoutProduct>{data.name}</NameCheckoutProduct>
            <RemoveProduct onPress={() => storageRemoveItem(String(data.id))}>
              <Feather name="x" size={30} color={Colors.blackSearch} />
            </RemoveProduct>
          </ViewNameCheckoutProduct>
          <ViewDescriptionCheckoutProduct>
            <DescriptionCheckoutProduct>
              {data.country} - {data.type} - {data.volume}
            </DescriptionCheckoutProduct>
          </ViewDescriptionCheckoutProduct>
          <ViewAreaPrice>
            <ViewPrice>
              <PriceNoMember>
                R${' '}
                {data.priceNonMember.toLocaleString('pt-BR', {
                  //
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </PriceNoMember>
              <ViewMemberPrice>
                <TextRSPrice>R$ </TextRSPrice>
                <PriceMember>
                  {price.toLocaleString('pt-BR', {
                    //
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </PriceMember>
              </ViewMemberPrice>
            </ViewPrice>
            <ViewQuantity>
              <AddOrRemoveProduct
                onPress={() => onPressAddItem(data, 'remove')}>
                <Ionicons
                  name="remove-circle-outline"
                  size={28}
                  color={data.quantity > 1 ? Colors.blackSearch : Colors.gray8}
                />
              </AddOrRemoveProduct>
              <Quantity>{data.quantity}</Quantity>
              <AddOrRemoveProduct onPress={() => onPressAddItem(data, 'add')}>
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
      {loading && (
        <ViewLoading>
          <ActivityIndicator size={24} color={Colors.blackSearch} />
        </ViewLoading>
      )}
    </>
  );
};

export default CardCheckout;

//
