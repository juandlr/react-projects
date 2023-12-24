import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPLayerName, setEnteredPlayerName] = useState('');

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
      <section id="player">
        <h2>Welcome {enteredPLayerName ? enteredPLayerName : 'unknown entity'}</h2>
        <p>
          <input ref={playerName} type="text" />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
  );
}