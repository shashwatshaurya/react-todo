import React from 'react';
import { Component } from 'react';
import ListItems from './ListItem';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faTrash);
library.add(faPlus);

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
            currentItem: {
                text: '',
                key: ''
            }
        }
        this.handleInput = this.handleInput.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };

    handleInput(e){
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    };

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem;
        console.log(newItem);
        if(newItem.text!=='')
        {
            const newItems = [...this.state.items, newItem];
            this.setState({
                items: newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            });
        }
    };

    deleteItem(key){
        const filteredItems = this.state.items.filter(item => item.key!==key);
        this.setState({
            items: filteredItems
        });
    };

    render(){
        return(
            <div className="App">
                <div className="header">
                    <form id="todo-form" onSubmit={this.addItem}>
                        <input type='text' placeholder="Enter Task"
                        value={this.state.currentItem.text}
                        onChange={this.handleInput} />
                        <button type="submit">
                            <FontAwesomeIcon 
                                className="faicons plus" 
                                icon='plus'/>
                        </button>
                    </form>
                </div>
                <div className="listBody">
                    <ListItems 
                        items={this.state.items}
                        deleteItem = {this.deleteItem} 
                    />
                </div>
            </div>
        );
    };
}

export default App;