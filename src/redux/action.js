import { ADDTODO, LOGIN, TOGGLE_THEME, EDITSTATUS } from "./actionItems";

export function addtodo(val){
    return {type: ADDTODO, payload: val};
}

export function edittodo(val){
    return {type: EDITSTATUS, payload: val};
}

export const toggleTheme = () => ({
    type: TOGGLE_THEME,
});

export function loginchange(val){
    return {type: LOGIN, payload: val};
}
