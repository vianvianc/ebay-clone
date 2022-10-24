import React from "react";
import { connect } from "react-redux";
import PostDetails from "./PostDetails";
import { addPosts } from '../actions'

class PostDetailsContainer extends React.Component {
  componentDidMount() {
    this.props.addPosts();
  }

  render() {
    const post = this.props.post.find(
      post => post.id === parseInt(this.props.match.params.id)
    );

    return (
      <div>
        <PostDetails {...post} />
      </div>
    );
  }
}

const MapStateToProps = state => ({
  post: state
});

export default connect(MapStateToProps, { addPosts })(PostDetailsContainer);
