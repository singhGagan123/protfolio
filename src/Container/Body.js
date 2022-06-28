import { useSelector } from 'react-redux'
import './Body.css'


const mario= require('./Image/img.jpg')

export const Body=()=>{

    
const {name}=useSelector(state=>state.name) //global state

    return(
        <div className="body">
            <div className='heading'>
            <h1>personal website</h1>
            
            </div>
            <div className='box'>
              
               <div  className='image'></div>

            </div>
        </div>
    )
}