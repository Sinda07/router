import React from "react";
import Card from "react-bootstrap/Card";

const ListItems = ({ user }) => {
  return (
    <div>
      <Card
        style={{
          width: "18rem",
          margin: "10px",
          padding: "0px",
          border: "1px solid #ccc",
          marginInline: "20px",
          marginTop: "20px",
          justifyContent: "center",
          backgroundColor: "beige",
          textAlign: "",
        }}
      >
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {user.username}
          </Card.Subtitle>
          <Card.Text>{user.email}</Card.Text>
          <Card.Text>{user.address.street}</Card.Text>
          <Card.Text>{user.address.suite}</Card.Text>
          <Card.Text>{user.address.city}</Card.Text>
          <Card.Text>{user.address.zipcode}</Card.Text>
          <Card.Text>{user.address.geo.lat}</Card.Text>
          <Card.Text>{user.address.geo.lng}</Card.Text>
          <Card.Text>{user.phone}</Card.Text>
          <Card.Text>{user.website}</Card.Text>
          <Card.Text>{user.company.name}</Card.Text>
          <Card.Text>{user.company.catchPhrase}</Card.Text>
          <Card.Text>{user.company.bs}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ListItems;
