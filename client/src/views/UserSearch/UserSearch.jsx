// React and Hooks
import React from "react";

// Styles
import styles from "./UserSearch.module.css";

// Components
import Header from "../../components/Header/Header";
import Filter__SearchView from "../../components/Filter__SearchView/Filter__SearchView";
import ContainerSearchComercio from "../../components/ContainerSearchComercio/ContainerSearchComercio";

export default function UserSearch() {
  return (
    <>
      <Header />
      <div className={styles.banner}>
        <div className={styles.container}>
          <h2>Encontrá lo que buscás</h2>
        </div>
      </div>

      <div className={styles.search__container}>
        <div className={styles.filtros__container}>
          <Filter__SearchView />
        </div>

        <div className={styles.cards__container}>
          <div className={styles.search__results}>
            <ContainerSearchComercio />
          </div>
        </div>
      </div>
    </>
  );
}
