import React, { useState } from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
    const [value, setValue] = useState('')
    const [data, setData] = useState([{id: 1,name: 'Todo1', status: false}, {id: 2,name: 'todo2', status: true}, {id: 3,name: 'Todo3', status: false}])
    console.log(value)
    const onStatus = (temp) => {
        data.map((item) => 
        {
                if (item.id === temp) {
                  item.status=true
                }
                  else return item
        }
        )
        const newData =[...data]
        setData(newData)
    }
    const onSubmit = () => {
        data.push({
            id: uuidv4(),
            name: value,
            status: false
        })
        const newData= [...data]
        setData(newData)
        setValue('')
    }
    const onDelele = (pram) => {
        data.map((item, index) => {
            if(item.id === pram) {
                data.splice(index,1)
            } else return item
        })
        const newData= [...data]
        setData(newData)
    }
    return ( 
        <div style={{margin : '40px',paddingLeft: '500px' ,display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItem: 'center', width: '250px'}}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <input value={value} onChange={(e) => setValue(e.target.value)}/>
                <button onClick={onSubmit} style={{marginLeft: '5px',width: '30px', height: '30px', borderRadius: '15px'}}>
                    +
                </button>
            </div>
            {
                data.map((item, index) => {
                    return (
                        <Item onDelele={onDelele}  onStatus={onStatus} item={item} key={index} />
                    )
                })
            }
        </div>
    )
}

export default TodoList;