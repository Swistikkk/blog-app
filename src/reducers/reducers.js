let initialState = {
    todos:[{
        text: 'simpletext',
        action: true
    }]
}

const todoApp = ( state = initialState, action ) => {
    console.log(action.type);
    switch(action.type) {
        case 'ADD_TODO':
            return {todos: [...state.todos, {text: action.text, active: action.active}]};
        default:
            return state;
    }
}

export default todoApp;