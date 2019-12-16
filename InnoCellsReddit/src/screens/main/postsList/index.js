import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  FlatList,
  Image,
  Alert,
  RefreshControl,
} from 'react-native';
import {connect} from 'react-redux';
import {fetchPosts, sortBy} from '../../../redux/actions/posts-actions';
import mainStyles from '../../../styles/mainStyles';
import Moment from 'moment-timezone';
import {NONE, TOP, HOT, NEW, CONTROVERSIAL} from '../sortingPanel';
import PostsSort from './PostsSort';

class PostsList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      if (this.props.postsReducer.posts !== prevProps.postsReducer.posts) {
        this.props.sortBy(NONE);
      }

      let posts = [...this.props.postsReducer.posts];
      switch (this.props.postsReducer.sortOption) {
        case TOP:
          posts.sort(PostsSort.top);
          break;
        case NEW:
          posts.sort(PostsSort.new);
          break;
        case HOT:
          posts.sort(PostsSort.hot);
          break;
        case CONTROVERSIAL:
          posts.sort(PostsSort.controversial);
          break;
      }

      this.setState({
        posts,
        loading: false,
      });
    }
  }

  openPost(post) {
    this.props.setSelectedPost(post);
  }

  renderPost(post, index) {
    const {
      title,
      author_fullname,
      score,
      num_comments,
      created,
      thumbnail,
    } = post;
    return (
      <TouchableOpacity
        key={index}
        style={selfStyles.post}
        onPress={() => this.openPost(post)}>
        <View>
          <Image style={selfStyles.postImage} source={{uri: thumbnail}} />
        </View>
        <View style={selfStyles.rightContainer}>
          <Text style={selfStyles.date}>
            {Moment(created)
              .tz('Europe/Madrid')
              .format('MM/DD/YYYY hh:mm a')}
          </Text>
          <Text style={selfStyles.title}>{title}</Text>
          <View style={selfStyles.postDetailsContainer}>
            <View style={selfStyles.postDetail}>
              <Text style={selfStyles.detailLabel}>Author: </Text>
              <Text style={selfStyles.detailValue}>{author_fullname}</Text>
            </View>
            <View style={selfStyles.postDetail}>
              <Text style={selfStyles.detailLabel}>Score: </Text>
              <Text style={selfStyles.detailValue}>{score}</Text>
            </View>
            <View style={selfStyles.postDetail}>
              <Text style={selfStyles.detailLabel}>Comments: </Text>
              <Text style={selfStyles.detailValue}>{num_comments}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  onRefresh() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <View style={[mainStyles.container, {width: '100%'}]}>
        <FlatList
          style={selfStyles.postsList}
          data={this.state.posts}
          ListHeaderComponent={
            <View style={selfStyles.postsListHeader}>
              <Text>Total: {this.state.posts.length} posts</Text>
              <Text style={selfStyles.pullDown}>
                (Pull down list to refresh)
              </Text>
            </View>
          }
          ListFooterComponent={<View style={selfStyles.postsListFooter} />}
          renderItem={({item, index}) => this.renderPost(item.data, index)}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const {postsReducer} = state;
  return {postsReducer};
};

const mapActionsToProps = {
  fetchPosts,
  sortBy,
};

export default connect(
  mapStateToProps,
  mapActionsToProps,
)(PostsList);

const selfStyles = StyleSheet.create({
  postsList: {
    width: '100%',
    flex: 1,
  },
  postsListHeader: {
    alignItems: 'center',
  },
  pullDown: {
    fontSize: 11,
  },
  post: {
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    minHeight: 100,
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 5,
    marginRight: 5,
  },
  postImage: {
    width: 75,
    height: 75,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    backgroundColor: '#dbdbdb',
  },
  rightContainer: {
    flex: 1,
    marginRight: 5,
  },
  date: {
    textAlign: 'right',
  },
  title: {
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 21,
  },
  postDetailsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 5,
  },
  postDetail: {
    fontSize: 10,
    flex: 0.33,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  detailLabel: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  detailValue: {
    fontSize: 10,
  },
  postsListFooter: {
    height: 100,
  },
});
