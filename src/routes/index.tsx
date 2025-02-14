import utilsRoutes from "./handleRouting";
import MobileNavbar from "../components/general/mobileNavbar/mobileNavbar";
import { Routes, Route, Navigate } from "react-router-dom";

function RoutesList() {
  return (
    <Routes>
      {utilsRoutes.urls.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={
            route.path === "/login" ? (
              <route.element />
            ) : (
              <>
                <MobileNavbar />
                <route.element />
              </>
            )
          }
        />
      ))}

      {/* Ruta para manejar páginas no encontradas */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default RoutesList;
