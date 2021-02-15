import React, { Component, forwardRef } from 'react'
import PropTypes from 'prop-types'

const Form = ({ url, method, results, onSubmit, onChange}) => {
    return(
        <section>
            <form onSubmit={onSubmit}>
                <input type="text" name="url" placeholder="enter URL here" value={url} onChange={onChange} />
                <section>
                    <div>
                        <label>
                            <input type="radio" name="method" value="GET" onChange={onChange} />
                        </label>
                        <label>
                            <input type="radio" name="method" value="POST" onChange={onChange} />
                        </label>
                        <label>
                            <input type="radio" name="method" value="PUT" onChange={onChange} />
                        </label>
                        <label>
                            <input type="radio" name="method" value="PATCH" onChange={onChange} />
                        </label>
                        <label>
                            <input type="radio" name="method" value="DELETE" onChange={onChange} />
                        </label>
                    </div>
                </section>
                    <results name="results" value={results} onChange={onChange} />
            </form>
        </section>
    );
};

Form.propTypes = {
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired,
    results: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Form;
 
