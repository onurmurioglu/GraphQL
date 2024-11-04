import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useApolloClient,
} from '@apollo/client';
import User from './src/components/User';

const clientConfig = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={clientConfig}>
      <View style={styles.container}>
        <User userID={1} />
        <User userID={2} />
        <User userID={3} />
        <User userID={4} />
      </View>
    </ApolloProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
