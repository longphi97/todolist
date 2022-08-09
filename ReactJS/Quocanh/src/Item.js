import React from "react";
const Item = ({item, onStatus, onDelele}) => {
    return (
    <button onClick={() => {onStatus(item.id)}} style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', height: '40px', width: '140px', margin: '10px'}}>
      <div style={{display: 'flex', flexDirection: 'row'}}>  <span>
            {item.name}
        </span>
        {
            item.status ? (<span style={{marginLeft: '2px'}}> competed </span>) : null
        }
        </div>
        <button onClick={() => onDelele(item.id)}>
            X
        </button>
    </button>
)}

export default Item;