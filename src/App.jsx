import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import IndexRoute from "./routes/IndexRoute";
import store from "./redux/store/store";
import { ConfigProvider } from "antd";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Provider store={store}>
          <ConfigProvider
            theme={{
              token: {
                // Seed Token
                colorPrimary: "#ffc107",
                borderRadius: 2,

                // Alias Token
                // colorBgContainer: "#f6ffed",
              },
            }}>
            <IndexRoute />
          </ConfigProvider>
        </Provider>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;
