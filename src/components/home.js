import * as React from 'react';
import styles from './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return ( < div className = "home-container" >


        <
        div class = "cards-list" >

        <
        Link to = '/addchild' >
        <
        div class = "card 1" >
        <
        div class = "card_image" > < img src = "https://media2.giphy.com/media/fqNyLxd32m0YneN8Xz/giphy.gif?cid=ecf05e47lr707ots5jqrhmzhqvp2iwscayh8ot7b5k158jwi&ep=v1_gifs_related&rid=giphy.gif&ct=g" / > < /div>  <
        div class = "card_title title-white" >
        <
        p > ADD CHILDREN < /p>

        <
        /div> </div > < /Link >

        <
        Link to = '/showchild' >
        <
        div class = "card 2" >
        <
        div class = "card_image" >
        <
        img src = "https://media4.giphy.com/media/3o7qDGGUOQKMdIp2Ug/giphy.gif?cid=ecf05e47j8x1jnfhd4f6o74no3t9t2lwysa2njp6t0andw4u&ep=v1_gifs_related&rid=giphy.gif&ct=g" / >
        <
        /div> <div class = "card_title title-white" > <
        p > SEE CHILDREN < /p> </div > < /div> </Link >


        <
        Link to = '/mapchild' >
        <
        div class = "card 3" >
        <
        div class = "card_image" >
        <
        img src = "https://media1.giphy.com/media/26BoDHFdQYMHTNGV2/giphy.gif?cid=ecf05e479ph7xzc2zsh8ajbh7utolypxnks3ohdnhjz7vd0j&ep=v1_gifs_related&rid=giphy.gif&ct=g" / >
        <
        /div> <div class = "card_title" > <
        p > OUR SERVICES < /p> </div > < /div> <
        /Link >


        <
        /div>

        <
        /div>
    );
};

export default Home;