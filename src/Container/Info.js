import './Info.css'
import Axios from 'axios';
import { useState } from 'react';


export const Info=()=>{

    const [name,setName]=useState('sa')
    const [desc,setDesc]=useState('as')
    const [contact,setContact]=useState('as');

    const saveInfo=()=>{
 

        const data= new FormData();

        data.append('name',name)
        data.append('description',desc)
        data.append('contact_detail',contact)
       

        Axios.post('http://localhost/kulwinder/index.php/store/data',data)
        .then((resp)=>alert('sucessfully added'))
        .catch(err=>alert(err.message))

        
      
    }

    return(
        <div className="form">

         <div className='left'>
           
         </div>
         <div className='right'>
            <div className='water'></div>
         <input placeholder='type name' onChange={(text)=>setName(text.target.value)}></input>
         <input placeholder='contact_detail' onChange={(text)=>setDesc(text.target.value)}></input>
         <textarea placeholder='description' onChange={(text)=>setContact(text.target.value)}></textarea>
         <h4 onClick={()=>saveInfo()}>save</h4>
         </div>
        </div>
    )
}