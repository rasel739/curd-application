import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletePerson } from "../redux/personSlice";

const PersonData = ({ person }) => {
  const { id, name, phone } = person;

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePerson(id));
  };

  return (
    <div>
      <div>
        <h6>Name: {name}</h6>
        <h6>Phone Number: {phone}</h6>
      </div>
      <div>
        <button onClick={() => handleDelete(id)}>Delete</button>
      </div>
      <div>
        <button>
          <Link to="/update-person" state={{ id, name, phone }}>
            Update
          </Link>
        </button>
      </div>
    </div>
  );
};

export default PersonData;
