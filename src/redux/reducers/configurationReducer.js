import { types } from "../actions/types";

const initialState = {
	colorScheme: "N/A", 
};
	
const configurationReducer = (state = initialState, { type, colorScheme }) => {
    switch (type) {
        case types.Receive_configuration:   
            return {
                ...state,
                colorScheme: colorScheme,
            };
                    
        default:
            return state;
    }
}

export default configurationReducer;