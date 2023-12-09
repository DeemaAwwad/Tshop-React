import React, { useContext } from 'react'
import Input from '../../pages/Input'
import { useFormik } from 'formik';
import { ForgetPasswordSchema } from '../validation/validation';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function ForgetPassword() {
    
    const navigate = useNavigate();
   
    const onSubmit = async users=>{
        const {data} = await axios.patch(`https://ecommerce-node4.vercel.app/auth/forgotPassword`,users);
        console.log(data);
        if(data.message=='success'){
          
            toast.success('Password updated successfully',{
                position:"top-right",
                autoClose:false,
                hideProgressBar:false,
                closeOnClick:true,
                pauseOnHover:true,
                draggabletrue:true,
                progress:undefined,
                theme:"dark"
            });
            navigate('/login');
            }
        }
    
    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit,
        validationSchema:ForgetPasswordSchema
    });
    const inputs = [
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
        },
        {
            id:'code',
            type:'code',
            name:'code',
            title:'user code',
             
        },
    ];
    const renderInputs = inputs.map( (input,index)=>
    <Input 
    type={input.type} 
    id={input.id} 
    name={input.name} 
    title={input.title} 
    value={input.value} 
    key={index} 
    errors={formik.errors} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    touched={formik.touched}
    />
    )
  return (
    <div className='container'>
        <h2>Update Password</h2>
        <form onSubmit={formik.handleSubmit}>
            {renderInputs}
            <button type='submit' disabled={!formik.isValid} >Update Password</button>
        </form>
    </div>
  )
}
