import React from 'react';
import './ListItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item => {
        return <div className='list' key={item.key}>
            <p>
                {item.text} 
                <span>
                    <FontAwesomeIcon 
                    className="faicons" 
                    icon='trash'
                    onClick={()=> props.deleteItem(item.key)} />
                </span>
            </p>
        </div>
    });
    const ticketNotVisibleState = {
        transform: "translateX(200%)",
        opacity: 1
    };
    return (
        <div>
            <FlipMove
            leaveAnimation={{
                from: {},
                to: ticketNotVisibleState
            }}
            duration={300} 
            >
                {listItems}
            </FlipMove>
        </div>
    );
}

export default ListItems;