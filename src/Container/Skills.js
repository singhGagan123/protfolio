
import { useEffect, useState } from 'react'
import './Skill.css'
import Axios from 'axios'


export const Skills = () => {

    const [skills, setSkills] = useState([])
    useEffect(() => {
        Axios.get('http://localhost/kulwinder/index.php/fetch/skills')
            .then((resp) => (resp.data)).then(res => setSkills(res.data))
            .catch(err => alert(err.response.message))
    }, [])

    return (
        <div style={{ width: '100%', height: '100%', display: "flex", alignItems: 'center', justifyContent: "center", flexDirection: "row", flexWrap: 'wrap' }}>

            {skills.map((skill, index) => {

                return (

                    <div key={index} style={{height:'50%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                        <svg width='90%' height='90%' >
                            
                            <circle className='progress' cx="50%" cy="50%" r="40%" >

                            </circle>
                        </svg>
                        <text style={{color:'white',fontWeight:'400',fontSize:20,fontFamily:'fantasy'}}>{skill.name}</text>
                    </div>

                )
            })}






        </div>
    )
}