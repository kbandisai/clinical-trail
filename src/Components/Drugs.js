import React, {useState, useEffect} from 'react' 
import {drugList1, drugList2 } from './DrugsList'
import Fields from './Fields';
const Drugs = () => {  
  const [drug1,setDrug1]=useState(drugList1);
  const [drug2,setDrug2]=useState(drugList2);
  useEffect(()=>{   
  },[])   
    return (
        <div>  
<Fields items={drug1}/>
        </div>
    )
} 
export default Drugs;
