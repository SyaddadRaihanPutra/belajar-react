import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Navigation from "../components/navigation";
import { Button } from "react-bootstrap";

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
      <div className="container">
        <h1 className="text-center py-4">DASHBOARD PAGE</h1>
      </div>
    </div>
  );
}

export default Dashboard;
