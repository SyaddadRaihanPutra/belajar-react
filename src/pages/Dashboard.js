import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Navigation from "../components/navigation";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        navigate("/login");
      }
      console.log("Email: ", user.email);
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div>
      <Navigation />
      <Link to="/login">Logout</Link>
      <h1>DASHBOARD</h1>
    </div>
  );
}

export default Dashboard;
