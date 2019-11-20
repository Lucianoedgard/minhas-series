import React, { 
    useState, 
    useEffect } 
from 'react'
import axios from 'axios'

const Generos = () => {
    const [data, setData] = useState()
    useEffect(() => {
      axios
      .get('/api/genres')
      .then( res => {
        setData(res.data.data)
      })
    }, [])
    
    const renderizaLinha = record => {
      return(
        <tr>
          <th scope="row">1</th>
          <td>{record.name}</td>
          <td></td>
        </tr>        
      )
    }
    return (
        <div>
          <h1>
            Gêneros
          </h1>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th scope='col'>ID</th>
                <th scope='col'>Nome</th>
                <th scope='col'>Ações</th>
              </tr>
            </thead>
            <tbody>
              {data.map(renderizaLinha)}
            </tbody>
          </table>            
          <pre>{JSON.stringify(data)}</pre>
        </div>
      )
  }

  export default Generos