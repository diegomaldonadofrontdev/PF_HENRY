// React and Hooks
import React, { useEffect, useState } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// React Router
import { Link, useParams } from "react-router-dom";

// Actions
import {
  getTrades,
  filterCategoryCommerce,
  getAllProducts,
} from "../../redux/actions/index";

// Components
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Cart from "../Cart/Cart";
import ProductoCard from "../../components/ProductoCard/ProductoCard";
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

// Styles
import styles from "./CommerceDetail.module.css";

export default function CommerceDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const products = useSelector((state) => state.products);
  const commerceRedux = useSelector((state) => state.allCommerces);
  const productsFilter = useSelector((state) => state.productsFilter);

  const [commerce, setCommerce] = useState({});
  const [category, setCategory] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts(id));
    dispatch(getTrades());
  }, [dispatch]);

  useEffect(() => {
    if (commerceRedux && commerceRedux.length) {
      setCommerce(commerceRedux.find((x) => x._id === id));
    }
  }, [commerceRedux]);

  useEffect(() => {
    if (products && products.length) {
      let variable = products.map((x) => x.category);
      variable = new Set(variable);
      setCategory([...variable]);
    }
  }, [products]);

  function handlerCategoryCommerce(category) {
    dispatch(filterCategoryCommerce(category));
  }

  return (
    <div className={styles.comercio_detail}>
      <Header />
      <div className={styles.comercio__header}>
        <div className={styles.container}>
          <h2>{commerce?.commerceName}</h2>
          <div className={styles.rating}>
            <p>
              {" "}
              Rating: {commerce?.rating} <i class="bx bxs-star"></i>
            </p>
          </div>
          <Link to="/search" className={styles.btn__volver}>
            <ButtonPrimary texto="Volver" />
          </Link>
        </div>
      </div>
      <div className={styles.container}>
        <SearchBar />
        <div className={styles.subcategorias}>
          <h3>Categorias:</h3>
          <ul>
            <li
              onClick={() => {
                handlerCategoryCommerce("todas");
              }}
            >
              Todas
            </li>
            {category.map((x) => (
              <li
                key={x}
                onClick={() => {
                  handlerCategoryCommerce(x);
                }}
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.results}>
          <div className={styles.productCard__container}>
            {productsFilter.length
              ? productsFilter?.map((x) => (
                  <ProductoCard
                    idCommerce={id}
                    idProduct={x._id}
                    key={x._id}
                    name={x.name}
                    price={x.price}
                    description={x.description}
                    img={x.image}
                  />
                ))
              : products?.map((x) => (
                  <ProductoCard
                    idCommerce={id}
                    idProduct={x._id}
                    key={x._id}
                    name={x.name}
                    price={x.price}
                    description={x.description}
                    img={x.image}
                  />
                ))}
          </div>
          <Cart id={id} />
        </div>
      </div>
    </div>
  );
}
