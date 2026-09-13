import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true
});

export async function registerUser({userName, email, password}) {
  
    
    try{
    const response = await api.post('/register', {
        userName,
        email,
        password
    })
    return response.data;
} catch (error) {
    console.error('Error registering user:', error);
    throw error;
}
}


export async function loginUser({email, password}) {
    try{
        const response = await api.post('/login', {
            email,
            password
        })
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export async function logoutUser() {
    try{
        const response = await api.get('/logout', {
            withCredentials: true
        })
        return response.data;
    } catch (error) {
        console.error('Error logging out user:', error);
        throw error;
    }
}

export async function getMe() {
    try{
        const response = await api.get('/get-me', {
            withCredentials: true
        })
        return response.data;
    } catch (error) {
        console.error('Error getting user data:', error);
        throw error;
    }
}