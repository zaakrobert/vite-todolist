import Item from '../Item'

export default function List( {listData, deleteData, submittingData} ) {
  return (
    <div className='list'>
      {
        listData.map( (i) => {
          const {id, note, date, time} = i
          return <Item key={id} id={id} note={note} date={date} time={time} deleteData={deleteData} submittingData={submittingData}/>
        } )
      }
    </div>
  )
}
