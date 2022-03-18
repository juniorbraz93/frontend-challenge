import React from 'react';

import {ContainerButton, AreaButton, TextButton} from './styles';

import {ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';

const Button = ({data, loading, onPressAddItem}: any) => {
  return (
    <ContainerButton>
      <AreaButton
        onPress={() => onPressAddItem(data, 'add')}
        disabled={loading}>
        {loading ? (
          <ActivityIndicator key={data.id} color={Colors.white} />
        ) : (
          <TextButton>Adicionar</TextButton>
        )}
      </AreaButton>
    </ContainerButton>
  );
};

export default Button;
