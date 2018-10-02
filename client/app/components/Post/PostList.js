import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/actions/postAction'
import Post from './Post';

class PostList extends Component {

    componentDidMount() {
        this.props.getAllPosts();
    }

    getPosts() {
        return this.props.posts.map((post) => {
            return (
                <div key={post.id} className="col-md-4">
                    <Post title={post.title} description={post.body} />
                </div>
            );
        });
    }

    render() {
        return (
            <div className="row">
                { this.getPosts() }
            </div>
        )
    }
}

PostList.propTypes = {
    getAllPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
    posts: state.posts.items
});

export default connect(mapStateToProps, { getAllPosts })(PostList);
