import {useContext, useData} from "react"
import {Data} from "../Context/DataContext"

const useData = ()=>{return useContext(Data)};
export default useData;