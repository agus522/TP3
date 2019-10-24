import React from 'react'
import styled from 'styled-components'

const Container = styled.header`

@import url('https://fonts.googleapis.com/css?family=Merriweather:300,300i,400,400i,700,700i,900,900i&display=swap');
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

    a {
        text-decoration: none !important;
    }

    h1 {
        width: 100%
        color: #ff9d83 !important;
        margin-top: 2%;
        margin-bottom: 2%;
        text-align: center;
        font-weigth: bold;
        font-family: 'Merriweather', serif;
        font-size: 3em;
        transition: 0.3s;
    }

    h1:hover {
        color: #333333 !important;
    }

    hr {
        border: 0.5px solid #e5e5e5;
    }

    p {
        width 100%;
        color: #bcc5cc !important;
        margin-top: 2%;
        margin-bottom: 2%;
        text-align: center;
        font-weigth: 100;
        font-family: 'Roboto', sans-serif;
        font-size: 0.8em;
        letter-spacing: 5px;
    }

    i {
        margin-right: 1%;
        font-size: 1.3em !important;
    }
`

export {Container}

