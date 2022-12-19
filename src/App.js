import StyleProvider from "./styles";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import MainPage from "./pages/Main/main";
import SignupPage from "./pages/Signup/signup";
import LoginPage from "./pages/Login/login";
import CommunityPage from './pages/Community/notice';

export default function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/user/signup" element={<SignupPage />}></Route>
          <Route path="/user/login" element={<LoginPage />}></Route>
          <Route path="/notice" element={<CommunityPage />}></Route>
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  );
}
