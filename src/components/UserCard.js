import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const UserCard = ({ users = [] }) => {
  return (
    // map() function used to iterate array and let you manipulate the items
    <div className="userCard">
      {users.map((user) => (
        // Without the `key`, React will fire a key warning
        <Card key={user.id}>
          <div className="circle">
            <p>{user.name.charAt(0)}</p>
          </div>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <i>@{user.username}</i>
            <Card.Text>
              <a
                href={`https://${user.website}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                http://{user.website}
              </a>
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
