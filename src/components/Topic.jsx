import React, { Component } from 'react';
import {
    Link,
    Route // for later
  } from 'react-router-dom';
import Title from './Title';

class Topic extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <h2>{match.params.numSujet}</h2>
                <ul>
                    <li><Link to={`${match.url}/export/title1`}>Title 1</Link></li>
                    <li><Link to={`${match.url}/export/title2`}>Title 2</Link></li>
                    <li><Link to={`${match.url}/export/title3`}>Title 3</Link></li>
                </ul>

                <Route path={`${match.path}/export/:title`} component={Title}/>
            </div>
          )
    }
}

export default Topic;