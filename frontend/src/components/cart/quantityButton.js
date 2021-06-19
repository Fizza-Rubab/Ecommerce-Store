import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

export default function QuantityButton({ quantity }) {
  const [count, setCount] = useState(quantity);

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      <Button onClick={() => setCount(count + 1)}>+</Button>
      <Button disabled>{count}</Button>
      <Button onClick={() => setCount(count - 1)}>-</Button>
    </ButtonGroup>
  );
}
// }
