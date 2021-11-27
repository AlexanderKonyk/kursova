import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { CarouselBox } from '../Components/CarouselBox'
import { NewsBase } from '../Components/NewsBase'

export default class Home extends Component{
    constructor(){
        super()
        this.state = {
            news: []
        }
    }
    async componentDidMount(){
        try{
            const response = await fetch('http://newsapi.org/v2/top-headlines?country=ua&apiKey=d7899922c62043c285ae2118d28fe4e4')
            const json = await response.json()
            console.log(json.articles)
            this.setState({ news: json.articles })
        } catch (error){
            console.log(error)
        }
    }
    render(){
        const idNews = this.state.news.slice(0,10);
        const newComponent = idNews.map(item =>
            <NewsBase title = {item.title} text = {item.description} img = {item.urlToImage} url = {item.url}/>)
        return(
            <>
            <CarouselBox />
            <Container>
                <h2 className = 'text-center m-4'>Головні новини</h2>
                {newComponent}
            </Container>
            </>
        )
    }
}