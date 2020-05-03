export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_FEATURE = 'REMOVE_FEATURE';

export const addFeature = (feature) => (dispatch) => {
	dispatch({ type: ADD_FEATURE, payload: feature });
};

export const removeFeature = (feature) => (dispatch) => {
	dispatch({ type: REMOVE_FEATURE, payload: feature });
};
