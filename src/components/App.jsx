import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

const App = () => {
    const [items, setItems] = useState([]);

    const addItem = (input) => {
        setItems((prevItems) => {
            return [...prevItems, input];
        });
    };

    const deleteItem = (id) => {
        setItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        });
    };

    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>
            <InputArea onAdd={addItem} />
            <div>
                <ul>
                    {items.map((todoItem, index) => (
                        <ToDoItem key={index} id={index} text={todoItem} onChecked={deleteItem} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default App;
