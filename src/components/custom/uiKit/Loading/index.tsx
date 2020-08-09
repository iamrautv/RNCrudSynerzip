/**
 * @fileoverview This is genric loading component for app.
 * All loading states in app is shown from this component
 * @package
 */
import React from 'react';
import {
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../../../../config';
import styles from './styles';

const Loader = ({ isLoading = false }) => (
  <Modal
    transparent
    visible={isLoading}
    onRequestClose={() => { }}
  >
    <View style={styles.wrap}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  </Modal>
);

Loader.propTypes = {
  isLoading: PropTypes.bool
};

Loader.defaultProps = {
  isLoading: false
};

export default Loader;
