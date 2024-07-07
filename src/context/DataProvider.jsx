import React, {createContext, useEffect, useState} from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import {toast} from "react-toastify";

const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({
        ID: 1,
        Username: 'john_doe',
        Email: 'john@example.com',
        isbanned: false,
        refbalance: 100,
        refprocent: 25,
        refusers: 6
    });

    const fetchUserInfo = async () => {
        try{
            const response = await axios.get('/api/v1/profile/self');
            if(response.status === 403 || response.status === 404){
                Cookies.remove('jwt');
                window.location.href = '/login';
            }else if(response.status === 200){
                setUserInfo(response.data)
            }else {
                toast.error('Ошибка сервера, попробуйте позже...', {
                    position: 'top-center'
                });
            }
        }catch (e) {
            toast.error('Ошибка сервера, попробуйте позже...', {
                position: 'top-center'
            });
        }
    }
    
    useEffect(() => {

    })
    return (
        <DataContext.Provider  value={{ userInfo }}>
            { children }
        </DataContext.Provider>
    );
};

export {DataProvider, DataContext};