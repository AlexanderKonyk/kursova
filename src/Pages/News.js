import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import { NewsBase } from '../Components/NewsBase'


export default class News extends Component{
    constructor(){
        super()
        this.state = {
            loading: false,
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
    render() {
        const Component = this.state.news.map(item =>
            <NewsBase title = {item.title} text = {item.description} img = {item.urlToImage} url = {item.url}/>)
        return (
            <Container>
                <h2 className = 'text-center m-2'>Усі новини</h2>
                {Component}
            </Container>
        )
    }
} 