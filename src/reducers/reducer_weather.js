import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
        // return state.concat([action.payload.data]);
        return [ action.payload.data, ...state ];        //identical to the line of code above.
    }
    return state;
}

//looking at the promise data, the only data we care about with the fetch weather action is action.payload.data
//decide what our initial state should be. 

//Whenever we are in our reducer we do not mutate our state, we return a compleltly new instance of state.