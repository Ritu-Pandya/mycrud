import React,{useState} from 'react'
import { useEffect } from 'react';



export default function UserForm(props) {

    const{list,setlist,edi,setedi}= props;

    useEffect(()=> {
        setData(list[edi])
    },[props])

    const[data,setData]= useState({
        firstname : "",
        lastname  : "",
        email     : "",
        city      : "",
        state     : "",
        zipcode   : ""
    })

    const handle =(e)=> {
        setData({...data,[e.target.name]: e.target.value});
    }

    const submitData=(e)=> {
        e.preventDefault();
        let d= [...list];
        if(edi < 0)
        {
        d.push(data);
        }
        else
        {
            d[edi] = data;
        }
        setlist(d);
        setedi(-1);
        setData({ firstname : "",
        lastname  : "",email     : "",
        city      : "",
        state     : "",
        zipcode   : ""});
    }

  return (
    <div>
        <h1>React Crud Operation</h1>
        <h5>Add User</h5>
        <form onSubmit={submitData} className='form-inline'>
            <div className='row'>
                <div className='col'>
            <input   type='text' name='firstname' placeholder='FirstName'  
            onChange={handle} value={data?.firstname} className='me-2'/>
            <input type='text'  name="lastname"  placeholder='LastName' 
            onChange={handle} value={data?.lastname}/>
            </div>
            <div className='row'>
            <div className='col mt-3 '>
            <input type='text' name="email"  placeholder='Email' 
            onChange={handle} value={data?.email} className='me-2'/>
            
            
            <input type='text' name="city"  placeholder='City' 
            onChange={handle} value={data?.city}/>
            </div>
            </div>
            <div className='row'>
            <div className='col mt-3'>
            <input type='text' name="state"  placeholder='State' 
            onChange={handle} value={data?.state} className='me-2'/>
            
            <input type='text' name="zipcode"  placeholder='Zipcode' 
            onChange={handle} value={data?.zipcode} />
            </div>
            </div>

           
            </div>
            <input type='submit' className='btn btn-primary mt-3 ' value='Save' />
        </form>

    </div>
  )
}
