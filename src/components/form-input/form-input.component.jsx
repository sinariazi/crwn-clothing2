import React from 'react';

import './form-input.styles.css';

const FormInput =({handleChange,label,...otherProbs})=>(
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProbs} />
        {
            label ?
            (<label 
             className={`${
                otherProbs.value.length}? 'shrink':''
                } form-input-lable `}
              >
              {label}

            </label>) : null}
    </div>
);
export default FormInput;