import database from '../api/database';

export const userCreate =  (formValues) => async (dispatch) => {
    const response = await database.post('/api/users/create', { formValues });


    dispatch({ type: 'CREATE_USER', payload: response.data });
};
