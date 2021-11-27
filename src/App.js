import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Components/Header'
import { Helmet } from 'react-helmet'

export function App(){
    return(
        <div>
            <Helmet>
                <meta charSet = 'utf-8' />
                <title>Служба Військ</title>
            </Helmet>
            <Header />
        </div>
    )
}