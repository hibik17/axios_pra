import axios from "axios";
import React, { useState } from "react";
import "./App.css";

type todoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

function App() {
  const [todos, setTodos] = useState<any>();
  const dataFetch = () => {
    axios
      .get<any>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        console.log("↓responseとして受け取るデータ");
        console.log(res);
        setTodos(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("↓stateの中身の表示");
        console.log(todos);
        console.log("データ取得の終了");
      });
  };
  return (
    <div className="App">
      <button onClick={dataFetch}>データを取得</button>
    </div>
  );
}

export default App;
