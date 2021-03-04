<<<<<<< HEAD
import React, { Component } from "react";
import QuoteForm from "./components/QuoteForm";
import Quotes from "./containers/Quotes";
=======
import React, { Component } from 'react';
import QuoteForm from "./components/QuoteForm"
import Quotes from "./containers/Quotes"
>>>>>>> 02a4a66b7479ddef77875d6c473eaf34213a421e

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div
          className="row title justify-content-center"
          style={{ paddingTop: "12px" }}
        >
          <h1>Quote Maker</h1>
        </div>
        <hr />

<<<<<<< HEAD
        <QuoteForm />
        <Quotes />
=======
        <QuoteForm/>
        <Quotes/>

>>>>>>> 02a4a66b7479ddef77875d6c473eaf34213a421e
      </div>
    );
  }
}

export default App;
