import React from 'react'
import {Form,Input,message,Radio} from 'antd';
import '../styles/Register.css'
import {Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/features/alertSlice';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onFinishHandler= async(values)=>{
    try{
      dispatch(showLoading())
      const res = await axios.post('/api/v1/user/register',values)
      dispatch(hideLoading())
      if(res.data.success){
        message.success('Registed Successfully!');
        navigate("/login")
      }else{
        message.error(res.data.message);
      }
    }catch(error){
      dispatch(hideLoading())
      console.log(error);
      message.error('Something went wrong')
    }
  }
  return (
    <>
    <div className='form-container'>

      <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
        <h3 className='text-center'>Registeration Form</h3>
        <Form.Item label="Name" name="name">
          <Input type="text" required/>
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input type="email" required/>
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input type="password" required/>
        </Form.Item>
        <Form.Item label="Role" name="role" initialValue="student">
            <Radio.Group>
              <Radio.Button value="student">Student</Radio.Button>
              <Radio.Button value="teacher">Teacher</Radio.Button>
            </Radio.Group>
          </Form.Item>
        <Link to='/login' className='m-2'>Already a user login here</Link>
        <button className='btn btn-primary' type="submit">Register</button>
      </Form>
    </div>
    </>
  )
}

export default Register

