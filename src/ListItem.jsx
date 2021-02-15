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
        transform: "translateX(-100%)",
        opacity: 1
    };

    const ticketNotVisibleState = {
        transform: "translateX(200%)",
        opacity: 0.6
    }
    return (
        <div>
            <FlipMove
            staggerDelayBy={50}
            easing="cubic-bezier(.12, .46, .14, 1.2)"
            enterAnimation={{
                from: ticketEnterVisibleState,
                to: {}
            }}
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