import DashboardWrapper from "./components/DashboardWrapper";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Destination from "./pages/Destination";
import Activities from "./pages/Activities";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Activity from "./pages/Activity";
import Account from "./pages/Account";
import CreateDestination from "./pages/CreateDestination";
import UpdateDestination from "./pages/UpdateDestination";
import CreateAcivity from "./pages/CreateActivity";
import UpdateActivity from "./pages/UpdateActivity";
import Overview from "./pages/Overview";
import Users from "./pages/Users";

const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("token") ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" />
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/overview"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Overview />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Activities />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/activities"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Activities />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/destinations"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Destinations />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/destinations/:id"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Destination />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />
        <Route
          path="/destinations/create"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <CreateDestination />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route
          path="/destinations/:id"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Destination />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route
          path="/destinations/:id/update"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <UpdateDestination />
              </DashboardWrapper>
            </ProtectedRoute>
          }
          f
        />
        <Route
          path="/activities/:id"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Activity />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route
          path="/activities/create"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <CreateAcivity />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route
          path="/activities/:id/update"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <UpdateActivity />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route
          path="/account"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Account />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <DashboardWrapper>
                <Users />
              </DashboardWrapper>
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
