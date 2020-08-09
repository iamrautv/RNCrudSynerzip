/**
 * @fileoverview This is genric space component for app.
 * @package
 */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Spacer = ({ space }) => <View style={[styles.spacer, { height: space }]} />;

const styles = StyleSheet.create({
  spacer: {
    width: '100%',
    height: 10,
    backgroundColor: 'transparent'
  }
});

Spacer.propTypes = {
  space: PropTypes.number
};

Spacer.defaultProps = {
  space: 10
};

export default Spacer;
