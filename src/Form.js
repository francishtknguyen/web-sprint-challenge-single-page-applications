import React from 'react'





export default function Form(props) {
    
    const {values, change, submit, disabled, errors, orders} = props
    
    console.log(orders)
    
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
        <div className ="container">
        <div className="form-container">
            <h2>Order Form</h2>
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
                <input
                name="pepperoni"
                type="checkbox"
                checked={values.pepperoni}
                onChange={Onchange}
                />
            </label>
            <label>Sausage
                <input
                name="sausage"
                type="checkbox"
                checked={values.sausage}
                onChange={Onchange}
                />
            </label>  
            <label>Pineapple
                <input
                name="pineapple"
                type="checkbox"
                checked={values.pineapple}
                onChange={Onchange}
                />
            </label>
            <label>Jalapenos
               <input
                name="jalapenos"
                type="checkbox"
                checked={values.jalapenos}
                onChange={Onchange}
                />
            </label> 
            </div>
            <div className="special">
            <label>Special Instructions:
                
            </label><input 
                name="special" 
                type="text" 
                value={values.special} 
                onChange={Onchange}
                />
            </div>
            <div><button className= "submitBtn" disabled={disabled}>Submit</button>   </div>
            
        </div>
        
        <div className="errors">
            <div>{errors.name}</div> 
             <div>{errors.size}</div>
        </div>
       
        <div className="orders"> 
        <h2>Orders:</h2>
        {
        
            orders.map( (order, idx) => {
                return(<div key={idx} className="order-card">
                <div>Name: {order.name}</div>
                <div>Size: {order.size}</div>
                {!!order.ingredients  && !!order.ingredients.length &&
                    <div >
                    Toppings:
                        <ul>
                        {order.ingredients.map((top, idx) => <li key={idx}>{top}</li>)}
                        </ul>
                    </div>
                }
                <div>Special Notes: {order.special}</div>
                </div>
            )})
            
        }
        </div>
        
        </div>
        </form>
        
    )
}