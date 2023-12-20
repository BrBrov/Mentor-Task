import { useReducer} from 'react'
import './App.css'
import Form from './components/Form/Form'
import Output from './components/Output/Output'
import { ActionForm } from './types/Form-types';

function reducer(state: Array<string>, action: ActionForm) {
  if (action.type === 'add') {
    return [...state].concat(action.payload);
  }

  return state;
}

function App() {
  const [input, setInput] = useReducer(reducer, []);

  return (
    <>
    <div className='description'>
      <span className='description__text'>Создать маленькое реакт приложение, где будет форма, в ней кнопка и инпут. И лист результатов.</span>
      <span className='description__text'>В инпут добавляешь что-либо, нажимаешь на кнопку и оно добавляется в лист результатов.</span>
    </div>
      <div className='container'>
        <Form getInput={setInput}/>
        <Output input={input}/>
      </div>
    </>
  )
}

export default App
