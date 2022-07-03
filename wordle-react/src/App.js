import React, { useState, useEffect } from "react";
import axios from "axios";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Navbar from "./components/navbar/Navbar";

import "./style.scss";

const App = () => {
  const [board, setBoard] = useState({});
  const [rowIndex, setRowIndex] = useState(1);
  const [columnIndex, setColumnIndex] = useState(1);
  const [loader, setLoader] = useState(true);
  const randomIndex = Math.floor(Math.random() * (5 - 1)) + 1;
  const [randomWord, setRandomWord] = useState({});

  const createBoard = () => {
    const column = {
      1: { id: 1, value: "" },
      2: { id: 2, value: "" },
      3: { id: 3, value: "" },
      4: { id: 4, value: "" },
      5: { id: 5, value: "" },
    }
    const row = {
      1: column,
      2: column,
      3: column,
      4: column,
      5: column,
      6: column
    }

    setBoard(row);
  };

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch('https://611e5c5d9771bf001785c3af.mockapi.io/test/1');
  //     const responseJson = await response.json();
  //     console.log(responseJson);
  //     createBoard();
  //   } catch {

  //   } finally {
  //     setLoader(false);
  //   }
  // }

  const fetchDataAxios = async () => {
    try {
      const response = await axios.get(`https://611e5c5d9771bf001785c3af.mockapi.io/test/${randomIndex}`);
      setRandomWord(response.data);
      createBoard();
    } catch {
      console.log("error from api")
    } finally {
      setLoader(false);
    }
  }

  useEffect(() => {
    // fetch('https://611e5c5d9771bf001785c3af.mockapi.io/test/1').then((response) => {
    //   response.json().then((res) => { console.log(res) });
    // }).catch(err => { console.log(err) }).finally(() => { setLoader(false) })
    fetchDataAxios();
  }, []);

  return (
    <div className="container">
      {loader ? <div>loader</div> : <>
        <Navbar />
        <Board board={board} />
        <Keyboard
          rowIndex={rowIndex}
          setRowIndex={setRowIndex}
          columnIndex={columnIndex}
          setColumnIndex={setColumnIndex}
          board={board}
          setBoard={setBoard}
        />
      </>}
    </div>
  );
};

export default App;
//rsc
// fetch()
// json()
// then()
// async await
// sync vs async
// axios
// object.entries
// object.fromentries
