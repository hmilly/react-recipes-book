import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import AppContext from "../context/AppContext";
// import { addNewUser } from "../context/AppActions";

export const UserForm = () => {
  const { users, basket, dispatch } = useContext(AppContext);

  const [userDetails, setUserDetails] = useState({});

  let navigate = useNavigate();
  const orderComplete = () => {
    navigate("/complete");
    setUserDetails({});
    dispatch({
      type: "SET_BASKET",
      payload: [],
    });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const v =
      name !== "phonenumber" ? e.target.value : parseInt(e.target.value);
    setUserDetails({ ...userDetails, id: users.length + 1, [name]: v });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = users.find(
      (user) => user.email.toLowerCase() === userDetails.email.toLowerCase()
    );

    if (basket.length === 0) {
      window.alert("Please add something to the basket");
    } else if (Object.values(userDetails).some((obj) => obj === "")) {
      window.alert("Missing details required");
    } else if (checkEmail) {
      window.alert(
        "Email entered is currently in use, please re-enter and try again"
      );
    } else {
      orderComplete();
      // post method for when internal db is running
      // addNewUser(userDetails);
    }
  };

  return (
    <form className="form">
      <h2>Your details:</h2>
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
          required={true}
        />
        <input
          type="text"
          name="lastname"
          placeholder="Last name*"
          onChange={(e) => handleChange(e)}
          required={true}
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
        required={true}
      />
      <p>Delivery address:</p>
      <input
        className="postcode"
        name="address"
        placeholder="Address*"
        type="text"
        onChange={(e) => handleChange(e)}
        required={true}
      />
      <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
        SUBMIT
      </button>
    </form>
  );
};

export default UserForm;
