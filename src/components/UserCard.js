import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/button";

const UserCard = ({ users = [] }) => {
  return (
    <div className="userCard">
      {users.map((user) => (
        <Card key={user.id}>
          <div className="circle">
            <p>{user.name.charAt(0)}</p>
          </div>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.username}</Card.Text>
            <Card.Text>
              <a href="">http://{user.website}</a>
            </Card.Text>{" "}
            <Link to={`/${user.id}`}>
              {" "}
              <Button variant="outline-info">view</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
      <hr />
    </div>
  );
};
export default UserCard;
