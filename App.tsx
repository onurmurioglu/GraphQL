import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useApolloClient,
} from '@apollo/client';
import User from './src/components/User/User';
import List from './src/List/List';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const clientConfig = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <ApolloProvider client={clientConfig}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={List} />
          <Stack.Screen name="User" component={User} />
          {/* <View style={styles.container}>
            {/* <User userID={1} />
        <User userID={2} />
        <User userID={3} />
        <User userID={4} /> */}
          {/* <List />  
          </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     //backgroundColor: 'lightblue',
//   },
// });
