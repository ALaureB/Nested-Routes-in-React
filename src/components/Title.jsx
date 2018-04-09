import React, { Component } from 'react';

class Title extends Component {
    render() {
        const { match } = this.props;
        return (
            <div>
                <h3>{match.params.title}</h3>
            </div>
          )
    }
}

export default Title;