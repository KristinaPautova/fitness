import React, { FC } from "react";
import "./ProductCart.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useProductActions } from "../../hooks/useActions";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { IProduct } from "../../types/intProduct";

interface CartProps {
  item: any;
}

const ProductCart: FC<CartProps> = ({ item }) => {
  const { deleteProduct } = useProductActions();
  return (
    <div className="product__cart">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            sx={{ height: 270 }}
            component="img"
            image={item.data().photo}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.data().title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <p className="product__text">Price: {item.data().price}$</p>
          <Button
            style={{ marginLeft: "10px" }}
            onClick={() => deleteProduct(item.id)}
            size="small"
            color="error"
          >
            <DeleteIcon />
          </Button>

          <Button style={{ marginLeft: "10px" }} size="small" color="error">
            <Link to={`/edit/${item.data().id} `}>Edit</Link>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductCart;
