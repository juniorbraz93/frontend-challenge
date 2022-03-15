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
} from './styles';

const Product = ({data}: any) => {
  const navigation: string | any = useNavigation();

  return (
    <ContainerProduct>
      <CardProduct>
        <ViewAreaImage>
          <BlackWine source={require('../../config/image/maskgroup.png')} />
          <ShowViewProduct
            title="ViewProduct"
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
              <TextPrice>R$ {data.price}</TextPrice>
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
              <TextMemberPrice>R$ {data.priceMember}</TextMemberPrice>
            </ViewMemberPrice>
          </ViewAreaPrice>
          <ViewNoMember>
            <TextNoMember>
              Não sócio R${' '}
              {data.priceNonMember.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL',
              })}
            </TextNoMember>
          </ViewNoMember>
        </ViewAreaProduct>
      </CardProduct>
      <Button data={data} />
    </ContainerProduct>
  );
};

export default Product;
