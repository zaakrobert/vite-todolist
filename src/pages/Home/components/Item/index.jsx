import React from 'react'

export default function Item({id, note, date, time, deleteData, submittingData}) {

  const deleteItem = () => {
    submittingData.current = true
    deleteData( preItem => preItem.filter(item => item.id !== id) )
  }

  return (
    <div className='item'>
      <p>{note}</p>
       <p>{`${date} ${time}`}</p>
      <button onClick={deleteItem} className="remove">delete</button>
    </div>
  )
}