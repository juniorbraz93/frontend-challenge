import React from 'react';
import Button from '../Button';

import {useNavigation} from '@react-navigation/native';

import {
  ContainerProduct,
  CardProduct,
  ViewAreaImage,
  ShowViewProduct,
  BlackWine,
  ImageProduct,
  NameProduct,
  ViewAreaPrice,
  ViewPrice,
  TextPrice,
  ViewDescount,
  TextDiscount,
  ViewMember,
  TextMember,
  ViewMemberPrice,
  TextMemberPrice,
  ViewNoMember,
  TextNoMember,
  ViewAreaProduct,
  TextRSPrice,
} from './styles';

const Product = ({data, setItem, loading, onPressAddItem}: any) => {
  const navigation: string | any = useNavigation();

  return (
    <ContainerProduct>
      <CardProduct>
        <ViewAreaImage>
          <BlackWine source={require('../../config/image/maskgroup.png')} />
          <ShowViewProduct
            onPress={() =>
              navigation.navigate('ViewProduct', {
                name: data.name,
                id: data.id,
              })
            }>
            <ImageProduct source={{uri: data.image}} />
          </ShowViewProduct>
        </ViewAreaImage>

        <ViewAreaProduct>
          <NameProduct>{data.name}</NameProduct>
          <ViewAreaPrice>
            <ViewPrice>
              <TextPrice>
                R${' '}
                {data.price.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TextPrice>
            </ViewPrice>
            <ViewDescount>
              <TextDiscount>{data.discount} % OFF</TextDiscount>
            </ViewDescount>
          </ViewAreaPrice>
          <ViewAreaPrice>
            <ViewMember>
              <TextMember>Sócio wine</TextMember>
            </ViewMember>
            <ViewMemberPrice>
              <TextRSPrice>R$ </TextRSPrice>
              <TextMemberPrice>
                {data.priceMember.toLocaleString('pt-BR', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </TextMemberPrice>
            </ViewMemberPrice>
          </ViewAreaPrice>
          <ViewNoMember>
            <TextNoMember>
              Não sócio R${' '}
              {data.priceNonMember.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </TextNoMember>
          </ViewNoMember>
        </ViewAreaProduct>
      </CardProduct>
      <Button
        data={data}
        setItem={setItem}
        loading={loading}
        onPressAddItem={onPressAddItem}
      />
    </ContainerProduct>
  );
};

export default Product;
