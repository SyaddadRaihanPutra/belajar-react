import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import Navigation from "../components/navigation";
import { Link, Navigate } from "react-router-dom";

export default function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {
            sendEmailVerification(auth.currentUser)
              .then(() => {
                alert("Mohon verifikasi email anda");
                window.location.replace("/login");
              })
              .catch((error) => {
                alert(error.message);
              });
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
                        type="text"
                        className="form-control border form-control-lg"
                        value={name}
                        name="name"
                        required
                        placeholder="Name"
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control border form-control-lg"
                        value={email}
                        name="email"
                        required
                        placeholder="Email"
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control border form-control-lg"
                        value={password}
                        name="password"
                        required
                        placeholder="Password"
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <button
                      className="btn btn-primary btn-block col-12"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </form>
                  <p className="pt-4">
                    Sudah punya akun?{" "}
                    <Link to="/login" className="text-decoration-none">
                      Login
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
