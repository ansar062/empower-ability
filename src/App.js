import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import CoursesSec from "./Components/CoursesSec";
import JobsSec from "./Components/JobsSec";
import BlogsSec from "./Components/BlogsSec";
import ContactSec from "./Components/ContactSec";
import ContactPage from "./Pages/ContactPage/Contact";
import LoginPage from "./Pages/LoginPage/Login";
import Reg from "./Pages/Register/reg";
import JobsPage from "./Pages/JobsPage/Jobs";
import BlogsPage from "./Pages/BlogsPage/Blogs";
import CoursesPage from "./Pages/CoursesPage/Courses";
import SinglePost from "./Pages/BlogsPage/SinglePost";
import Write from "./Pages/SpecialDash/Write";
import CourseDetail from "./Pages/CoursesPage/CourseDetail";
import Tutor from "./Pages/ProfileSetup/tutor";
import Freelancer from "./Pages/ProfileSetup/freelancer";
import Theader from "./Pages/TutorDash/Theader";
import Tdashboard from "./Pages/TutorDash/tdashboard";
import Tcourses from "./Pages/TutorDash/tcourses";
import Tmonitoring from "./Pages/TutorDash/tmonitoring";
import Tprofile from "./Pages/TutorDash/tprofile";
import Edash from "./Pages/EmployerDash/Edash";
import Epostjobs from "./Pages/EmployerDash/Epostjobs";
import Einbox from "./Pages/EmployerDash/Einbox";
import EHeader from "./Pages/EmployerDash/Eheader";
import EFooter from "./Pages/EmployerDash/Efooter";
import Eapp from "./Pages/EmployerDash/Eapp";
import Sdashboard from "./Pages/SpecialDash/Sdashboard";
import Sjobs from "./Pages/SpecialDash/Sjobs";
import Scourses from "./Pages/SpecialDash/Scourses";
import Sblogs from "./Pages/SpecialDash/Sblogs";
import Sfeedback from "./Pages/SpecialDash/Sfeedback";
import Chat from "./Pages/ChatApp/Chat";
import EditProfile from "./Components/EditProfile";
import { useDispatch, useSelector } from "react-redux";
import PrivateRoute from "./Components/PrivateRoute";
import EditBlog from "./Pages/SpecialDash/EditBlog";
import EditJob from "./Pages/EmployerDash/EEditjobs";
import ApplyToJobs from "./Pages/ApplicationsPage/applytojob";
import axios from "axios";
import { signInSuccess, logoutUser } from "./store/slices/authSlice";
import ProfileEdit from "./Pages/EditProfiles/freelancerProfileedit";
import JobDetailPage from "./Pages/JobsPage/DetailedJob";
import ViewCourse from "./Pages/SpecialDash/ViewCourse";
import SMyBuyedCourses from "./Pages/SpecialDash/SMyBuyedCourses";
const Home = () => (
  <div>
    <Header />
    <HeroSection />
    <CoursesSec />
    <JobsSec />
    <BlogsSec />
    <ContactSec />
    <Footer />
  </div>
);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("https://empowerabilitybackend56dcdfs4q43srd.vercel.app/profile", {
          withCredentials: true,
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });
        if (response.data.status) {
          dispatch(signInSuccess(response.data.user));
        }else{
          dispatch(logoutUser());
        }
      } catch (error) {
        // Handle unauthorized access or other errors
        dispatch(logoutUser());
      }
    };
    checkAuth();
    const intervalId = setInterval(checkAuth, 300000);

  // Clear interval on component unmount
  return () => clearInterval(intervalId);
  }, []);
  return (
    <Router>
      <Routes>
        {/* Combine Route */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPageWithHeaderFooter />} />
        <Route path="/login" element={<LoginPageWithoutHeaderFooter />} />
        <Route path="/reg" element={<RegWithoutHeaderFooter />} />
        <Route path="/jobs" element={<JobsPageWithHeaderFooter />} />
        <Route path="/blogs" element={<BlogsPageWithHeaderFooter />} />
        <Route path="/courses" element={<CoursesPageWithHeaderFooter />} />
        <Route path="/jobs/job/:id" element={<JobsDetailWithHeaderFooter />} />
        <Route path="/blogs/blog/:id" element={<SinglePostWithHeaderFooter />}/>
        <Route
          path="/editprofile"
          element={<EditProfileWithoutHeaderFooter />}
        />
        {/* Client Routes */}
        <Route
          path="/freelancer"
          element={
            <PrivateRoute roles={["client"]}>
              <FreelancerWithHeaderFooter />
            </PrivateRoute>
          }
        />
        <Route
        path="/course/view/:id"
        element={
          <PrivateRoute roles={["client"]}>
            <ViewCourse />
          </PrivateRoute>
        }
         />
         <Route
        path="/mycourses"
        element={
          <PrivateRoute roles={["client"]}>
            <SMyBuyedCourses />
          </PrivateRoute>
        }
         />
        <Route
          path="/edit-freelancer-profile"
          element={
            <PrivateRoute roles={["client"]}>
              <EditFreelancerWithHeaderFooter />
            </PrivateRoute>
          }
        />
        <Route
          path="/blogs/edit/:id"
          element={
            <PrivateRoute roles={["client"]}>
              {" "}
              <EditBlog />
            </PrivateRoute>
          }
        />
        <Route
          path="/jobs/:title/:jobId/apply"
          element={
            <PrivateRoute roles={["client"]}>
              {" "}
              <ApplyToJobs />
            </PrivateRoute>
          }
        />
        <Route
          path="/write"
          element={
            <PrivateRoute roles={["client"]}>
              {" "}
              <WriteWithoutHeaderFooter />
            </PrivateRoute>
          }
        />
        <Route path="/sfeedback" element={<PrivateRoute roles={["client"]}>
          <SfeedbackWithoutHeaderFooter />
        </PrivateRoute>} />
        <Route path="/sdashboard" element={<PrivateRoute roles={["client"]}><SdashboardWithoutHeaderFooter /></PrivateRoute>} />
        <Route path="/sjobs" element={<PrivateRoute roles={["client"]}><SjobsWithoutHeaderFooter /></PrivateRoute>} />
        <Route path="/scourses" element={<PrivateRoute roles={["client"]}><ScoursesWithoutHeaderFooter /></PrivateRoute>} />
        
        <Route path="/sblogs" element={<PrivateRoute roles={["client"]}><SblogsWithoutHeaderFooter /></PrivateRoute>} />



        {/* Employer Route */}
        <Route
          path="/epostjobs"
          element={
            <PrivateRoute roles={["employer"]}>
              <EpostjobsWithHeaderFooter />
            </PrivateRoute>
          }
        />
        <Route
          path="/eeditjobs/:id"
          element={
            <PrivateRoute roles={["employer"]}>
              <EeditjobsWithHeaderFooter />
            </PrivateRoute>
          }
        />

        {/*  */}
        <Route
          path="/tdashboard"
          element={
            // <PrivateRoute roles={["trainer"]}>
            //   {" "}
            <TdashboardWithHeaderFooter />
            // </PrivateRoute>
          }
        />

        <Route
          path="/coursedetail/:id"
          element={<CourseDetailWithHeaderFooter />}
        />
        <Route path="/tutor" element={<TutorWithHeaderFooter />} />

        {/* <Route path="/tdashboard" element={<TdashboardWithHeaderFooter />} /> */}
        <Route path="/tcourses" element={<TcoursesWithHeaderFooter />} />
        <Route path="/tprofile" element={<TprofileWithHeaderFooter />} />
        <Route
          path="/tmonitoring"
          element={<TmonitoringWithoutHeaderFooter />}
        />
        <Route path="/edash" element={<EdashWithHeaderFooter />} />
        <Route path="/eapp" element={<EappWithHeaderFooter />} />

        <Route path="/einbox" element={<EinboxWithoutHeaderFooter />} />
        
        <Route path="/chat" element={<ChatWithoutHeaderFooter />} />
      </Routes>
    </Router>
  );
};

// Define components with Header and Foote

const ContactPageWithHeaderFooter = () => (
  <>
    <Header />
    <ContactPage />
    <Footer />
  </>
);

const TutorWithHeaderFooter = () => (
  <>
    <Header />
    <Tutor />
    <Footer />
  </>
);

const FreelancerWithHeaderFooter = () => (
  <>
    <Header />
    <Freelancer />
    <Footer />
  </>
);
const EditFreelancerWithHeaderFooter = () => (
  <>
    <Header />
    <ProfileEdit />
    <Footer />
  </>
);

const JobsPageWithHeaderFooter = () => (
  <>
    <Header />
    <JobsPage />
    <Footer />
  </>
);

const BlogsPageWithHeaderFooter = () => (
  <>
    <Header />
    <BlogsPage />
    <Footer />
  </>
);

const CoursesPageWithHeaderFooter = () => (
  <>
    <Header />
    <CoursesPage />
    <Footer />
  </>
);

const SinglePostWithHeaderFooter = () => (
  <>
    <Header />
    <SinglePost />
    <Footer />
  </>
);

const CourseDetailWithHeaderFooter = () => (
  <>
    <Header />
    <CourseDetail />
    <Footer />
  </>
);

const EdashWithHeaderFooter = () => (
  <>
    <EHeader />
    <Edash />
    <EFooter />
  </>
);

const EpostjobsWithHeaderFooter = () => (
  <>
    <EHeader />
    <Epostjobs />
    <EFooter />
  </>
);

const EeditjobsWithHeaderFooter = () => (
  <>
    <EHeader />
    <EditJob />
    <EFooter />
  </>
);

const EappWithHeaderFooter = () => (
  <>
    <EHeader />
    <Eapp />
    <EFooter />
  </>
);
const JobsDetailWithHeaderFooter = () => (
  <>
    <Header />
    <JobDetailPage />
    <Footer />
  </>
);

const EinboxWithoutHeaderFooter = () => (
  <>
    <EHeader />
    <Einbox />
    <EFooter />
  </>
);

const TdashboardWithHeaderFooter = () => (
  <>
    <Theader />
    <Tdashboard />
  </>
);

const TprofileWithHeaderFooter = () => (
  <>
    <Theader />
    <Tprofile />
  </>
);

const TcoursesWithHeaderFooter = () => (
  <>
    <Theader />
    <Tcourses />
  </>
);

// Define components without Header and Footer

const TmonitoringWithoutHeaderFooter = () => <Tmonitoring />;
const SdashboardWithoutHeaderFooter = () => <Sdashboard />;
const LoginPageWithoutHeaderFooter = () => <LoginPage />;
const RegWithoutHeaderFooter = () => <Reg />;
const SjobsWithoutHeaderFooter = () => <Sjobs />;
const ScoursesWithoutHeaderFooter = () => <Scourses />;
const SfeedbackWithoutHeaderFooter = () => <Sfeedback />;
const SblogsWithoutHeaderFooter = () => <Sblogs />;
const WriteWithoutHeaderFooter = () => <Write />;
const ChatWithoutHeaderFooter = () => <Chat />;
const EditProfileWithoutHeaderFooter = () => <EditProfile />;

// Define other components without Header and Footer similarly...

export default App;
