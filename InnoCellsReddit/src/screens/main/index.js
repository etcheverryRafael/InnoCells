import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Image,
  Alert,
  Platform,
} from 'react-native';
import mainStyles from '../../styles/mainStyles';
import ModalWebView from './modalWebView';
import PostsList from './postsList';
import SortingPanel from './sortingPanel';
import {connect} from 'react-redux';

class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedPost: false,
    };
  }

  renderSelectedPost() {
    if (this.state.selectedPost) {
      return (
        <ModalWebView
          selectedPost={this.state.selectedPost}
          closeModal={() =>
            this.setState({
              selectedPost: false,
            })
          }
        />
      );
    } else {
      return null;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.postsReducer.errorMessage) {
      Alert.alert('Error', this.props.postsReducer.errorMessage);
    }
  }

  render() {
    return (
      <View style={mainStyles.container}>
        <View style={selfStyles.header}>
          <Image
            style={selfStyles.headerImg1}
            source={require('../../images/innocells.png')}
          />
          <Image
            style={selfStyles.headerImg2}
            source={require('../../images/reddit.png')}
          />
        </View>
        <PostsList
          setSelectedPost={post => this.setState({selectedPost: post})}
        />
        <SortingPanel />
        {this.renderSelectedPost()}
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {postsReducer} = state;
  return {postsReducer};
};

export default connect(mapStateToProps)(MainScreen);

const selfStyles = StyleSheet.create({
  header: {
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  headerImg1: {
    width: 60,
    height: 60,
  },
  headerImg2: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
});
