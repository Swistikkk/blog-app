import React from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions/actions';

let AddPost = ({dispatch}) => {
    let input;
    let textArea;

    return(
        <div>
            <form onSubmit={(e) => {
                e.preventDefault();
                if (!input.value.trim()) {
                    return
                }
                dispatch(addPost(input.value, textArea.value));
                input.value = '';
                textArea.value = '';
            }}>
                <input type="text" ref={node =>
                    input = node
                }/>
                <textarea ref={node =>
                    textArea = node
                }></textarea>
                <button type="submit">Send!</button>
            </form>
        </div>
    )

}

AddPost = connect()(AddPost);

export default AddPost


