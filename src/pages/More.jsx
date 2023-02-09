import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import UserProfile from "../components/UserInfo/UserProfile";
import db from "../Firebase";

const MorePage = () => {
  const [userInfo, setUserInfo] = useState([]);
  const location = useLocation();

  useEffect(() => {
    db.collection("UserInformation")
      .get()
      .then((querySnapShot) => {
        querySnapShot.forEach((element) => {
          var data = element.data();
          setUserInfo((arr) => [...arr, data]);
        });
      });
  }, []);

  const matchedUser = () => {
    for (let i = 0; i < userInfo.length; i++) {
      if (location.state.id === userInfo[i].id) {
        setUserInfo(userInfo[i]);
      }
    }
  };

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  matchedUser();

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
