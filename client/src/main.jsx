import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./pages/HomePage/Index.jsx";
import AdminPage from "./admin/index.jsx";
import FacultyPageWebsite from "./pages/FacultyPage/Index.jsx";
import AboutUsFrontEnd from "./pages/AboutUsPage/Index.jsx";
import ContactUSFrontEnd from "./pages/ContactUsPage/Index.jsx";
import StudentPortal from "./StudentPortal/StudentPorta.jsx";
import SignUp from "./pages/signup/SignUp.jsx";
import Login from "./pages/Login/Login.jsx";
import MaintancePage from "./pages/MaintancePage/Index.jsx";
import NotFoundPage from "./pages/404Page/Index.jsx";
import AcademicPage from "./pages/AcademicsPage/Index.jsx";
import ScholorshipsPage from "./pages/ScholorShipsPage/Index.jsx";
import UniversityLife from "./pages/UniversityLifePage/Index.jsx";
import EventCelanderFrontEnd from "./pages/EnventCelander/Index.jsx";
import CommingSoonFrontendPage from "./pages/CommingSoonPage/Index.jsx";
import PriceTableFrontEndPage from "./pages/PriceTable/Index.jsx";
import { SidebarProvider } from "./context/sidebarContext.jsx";
import TeacherPage from "./admin/teacher/TeacherPage.jsx";
import Mails from "./admin/Mails/Mails.jsx";
import Blog from "./admin/blog/Blog.jsx";
import EventsPage from "./admin/EventsPage/EventsPage.jsx";
import ReportsAdmin from "./admin/Reports/ReportsAdmin.jsx";
import PortfolioPage from "./admin/PortfolioPage/PortfolioPage.jsx";
import Vouchers from "./admin/Vouchers/Vouchers.jsx";
import Account from "./admin/Account/Account.jsx";
import DepartmentForm from "./admin/Departments/Department.jsx";
import CoursePage from "./admin/CoursePage/CoursePage.jsx";
import Settings from "./admin/Settings/Settings.jsx";
import OurCourses from "./pages/CoursesPage/Index.jsx";
import OurEthleticPage from "./pages/AthleticsPage/Index.jsx";
import AdmissionPageFronend from "./pages/AdmissionsPage/Index.jsx";
import MyBlogs from "./pages/MyBlogs/MyBlogs.jsx";
import SingleBlogPage from "./pages/SingleBlogPage/SingleBlogPage.jsx";

const adminRoutes = [
  {
    path: "/admin/dashboard",
    element: <AdminPage />,
  },
  {
    path: "/admin/teachers",
    element: <TeacherPage />,
  },
  {
    path: "/admin/mails",
    element: <Mails />,
  },
  {
    path: "/admin/blogs",
    element: <Blog />,
  },
  {
    path: "/admin/events",
    element: <EventsPage />,
  },
  {
    path: "/admin/reports",
    element: <ReportsAdmin />,
  },
  {
    path: "/admin/portfolio",
    element: <PortfolioPage />,
  },
  {
    path: "/admin/vouchers",
    element: <Vouchers />,
  },
  {
    path: "/admin/account",
    element: <Account />,
  },
  {
    path: "/admin/departments",
    element: <DepartmentForm />,
  },
  {
    path: "/admin/courses",
    element: <CoursePage />,
  },
  {
    path: "/admin/settings",
    element: <Settings />,
  },
  // Add more admin routes as needed
];

const websiteRoutes = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/contact",
    element: <ContactUSFrontEnd />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/maintance",
    element: <MaintancePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/academic",
    element: <AcademicPage />,
  },
  {
    path: "/scholorships",
    element: <ScholorshipsPage />,
  },
  {
    path: "/faculty",
    element: <FacultyPageWebsite />,
  },
  {
    path: "/universitylife",
    element: <UniversityLife />,
  },
  {
    path: "/eventcalender",
    element: <EventCelanderFrontEnd />,
  },
  {
    path: "/commingsoon",
    element: <CommingSoonFrontendPage />,
  },
  {
    path: "/pricetable",
    element: <PriceTableFrontEndPage />,
  },
  {
    path: "/ourcourses",
    element: <OurCourses />,
  },
  {
    path: "/ethletic",
    element: <OurEthleticPage />,
  },
  {
    path: "/admissions",
    element: <AdmissionPageFronend />,
  },
  {
    path: "/about",
    element: <AboutUsFrontEnd />,
  },
  {
    path: "/ourblogs",
    element: <MyBlogs />,
  },
  {
    path: "/ourblogs/:id",
    element: <SingleBlogPage />,
  },

  // Add more website routes as needed
];

const applyRoutes = [
  {
    path: "/apply",
    element: <StudentPortal />,
  },
  // Add more apply portal routes as needed
];

const allRoutes = [...adminRoutes, ...websiteRoutes, ...applyRoutes];

const router = createBrowserRouter(allRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SidebarProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </SidebarProvider>
  </React.StrictMode>
);
