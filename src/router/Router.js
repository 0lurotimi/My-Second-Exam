import { Routes, Route } from "react-router-dom";
import { Routes } from "react-router-dom";

import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";



export default function Router() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="counterOne" element={<CounterOne />} />
        <Route path="counterTwo" element={<CounterTwo />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}
