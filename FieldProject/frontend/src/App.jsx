// app.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import UserDashboard from './pages/UserDashboard';
import ChangePassword from './components/ChangePassword';
import { useAuth } from "./AuthContext";
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import Profile from './pages/Profile';
import Jobs from './pages/Jobs';
import Bids from './pages/Bids';
import JobDetailPage from './pages/JobDetailed';
import { AuthProvider } from './AuthContext';
import { MenteeProvider, useMentee } from './MenteeContext';
import MenteeDashboard from './components/MenteeDashboard'


import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import MentorDashboard from './pages/MentorDashboard';
import MenteesList from './components/MenteesList';
import Academics from './components/Academics';
import Nonacademics from './components/Nonacademics';
import Attendence from './components/Attendence';
import MentorRemarks from './components/MentorRemarks';
import Approvals from './components/Approvals';
import MeetingSchedules from './components/MeetingSchedules';

function App() {
  // Check if the user is authenticated (e.g., by checking cookies or the authentication state)
  const { authenticated , userRole } = useAuth();
  const {menteeId} = useMentee();
console.log(authenticated)
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          {/* Default Route */}
          <Route
            path="/"
            element={<Home />}
          />  
        
        {/* Signup Route: Renders the Signup component if the user is not authenticated; otherwise, navigates to the Dashboard. */}
          
        
        {/* Login Route: Renders the Login component if the user is not authenticated; otherwise, navigates to the Dashboard. */}
        <Route
        path="/login"
        element={
          authenticated ? (
            userRole === 'mentor' ? (
              <Navigate to="/mentordashboard" />
            ) : (
              <Navigate to={`/menteedashboard`} />
            )
          ) : (
            <Login />
          )
        }
      />           
        
        {/* Change Password Route: Renders the ChangePassword component. */}
        {/* TODO */}
        <Route
          path="/change-password"
          element={authenticated ? <ChangePassword /> : <Navigate to="/login" /> }
        />        
        
        {/* Dashboard Route: Renders the Dashboard component if the user is authenticated; otherwise, navigates to the Login page. */}
        
        <Route 
          path="/user/dashboard"
          element={authenticated ? <UserDashboard /> : <Navigate to="/login" /> }
        />


        <Route
          path="/user/profile"
          element={<Profile />}
        />
        <Route
          path="/user/jobs"
          element={<Jobs />}
     ment={<JobDetailPage />}
        />
       
    
        <Route
          path="/user/bids"
          element={<Bids />}
        />
        {/* <Route
          path="/freelancer/profile"
          element={<Profile />}
        /> */}


        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/mentorDashboard"
          element={authenticated ? <MentorDashboard /> : <Navigate to="/login" /> } />

        <Route path="/mentees/year/:year" element={<MenteesList />} />
        <Route path="/mentee/dashboard/:menteeId" element={<MenteeDashboard />} />
        <Route path="/menteedashboard" element={<MenteeDashboard />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/nonacademics" element={<Nonacademics />} />
        <Route path="/remarks" element={<MentorRemarks />} />

        <Route path="/attendence" element={<Attendence />} />
        <Route path="/approvals" element={<Approvals />} />
        <Route path="/meetingschedules" element={<MeetingSchedules />} />
        <Route path="/changepassword" element={<ChangePassword />} />






        {/* <Route path="/mentee/dashboard/:menteeId" element={<MenteeDashboard />} /> */}

        
        <Route path="*" element={<ErrorPage />} />


      </Routes>
    </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
