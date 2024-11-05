import {useQuery} from '@apollo/client';
import {View, Text, StyleSheet, Pressable, ScrollView} from 'react-native';
import {GET_USER_LIST} from './Query';
import {useNavigation} from '@react-navigation/native';

const Item = ({id, username}) => {
  const nav = useNavigation();

  return (
    <View style={{width: '100%', height: 60, flexDirection: 'row'}}>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          paddingLeft: 20,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>
          {username}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            nav.navigate('User', {id: id});
          }}>
          <Text style={{fontSize: 30, color: '#000'}}>{'>'}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const List = () => {
  const {error, loading, data} = useQuery(GET_USER_LIST);

  return (
    <View style={styles.container}>
      <ScrollView style={{width: '100%'}}>
        {data.users.data.map((item, index) => (
          <Item key={index} id={item.id} username={item.username} />
        ))}
      </ScrollView>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
