
import {useState, useEffect} from 'react';
import axios from 'axios'; 

export default function useAuth(code) {
    const [accesToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        if (!code) {
            console.log(" no autho token")
            return; 
        }
        axios.post('http://localhost:3001/login', {code})
        .then( res => {
            console.log(res.data)
            setAccessToken(res.data.accesToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            window.history.pushState({}, null, "/")
        }).catch(err => {
            console.error('Login error:', err);
    
        });
    }, [code])

    useEffect( () => {
            if (!refreshToken || !expiresIn) return;
            const interval = setInterval (() => {

            
            axios.post('http://localhost:3001/refresh', {refreshToken,})
            .then( res => {
                    setAccessToken(res.data.accesToken)
                    setExpiresIn(res.data.expiresIn)

            }).catch(err =>  {
                console.error('Refresh error:', err);
            })
        }, (expiresIn - 60) * 1000)

        return () => clearInterval(interval)
        }, [refreshToken, expiresIn])
    return accesToken
}