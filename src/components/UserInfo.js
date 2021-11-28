import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";

const UserInfo = ({ users }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="user">
      <Card className="userinfo">
        <p>Name: {users[id - 1].name}</p>
        <p>User Name: {users[id - 1].username}</p>
        <p>E.mail: {users[id - 1].email}</p>
        <p>Phone: {users[id - 1].phone}</p>
        <p>Company: {users[id - 1].company.name}</p>
        <p>
          Website:
          <a
            href={`https://${users[id - 1].website}`}
            rel="noopener noreferrer"
            target="_blank"
          >
            {" "}
            https://{users[id - 1].website}
          </a>
        </p>
        <p>
          <b>Address:</b>
        </p>
        <li>street: {users[id - 1].address.street}</li>
        <li>suite: {users[id - 1].address.suite}</li>
        <li>City: {users[id - 1].address.city}</li>
        <li>Zipcode: {users[id - 1].address.zipcode}</li>
      </Card>
      <>
        <Button
          className="userinfoButton"
          onClick={() => {
            navigate("/");
          }}
        >
          Back button
        </Button>
      </>
    </div>
  );
};

export default UserInfo;
