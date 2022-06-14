import { useState, useEffect, useRef } from "react"
import { API_GET_DATA } from '../../global/constants'
import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ data })
  })
}

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA)
  const { data } = await res.json()
  setData(data)
}

export default function Home() {
  const [data, setData] = useState([])

  const submittingData = useRef(false)

  //每次渲染時, useEffect 都會被執行一次, 因此第一次進到畫面也會先執行一次

  //這個為偵測 data變動就執行 (即第二個參數)
  useEffect(() => {
    if (!submittingData.current) {
      return
    }
    fetchSetData(data)
      .then(data => submittingData.current = false)
  }, [data])

  //這個為初次渲染
  useEffect(() => {
    /* //綁定的事
    return () => {
      //取消綁定的事
    } */

    // fetch( API_GET_DATA )
    // .then( res => res.json())
    // .then( (data) => {
    //   console.log(data);
    // })

    fetchData(setData)
  }, [])

  return (
    <div className="app">
      <Edit add={setData} submittingData={submittingData} />
      <List listData={data} deleteData={setData} submittingData={submittingData} />
    </div>
  )
}