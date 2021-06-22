import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { useHistory } from "react-router-dom";
import axios from "axios";
export default function QuantityButton({ item, order }) {
  // console.log(item.id);
  // console.log(order);
  const [count, setCount] = useState(item.order_item.quantity);
  // console.log(count);
  const history = useHistory();
  const token = window.localStorage.getItem("E_Token");
  const id = `${JSON.parse(atob(token.split(".")[1])).user_id}`;
  useEffect(() => {
    if (!token) history.push("/login");
    //eslint-disable-next-line
  }, []);

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button
        onClick={() => {
          setCount(count + 1);
          axios({
            method: "put", //you can set what request you want to be
            url: `http://localhost:5000/api/cart/update`,
            data: {
              item_id: item.id,
              order_id: order,
              quantity: count,
            },
            headers: {
              authorization: token,
            },
          })
            .then((res) => {
              console.log(item.order_item.quantity);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        +
      </Button>
      <Button disabled>{count}</Button>
      <Button
        onClick={() => {
          setCount(count - 1);
          axios({
            method: "put", //you can set what request you want to be
            url: `http://localhost:5000/api/cart/update`,
            data: {
              item_id: item.id,
              order_id: order,
              quantity: count,
            },
            headers: {
              authorization: token,
            },
          })
            .then((res) => {})
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        -
      </Button>
    </ButtonGroup>
  );
}
// }
