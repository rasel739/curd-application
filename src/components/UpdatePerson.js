import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePerson } from "../redux/personSlice";

const UpdatePerson = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [name, setName] = useState(location.state.name);
  const [phone, setPhone] = useState(location.state.phone);

  const id = location.state.id;

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updatePerson({ id, name, phone }));

    navigate("/");
  };

  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Your Name"
                onChange={(event) => setName(event.target.value)}
                value={name}
                required
              />
            </div>
            <div>
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Your Phone Number"
                onChange={(event) => setPhone(event.target.value)}
                value={phone}
                required
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePerson;
