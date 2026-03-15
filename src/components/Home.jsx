import { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";

function Home() {
  const { user } = useUserAuth();

  const [dishes, setDishes] = useState([]);
  const fetchData = async function () {
    try {
      const token = await user.getIdToken();
      console.log("useToken", token);
      const response = await fetch(
        "https://cs732-groupproj.fly.dev/api/dishes",
        {
          //const response = await fetch("http://localhost:3000/api/dishes", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`, // send to nodejs for verification
          },
        },
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const dishes = await response.json();
      setDishes(dishes);
      console.log("Parsed Dishes Data:", dishes);
    } catch (e) {
      console.log("catch error", e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {user &&
        dishes.map((dishstyle, index) => {
          return (
            <div key={index}>
              {dishstyle.name} - {dishstyle.style}
              {dishstyle.dishes.map((dish, idx) => {
                return (
                  <div key={idx}>
                    <ul>
                      <li>
                        {dish.name_zh}({dish.name_en})
                      </li>
                      {dish.ingredients.map((ing, i) => {
                        <small key={i}>{ing}</small>;
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          );
        })}
    </>
  );
}

export default Home;
