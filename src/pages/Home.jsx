import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

const HomePage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [dataFromDb, setDataFromDb] = useState([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    fetch(
      "https://react-login-module-64e96-default-rtdb.firebaseio.com/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const users = [];
        for (const key in data) {
          const user = {
            id: key,
            ...data[key],
          };
          users.push(user);
        }
        setIsLoading(false);
        setDataFromDb(users);
      });
  }, []);

  const checkUserDataHandler = (userData) => {
    for (let i = 0; i < dataFromDb.length; i++) {
      if (userData.email === dataFromDb[i].email) {
        // setError(false);
        if (userData.password === dataFromDb[i].password) {
          console.log("User exists!");
          navigate("/more", { replace: true });
          // setError(false);
          // console.log(isError);
        } else {
          console.log("Incorrect credentials");
          setError(true);
          console.log(isError);
        }
      }
    }
  };
  if (isLoading) {
    return <section>Loading</section>;
  }

  return (
    <div>
      <LoginForm checkUserData={checkUserDataHandler} error={isError} />
    </div>
  );
};

export default HomePage;

////// STORING DATA //////
// import { useNavigate } from "react-router-dom";
// import LoginForm from "../components/LoginForm/LoginForm";

// const HomePage = () => {
//   const navigate = useNavigate();

//   const addUserDataHandler = (userData) => {
//     fetch(
//       "https://react-login-module-64e96-default-rtdb.firebaseio.com/data.json",
//       {
//         method: "POST",
//         body: JSON.stringify(userData),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     ).then(() => {
//       navigate("/more", { replace: true });
//     });
//   };
//   return (
//     <div>
//       <LoginForm addUserData={addUserDataHandler} />
//     </div>
//   );
// };

// export default HomePage;
