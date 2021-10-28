import React from "react";
import Persons from "./Persons";

function NameLists() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "vue",
    },
  ];
  const nameLists = names.map((name, index) => <h2 key={index}>{index} {name}</h2>);
  return <div>{nameLists}</div>;
}

export default NameLists;
