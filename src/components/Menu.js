import { useState, useEffect } from "react";
import Burgers from "./Burgers";

const Menu = () => {
  const [allBurgers, setAllBurgers] = useState([]);
  const [num, setnum] = useState(9);
  const [btn, setbtn] = useState(true);
  // json-server -p 8080 ./public/db.json
  useEffect(() => {
    window.scrollTo(0, 0);
    // const getBurgers = async () => {
    //     await fetch('https://my-json-server.typicode.com/hmilly/db')
    //         .then(res => res.json())
    //         .then(res => setAllBurgers(res.burgers))
    //         .catch((error) => console.log(error));
    // }

    //above fetch is from internal db on 2nd server.
    //below is fetching from online fake db to use with github pages
    const getBurgers = async () => {
      await fetch("https://my-json-server.typicode.com/hmilly/db/burgers", {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Accept: "application/json;odata.metadata=full",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((res) => setAllBurgers(res))
        .catch((error) => console.log(error));
    };
    getBurgers();
  }, []);

  const moreOrLess = () => {
    setbtn(!btn);
    num === 12 ? setnum(9) : setnum(12);
  };

  return (
    <main className="menu">
      <div className="top">
        <h1>Explore our Menus</h1>
        <p>
          Choose from an ever-changing mix of meat, fish, Beyond Meat™, WW
          Approved, Diabetes Friendly recipes and health-conscious offerings.
        </p>
      </div>
      <div className="mid">
        {allBurgers.slice(0, num).map((b, i) => (
          <Burgers burgerObj={b} key={i} />
        ))}
      </div>
      <div className="bot">
        <button className="onclickBtn" onClick={moreOrLess}>
          {btn === true ? "SEE MORE" : "SEE LESS"}
        </button>
      </div>
    </main>
  );
};

export default Menu;
