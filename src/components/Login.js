import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper } from '@mui/material';
import bgg from './logoo.png';
import styles from './login.css';
import { useState } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform login validation here (e.g., calling an API)

        // Simulating login success
        setLoggedIn(true);
    };

    if (loggedIn) {
        return <h1 > Welcome, { username }! < /h1>;
    }


    return ( < div > {
            /*

                  <h1>Login Page</h1>
                  <form onSubmit={handleSubmit}>
                    <label>
                      Username:
                      <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <br />
                    <label>
                      Password:
                      <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <button type="submit">Log In</button>
                  </form>
                  */
        }



        <
        div >

        <
        div class = "login-box" >
        <
        h2 > Login < /h2>  <
        form onSubmit = { handleSubmit } >
        <
        div class = "user-box" >
        <
        input type = "text"
        name = ""
        required = ""
        value = { username }
        onChange = { handleUsernameChange }
        /> <
        label > Username < /label> </div > <
        div class = "user-box" >
        <
        input type = "password"
        name = ""
        required = ""
        value = { password }
        onChange = { handlePasswordChange }
        /> <
        label > Password < /label> </div >

        <
        a href = "#" >
        <
        span > < /span>  <
        span > < /span>  <
        span > < /span>  <
        span > < /span> <
        button class = "butsub"
        type = "submit" >
        Submit < /button> </a >

        <
        /form> 

        <
        /div>










        <
        /div> </div >
    );
};

export default LoginPage;