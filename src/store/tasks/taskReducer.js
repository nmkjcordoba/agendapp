import {
    FETCH_TASKS_FAILURE,
    FETCH_TASKS_REQUEST,
    FETCH_TASKS_SUCCESS
} from "./taskTypes"

const initialState = {
    loading: false,
    tasks: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_TASKS_REQUEST:
            return{
                ...state,
                loading: true
            };
        case FETCH_TASKS_SUCCESS:
            return{
                loading: false,
                error:'',
                tasks: action.payload
            }
        case FETCH_TASKS_FAILURE:
            return{
                loading: false,
                error: action.payload,
                tasks: []
            }       
        default:
            return state;
    }
}

export default reducer;
