export default class PostSort {
  static top(a, b) {
    if (a.data.score > b.data.score) {
      return -1;
    }
    if (b.data.score > a.data.score) {
      return 1;
    }
    return 0;
  }

  static new(a, b) {
    if (a.data.created > b.data.created) {
      return -1;
    }
    if (b.data.created > a.data.created) {
      return 1;
    }
    return 0;
  }

  static hot(a, b) {
    if (a.data.num_comments > b.data.num_comments) {
      return -1;
    }
    if (b.data.num_comments > a.data.num_comments) {
      return 1;
    }
    return 0;
  }

  static controversial(a, b) {
    if (a.data.num_comments > b.data.num_comments) {
      return -1;
    }
    if (b.data.num_comments > a.data.num_comments) {
      return 1;
    }
    return 0;
  }
}
