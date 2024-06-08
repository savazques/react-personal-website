import {useState, useEffect} from 'react';
import axios from 'axios'; 

export default function useAuth(code) {
    const [accesToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(() => {
        if (!code) {
            console.log(" no autho token")
        }
        axios.post('http://localhost:3001/login', {code,})
        .then( res => {
            setAccessToken(res.data.accesToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresInToken)
            window.history.pushState({}, null, "/")
        }).catch(() => {
            window.location = '/'
        })
    }, [code])

    return accesToken
}

