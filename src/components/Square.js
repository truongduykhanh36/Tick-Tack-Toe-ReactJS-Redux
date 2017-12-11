import React from 'react';

class Square extends React.Component{
    render(){
        let newMove_CSS = ""
        if(this.props.isNewMove){
            newMove_CSS = 'curClick';
        }
        return(
            <button className={'square ' + newMove_CSS + ' ' + this.props.winnerInfor} onClick={this.props.onClick}>
                {this.props.value}
            </button>
        );
    }
}

export default Square;