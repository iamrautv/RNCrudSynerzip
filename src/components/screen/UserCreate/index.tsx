import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { getUsers, createUser } from '../../../redux/actions/userAction';
import { Loading, Button } from '../../custom';
import { constants } from '../../../config';
import styles from './style';

const { routes } = constants;

class UserCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      address: '',
      username: '',
      id: ''
    };
  }

  componentDidMount() {
  }

  setProp = (prop, val) => {
    this.setState({
      [prop]: val
    });
  }

  renderItem = (lable: string, data: string) => {
    return (
      <View style={styles.userItem}>
        <Text>{`${lable}: ${data}`}</Text>
      </View>
    );
  }

  saveUser = async () => {
    const {
      name,
      email,
      phone,
      address,
      username,
      id
    } = this.state;
    const { createUser, route, navigation } = this.props;
    await createUser({
      name,
      email,
      phone,
      address,
      username,
      id
    });
    navigation.pop();
  }

  render() {
    const {
      name,
      email,
      phone,
      address,
      username,
      id
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
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setProp('address', text)}
          value={address}
          placeholder="Address"
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setProp('username', text)}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={styles.inputStyle}
          onChangeText={text => this.setProp('id', text)}
          value={id}
          placeholder="Id"
        />
        <Button
          text="Save User"
          wrapStyle={styles.btnWrap}
          onPress={() => this.saveUser()}
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
  createUser: (data) => createUser(data, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserCreate);
