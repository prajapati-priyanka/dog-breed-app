import "./App.css";
import { BreedListing, BreedDetails, Home,NotFound } from "./pages";
import { Login, Register } from "./components";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { RequiresAuth } from "./Router/RequiresAuth";

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/breedlisting"
            element={<RequiresAuth children={<BreedListing />}></RequiresAuth>}
          />

          <Route
            path="/breeddetails/:breed/:subBreed"
            element={<RequiresAuth children={<BreedDetails />}></RequiresAuth>}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        theme={"colored"}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="toaster-container"
      />
    </>
  );
}

export default App;
