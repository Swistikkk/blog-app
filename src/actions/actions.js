export default function addTodo(text) {
    return {
        type: 'ADD_TODO',
        text: text,
        active: true
    }
}