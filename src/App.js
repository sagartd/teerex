import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./globalStyle";
import Footer from "./components/footer";
import { ThemeProvider } from "styled-components";
import Home from "./home";
import Erro from "./erro";
import Products from "./products";
import Cart from "./cart";

const App = () => {
  const customTheme = {
    colors: {
      text: "black",
    },
  };

  return (
    <ThemeProvider theme={customTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Erro />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
