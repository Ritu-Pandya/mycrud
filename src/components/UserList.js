import React from 'react'
import UserInner from './UserInner';


export default function UserList(props) {

    const{list,remove,setedi}= props;
  return (
    <div className='m-3'>
    
     

      {
        list.map((value,index)=> {
            return(<UserInner mydata={value} key={index} 
                del={remove} ind={index} edit={setedi} ></UserInner>)
        })
    
      }
    
    </div>
  )
}
