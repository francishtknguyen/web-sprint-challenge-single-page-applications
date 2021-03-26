import React from 'react'





export default function Form(props) {
    
    const {values, change, submit, disabled, errors} = props
    
    
    const Onchange = (evt) => {
        const {checked, value, name, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse);
        
    }

    const Onsubmit = (evt) => {
        evt.preventDefault();
        submit();
    }
    return(
        <form onSubmit={Onsubmit}>
        <div className="form-container">
            <label>Name
            <input 
            name="name" 
            type="text" 
            value={values.name} 
            onChange={Onchange}
            />
            </label>
            <label>Size
            <select name="size" value={values.size} onChange={Onchange}>
                <option value="">--Select Size--</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="gigantic">Gigantic</option>
            </select>
            </label>
            <div className="ingredients">
            <label>Pepperoni
                
            </label><input
                name="pepperoni"
                type="checkbox"
                checked={values.pepperoni}
                onChange={Onchange}
                />
            <label>Sausage
              
            </label>  <input
                name="sausage"
                type="checkbox"
                checked={values.sausage}
                onChange={Onchange}
                />
            <label>Pineapple
                
            </label><input
                name="pineapple"
                type="checkbox"
                checked={values.pineapple}
                onChange={Onchange}
                />
            <label>Jalapenos
               
            </label> <input
                name="jalapenos"
                type="checkbox"
                checked={values.jalapenos}
                onChange={Onchange}
                />
            </div>
            <label>Special Instructions:
            <input 
            name="special" 
            type="text" 
            value={values.special} 
            onChange={Onchange}
            />
            </label>
            
        </div>
        <button className= "submitBtn" disabled={disabled}>Submit</button>
        <div className="errors">
            {/* <div>{errors.name}</div> */}
            {/* <div>{errors.size}</div> */}
        </div>
        </form>
    )
}