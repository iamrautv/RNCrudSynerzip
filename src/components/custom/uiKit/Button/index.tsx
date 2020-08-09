/**
 * @fileoverview This is genric button component for app.
 * All buttons in app are shown from this component
 * @package
 */
import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { constants } from '../../../../config';
import styles from './styles';

const { buttonTypes } = constants;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderBtnText = () => {
    const {
      isLoading,
      loaderColor,
      text,
      txtStyle
    } = this.props;

    if (isLoading) return <ActivityIndicator size="small" color={loaderColor} />;

    return <Text style={[styles.txtStylePrimary, txtStyle]}>{text}</Text>;
  }

  renderPrimaryBtn = () => {
    const { style, onPress } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.btnPrimary, style]}
      >
        {this.renderBtnText()}
      </TouchableOpacity>
    );
  }

  renderButton = () => {
    const { type } = this.props;

    switch (type) {
      case buttonTypes.primary:
      default:
        return this.renderPrimaryBtn();
    }
  }

  render() {
    const { wrapStyle } = this.props;
    return (
      <View style={[styles.wrapStyle, wrapStyle]}>
        {this.renderButton()}
      </View>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  loaderColor: PropTypes.string,
  type: PropTypes.string,
  wrapStyle: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  ]),
  style: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  ]),
  txtStyle: PropTypes.oneOfType([
    PropTypes.objectOf(PropTypes.any),
    PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  ]),
};

Button.defaultProps = {
  isLoading: false,
  loaderColor: '#ffffff',
  type: buttonTypes.primary,
  wrapStyle: {},
  style: {},
  txtStyle: {}
};

export default Button;
