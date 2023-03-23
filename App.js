import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import { View } from 'react-native';

class App extends Component {
render() {
return (
<View style={{flex: 1}}>
<WebView
source={{ uri: 'https://www.openstreetmap.org/export/embed.html?bbox=-180,-90,180,90&layer=mapnik&marker=' }}
style={{flex: 1}}
scalesPageToFit={false}
/>
</View>
);
}
}

export default App;