import { FC, useEffect, useRef, useState } from "react";
import { useProductActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import "./AddProduct.scss";

const AddProduct: FC = () => {
  const navigate = useNavigate();
  const { addProduct, getProduct } = useProductActions();
  let inputEl = useRef<any>(null);

  const [values, setValues] = useState<any>({
    type: "",
    title: "",
    price: "",
    photo: "",
    id: Date.now(),
  });

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    for (let key in values) {
      if (!values[key]) {
        alert("Заполните поля");
        return;
      }
    }
    addProduct(values);
    getProduct();
    setValues({ title: "", price: 0, type: "", photo: "" });
    navigate("/shop");
  };
  return (
    <section className="contact">
      <div className="row">
        <form action="" onSubmit={handleSubmit}>
          <h3 onClick={onButtonClick}>Add</h3>
          <div className="inputBox">
            <input
              style={{
                width: "300px",
                border: "solid 0.7px grey",
                borderRadius: "5px",
                color: "black",
              }}
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              type="text"
              placeholder="title"
              className="box"
              ref={inputEl}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="price"
              variant="outlined"
              value={values.price}
              type="number"
              onChange={(e) => setValues({ ...values, price: +e.target.value })}
            />
          </div>
          <div className="inputBox">
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="type"
              variant="outlined"
              value={values.type}
              type="text"
              onChange={(e) => setValues({ ...values, type: e.target.value })}
            />
            <TextField
              sx={{ width: 300 }}
              id="outlined-basic"
              label="image"
              variant="outlined"
              value={values.photo}
              type="text"
              onChange={(e) => setValues({ ...values, photo: e.target.value })}
            />
          </div>
          <input type="submit" value="Add Product" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
