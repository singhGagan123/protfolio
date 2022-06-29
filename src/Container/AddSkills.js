import './Info.css'
import Axios from 'axios';
import { useState } from 'react';


export const AddSkills=()=>{

    const [name,setName]=useState('sa')
    const [level,setLevel]=useState('as')


    const saveSkill=()=>{
 

        const data= new FormData();

        data.append('name',name)
        data.append('experience_level',level)
       
       

        Axios.post('http://localhost/kulwinder/index.php/store/skills',data)
        .then((resp)=>alert('sucessfully added'))
        .catch(err=>alert(err.response.message))

        
      
    }

    return(
        <div className="form">

         <div className='left'>
           
         </div>
         <div className='right'>
            <div className='water'></div>
         <input placeholder='type name' onChange={(text)=>setName(text.target.value)}></input>
         <input placeholder='experience level' onChange={(text)=>setLevel(text.target.value)}></input>
        
         <h4 onClick={()=>saveSkill()}>save</h4>
         </div>
        </div>
    )
}