import React from 'react';

class History extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.status}</p>
                <button style={{"marginBottom": "8px"}} className="btn btn-default" onClick={this.props.onClick}>Reverse</button>
                <div className="ol-tag">    
                    <ol>{this.props.moves}</ol>
                </div>
            </div>
        );
    }
}

export default History;