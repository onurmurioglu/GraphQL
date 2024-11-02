import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useQuery, gql} from '@apollo/client';
import {GET_POST} from './Query';

const User = () => {
  const {loading, error, data} = useQuery(GET_POST);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size={'large'} color={'purple'} />
      ) : error ? (
        <Text>{error.message}</Text>
      ) : (
        <View style={styles.content}>
          <Text style={styles.titleTxt}>{data.user.username}</Text>
          <Text style={styles.bodyTxt}>{data.user.email}</Text>
          <Text style={styles.bodyTxt}>{data.user.phone}</Text>
          <Text style={styles.bodyTxt}>{data.user.company.name}</Text>
        </View>
      )}
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    backgroundColor: '#EAEAEA',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  titleTxt: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },

  bodyTxt: {
    fontSize: 15,
    color: 'gray',
  },
});
