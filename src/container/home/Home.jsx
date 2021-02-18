import React, { Component } from 'react'
import { fetchAPI } from '../../services/fetchAPI';
import Header from '../../components/header/Header';
import Form from '../../components/form/Form';
import Results from '../../components/results/Results';

export default class Home extends Component {

    state = {
        url: '',
        method: '',
        body: '',
        history: [],
        results: { 'Hello': 'Hit Send to get a response!'}
    }

    componentDidMount(){
        const historyStored = JSON.parse(localStorage.getItem('history'));
        ''
        if(historyStored){
          this.setState({ history: historyStored });
        }
    }

   handleChange = ({ target }) => {
       this.setState({ [target.name]: target.value });
   }

   handleSubmit = event => {
    const { history, url, method } = this.state;
    const key = `${url}+${method}`;
    
    event.preventDefault();
    this.fetch();
    
    if(history.filter(item => item.key === key).length > 0 || method === '') return;
    this.setState(state => ({
      history: [...state.history, {
        url: state.url,
        method: state.method,
        body: state.body,
        key: `${state.url}+${state.method}`
      }]
    }))

    this.setState(state => {
        localStorage.setItem('history', JSON.stringify(state.history));
      });
    }

    
    handleClick = event => {
        const { id } = event.target;
        let result;
        
        this.state.history.forEach(item => {
            if(item.key === id){
                result = item;
            }
        });
        
        this.setState({
            url: result.url,
            method: result.method,
            body: result.body
        });
    }
    
    fetch = () => {
        const { url, method, results } = this.state;
        return fetchAPI(url, method, results)
            .then(res => this.setState({ results: res}));
    }

    render(){
        const { url, method, body, results, history } = this.state;
    
        return (
          <>
            <Header/>
              <div>
                <Form 
                  url={url} 
                  method={method} 
                  body={body} 
                  onSubmit={this.handleSubmit} 
                  onChange={this.handleChange} />
                <Results results={results} />
              </div>
          </>
        );
    }
};
