import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../../components/Post/PostList';
import ErrorBoundry from '../../components/utils/ErrorBoundry';

const Home = () => {
    return (
        <div>
            <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
                <div className="col-md-6 px-0">
                    <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
                    <p className="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.</p>
                    <p className="lead mb-0"><a href="#" className="text-white font-weight-bold">Continue reading...</a></p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-8">
                    <h4>LATEST POST</h4><hr/>
                    <ErrorBoundry>
                        <PostList />
                    </ErrorBoundry>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps,null)(Home);