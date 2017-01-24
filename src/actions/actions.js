const ADD_POST = 'ADD_POST';

function addPost(title, text) {
    return {
        type: ADD_POST,
        title,
        text
    }
}

export { ADD_POST, addPost }