import { api } from './services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts?select=*');
        return data || [];
    } catch (error) {
        console.error("Erro ao carregar lista de posts:", error);
        return [];
    }
};

export const getPostById = async (id) => {
    try {
        const { data } = await api.get(`/posts?id=eq.${id}&select=*`);
    } catch (error) {
        console.error("Erro ao carregar post:", error);
        return [];
    }
};