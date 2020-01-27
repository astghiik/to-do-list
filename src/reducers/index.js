export default function listReducer(state = [], action) {
    switch (action.type) {
        case 'ADD':
            if (action.payload.trim() && !state.includes(action.payload.trim()))
                return [...state, action.payload];
            else
                return state;   //?????????
    
        case 'REMOVE':
            state.splice(state.indexOf(action.payload), 1);
            return [...state];

        default:
            return state;
    }
}