
import { useSelector } from 'react-redux';
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'
import UpdateTodo from './components/UpdateTodo'


function App() { 
  const isUpdate = useSelector((state) => state.isUpdate);

  return (
    <>
        <h1 className='font-semibold text-3xl text-amber-300 mt-2 mb-2 '>Add Your tasks below...</h1>
        {isUpdate ? <UpdateTodo/> : <AddTodo/>}
        <Todo />
    </>
  )
}

export default App
