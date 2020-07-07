import React, { useContext, useState } from "react";
import { GlobalContext } from "../contextapi/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link, useHistory } from "react-router-dom";
import { v4 as uuid } from "uuid";

export default function AddUser() {
  const [name, setName] = useState("");

  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const onSubmit = () => {
    const newuser = {
      id: uuid(),
      name,
    };

    addUser(newuser);

    history.push("/");
  };
  const onchange = (e) => {
    setName(e.target.value);
  };

  return (
    <Form onSubmit={onSubmit}>
      <FormGroup style={{ width: 500 }}>
        <Label>Name </Label>
        <Input
          type="text"
          placeholder=" Enter Name"
          value={name}
          onChange={onchange}
        ></Input>
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger ml-2">
        Cancel
      </Link>
    </Form>
  );
}
