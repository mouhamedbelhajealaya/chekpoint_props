import React from 'react'
import BasicExample from './component/BasicExample.js'
function App() {
  const arr=[
    {img:'./images/emg2.jpg', name:"Lionel Messi",age:" 35",born:"June 24, 1987"},
    {img:'./images/emg1.jpg', name:" Cristiano Ronaldo",age:"38",born:" Feb 5, 1985 "},
    {img:'./images/emg3.jpg', name:"Neymar",age:"31",born:"Feb 5, 1992 "},
    {img:'./images/emg4.jpg',name:"Kylian Mbappé",age:"24",born:" Dec 20, 1998"},
  ]
  return ( 
    <div style={{display:'flex',}}>
    {arr.map(e=>
    <BasicExample e={e}></BasicExample>
      )}
    </div>
  )
}
export default App
