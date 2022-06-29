import { useSelector } from 'react-redux'
import './Body.css'
import { Info } from './Info'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Skills } from './Skills'
import { AddSkills } from './AddSkills'



export const Body = (props) => {

    const [details, setDetails] = useState([]);

    useEffect(() => {

        axios.get('http://localhost/kulwinder/index.php/fetch/data')
            .then(resp => resp.data).then(result => setDetails(result.data))
            .catch(err => alert(err))

    }, [])

    const { name } = useSelector(state => state.name) //global state

    const deleteSelected = (id) => {
        axios.get(`http://localhost/kulwinder/index.php/delete/data/${id}`)
            .then(resp => alert('deleted'))
            .catch(err => alert(err))
    }

    return (
        <div className="body" onMouseEnter={() => props.setName('drawer1')} >
            <div className='heading'>
                <h1 >personal website</h1>
            </div>
            <div className='box'>

                {name === 'Home' ?

                    details && details.map((detail, index) => {
                        return (
                            <div key={index} className='card'>
                                <div className='card2'>
                                    <a>{detail.name}</a>
                                    <p>{detail.description}</p>
                                    <a>{detail.contact_detail}</a>
                                </div>
                                <text onClick={() => deleteSelected(detail.id)}>Delete</text>
                            </div>
                        )
                    })
                    :

                    name === 'Info' ? <Info /> :
                        name==='AddSkills'? <AddSkills/>:<Skills />}

            </div>
        </div>
    )
}