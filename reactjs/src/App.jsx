import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { createRoot } from "react-dom/client"; //1. createRoot to link this component to index.html
import SearchParams from "./Components/SearchParams";
import Details from "./Components/Details";
import Header from "./Components/Header";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root"); //2. this is a DOM manipulation for index.html
const root = createRoot(container);
root.render(<App />);
