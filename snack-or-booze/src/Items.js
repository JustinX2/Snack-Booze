import React from "react";
import { Redirect, useParams } from "react-router-dom";

function Item({ items, cantFind }) {
  const { id } = useParams();

  let item = items.find(item => item.id === id);
  if (!item) return <Redirect to={cantFind} />;

  return (
    <section className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title font-weight-bold text-center">
            {item.name}
          </h5>
          <p className="card-text font-italic">{item.description}</p>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Item;