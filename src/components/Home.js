import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import homeStyle from "../assets/style/home.module.scss";
import { postPerson } from "../redux/personSlice";
import PersonData from "./PersonData";

const Home = () => {
  const { person } = useSelector((state) => state.personReducer);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const persons = { id: person.length + 1, name, phone };

    dispatch(postPerson(persons));
  };

  return (
    <div className={homeStyle.containerFull}>
      <div className={homeStyle.container}>
        <div className={homeStyle.title}>
          <h2>Curd Operations</h2>
        </div>
        <div className={homeStyle.formMain}>
          <form onSubmit={handleSubmit}>
            <div className={homeStyle.formGrid}>
              <div className={homeStyle.formItem}>
                <div className={homeStyle.formLabel}>
                  <label>Name</label>
                </div>
                <div>
                  <input
                    className={homeStyle.formInput}
                    type="text"
                    placeholder="Your Name"
                    onChange={(event) => setName(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={homeStyle.formItem}>
                <div className={homeStyle.formLabel}>
                  <label>Phone Number</label>
                </div>
                <div>
                  <input
                    className={homeStyle.formInput}
                    type="text"
                    placeholder="Your Phone Number"
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>
              </div>
              <div className={homeStyle.formItem}>
                <button type="submit" className={homeStyle.formButton}>
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="show-data">
          {person
            .slice(0)
            .reverse()
            .map((person) => (
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
