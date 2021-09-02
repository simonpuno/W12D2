import { fetchBenches } from "./bench_actions";
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

const updateBounds = (bounds) => ({
    type: UPDATE_BOUNDS,
    bounds: bounds
})

// ??????
export function updateFilter(filter, value) {
    return (dispatch, getState) => {
        dispatch(updateBounds(filter, value));
        return fetchBenches(getState().filters)(dispatch);
        // delicious curry!
    };
}

// export const updateBounds = (bounds) => (

// )