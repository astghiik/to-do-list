export default function listReducer(state = [], action) {
    switch (action.type) {
        case 'ADD':
            const item = action.payload.trim();
            if (item && !state.includes(item))
                return [...state, item];
            else
                return state;   //?????????
    
        case 'REMOVE':
            state.splice(state.indexOf(action.payload), 1);
            return [...state];

        default:
            return state;
    }
}