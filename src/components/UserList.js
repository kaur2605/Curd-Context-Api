import React, { useContext } from "react";
import { GlobalContext } from "../contextapi/GlobalState";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

export default function UserList() {
  const { users, removeUser } = useContext(GlobalContext);

  return (
    <ListGroup className="mt-3">
      {users.map((user, id) => (
        <ListGroupItem key={id} className="d-flex">
          <strong>{user.name}</strong>

          <div className="ml-auto">
            <Link to={`/edit/${user.id}`} className="btn btn-warning">
              Update
            </Link>
            <Button
              onClick={() => removeUser(user.id)}
              className="btn btn-danger ml-1"
            >
              Delete
            </Button>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
}
