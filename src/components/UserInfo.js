import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserInfo = ({ users }) => {
  const { id } = useParams(); //useParams used to remember the parameter we passed using links.
  const navigate = useNavigate(); // useNavigate uses in react-router-v6

  return (
    <div className="user">
      <Card className="userinfo">
        {users
          .filter((user) => user.id === parseInt(id))
          .map((user) => (
            <>
              <p>Name: {user.name}</p>
              <p>User Name: {user.username}</p>
              <p>E.mail: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Company: {user.company.name}</p>
              <p>
                Website:
                <a
                  href={`https://${user.website}`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {" "}
                  https://{user.website}
                </a>
              </p>
              <p>
                <b>Address:</b>
              </p>
              <li>street: {user.address.street}</li>
              <li>suite: {user.address.suite}</li>
              <li>City: {user.address.city}</li>
              <li>Zipcode: {user.address.zipcode}</li>
            </>
          ))}
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
