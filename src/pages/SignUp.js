import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import Navigation from "../components/navigation";
import { auth } from "../config/firebase";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        sendEmailVerification(user)
          .then(() => {
            alert("Mohon verifikasi email anda");
            Navigate("/login");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      <Navigation />
      <section className="vh-100" style={{ backgroundColor: "#508bfc" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card shadow-2-strong"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <h3 className="mb-5">Sign Up</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="typeEmailX-2"
                        className="form-control border form-control-lg"
                        value={email}
                        name="email"
                        required
                        onChange={handleEmailChange}
                      />
                      <label className="form-label" htmlFor="typeEmailX-2">
                        <span className="bg-white px-1">Email</span>
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="typePasswordX-2"
                        className="form-control border form-control-lg"
                        value={password}
                        name="password"
                        required
                        onChange={handlePasswordChange}
                      />
                      <label className="form-label" htmlFor="typePasswordX-2">
                        <span className="bg-white px-1">Password</span>
                      </label>
                    </div>
                    <button className="btn btn-primary btn-block" type="submit">
                      Sign Up
                    </button>
                  </form>
                  <p className="pt-4">
                    Belum punya akun?{" "}
                    <Link to="/signup" className="text-decoration-none">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
