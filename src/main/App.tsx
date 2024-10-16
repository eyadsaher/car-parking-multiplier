import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exit from "../app/pages/exit";
import Welcome from "../app/pages/welcome";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Welcome />
            </>
          }
        />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  );
}

export default App;
