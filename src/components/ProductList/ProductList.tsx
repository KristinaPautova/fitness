import React, { FC, useEffect, useMemo, useState } from "react";
import { useProductActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelectore";
import "./ProductList.scss";
import ProductCart from "../ProductCart/ProductCart";
import ReactPaginate from "react-paginate";

interface SelectedProps {
  selected: any;
}

const ProductList = () => {
  const { error, products, loading } = useTypedSelector(
    (state) => state.product
  );
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [colored, setColored] = useState<boolean>(false);

  const style = useMemo(
    () => ({
      color: colored ? "#8EA5A0" : "#FFF",
    }),
    [colored]
  );

  let limitPage = 3;
  let pageVisit = limitPage * currentPage;
  let countPage = Math.ceil(products.length / limitPage);

  const changePage = ({ selected }: SelectedProps) => {
    setCurrentPage(selected);
  };

  const { getProduct } = useProductActions();

  useEffect(() => {
    getProduct();
  }, []);

  if (error) {
    return <h1>{error}card</h1>;
  }
  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div className="bac__component">
      <div className="product__list">
        <h1 onClick={() => setColored((prev) => !prev)} style={style}>
          Free home workouts and fitness plans
        </h1>
        <p>
          I’ve created these premium fitness classes for everyone starting from
          beginner to advanced level with an in depth FAQ.
        </p>
        <div className="product__box">
          {products.slice(pageVisit, pageVisit + limitPage).map((item) => (
            <ProductCart item={item} key={item.id} />
          ))}
        </div>
      </div>
      <ReactPaginate
        previousLabel="Prev"
        nextLabel="Next"
        onPageChange={changePage}
        pageCount={countPage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};

export default ProductList;
