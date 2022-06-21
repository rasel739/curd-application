import cogoToast from "cogo-toast";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import uniqid from "uniqid";
import personImage from "../assets/image/person.png";
import homeStyle from "../assets/style/home.module.scss";
import { postPerson } from "../redux/personSlice";
import PersonData from "./PersonData";

const Home = () => {
  const { person } = useSelector((state) => state.personReducer);
  const dispatch = useDispatch();
  const phoneValue = useRef(null);
  const nameValue = useRef(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const bdNumberregExp = /(^(\+88)(01){1}[3456789]{1}(\d){8})$/;

  const numberTest = phone.match(bdNumberregExp);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (numberTest) {
      setError("");
      const persons = { id: uniqid(), name, phone };

      dispatch(postPerson(persons));
      cogoToast.success("Add Data Success");
      nameValue.current.value = "";
      phoneValue.current.value = "";
    } else {
      setError("Only bd number is allowed with country code");
    }
  };

  return (
    <div className={homeStyle.containerFull}>
      <div className={homeStyle.container}>
        <div className={homeStyle.imageDiv}>
          <img src={personImage} alt="" />
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
                    ref={nameValue}
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
                    ref={phoneValue}
                    className={homeStyle.formInput}
                    type="text"
                    placeholder="+8801359595888"
                    onChange={(event) => setPhone(event.target.value)}
                    required
                  />
                </div>
                <p style={{ color: "red", marginTop: "5px" }}>{error}</p>
              </div>

              <div className={homeStyle.formItem}>
                <button type="submit" className={homeStyle.formButton}>
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className={homeStyle.tableGrid}>
          {["Id", "Name", "Phone Number", "Update", "Delete", "Details"].map(
            (tableHeader, index) => (
              <div className={homeStyle.tableItem} key={index}>
                <h4>{tableHeader}</h4>
              </div>
            )
          )}
        </div>
        <div>
          {person
            .slice(0)
            .reverse()
            .map((person) => (
              <PersonData key={person.id} person={person}></PersonData>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
