import { useState, useEffect } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
export interface Blog {
    "id": number;
    "title": string;
    "content": string;
    "author": {
        "name": string;
    };
}


export const useBlog=(id:string)=>{
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState<Blog | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlog = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `${localStorage.getItem('token')}`
                    }
                });
                setBlog(response.data);
                setLoading(false);
            } catch (error) {
                setError('An error occurred');
                setLoading(false);
            }
        };

        fetchBlog();
    }, [id]);

    return { loading, blog, error };
}


export const useBlogs = () => {
    const [loading, setLoading] = useState(false);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `${localStorage.getItem('token')}`
                    }
                });
                setBlogs(response.data);
                setLoading(false);
            } catch (error) {
                setError('An error occurred');
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    return { loading, blogs, error };
};