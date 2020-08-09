import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { getUsers, deleteUser } from '../../../redux/actions/userAction';
import { Loading, Button } from '../../custom';
import { constants } from '../../../config';
import styles from './style';

const { routes } = constants;

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
  }

  renderItem = (lable: string, data: string) => {
    return (
      <View style={styles.userItem}>
        <Text>{`${lable}: ${data}`}</Text>
      </View>
    );
  }

  deleteUser = async () => {
    const { deleteUser, route, navigation } = this.props;
    const { userInfo } = route.params;
    await deleteUser(userInfo.id);
    navigation.pop();
  }

  editUser = async () => {
    const { route, navigation } = this.props;
    const { userInfo } = route.params;
    navigation.navigate(routes.UserEdit, { userInfo });
  }

  renderButton = () => {
    return (
      <View style={styles.btnWrap}>
        <Button
          text="Delete User"
          onPress={() => this.deleteUser()}
        />
        <Button
          text="Edit User"
          onPress={() => this.editUser()}
        />
      </View>
    );
  }

  render() {
    const { navigation, users, route } = this.props;
    const { userInfo } = route.params;
    const { address } = userInfo;

    if (users.loading) return <Loading isLoading />;

    return (
      <View style={styles.wrap}>
        {this.renderItem('Name', userInfo.name)}
        {this.renderItem('Email', userInfo.email)}
        {this.renderItem('Phone', userInfo.name)}
        {this.renderItem('Address', `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`)}
        {this.renderButton()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => getUsers(dispatch),
  deleteUser: (id) => deleteUser(id, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
