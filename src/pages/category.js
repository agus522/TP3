import React from 'react'
import Grilla from '../components/Grilla'


class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            news:[],
            isLoading: true

        }
    } 
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.slug !== this.props.match.params.slug) {
          this.fetchCategoryNews()
        }
    }


     componentDidMount(){
        this.fetchCategoryNews()

    }
async fetchCategoryNews() {
    const slug = this.props.match.params.slug
    const categoriesId = {
       politica: '1',
       internacionales: '2',
       tecnologia: '3',
       espectaculos: '4',
       deportes: '5',
    }
    try {
        const response = await fetch(`https://api.canillitapp.com/news/category/${categoriesId[slug]}`);
        if (!response.ok) {
          throw Error(response.statusText);
        }
        const json = await response.json();
        this.setState({ 
          news: json, 
          isLoading: false
        });
        console.log (json)

    } catch (error) {
        console.log(error);
    }
}




    render(){
    return(
        <Grilla news={this.state.news} />
    )
}
}

export default Home