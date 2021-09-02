import { UPDATE_BOUNDS } from "../actions/filter_actions";

const filterReducer = (oldState={}, action) => {
    Object.freeze(oldState);
    switch (action.type) {
        case UPDATE_BOUNDS:
            return action.bounds;
        default:
            return oldState;
    }
}

export default filterReducer;