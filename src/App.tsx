import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookList from "./BookList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
