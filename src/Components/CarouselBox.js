import React from 'react'
import { Carousel } from 'react-bootstrap'
import firstSlide from '../assets/slide1.jpg'
import secondSlide from '../assets/slide2.jpg'
import thirdSlide from '../assets/slide3.jpg'
import { Item } from './CarouselImage'

export function CarouselBox(){
    return(
        <Carousel>
            <Carousel.Item>
                <Item src = {firstSlide} alt = 'first'/>
            </Carousel.Item>
            <Carousel.Item>
                <Item src = {secondSlide} alt = 'second'/>
            </Carousel.Item>
            <Carousel.Item>
                <Item src = {thirdSlide} alt = 'third'/>
            </Carousel.Item>
        </Carousel>
    )
}