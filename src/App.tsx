import React from 'react';
import './App.css';
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import {useState} from 'react'
import {Todo} from './components/model'

// // TYPES 

// let name:string
// let age:number | string
// let isStudent:boolean
// let hobbies:string[]
// let role:[number,string]

// // Type extension

// type X = {
//   a:number,
//   b:number
// }

// type Y = X & {
//   c:number,
//   d:number
// }

// let y: Y = {
//   a:1,
//   b:2,
//   c:1,
//   d:2
// }

// interface Person extends X {
//   name: string,
//   age?: number
// }

// let lotsOfPeople: Person[]

// interface Individual extends Person {
//   proffesion:string
// }

// let person: Person = {
//   a: 5,
//   b:6,
//   name: 'Deyan',
//   age: 33
// }

// let deyan: Individual = {
//   a: 7,
//   b:8,
//   name: 'deyan',
//   age:33,
//   proffesion: 'software developer'
// }

// lotsOfPeople = [{name:'Deyan',a:1,b:2}, {age: 45, name: 'Joshgn',a:4,b:5}]



// age = 'deyan'
// role = [5,'deyan']
// hobbies = ['fishing','hunting']
// isStudent = false
// name = 'deyan'

// // Functions

// const printName = (name:string) => console.log(name)

// printName('deyan')

const App: React.FC = () => {
  
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id:Date.now(), todo:todo, isDone: false}])
      setTodo('')
    }
  }

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
