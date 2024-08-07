import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import SnackOrBoozeApi from "./Api";

function AddItemForm() {
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    recipe: "",
    serve: "",
    type: "snacks"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await SnackOrBoozeApi.addItem({
        ...formData,
        id: formData.name.toLowerCase().replace(/ /g, "-")
      }, formData.type);
      history.push(`/${formData.type}`);
    } catch (err) {
      console.error("Error adding item:", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Serve"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <select
            className="form-control"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="snacks">Snack</option>
            <option value="drinks">Drink</option>
          </select>
        </div>
        <button className="btn btn-primary" type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default AddItemForm;