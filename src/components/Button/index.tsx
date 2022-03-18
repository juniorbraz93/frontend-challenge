import React from 'react';

import {ContainerButton, AreaButton, TextButton} from './styles';

import {ActivityIndicator} from 'react-native';
import {Colors} from '../../config/Colors';
import {IButtonProps} from '../../types/button.types';

const Button = ({data, loading, onPressAddItem}: IButtonProps) => {
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
