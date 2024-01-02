import React from 'react'
import Rot from './Rot'
import { Link } from 'react-router-dom'
// import Memo from './Usememo'
// import Ref from './Ref'
// import FilterableTable from './Filter'
// import ToDoList from './Todo'

// const data = [
//   { id: 1, name: 'John Doe', email: 'john@example.com' },
//   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
//   { id: 3, name: 'Bob Johnson', email: 'bob@example.com' },
//   // Add more data as needed
// ];

function App() {
  return (
    <div className="App">
      <Rot/>
      {/* <Ref/> */}
      {/* <h1>Filterable Table</h1> */}
      {/* <FilterableTable/> */}
      {/* <ToDoList/> */}
      {/* <Memo/> */}
    </div>
  )
}

export default App
