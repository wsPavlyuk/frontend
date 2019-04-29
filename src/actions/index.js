import database from '../api/database';

export const userCreate =  async (formValues) =>  {
    console.log('start request');
    const response = await database.post('/api/users/create', formValues);

    // dispatch({ type: 'CREATE_USER', payload: response.data });
    console.log(response);
};
