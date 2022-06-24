import cogoToast from "cogo-toast";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import homeStyle from "../assets/style/home.module.scss";
import { updatePerson } from "../redux/personSlice";

const UpdatePerson = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState(location.state.name);
  const [phone, setPhone] = useState(location.state.phone);

  const id = location.state.id;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePerson({ id, name, phone }));
    cogoToast.success("Update Data Success");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className={homeStyle.containerFull}>
      <div className={homeStyle.container}>
        <div
          className={homeStyle.formMain}
          style={{ marginTop: "5rem", marginBottom: "25rem" }}
        >
          <form onSubmit={handleSubmit}>
            <div className={homeStyle.formGrid}>
              <div className={homeStyle.formItem}>
                <div className={homeStyle.formLabel}>
                  <label>Name</label>
                </div>
                <div>
                  <input
                    value={name}
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
                    value={phone}
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
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePerson;
