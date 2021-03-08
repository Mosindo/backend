import { useState } from "react";

const AddHeroes = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [powers, setPowers] = useState("");

  const add = () => {
      if (name.toLowerCase() === "batman") {
          alert("Nooooon");
          return;
      }
    fetch("http://localhost:8000/heroes", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        power: powers,
        image: image,
      }),
    });
  };

  return (
    <>
      <h1>Add Heroes</h1>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Powers"
        value={powers}
        onChange={(event) => {
          setPowers(event.target.value);
        }}
      ></input>
      <input
        type="text"
        placeholder="Photo"
        value={image}
        onChange={(event) => {
          setImage(event.target.value);
        }}
      ></input>
      <button onClick={add}>Add</button>
    </>
  );
};

export default AddHeroes;
