import React, { Component } from 'react'
import PropTypes from 'prop-types'

const Form = ({ url, method, results, onSubmit, onChange}) => {
    return(
        <section>
            <form onSubmit={onSubmit}>
                <input type="text" name="url" placeholder="enter URL here" value={url} onChange={onChange} />
                <section>
                    <div>
                        <label>
                            GET
                            <input type="radio" name="method" value="GET" checked={method === 'GET'} onChange={onChange} />
                        </label>
                        <label>
                            POST
                            <input type="radio" name="method" value="POST" checked={method === 'POST'} onChange={onChange} />
                        </label>
                        <label>
                            PUT
                            <input type="radio" name="method" value="PUT" checked={method === 'PUT'} onChange={onChange} />
                        </label>
                        <label>
                            PATCH
                            <input type="radio" name="method" value="PATCH" checked={method === 'PATCH'} onChange={onChange} />
                        </label>
                        <label>
                            DELETE
                            <input type="radio" name="method" value="DELETE" checked={method === 'DELETE'} onChange={onChange} />
                        </label>
                    </div>
                    <button>SEND</button>
                </section>
                    <textarea name="results" value={results} onChange={onChange} />
            </form>
        </section>
    );
};

Form.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    results: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Form;
 
