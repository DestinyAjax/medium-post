import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({ title, description, id }) => {
    return (
        <div className='card post_card'>
            <div className="card-body">
                <Link to={"/"}><h4 className="card-title">{ title }</h4></Link>
                <p className="card-text">{ description }</p>
            </div>
        </div>
    );
}

export default Post;
