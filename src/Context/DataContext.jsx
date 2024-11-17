import {createContext, useState} from 'react'

const Data = createContext();


function DataContext({childern}) {

   const [users,setUsers] = useState([]);


  return (
    <div>
        <Data.Provider value={{users,setUsers}}>
            {childern }
        </Data.Provider>
    </div>
  )
}

export default DataContext
export {Data}
