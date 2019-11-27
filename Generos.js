import React, { 
                useState, 
                useEffect } 
from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Generos = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios
      .get('/api/genres')
      .then( res => {
        setData(res.data.data)
      })
    }, [])

    const deleteGenero = id => {
      axios
        .delete('/api/genres/' + id)
        .then(res => {
          const filtrado = data.filter(item => item.id !== id)
          setData(filtrado)
        })
    }

    const renderiaLinha = record => {
      return (
        <tr key={record.id}>
          <th scope='row'>{record.id}</th>
          <td>{record.name}</td>
          <td>
            <button className='btn btn-danger' onClick={() => deleteGenero(record.id)}>Remover</button>
            <Link className='btn btn-warning' to={'/genres/' + record.id}>Editar </Link>
          </td>
        </tr>              
      )
    }

    if (data.length === 0)
    {
      return(
        <div className='container'>
          <h1>Gêneros</h1>
          <div className="alert alert-warning" role="alert">
            Você não possui Gêneros.
          </div>        
        </div>
      )
    }
    return (
      <div className='container'>
        <h1>
          Gêneros
        </h1>
        <div><Link className='btn btn-success' to='/generos/novo'>Novo Gêneros</Link></div>
        <table className='container table-striped table-dark'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Nome</th>
              <th scope='col'>Ação</th>
            </tr>
          </thead>
          <tbody>
            {data.map(renderiaLinha)}
          </tbody>
        </table>          
     </div>
    )
  }

  export default Generos