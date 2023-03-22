// React Redux
import React, { useEffect } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// React Router
import { Link } from "react-router-dom";

// Actions
import { getTrades } from "../../redux/actions/index";
import setCurrentPageTrades from "../../redux/actions/setCurrentPageTrades";

// Components
import ComercioCard from "../../components/ComercioCard/ComercioCard";

// Styles
import styles from "./ContainerSearchComercio.module.css";

export default function ContainerSearchComercio() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrades());
  }, [dispatch]);

  const comercios = useSelector((state) => state.allCommerces);
  const { city, category, subcategory, epagos } = useSelector(
    (state) => state.filters
  );

  useEffect(() => {
    dispatch(setCurrentPageTrades(1));
  }, [comercios, dispatch]);

  // PAGINADO
  const currentPage = useSelector((state) => state.currentPageTrades);
  const tradesPerPage = 8;
  const totalTrades = comercios.length;
  const totalPages = Math.ceil(totalTrades / tradesPerPage);
  const startIndex = (currentPage - 1) * tradesPerPage;
  const endIndex = startIndex + tradesPerPage;
  const comerciosParaMostrar = comercios.slice(startIndex, endIndex);
  const selectPage = [];

  for (let i = 0; i < totalPages; i++) {
    selectPage.push(i);
  }

  // console.log(selectPage);

  if (
    (!city || city === "default") &&
    (!category || category === "default") &&
    (!subcategory || subcategory === "default") &&
    (!epagos || epagos === "default") &&
    !comercios.length
  ) {
    return (
      <div className={styles.container__search}>
        {" "}
        <p>{comercios.length} Comercios encontrados</p>
        <h3>NO HAY COMERCIOS CARGADOS</h3>
      </div>
    );
  } else if (
    (city ||
      city !== "default" ||
      category ||
      category !== "default" ||
      subcategory ||
      subcategory !== "default" ||
      epagos ||
      epagos !== "default") &&
    comercios.length
  ) {
    return (
      <div className={styles.container__search}>
        <p>{comercios.length} Comercios encontrados</p>
        <div>
          {comerciosParaMostrar?.map((x) => (
            <Link to={`../comercio/${x._id}`} className={styles.commerce}>
              <ComercioCard
                name={x.commerceName}
                rating={x.rating}
                epagos={x.epagos}
                img={x.image}
                descripcion={x.description}
              />
            </Link>
          ))}
        </div>
        <div style={{ width: "250px" }} className={styles.paginado}>
          {selectPage.map((page) => (
            <button
              onClick={() => dispatch(setCurrentPageTrades(page + 1))}
              style={{ width: "20px" }}
            >
              {page + 1}
            </button>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container__search}>
        <p>{comercios.length} Comercios encontrados</p>
        <h3>NO HAY COMERCIOS QUE COINCIDAN CON LA BUSQUEDA</h3>
      </div>
    );
  }
}
