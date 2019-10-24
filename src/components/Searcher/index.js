import React from 'react'
import {Container} from './styled'
import {Link, withRouter} from 'react-router-dom'

const Searcher = (props) =>{
    return(
        <Container>
            <div>
                <input type='text' placeholder='Buscar...' onKeyPress={(event)=>event.key === 'Enter' ? props.history.push(`/search/${event.target.value}`):null}></input>
            </div>
            <hr></hr>
        </Container>
    )
}

export default withRouter(Searcher);