import React from 'react'

function StudentInfo(props) {
  return (
    <div className='info'>
      <h2 className='name'>{props.name}</h2>
      <h2 className='mssv'>{props.id}</h2>
      <h2 className='lop'>{props.class}</h2>
    </div>
  )
}

export default StudentInfo