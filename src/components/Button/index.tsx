import React from 'react';

import {ContainerButton, AreaButton, TextButton} from './styles';

import {ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';

const Button = ({data, loading, onPressAddItem, productIndex}: any) => {
  return (
    <ContainerButton>
      <AreaButton
        key={productIndex}
        onPress={() => onPressAddItem(data, 'add')}>
        {loading && productIndex === data.id ? (
          <ActivityIndicator key={data.id} color={Colors.white} />
        ) : (
          <TextButton>Adicionar</TextButton>
        )}
      </AreaButton>
    </ContainerButton>
  );
};

export default Button;
