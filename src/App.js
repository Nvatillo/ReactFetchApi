import './App.css';
import {useEffect,useState} from 'react'


function App() {
  const url = 'https://jsonplaceholder.typicode.com/posts'

  const [todos , setTodos] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json();
    setTodos(responseJSON)

  }

  useEffect(() =>{
    fetchApi()
  }, [])
  
  return (
    <div className="App">
      <h1>Taks</h1> 
      <table className="table table-striped" >
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Body</th>
          </tr>
        </thead>
        {!todos ? 'Cargando...': 
            todos.map((todo,index) =>{
            return  <tbody key={index}>
              <tr >
                <th scope="row" >{todo.id}</th>
                <td>{todo.title}</td>
                <td>{todo.body}</td>
              </tr>
            </tbody>
            })
            }
      </table>
     
    </div>
  );
}

export default App;
