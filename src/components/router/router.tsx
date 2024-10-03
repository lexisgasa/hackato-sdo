import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import App from "../App/App";
import SocialActivitiesPage from "../../activities/pages/SocialActivitiesPage/SocialActivitiesPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/social" />} />
      <Route path="social" element={<SocialActivitiesPage />} />
    </Route>
  )
);

export default router;
