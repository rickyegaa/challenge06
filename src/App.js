import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import SearchedMovie from "./pages/SearchedMovie";
import All from "./pages/AllMovies";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import NavigationBar from "./components/NavigationBar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Protected from "./components/Protected";
import NoTokenAccess from "./components/NoTokenAccess";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll({ top: 0 });
  }, [location.pathname]);
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId="790220454902-8sh7st63u3v387vvlp130et8k6051tkt.apps.googleusercontent.com">
        <div>
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/All" element={<All />} />
            <Route path="/Search/:name" element={<SearchedMovie />} />
            <Route
              path="/Register"
              element={
                <NoTokenAccess>
                  <Register />
                </NoTokenAccess>
              }
            />
            <Route path="/" element={<Home />} />
            <Route
              path="/Login"
              element={
                <NoTokenAccess>
                  <Login />
                </NoTokenAccess>
              }
            />
            <Route
              path="/detail/:id"
              element={
                <Protected>
                  <Detail />
                </Protected>
              }
            />
          </Routes>
          <ToastContainer theme="colored" />
        </div>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
