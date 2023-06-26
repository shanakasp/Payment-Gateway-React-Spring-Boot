import "./App.css";
import { Route, Routes } from "react-router-dom";

import Payment from "./Payment/Payment";

import { useState } from "react";

function App() {
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Payment />} />
      </Routes>
    </div>
  );
}

export default App;
