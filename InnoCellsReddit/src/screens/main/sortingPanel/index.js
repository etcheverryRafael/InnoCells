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
import {connect} from 'react-redux';
import {sortBy} from '../../../redux/actions/posts-actions';

export const NONE = 0;
export const TOP = 1;
export const NEW = 2;
export const HOT = 3;
export const CONTROVERSIAL = 4;

class SortingPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      option: NONE,
    };
  }

  setOption(option) {
    if (this.state.option === option) {
      option = NONE;
    }
    // this.setState({option});
    this.props.sortBy(option);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.setState({option: this.props.postsReducer.sortOption});
    }
  }

  render() {
    return (
      <View style={selfStyles.sortingPanelContainer}>
        <View style={selfStyles.doubleContainer}>
          <TouchableOpacity
            style={[
              selfStyles.sortBtnContainer,
              this.state.option === TOP && selfStyles.selectedBkg,
            ]}
            onPress={() => this.setOption(TOP)}>
            <Text
              style={[
                selfStyles.btnText,
                this.state.option === TOP && selfStyles.selectedColor,
              ]}>
              Top
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              selfStyles.sortBtnContainer,
              this.state.option === NEW && selfStyles.selectedBkg,
            ]}
            onPress={() => this.setOption(NEW)}>
            <Text
              style={[
                selfStyles.btnText,
                this.state.option === NEW && selfStyles.selectedColor,
              ]}>
              New
            </Text>
          </TouchableOpacity>
        </View>
        <View style={selfStyles.doubleContainer}>
          <TouchableOpacity
            style={[
              selfStyles.sortBtnContainer,
              this.state.option === HOT && selfStyles.selectedBkg,
            ]}
            onPress={() => this.setOption(HOT)}>
            <Text
              style={[
                selfStyles.btnText,
                this.state.option === HOT && selfStyles.selectedColor,
              ]}>
              Hot
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              selfStyles.sortBtnContainer,
              this.state.option === CONTROVERSIAL && selfStyles.selectedBkg,
            ]}
            onPress={() => this.setOption(CONTROVERSIAL)}>
            <Text
              style={[
                selfStyles.btnText,
                this.state.option === CONTROVERSIAL && selfStyles.selectedColor,
              ]}>
              Controversial
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {postsReducer} = state;
  return {postsReducer};
};

const mapActionsToProps = {
  sortBy,
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(SortingPanel);

const selfStyles = StyleSheet.create({
  sortingPanelContainer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  doubleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sortBtnContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    width: 110,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
  },
  selectedBkg: {
    backgroundColor: 'rgb(255,69,0)',
  },
  selectedColor: {
    color: '#FFFFFF',
  },
  btnText: {
    textAlign: 'center',
  },
});
