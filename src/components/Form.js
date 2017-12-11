import React from 'react';

class Form extends React.Component{
    render(){
        let input;
        const {handleFormSubmit} = this.props;
        return(
            <div style={{"width": "200px", "margin": " 10px auto"}}>
                <form onSubmit = {
                    event => {
                        event.preventDefault();
                        if(!input.value.trim()){
                            return;
                        }
                        handleFormSubmit(input.value);
                    }
                }>
                    <div className="form-group">
                        <label>Enter size</label>
                        <input className="form-control"
                            ref = {
                                node => { input = node }
                            }
                        />
                    </div>
                    <button type="submit" className="btn btn-default">Size-Board</button>
                </form>
            </div>
        );
    }
}

export default Form;