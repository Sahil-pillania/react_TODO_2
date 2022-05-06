import React, { useState } from "react";
import todoImg from "../images/todo.svg";

function Todo() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const editItem = () => {};

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todoImg} alt="" />
            <figcaption>Add your List Here</figcaption>
          </figure>

          <div className="addItems">
            <input
              type="text"
              placeholder=" ✏️ Add Items... "
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
              }}
            />
            <i
              className="fa fa-solid fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>

          <div className="showItems">
            {items.map((elem, index) => {
              return (
                <div className="eachItem" key={elem.id}>
                  <h3>{elem.name}</h3>
                  <div className="todo-btn">
                    <i
                      className="fa fa-edit add-btn"
                      title="Edit Item"
                      onClick={() => editItem(elem.id)}
                    />
                    <i
                      className="fa fa-trash-alt add-btn"
                      title="Delete Item"
                      onClick={() => deleteItem(elem.id)}
                    />
                  </div>
                </div>
              );
            })}

            <div className="showItems">
              <button
                className="btn effect04"
                data-sm-link-text="Remove All"
                onClick={removeAll}
              >
                <span>CHECK LIST</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
