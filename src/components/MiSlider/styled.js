import styled from 'styled-components'
const Container = styled.div`

.contSlider{
    height: 550px;
    width: 80%;
    margin: 0 auto;
    margin-top: 2%;
    overflow: hidden;
    position: relative;
    //border-radius: 11px 11px 11px 11px;
    border: 0px solid #000000;
    font-family: 'Roboto', sans-serif;
}
.imgSlider{
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
}
.titleSlider{
    position: absolute;
    bottom: 80px;
    left: 375px;
    color: white;
    font-size: 2em;
    font-weight: 500;
    width: 50%;
    text-align: center;
}
.titleSlider:hover{
    color: #c1d9de;
}

`
export {Container}