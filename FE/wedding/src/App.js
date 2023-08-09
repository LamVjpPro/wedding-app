import React from "react";
import "../../wedding/src/views/css/App.css";

function App() {
  return (
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name='recfile' placeholder="Select file"/>
      <br/>
      <button>Upload</button>
    </form>

  );
}

export default App;
