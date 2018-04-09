import React, { Component } from 'react';
import {
    Link,
    Route // for later
  } from 'react-router-dom';
import Topic from './Topic';



class Contenus extends Component {
    
    componentWillMount() {
        console.log("contenus WillMount");
    }

    componentWillUnmount() {
        console.log("contenus Unmount");
    }
    
    render() {
        console.log("contenus render");
        const {match} = this.props;
        return (
            <div>
                <h1>Contenus</h1>
                <ul>
                    <li><Link to={`${match.url}/sujet1`}>Sujet 1</Link></li>
                    <li><Link to={`${match.url}/sujet2`}>Sujet 2</Link></li>
                    <li><Link to={`${match.url}/sujet3`}>Sujet 3</Link></li>
                </ul>

                <Route path={`${match.path}/:numSujet`} component={Topic}/>

            </div>
        );
    }
}

export default Contenus;