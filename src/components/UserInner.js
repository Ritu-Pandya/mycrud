import React from 'react'

export default function UserInner(props) {


  return (
    
    <div>
        <table className='table table-striped table-hover'>
        <tbody>
        <tr >
       <td>{props.mydata?.firstname}</td>
       <td>{props.mydata?.lastname}</td>
       <td>{props.mydata?.email}</td>
       <td>{props.mydata?.city}</td>
       <td>{props.mydata?.state}</td>
       <td>{props.mydata?.zipcode}</td>
       <td><button className='btn  btn-outline-danger' onClick={()=>props.del(props.ind)}>Delete</button></td>
       <td><button className='btn  btn-outline-secondary'onClick={()=>props.edit(props.ind)}>Edit</button></td>
    </tr>
    </tbody>
    </table>
    </div>
  )
}
