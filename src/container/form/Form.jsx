import React, { Component } from 'react'
import Form from '../../components/form/Form';

export default class Form extends Component {
    static = {
       url: '',
       method: '',
       results: '',
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    }

    handleSubmit = ({ target }) => {

    }

    render() {
        const { url, method, results } = this.state;
    }
    return (
        <>
            <Form 
            url={url}
            method={method}
            results={results}
            onSubmit={this.handleSubmit}
            onChange={this.handleChange} 
            />
        </>
    );
};
