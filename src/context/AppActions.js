import state from "./AppContext";

const baseUrl = `https://my-json-server.typicode.com/hmilly/db`;

const fetchHeader = {
  "Access-Control-Allow-Origin": "*",
  Accept: "application/json; data.metadata=full",
  "Content-Type": "application/json",
};


// get users and all burgers from online database
export const fetchAppData = async () => {
  const [allBurgers, users] = await Promise.all(
    [`${baseUrl}/burgers`, `${baseUrl}/users`].map((url) =>
      fetch(url, { headers: { method: "GET", headers: fetchHeader } }).then(
        (res) => res.json()
      )
    )
  );
  return { allBurgers: allBurgers, users: users };
};

// post request for adding new user
// works when internal server is running only

export const addNewUser = (userDetails) => {
  const userOrder = state.basket.map((b) => `${b.burger.name} x ${b.quantity}`);
  fetch(`${baseUrl}/users`, {
    method: "POST",
    headers: fetchHeader,
    body: JSON.stringify({
      ...userDetails,
      order: userOrder,
    }),
  })
    .then((res) => res.json())
    .catch((error) => console.log(error));
};
