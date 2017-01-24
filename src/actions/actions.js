export const ADD_POST = 'ADD_POST';

export function addPost(title, text) {
    return {
        type: ADD_POST,
        title,
        text
    }
}