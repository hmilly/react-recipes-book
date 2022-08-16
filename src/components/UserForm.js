import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import store from "../context/appContext";

export const UserForm = () => {
  const { users, basket, addNewUser } = useContext(store);
  const [userDetails, setUserDetails] = useState({});

  let navigate = useNavigate();
  const orderComplete = () => {
    setUserDetails({});

    navigate("/complete");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const v =
      name !== "phonenumber" ? e.target.value : parseInt(e.target.value);
    setUserDetails({ ...userDetails, id: users.length + 1, [name]: v });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (basket.length === 0) {
      window.alert("Please add something to the basket");
    } else if (
      users.find(
        (user) => user.email.toLowerCase() === userDetails.email.toLowerCase()
      )
    ) {
      window.alert(
        "Email entered is currently in use, please re-enter and try again"
      );
    } else {
      addNewUser(userDetails);
      orderComplete();
    }
  };

  return (
    <form>
      <h1>Your details:</h1>
      <select
        name="title"
        placeholder="Title"
        onChange={(e) => handleChange(e)}
      >
        <option value="Mr">Select:</option>
        <option value="Mr">Mr</option>
        <option value="Mrs">Mrs</option>
        <option value="Ms">Ms</option>
        <option value="Mx">Mx</option>
      </select>
      <section>
        <input
          type="text"
          name="firstname"
          placeholder="First name*"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name*"
          onChange={(e) => handleChange(e)}
        />
      </section>
      <input
        type="text"
        name="email"
        placeholder="Email address*"
        required={true}
        onChange={(e) => handleChange(e)}
      />
      <p>Contact number:</p>
      <input
        type="tel"
        name="phone"
        placeholder="Phone number*"
        onChange={(e) => handleChange(e)}
      />
      <p>Delivery address:</p>
      <input
        className="postcode"
        name="address"
        placeholder="Address*"
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
        SUBMIT
      </button>
    </form>
  );
};

export default UserForm;
