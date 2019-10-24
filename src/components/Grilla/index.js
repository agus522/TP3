import React from 'react'
import {Container} from './styled'
import Card from '../Card';
const Grilla = ({news}) => {
  return(
      <Container>
           {news.map(noticia => <Card noticia={noticia} key={noticia._id} />)}
      </Container>
  )
}
export default Grilla