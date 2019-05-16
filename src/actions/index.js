import database from '../api/database';
import history from '../history';


export const userCreate =  async (formValues) =>  {
    // console.log('start request');
    const response = await database.post('/api/users/create', formValues);

    // dispatch({ type: 'CREATE_USER', payload: response.data });
    // console.log(response);
    history.push('/weather');
};

export const userAccess =  async formValues => {
    // console.log('start access');
    const response = await database.post('/api/users', formValues);

    // console.log(response.data);
    history.push('/weather');
   
    return ({ type: 'USER_ACCESS', payload: response.data });
};

export const checkLogin =  async (token) =>  {
}
