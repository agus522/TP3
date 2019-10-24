import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`

@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

div {
    width: 35%;
    margin-left: 55%;
    display: flex;
    justify-content: space-between;
    margin-top: 2%;
    margin-bottom: 2%;
}

a {
    color: #333333 !important;
    text-decoration: none;
    transition: 0.5s;
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
}

a:hover {
    transform: scale(1.18);
    font-weight: 600;
}

hr {
    border: 0.5px solid #e5e5e5;
}

i {
    margin-right:10px;
}
`

export {Container}