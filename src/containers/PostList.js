import React from 'react'
import { connect } from 'react-redux'
import Post from '../components/Post'

let PostList = ({posts}) => (

    <div>
        {
            posts.map((post, index) => {
              return <Post key={index} {...post}/>
            })
        }
    </div>
)

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

PostList = connect(mapStateToProps)(PostList);

export default PostList;
