import React from 'react'
import styled from 'styled-components'

const Container = styled.nav`

@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

div {
    position:absolute;
    top:0;
    left:10%;
    width: 20%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-top: 1.5%;
    margin-bottom: 1%;
}

input {
    width: 100%;
padding: 15px;
    border-radius: 20px;
    border: 0px solid #000000;
    background-color: #f5f5f5;
}

hr {
    border: 0px solid #e5e5e5;
}

i {
    margin-right:10px;
}
`

export {Container}