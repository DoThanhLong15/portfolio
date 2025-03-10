import React from "react";

import MainRoute from "routes/index";
import { TitleProvider } from "contexts/PageTitleContext";

const App = () => {

  return (
    <div className="App">
      <TitleProvider>
        <MainRoute />
      </TitleProvider>
    </div>
  );
};

export default App;
