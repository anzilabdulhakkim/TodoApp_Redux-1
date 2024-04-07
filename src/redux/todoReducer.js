import { ADDTODO, LOGIN, TOGGLE_THEME } from "./actionItems";
import { EDITSTATUS } from "./actionItems";

export function todoreducer(state = [], { type, payload }) {
    switch (type) {
        case ADDTODO: {
            return [...state, payload]
        }
        case EDITSTATUS: {
            return payload
        }
        default: {
            return state
        }
    }
}

  
export const themeReducer = (state = {isDarkTheme: false,}, action) => {
    switch (action.type) {
      case TOGGLE_THEME:
        return {
          ...state,
          isDarkTheme: !state.isDarkTheme,
        };
      default:
        return state;
    }
};
  

export function loginreducer(state = {auth:false}, { type, payload }) {
    switch (type) {
        case LOGIN: {
            return {auth:payload}
        }
        default: {
            return state
        }
    }

}
