import React, { Component } from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { getUsers } from '../../../redux/actions/userAction';
import { Loading, Button } from '../../custom';
import { constants } from '../../../config';
import styles from './style';

const { routes } = constants;

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { getUsers } = this.props;

    getUsers();
  }

  navigate = (data) => {
    const { navigation } = this.props;
    navigation.navigate(routes.UserInfo, {
      userInfo: data
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => this.navigate(item)}
        style={styles.userItem}
      >
        <Text>{item.name}</Text>
        <Text>{item.phone}</Text>
        <Text>{item.website}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { users, navigation } = this.props;

    if (users.loading) return <Loading isLoading />;

    return (
      <View style={styles.wrap}>
        <View style={styles.btnWrap}>
          <Button
            text="New User"
            onPress={() => navigation.navigate(routes.UserCreate)}
          />
        </View>
        <FlatList
          data={users.data}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users
});
const mapDispatchToProps = (dispatch) => ({
  getUsers: () => getUsers(dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Users);
