import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string().min(2, 'must contain minimum 2 chars').required('name is required'),
    size: yup.string().required('must choose size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    pineapple: yup.boolean(),
    jalapenos: yup.boolean(),
    special: yup.string(),
})