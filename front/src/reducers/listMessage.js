const listMessage = {
    messages: []
};
 
export default function reducer(state = listMessage, action = {}) {
    switch (action.type) {
        case 'ADD_MESSAGE':
        return {
            ...state,
            messages: state.messages.concat(action.message)
        }
        default:
            return state
    }
}