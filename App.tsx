import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import CarDropdown from './src/components/CarDropdown';

function App(): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'white',
        paddingHorizontal: 20,
      }}>
      <Text style={{color: 'black', fontSize: 18, paddingVertical: 25}}>
        Dropdown picker ActivityIndicator test
      </Text>
      <CarDropdown />
    </SafeAreaView>
  );
}

export default App;
