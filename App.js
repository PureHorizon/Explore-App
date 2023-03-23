import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <WebView
          source={{ uri: 'https://www.openstreetmap.org' }}
          style={{flex: 1}}
        />
      </View>
    );
  }
}

export default App;
