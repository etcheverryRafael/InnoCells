import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';

class ModalWebView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {webViewSpinner: true};
  }

  render() {
    return (
      <View style={selfStyles.webViewContainer}>
        <View style={selfStyles.bkgOpacity} />
        <View style={selfStyles.webViewInnerContainer}>
          <WebView
            onLoad={() => this.setState({webViewSpinner: false})}
            style={{width: Dimensions.get('window').width - 30}}
            source={{
              uri: 'https://www.reddit.com' + this.props.selectedPost.permalink,
            }}
          />
          <TouchableOpacity
            style={selfStyles.closeBtnContainer}
            onPress={() => {
              this.props.closeModal();
            }}>
            <Text style={selfStyles.closeBtn}> CLOSE </Text>
          </TouchableOpacity>
          {this.state.webViewSpinner && (
            <View style={selfStyles.webViewLoader}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default ModalWebView;

const selfStyles = StyleSheet.create({
  webViewContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
  },
  webViewInnerContainer: {
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  bkgOpacity: {
    position: 'absolute',
    backgroundColor: 'black',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.7,
  },
  webViewLoader: {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    marginTop: 15,
    borderWidth: 1,
    color: '#000000',
  },
  closeBtnContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  closeBtn: {
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 10,
    marginRight: 10,
  },
});
