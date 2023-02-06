import React, { useState } from "react";
import Header from "./todolist/Header";
import Input from "./todolist/Input";
import List from "./todolist/List";
import "../App.css";

const Todo = () => {
  const [activityList, setActivityList] = useState([]);

  const handleAdd = (item) => {
    // console.log("Information sent from input slide is ", item);
    setActivityList([...activityList, item]);
    // console.log("list information is ", ...activityList);
  };

  const handleDelete = (id) => {
    if (id === "all") {
      setActivityList([]);
    } else {
      console.log("Delete item with id=", id);
      const updated_list = activityList.filter((elem) => {
        return elem.id != id;
      });

      setActivityList(updated_list);
      console.log("Remaining item list = ", updated_list);
    }
  };

  const handleComplete = (id) => {
    console.log("id no", id, "item completed");
    const newCompletedList = activityList.map((elem) =>
      elem.id === id
        ? {
            ...elem,
            complete: true,
          }
        : elem
    );
    setActivityList(newCompletedList);
  };

  const handleEdit = (id, updatedText) => {
    console.log("id no", id, "item selected");

    const newupdatedList = activityList.map((elem) =>
      elem.id === id
        ? {
            ...elem,
            text: updatedText,
          }
        : elem
    );

    setActivityList(newupdatedList);
  };

  return (
    <div className="Todo">
      <Header />
      <div>
        <Input todoActivity={handleAdd} />
        <button onClick={() => handleDelete("all")} className="btn-delete-all">
          Delete all
        </button>
      </div>
      <List
        list={activityList}
        DeleteItem={handleDelete}
        CompleteItem={handleComplete}
        EditItem={handleEdit}
      />
    </div>
  );
};

export default Todo;

//--------Edit/Update item--------
// in list.js
// when edit is pressed open a input box, it should return id , store it and open a input box on same filed
// tyo input box ko value should be passed from child to parent and replace existing field keeping old id as constant
// edit function takes id and input value search for the array from id and change the text value to input value

//----------Completed item---------
// activityList -> complete should be changed to true

// {if elem.complete == true  the activity is completed}
