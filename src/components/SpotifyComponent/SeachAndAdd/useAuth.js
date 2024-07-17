import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useAuth(code) {
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();
    const apiUrl = process.env.OAUTH_API_URL; 


    useEffect(() => {
        if (!code) {
            axios.get(`${apiUrl}/access-token`)
                .then(res => {
                    setAccessToken(res.data.accessToken);
                })
                .catch(err => {
                    console.error('Error getting access token:', err);
                });
            return;
        }

        axios.post(`${apiUrl}/login`, { code })
            .then(res => {
                setAccessToken(res.data.accessToken);
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
                window.history.pushState({}, null, "/");
            })
            .catch(err => {
                console.error('Login error:', err);
            });
    }, [code]);

    useEffect(() => {
        if (!refreshToken || !expiresIn) return;

        const interval = setInterval(() => {
            axios.post(`${apiUrl}/refresh`, { refreshToken })
                .then(res => {
                    setAccessToken(res.data.accessToken);
                    setExpiresIn(res.data.expiresIn);
                })
                .catch(err => {
                    console.error('Refresh error:', err);
                });
        }, (expiresIn - 60) * 1000);

        return () => clearInterval(interval);
    }, [refreshToken, expiresIn]);

    return accessToken;
}

