import styled from 'styled-components'

const Container = styled.div`

    @import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&display=swap');

        background-color: #f5f5f5;
        margin-bottom: 10%;
        //border-radius: 11px 11px 11px 11px;
        border: 0px solid #000000;
        color:#fff;
        transition: 0.3s;

        : hover{
            box-shadow: 6px 9px 19px 5px rgba(173,173,173,0.67);
            transform: scale(1.05);
        }

    a {
        text-decoration: none;
    }

    img{
        width:100%;
        height: 200px;
        object-fit: cover;
        border: 0px solid #000000;
    }

    .info{

        padding-left: 20px;
        padding-right: 30px;
        padding-bottom: 30px;
        color:#333333;
        font-family: 'Roboto', sans-serif;
    }

    h3{
        margin-top: 6%;
        margin-bottom: 6%;
    }

    i {
        margin-right: 3%;
    }

    p {
        text-transform: uppercase;
        font-size: 0.8em;

        font-weigth: 100;
        font-family: 'Roboto', sans-serif;
        color: #bcc5cc !important;
    }
`
export {Container}