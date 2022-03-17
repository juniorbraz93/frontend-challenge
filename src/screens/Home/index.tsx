import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Product from '../../components/Product';

import useFetchProduct from '../../hooks/useFetchProduct';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  ViewHeader,
  ImgLogo,
  ImgWineBox,
  ViewSearch,
  Search,
  ViewTextProduct,
  TotalTextProduct,
  Checkout,
  ViewWineBox,
  ViewNumberWineBox,
  TextNumberWineBox,
} from './styles';
import {Colors} from '../../config/Colors';
import useCheckout from '../../hooks/useCheckout';

const Home: React.FC = () => {
  const {setItem, loading} = useCheckout();
  const {products, numberProduct} = useFetchProduct();
  const {totalItems} = useCheckout();
  const navigation: string | any = useNavigation();
  return (
    <Container>
      <ViewHeader>
        <ImgLogo source={require('../../config/image/logo.png')} />
        <Checkout
          title="Checkout"
          onPress={() => navigation.navigate('Checkout')}>
          <ViewWineBox>
            <ImgWineBox source={require('../../config/image/winebox.png')} />
            <ViewNumberWineBox>
              <TextNumberWineBox>{totalItems}</TextNumberWineBox>
            </ViewNumberWineBox>
          </ViewWineBox>
        </Checkout>
      </ViewHeader>
      <ViewSearch>
        <MaterialIcons
          style={styles.icon}
          name="search"
          size={20}
          color={Colors.blackSearch}
        />
        <Search placeholder="O que você está procurando?" />
      </ViewSearch>
      <ViewTextProduct>
        <TotalTextProduct>
          {numberProduct} produtos encontrados
        </TotalTextProduct>
      </ViewTextProduct>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatList}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Product data={item} setItem={setItem} loading={loading} />
        )}
      />
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatList: {
    justifyContent: 'space-between',
  },
  icon: {padding: 10},
});
