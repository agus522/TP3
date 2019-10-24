import React from 'react'
import { Container } from './styled'

const Card = ({ noticia }) => {
    const { title, img_url, source_name, date, url, keyword} = noticia
    return (
        <Container id="carta">
            <a href={url}>
                <div id="imgdiv">
                    <img src={img_url} />
                </div>
                <div className="info">
                    <h3>{title}</h3>
                    <p>{source_name.substring(0, 120)}</p>
                </div>
            </a>
        </Container>
    )
}
export default Card