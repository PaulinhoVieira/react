import { useState } from "react"

type ButProps = {
  text?: string;
}

export function Button(props: ButProps) {
  const [conter, setConter] = useState(0);
  function incremente() {
    setConter(conter + 1);
  }
  return (
    <button onClick={incremente} >
      {props.text || conter}
    </button>

  )
}
