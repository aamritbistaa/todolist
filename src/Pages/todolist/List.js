import React, { useState } from "react";
import "../../App.css";

const List = ({ list, DeleteItem, CompleteItem, EditItem }) => {
  const [complete, setComplete] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [editInput, setEditInput] = useState("");
  const [editId, setEditId] = useState();

  const handleEdit = (id, text) => {
    setEditId(id);
    setEditInput(text);
    setToggle((toggle) => !toggle);
    console.log(toggle, "toggle status");
    EditItem(id, editInput);
  };

  return (
    <div className="List">
      <div className="btn-choice">
        <button onClick={() => setComplete(false)}>Active</button>
        <button onClick={() => setComplete(true)}>Completed</button>
      </div>

      <div className="item-display">
        {list.map((elem) => {
          return elem.complete == complete ? (
            <div className="display-wrapper">
              <div className="display-element">
                <div className="text">
                  {toggle && elem.id == editId ? (
                    <input
                      placeholder="Enter new text"
                      onChange={(e) => setEditInput(e.target.value)}
                      value={editInput}
                    />
                  ) : (
                    elem.text
                  )}
                </div>
                <div className="button-box">
                  <button onClick={() => handleEdit(elem.id, elem.text)}>
                    Edit
                  </button>
                  <button onClick={() => DeleteItem(elem.id)}>Delete</button>

                  {/* if not complete or complete = false only display button else dont display */}
                  {!complete ? (
                    <button onClick={() => CompleteItem(elem.id)}>
                      Complete
                    </button>
                  ) : (
                    console.log("displaying completed task")
                  )}
                </div>
              </div>
            </div>
          ) : (
            console.log("pass")
          );
        })}
      </div>
    </div>
  );
};

export default List;
