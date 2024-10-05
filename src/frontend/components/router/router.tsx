import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../App/App";
import ActivitiesPage from "../../activities/pages/ActivitiesPage/ActivitiesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/activities/social" />} />
      <Route path="activities/:category" element={<ActivitiesPage />} />
    </Route>
  )
);

export default router;
