import React, {useEffect} from 'react'  
const Fields = (props) => {   
  useEffect(()=>{   
  },[]) 
  const renderDynamicInputs=(list)=>{ 
return(
list.map((item,i)=>{
    console.log(item);
   
    switch (item.type){
  case  'text':
    return (
        <div class="form-group">
        <label >{item.label}{item.isRequired&&"*"} :</label>
        <input type="text" disabled={item.isReadonly}  class="form-control" />
      </div>
    );
    case 'number':
        return(
            <div class="form-group">
            <label >{item.label}{item.isRequired&&"*"} :</label>
            <input type="number" disabled={item.isReadonly}  class="form-control"/>
          </div>
        );
        case 'date':
            return(
                <div class="form-group">
                <label >{item.label}{item.isRequired&&"*"} :</label>
                <input type="date" disabled={item.isReadonly} class="form-control" />
              </div>
            );
            case 'dropdown':
                return(
                    <div class="form-group">
            <label >{item.label}{item.isRequired&&"*"} :</label>
            <select class="form-control" disabled={item.isReadonly} > 
            {item.items&&item.items.map((list,li)=>{
                return(
                    <option value={list.value}>{list.text}</option>
                )
            })}
                
            </select>
          </div>
                ); 
    }
})
)
  } 
    return (
        <div className='container'> 
        <div className='text-center'> Dynamic Inputs</div>  
            { 
       renderDynamicInputs(props.items.fields)
            }
        </div>
    )
} 
export default Fields;
