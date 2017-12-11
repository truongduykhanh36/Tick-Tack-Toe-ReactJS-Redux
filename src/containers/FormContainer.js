import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form';
import { submitForm } from '../creators/FormActionCreator';
import { initBoard } from '../creators/GameActionCreator';

class FormContainer extends React.Component{
    render(){
        return (
            <Form handleFormSubmit={(size) => this.props.handleFormSubmit(size)} />
        );
    }

}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return{
        handleFormSubmit: size => {
            dispatch(submitForm(size));
            dispatch(initBoard(size));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);