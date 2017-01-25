import React, { Component } from 'react';
import PostList from '../containers/PostList'
import AddPost from '../containers/AddPost'

class App extends Component {
    render(){
        return(
            <div>
                <AddPost />
                <PostList />
            </div>
        )
    }
}

export default App;
