import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import RegistrationPage from "../../pages/RegistrationPage";
import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
import Play from "../../pages/Play";
import ProtectedRoute from "./ProtectedRoute";
// import StaticPage from "../../pages/StaticPage";
import NotFoundPage from "../../pages/NotFoundPage";
import PaymentsPage from "../../pages/Payments";
// import contentContext from "../../context/content/contentContext";
import TournamentPage from "../../pages/TournamentPage";
import LobbyPage from "../../pages/LobbyPage";
import AdminTournaments from "../../pages/admin/tournaments";

const Routes = () => {
  // const { staticPages } = useContext(contentContext);

  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/register" component={RegistrationPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/payments" component={PaymentsPage} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/tournament" component={TournamentPage} />
      <Route path="/lobby" component={LobbyPage} />
      <Route path="/admin/tournaments" component={AdminTournaments} />
      {/* {staticPages &&
        staticPages.map((page) => (
          <Route
            key={page.slug}
            path={`/${page.slug}`}
            component={() => (
              <StaticPage title={page.title} content={page.content} />
            )}
          />
        ))} */}
      <ProtectedRoute path="/play" component={Play} />
      <Route component={NotFoundPage} />
    </Switch>
  );
};

export default Routes;
