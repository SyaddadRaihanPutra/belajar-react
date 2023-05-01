import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";
import Navigation from "../components/navigation";
import { Button } from "react-bootstrap";

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
  } else if (hour < 21) {
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
      const emailSplit = user.email.split("@");
      setName(emailSplit[0]);
    });

    return unsubscribe;
  }, [navigate]);

  return (
    <div>
      <Navigation />
      <div className="container">
        <h1 className="py-4">Hi, {greeting}!</h1>
        {user && <p>Anda Login dengan email: {user.email}</p>}
        {name && <p>User name: {name}</p>}
        <h1 className="text-center py-4">DASHBOARD PAGE</h1>
      </div>
    </div>
  );
}

export default Dashboard;
