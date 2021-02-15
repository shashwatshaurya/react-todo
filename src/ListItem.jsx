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
    const ticketEnterVisibleState = {
        transform: "translateX(-500px)",
        opacity: 1
    };
    return (
        <div>
            <FlipMove
            staggerDelayBy={50}
            easing="cubic-bezier(.12, .46, .14, 1.2)"
            enterAnimation={{
                from: ticketEnterVisibleState,
                to: {}
            }}
            duration={300} 
            >
                {listItems}
            </FlipMove>
        </div>
    );
}

export default ListItems;