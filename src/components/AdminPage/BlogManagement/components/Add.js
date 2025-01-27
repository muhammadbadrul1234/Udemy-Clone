import React, { useState } from "react";
import Swal from "sweetalert2";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { db } from "../../../firebase";

const Add = ({ blogs, setBlogs, setIsAdding, getBlogs }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const getCurrentDateTime = () => {
    const currentDate = new Date();

    // Get date components
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // Months are zero-based
    const day = currentDate.getDate();

    // Get time components
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Add leading '0' if minutes or seconds are less than 10
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    // Format the date and time
    const formattedDateTime = `${year}-${month < 10 ? "0" + month : month}-${
      day < 10 ? "0" + day : day
    } ${hours}:${formattedMinutes}:${formattedSeconds}`;

    return formattedDateTime;
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    const currentDateTime = getCurrentDateTime();
    if (

      !name ||
      !description 
    ) {
      return Swal.fire({
        icon: "error",
        title: "Error!",
        text: "All fields are required.",
        showConfirmButton: true,
      });
    }
    try {
      const docRef = doc(db, "Blogs", name);
      const result = await setDoc(
        docRef,
        {

          title: name,
          description: description,
          date: currentDateTime,


        },
        { merge: true }
      );

      if (result) {
        console.log("blog created");
      }

      console.log("blog created");
    } catch (error) {
      console.log(error);
    }

    setBlogs(blogs);
    setIsAdding(false);
    getBlogs();

    Swal.fire({
      icon: "success",
      title: "Added!",
      text: `${category} ${name}'s data has been Added.`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="small-container">
      <form onSubmit={handleAdd}>
        <h1>Add Blog</h1>

        

        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div style={{ marginTop: "30px" }}>
          <input type="submit" value="Add" />
          <input
            style={{ marginLeft: "12px" }}
            className="muted-button"
            type="button"
            value="Cancel"
            onClick={() => setIsAdding(false)}
          />
        </div>
      </form>
    </div>
  );
};

export default Add;
