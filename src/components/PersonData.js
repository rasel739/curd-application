import { BsEyeFill, BsFillTrashFill, BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import personDataStyle from "../assets/style/personTable.module.scss";
import { deletePerson } from "../redux/personSlice";

const PersonData = ({ persons, newItem }) => {
  const { person } = useSelector((state) => state.personReducer);

  const { id, name, phone } = persons;

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deletePerson(id));
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  return (
    <div className={personDataStyle.personMain}>
      <div className={personDataStyle.personItem}>
        <p>
          {"#"}
          {id}
        </p>
      </div>
      <div className={personDataStyle.personItem}>
        <p>{name}</p>
      </div>
      <div className={personDataStyle.personItem}>
        <p> {phone}</p>
      </div>

      <div className={personDataStyle.personItem}>
        <button className={personDataStyle.personButton}>
          <Link
            to="/update-person"
            state={{ id, name, phone }}
            style={{ textDecoration: "none" }}
          >
            <BsPencilSquare />
          </Link>
        </button>
      </div>
      <div className={personDataStyle.personItem}>
        <button
          className={personDataStyle.personButton}
          onClick={() => handleDelete(id)}
        >
          <BsFillTrashFill style={{ color: "red" }} />
        </button>
      </div>
      <div className={personDataStyle.personItem}>
        <button className={personDataStyle.personButton}>
          <Link
            to={`/contact/${id}`}
            state={{ id, name, phone }}
            style={{ textDecoration: "none" }}
          >
            <BsEyeFill />
          </Link>
        </button>
      </div>
      <div>
        {person[person.length - 1] && newItem ? (
          <span className={personDataStyle.newItem}>{newItem}</span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default PersonData;
