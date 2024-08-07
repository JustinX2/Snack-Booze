import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

function NotFound() {
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">404: Page Not Found</h3>
          </CardTitle>
          <CardText>
            The page you're looking for doesn't exist.
          </CardText>
          <Link to="/">
            <Button color="primary">Go Home</Button>
          </Link>
        </CardBody>
      </Card>
    </section>
  );
}

export default NotFound;