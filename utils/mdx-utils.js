import {api} from '../services/api'

export const getPosts = async () => {

    try {
        const {data} = await api.get('/posts');

        return data || [];
    } catch (error) {
        console.log(error.message);
        return [];
    }
}

export const getPostBySlug = async (id) => {

    try {
        const {data} = await api.get(`/posts?id=eq.${id}`)

        return data[0] || {};
    } catch (error) {
        console.log(error.message);
        return {};
    }
}