import * as React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const formValidationSchema=yup.object({
    email: yup.string().min(6),
    password : yup.string().min(8).max(12),
});

export function BasicForm(){
    const formik =useFormik({
        initialValues:{
            email:"raj@gmail.com",
            password:"abcded123",
        },
    validationSchema :formValidationSchema,
        onSubmit: (values)=>{
            console.log(values);
        }
    })
    return(
    <form onSubmit={formik.handleSubmit}>
        <input
        type ="email"
        placeholder="email"
        value={formik.values.email}
        onChange ={formik.handleChange}
        onBlur ={formik.handleBlur}
        name="email"
        />
        {formik.touched.email && formik.errors.email? formik.errors.email:null}
        <input
        type ="text"
        placeholder="password"
        value={formik.values.password}
        onChange ={formik.handleChange}
        onBlur ={formik.handleBlur}
        name="password"
        />
        {formik.touched.password && formik.errors.password? formik.errors.password:null}
        <button type="submit">Submit</button>
        <div>
            Error
            <pre>{JSON.stringify(formik.errors)}</pre>
            Touched
            <pre>{JSON.stringify(formik.touched)}</pre>
        </div>
    </form>
    );
  };