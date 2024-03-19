import React, {memo} from 'react';
import {StyleProp, ViewProps} from 'react-native';

import * as STC from './Radio.style';

const Radio = ({
  id,
  checked,
  text,
  disabled,
  style,
  textStyle,
  handleRadio,
}: {
  id: number;
  checked: boolean;
  text?: string;
  disabled?: boolean;
  style?: StyleProp<ViewProps>;
  textStyle?: StyleProp<ViewProps>;
  handleRadio: (id?: number) => void;
}) => {
  return (
    <STC.Container
      style={style}
      onPress={() => handleRadio(id)}
      disabled={disabled}>
      <STC.Round>{checked && <STC.SelectedRound />}</STC.Round>
      {text && <STC.Text style={textStyle}>{text}</STC.Text>}
    </STC.Container>
  );
};

export default memo(Radio);
