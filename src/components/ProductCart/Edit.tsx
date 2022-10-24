import { FC, useEffect, useMemo, useState } from "react";
//import { v4 as uuidv4 } from "uuid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelectore";
import { getOneProduct, saveProduct } from "../../store/action/product";

type ParamsId = {
  id: string;
};
const EditProduct: FC = () => {
  const navigate = useNavigate();
  const { product } = useTypedSelector((state) => state.product);
  const { getOneProduct, saveProduct } = useProductActions();
  const { id } = useParams<ParamsId>();

  const [values, setValues] = useState<any>({
    title: "",
    price: 0,
    type: "",
    photo: "",
  });

  useEffect(() => {
    console.log(typeof id);
    getOneProduct(id);
  }, [id]);

  useEffect(() => {
    if (product) {
      setValues(product);
    }
  }, [product]);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    for (let key in values) {
      if (!values[key]) {
        alert("Заполните поля");
        return;
      }
    }
    console.log(id);
    saveProduct(id, values);
    setValues({ title: "", price: 0, type: "", photo: "" });
    navigate("/shop");
  };
  return (
    <>
      {product ? (
        <section className="contact" style={{ marginTop: "30px" }}>
          <div className="row">
            <form action="" onSubmit={handleSubmit}>
              <h3>Edit</h3>
              <div className="inputBox">
                <input
                  value={values.title}
                  onChange={(e) =>
                    setValues({ ...values, title: e.target.value })
                  }
                  type="text"
                  placeholder="введите title"
                  className="box"
                />
                <input
                  value={values.price}
                  onChange={(e) =>
                    setValues({ ...values, price: +e.target.value })
                  }
                  type="number"
                  placeholder="введите price"
                  className="box"
                />
              </div>
              <div className="inputBox">
                <input
                  value={values.type}
                  onChange={(e) =>
                    setValues({ ...values, type: e.target.value })
                  }
                  type="text"
                  placeholder="введите type"
                  className="box"
                />

                <input
                  value={values.photo}
                  onChange={(e) =>
                    setValues({ ...values, photo: e.target.value })
                  }
                  type="text"
                  placeholder="введите image"
                  className="box"
                />
              </div>
              <input type="submit" value="Save Product" className="btn" />
            </form>
          </div>
        </section>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default EditProduct;
