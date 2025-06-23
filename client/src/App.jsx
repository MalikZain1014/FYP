import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Chatbot from "./components/Chatbot/Chatbot";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Outlet />
      <Chatbot />
    </>
  );
}

export default App;
