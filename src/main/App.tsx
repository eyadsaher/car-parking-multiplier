import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CarInfo from "../app/pages/carInfo";
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
              <CarInfo />
            </>
          }
        />
        <Route path="/exit" element={<Exit />} />
      </Routes>
    </Router>
  );
}

export default App;
