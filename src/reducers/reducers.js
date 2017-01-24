import { ADD_POST } from '../actions/actions';

const initialState = {
    posts: [{
        title: 'myTitle',
        text: 'myText'
    }]
}

let blogApp = function(state = initialState, action) {
    switch(action.type) {
        case ADD_POST:
            return {
                posts: [...state.posts, {
                    title: action.title,
                    text: action.text
                }]
            }
        default:
            return state;
    }
}

export default blogApp