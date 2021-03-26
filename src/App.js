import React, {useState, useEffect} from "react";
import axios from 'axios'
import {Route, Link, Switch} from 'react-router-dom'
import * as yup from 'yup'
import Form from './Form'
import Home from './Home'
import schema from './validation/schema'

const initialFormValues = {
  name:"",
  size:"",
  pepperoni:false,
  sausage:false,
  pineapple:false,
  jalapenos:false,
  special:"",
};

const initialFormErrors = {
  name:"",
  size:"",
  special:"",
}

const intitialOrders = [];

const intialDisabled = true;

const App = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [orders,setOrder]= useState(intitialOrders);
  const [disabled, setDisabled] = useState(intialDisabled)
  const [formErrors, setFormErrors]=useState(initialFormErrors)

  const postData = (newOrder) => {
    axios
    .post(`https://reqres.in/api/users`, newOrder)
    .then(res => {
      setOrder([res.data, ...orders])
    })
    .catch(err => {
      console.log(err)
    })
      setFormValues(initialFormValues);
  }

  const submit = () => {
    const newOrders = {
      name:formValues.name,
      size:formValues.size,
      ingredients: ['pepperoni','sausage','pineapple','jalapenos'].filter(ingredient => formValues[ingredient]),
      special:formValues.special,
    }
    postData(newOrders);
  }

  const change = ( name, value) => {
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
    setFormValues({...formValues, [name]:value});
  }

  useEffect(() => {
    schema.isValid(formValues)
    .then(valid => {
      setDisabled(!valid);
    });
  })
  return (
    <div className="App">
      <div className="banner">
      <h1 className="title">Frank's Pizza Shop</h1>
      <nav>
        <div className="nav-links">
          <Link to='/'>Home </Link>
          <Link to='/pizza'>Order Here</Link>
        </div>  
      </nav>
      </div>
      <Switch>
        <Route path='/pizza' >
          <Form 
          values={formValues} 
          change={change} 
          submit={submit} 
          disabled ={disabled} 
          errors ={formErrors}
          orders={orders}
          />
        </Route>
        <Route path = '/'>
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
