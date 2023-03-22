// React and Hooks
import React, { useEffect, useState } from "react";

// React Redux
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Actions
import { postPayment } from "../../redux/actions/index";
import postOrder from "../../redux/actions/postOrder";
import createCarritos from "../../redux/actions/createCarritos";

// Components
import CardCart from "../../components/CardCart/CardCart";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";

// Styles
import styles from "./Cart.module.css";
import useUser from "../../Hooks/useUser";
import { useLocation, useNavigate } from "react-router-dom";

export default function Cart({ id, stateEpagos }) {
  const { isLogged, loginFromCart } = useUser();
  const navigate = useNavigate();
  const location = useLocation().pathname;

  const carritos = useSelector((state) => state.carritos);
  const sandbox = useSelector((state) => state.mercadoPago.sandbox);
  const idClient = useSelector((state) => state.currentClient._id);
  const [carrito, setCarrito] = useState({});

  const [epagos, setEpagos] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (carritos[id]) {
      setCarrito({ ...carritos[id] });
    }

    if (Object.entries(carritos).length !== 0) {
      window.localStorage.setItem("carritos", JSON.stringify(carritos));
    }
  }, [carritos]);

  const idUser = window.localStorage.getItem("idUser");

  useEffect(() => {
    const carritoStorage = window.localStorage.getItem("carritos");

    if (carritoStorage) {
      const carritoParse = JSON.parse(carritoStorage);

      setCarrito({ ...carritoParse[id] });
      dispatch(createCarritos(carritoParse));
    }
  }, [id]);

  useEffect(() => {
    if (stateEpagos) {
      if (
        stateEpagos === "Efectivo/Tarjetas" ||
        stateEpagos === "Sólo efectivo"
      ) {
        setEpagos("efectivo");
      } else {
        setEpagos("tarjeta");
      }
    }
  }, [stateEpagos]);

  function handlerPostPayment(creditCard) {
    dispatch(postOrder(id, idClient, carrito));

    if (creditCard) {
      dispatch(postPayment(id, idClient, carrito));
    }
  }

  useEffect(() => {
    if (!idUser) {
      window.localStorage.setItem("hrefcompra", location);
      navigate("/login");
    } else if (sandbox) {
      window.location.replace(sandbox);
    }
  }, [idUser, location, navigate, sandbox]);

  function handlerRadioButton(e) {
    setEpagos(e.target.value);
  }

  return (
    <div className={styles.cart}>
      <div className={styles.cart__header}>
        <h3>Tu pedido</h3>
      </div>
      <ul>
        {carrito.data &&
          carrito.data.map((x) => {
            return (
              <CardCart
                idProduct={x.id}
                idCommerce={id}
                key={x.name}
                name={x.name}
                cantidad={x.cantidad}
                precio={x.price}
                image={x.img}
              />
            );
          })}
      </ul>
      <p className={styles.total__container}>
        Total: <span>${carrito?.total || 0}</span>
      </p>
      <div className={styles.footer__cart}>
        {
          <div>
            <select
              name=""
              id=""
              onChange={(e) => {
                handlerRadioButton(e);
              }}
            >
              {stateEpagos === "Efectivo/Tarjetas" ||
              stateEpagos === "Sólo efectivo" ? (
                <option value="efectivo" name="efectivo">
                  Efectivo
                </option>
              ) : null}
              {stateEpagos === "Efectivo/Tarjetas" ||
              stateEpagos === "Sólo tarjetas" ? (
                <option value="tarjeta" name="tarjeta">
                  Tarjeta
                </option>
              ) : null}
            </select>
          </div>
        }

        {epagos === "efectivo" ? (
          <Link to="/responsepaymentcash">
            <div
              className={styles.ButtonCTA2}
              onClick={() => {
                handlerPostPayment();
              }}
            >
             <i class="bx bx-money"></i> Efectivo
            </div>
          </Link>
        ) : (
          <div>
            <ButtonCTA
              fc={
                epagos === "efectivo"
                  ? () => {
                      handlerPostPayment();
                    }
                  : () => {
                      handlerPostPayment(true);
                    }
              }
              title={
                epagos === "efectivo"
                  ? "Pagar en Efectivo"
                  : "Pagar con Tarjeta"
              }
              background={stateEpagos === "efectivo" ? "blue" : "green"}
            />
          </div>
        )}
      </div>
    </div>
  );
}
