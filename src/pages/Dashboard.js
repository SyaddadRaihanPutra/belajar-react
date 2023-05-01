import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Navigation from "../components/navigation";
import DashboardComponent from "../components/dashboardComponent";

function Dashboard(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [name, setName] = useState(null);

  const date = new Date();
  const hour = date.getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Selamat pagi";
  } else if (hour < 18) {
    greeting = "Selamat siang";
  } else if (hour < 19) {
    greeting = "Selamat sore";
  } else {
    greeting = "Selamat malam";
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (!user) {
        navigate("/login");
      }
    });

    return unsubscribe;
  }, [navigate]);

  if (!user) {
    return (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src="https://art.pixilart.com/7badccc6206bf0f.gif" width={300} />
      </div>
    );
  }

  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="text-center py-4">DASHBOARD PAGE</h1>
        <h1 className="py-4">Hi, {greeting}!</h1>
        <div className="card border-warning mb-3" style={{ maxWidth: "18rem" }}>
          <div className="card-header">Account Information</div>
          <div className="card-body">
            <p className="card-text">Username: {user.displayName}</p>
            <p className="card-text">Email: {user.email}</p>
          </div>
        </div>
        <DashboardComponent />
      </div>
    </div>
  );
}

export default Dashboard;
