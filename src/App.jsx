import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import IndexRoute from "./routes/IndexRoute";
import store from "./redux/store/store";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <IndexRoute />
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
