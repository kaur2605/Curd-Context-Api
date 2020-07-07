import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../contextapi/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function Edit(props) {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });

  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentuserid = props.match.params.id;

  useEffect(() => {
    const userId = currentuserid;
    const selectedUser = users.find((u) => u.id === Number(userId));
    setSelectedUser(selectedUser);
  }, [currentuserid, users]);

  const onchange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    editUser(selectedUser);

    history.push("/");
  };

  return (
    <div>
      <Form onSubmit={onSubmit}>
        <FormGroup style={{ width: 500 }}>
          <Label>Name </Label>
          <Input
            type="value"
            placeholder=" Enter Name"
            name="name"
            defaultValue={selectedUser.name}
            onChange={onchange}
          >
            {" "}
          </Input>
        </FormGroup>
        <Button type="submit">Edit Name</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </div>
  );
}
