import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Button: React.SFC = ({children, ...rest}) => {
  return (
    <TouchableOpacity {...rest} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
