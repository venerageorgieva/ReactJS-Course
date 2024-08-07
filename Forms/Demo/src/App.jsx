import UncontrolledForm from './components/UncontrolledForm.jsx'
import ControlledForm from './components/ControlledForm.jsx'
import './App.css'
import { useRef } from 'react'

function App() {
const formRef = useRef();
  return (
    <>
 <ControlledForm formRef={formRef}/>

 <button
  type='button' 
  onClick={()=> formRef.current.requestSubmit()}
  >
   Submit
 </button>
 </>
  )
}

export default App
