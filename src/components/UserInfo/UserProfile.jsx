import React from "react";
import "./userProfile.css";

const UserProfile = (props) => {
  return (
    <section id="#userProfile">
      <div className="container profile__container">
        <p>
          Name: <span>{props.name}</span>
        </p>
        <p>
          ID: <span>{props.id}</span>
        </p>
        <p>
          Age: <span>{props.age}</span>
        </p>
        <p>
          CGPA: <span>{props.cgpa}</span>
        </p>
        <p>
          Role: <span>{props.role}</span>
        </p>
        <p>
          Salary: <span>{props.salary}</span>
        </p>
      </div>
    </section>
  );
};

export default UserProfile;
