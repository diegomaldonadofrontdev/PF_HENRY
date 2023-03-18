// React Redux
import React, { useEffect } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// React Router
import { Link } from "react-router-dom";

// Actions
import { getTrades } from "../../redux/actions/index";

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
          {comercios?.map((x) => (
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
