import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserProfile from "../components/UserInfo/UserProfile";
import db from "../Firebase";

const MorePage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    db.collection("UserInformation")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((element) => {
          // console.log(element, "ELEMENT");
          var data = element.data();
          // console.log(data, "DATA");
          setUserInfo((arr) => [...arr, data]);
          // console.log(userInfo, "AFTER STATE SET");
        });
      });
  }, []);

  const matchedUser = () => {
    for (let i = 0; i < userInfo.length; i++) {
      if (location.state.id === userInfo[i].id) {
        setUserInfo(userInfo[i]);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    console.log(userInfo, "HERE");
  }, [userInfo]);

  matchedUser();

  if (isLoading) {
    return <section style={{ textAlign: "center" }}>Loading</section>;
  }

  return (
    <section>
      <UserProfile
        key={userInfo.id}
        id={userInfo.id}
        name={userInfo.name}
        age={userInfo.age}
        cgpa={userInfo.cgpa}
        role={userInfo.role}
        salary={userInfo.salary}
      />
    </section>
  );
};

export default MorePage;
