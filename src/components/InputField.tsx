import React from 'react'
import './InputField.css'
import {useRef} from 'react'
interface Props {
    todo:string,
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e:React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form onSubmit={(e) => {
       handleAdd(e);
       inputRef.current?.blur() 
    } } className='input'>
        <input 
            ref={inputRef}
            onChange={(e) => setTodo(e.target.value)} 
            value={todo} type='text' 
            placeholder='enter a task' 
            className='input-box' 
        />
        <button className='input-submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
