import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPerson } from "../redux/personSlice";

import PersonData from "./PersonData";

const Home = () => {
  const { person } = useSelector((state) => state.personReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  console.log(person);

  const handleSubmit = (e) => {
    e.preventDefault();

    const persons = { name, phone };

    dispatch(postPerson(persons));
  };

  return (
    <div className="container-full">
      <div className="container">
        <div>
          <h2>Curd Operations</h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                onChange={(event) => setPhone(event.target.value)}
                required
              />
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
        <div className="show-data">
          {person.map((person) => (
            <div key={person.id}>
              <PersonData person={person}></PersonData>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
