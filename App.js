import React from 'react';
import {
  ScrollView
} from 'react-native';

import  {list} from './src/actions/listSomeItems'

const App = () => {
  return (
    <ScrollView>
      {list()}
    </ScrollView>
  );
};

export default App;
