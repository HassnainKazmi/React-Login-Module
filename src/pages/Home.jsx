import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";
import db from "../Firebase";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    db.collection("UserCredentials")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((element) => {
          var data = element.data();
          setData((arr) => [...arr, data]);
        });
      });
    setIsLoading(false);
  }, []);

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  let userID = "";
  const checkUserDataHandler = (userData) => {
    for (let i = 0; i < data.length; i++) {
      if (userData.email === data[i].email) {
        if (userData.password === data[i].password) {
          userID = data[i].id;
          setData(userData);
          // console.log("User exists!", userID);
          navigate("/more", { state: { id: userID } });
          setError(false);
        } else {
          // console.log("Incorrect credentials");
          setError(true);
        }
      } else {
        setError(true);
      }
    }
  };

  if (isLoading) {
    return <section style={{ textAlign: "center" }}>Loading</section>;
  }

  return (
    <div>
      <LoginForm checkUserData={checkUserDataHandler} error={isError} />
    </div>
  );
};

export default HomePage;
