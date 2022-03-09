export default function AppReducer(state, action) {
    
    switch (action.type) {
        case "ADD_TO_FAVORITE":
            return {
                ...state,
                favoris: [action.payload, ...state.favoris],
            };
        case "REMOVE_FROM_FAVORITE":
            return {
                ...state,
                favoris: state.favoris.filter(paysList => paysList.id !== action.payload)
            };
        default:
            return state;
    }
}
