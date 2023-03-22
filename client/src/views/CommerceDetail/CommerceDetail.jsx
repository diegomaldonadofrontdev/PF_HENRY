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
import setCurrentPageProducts from "../../redux/actions/setCurrentPageProducts";

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

  // PAGINADO
  const currentPage = useSelector((state) => state.currentPageProducts);
  const productsPerPage = 2;
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = products.slice(startIndex, endIndex);
  let productsFilterToShow = [];
  let totalPagesFilter = 0;
  if (productsFilter) {
    const totalProductsFilter = productsFilter.length;
    totalPagesFilter = Math.ceil(totalProductsFilter / productsPerPage);
    productsFilterToShow = [...productsFilter.slice(startIndex, endIndex)];
  }

  const [commerce, setCommerce] = useState({});
  const [category, setCategory] = useState([]);
  const [focus, setFocus] = useState("");

  function onFocus(catregoria) {
    setFocus(catregoria);
  }

  useEffect(() => {
    dispatch(getAllProducts(id));
    dispatch(getTrades());
    dispatch(setCurrentPageProducts(1));
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
    dispatch(setCurrentPageProducts(1));
  }

  const prevHandler = (e) => {
    if (endIndex === productsPerPage) return;
    dispatch(setCurrentPageProducts(currentPage - 1));
  };

  const nextHandler = (e) => {
    if (totalPagesFilter) {
      if (currentPage >= totalPagesFilter) return;
    } else if (currentPage >= totalPages) return;
    dispatch(setCurrentPageProducts(currentPage + 1));
  };

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
          <div></div>
          <h3>Categorias:</h3>
          <ul>
            <li
              onClick={() => {
                handlerCategoryCommerce("todas");
                onFocus("todas");
              }}
              className={focus === "todas" ? styles.active : null}
            >
              Todas
            </li>
            {category.map((x) => (
              <li
                key={x}
                onClick={() => {
                  handlerCategoryCommerce(x);
                  onFocus(x);
                }}
                className={focus === `${x}` ? styles.active : null}
              >
                {x}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.paginado}>
          {totalPagesFilter ? (
            <h4>
              Pagina {currentPage} de {totalPagesFilter}
            </h4>
          ) : (
            <h4>
              Pagina {currentPage} de {totalPages}
            </h4>
          )}
          <button onClick={prevHandler}>←</button>
          <button onClick={nextHandler}>→</button>
        </div>
        <div className={styles.results}>
          <div className={styles.productCard__container}>
            {productsFilter.length
              ? productsFilterToShow?.map((x) => (
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
              : productsToShow?.map((x) => (
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
          <Cart id={id} stateEpagos={commerce.epagos} />
        </div>
      </div>
    </div>
  );
}
