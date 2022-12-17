import StyleProvider from './styles';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import MainPage from './pages/Main/main';
import SignupPage from './pages/Signup/signup';

export default function App() {
  return (
    <StyleProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/user/signup" element={<SignupPage />}></Route>
        </Routes>
      </BrowserRouter>
    </StyleProvider>
  )
}