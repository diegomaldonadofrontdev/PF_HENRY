// React and Hooks
import React, { useState, useEffect } from "react";

// React Redux
import { useDispatch, useSelector } from "react-redux";

// React Router
import { Link, useParams } from "react-router-dom";

// Actions
import { postReview, getCLient } from "../../redux/actions/index";

// Libraries
import swal from "sweetalert"; //npm i sweetalert
import { FaStar } from "react-icons/fa";

// Components
import ButtonPrimary from "../../components/ButtonPrimary/ButtonPrimary";

// Styles
import styles from "./OpinionForm.module.css";

const colors = {
  orange: "#ffef5a",
  grey: "#a9a9a9",
};

export default function OpinionForm() {
  const dispatch = useDispatch();

  const stars = Array(5).fill(0);

  //Estados
  const loggedUser = useSelector((state) => state.currentClient);
  console.log(loggedUser);
  const userId = localStorage.idUser;
  console.log(userId);

  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [opinionInput, setOpinionInput] = useState("");
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    dispatch(getCLient());
  });

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nameInput || !opinionInput || !currentValue) {
      swal({
        title: "Review",
        text: "Por favor llena los campos para darnos tu opinión",
        icon: "error",
        button: "Ok",
      });
    } else {
      const dataPost = {
        name: nameInput,
        opinion: opinionInput,
        rating: currentValue,
        image:
          "https://cdn.pixabay.com/photo/2022/01/17/22/20/add-6945894_640.png",
      };
      dispatch(postReview(dataPost));
      setOpinionInput("");
      setNameInput("");
      swal({
        title: "Review",
        text: "Tu comentario fue enviado correctamente",
        icon: "success",
        button: "Ok",
      });
    }
  };

  const handleChangeOpinion = (e) => {
    e.preventDefault();
    setOpinionInput(e.target.value);
  };
  const handleChangeName = (e) => {
    e.preventDefault();
    setNameInput(e.target.value);
  };

  return (
    <div className={styles.opinion__form}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit} action="">
          <h3>Dejanos tu opinion</h3>
          <div className={styles.input__nombreLocal}>
            <label htmlFor="">Nombre</label>
            <input
              onChange={(e) => handleChangeName(e)}
              type="text"
              value={nameInput}
            />
          </div>
          <div className={styles.input__negocio}>
            <label htmlFor="">Opinion</label>
            <textarea
              onChange={(e) => handleChangeOpinion(e)}
              type="text"
              value={opinionInput}
            />
          </div>
          <div className={styles.estrellas}>
            <label htmlFor="" className={styles.label_rating}>
              Rating: {currentValue}/5
            </label>
            {stars.map((_, index) => {
              return (
                <FaStar
                  key={index}
                  size={24}
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                  }}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                />
              );
            })}
          </div>

          <button className={styles.form__button}>Enviar</button>
          <Link to="/">
            <ButtonPrimary texto="Volver" />
          </Link>
        </form>
      </div>
    </div>
  );
}
