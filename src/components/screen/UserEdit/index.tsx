import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { getUsers, editUser } from '../../../redux/actions/userAction';
import { Loading, Button } from '../../custom';
import { constants } from '../../../config';
import styles from './style';

const { routes } = constants;

class UserEdit extends Component {
  constructor(props) {
    super(props);

    const { users, route } = this.props;
    const { userInfo } = route.params;
    this.state = {
      name: userInfo.name,
      email: userInfo.email,
      phone: userInfo.phone,
      id: userInfo.id
    };
  }

  componentDidMount() {
  }

  setProp = (prop, val) => {
    this.setState({
      [prop]: val
    });
  }

  editUser = async () => {
    const {
      name,
      email,
      phone,
      id
    } = this.state;
    const { editUser, route, navigation } = this.props;
    await editUser({
      name,
      email,
      phone,
      id
    });
    navigation.popToTop();
  }

  render() {
    const {
      name,
      email,
      phone,
    } = this.state;
    const { navigation, users, route } = this.props;
    if (users.loading) return <Loading isLoading />;

    return (
      <View style={styles.wrap}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setProp('name', text)}
          value={name}
          placeholder="Name"
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setProp('email', text)}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setProp('phone', text)}
          value={phone}
          placeholder="Phone"
        />
        <Button
          text="Edit User"
          wrapStyle={styles.btnWrap}
          onPress={() => this.editUser()}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => getUsers(dispatch),
  editUser: (data) => editUser(data, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
