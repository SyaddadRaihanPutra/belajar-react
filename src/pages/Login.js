import React, { Component } from "react";
import Navigation from "../components/navigation";
import { Link } from "react-router-dom";
import { auth } from "../config/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeField(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    const auth = getAuth();
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res);
      if (res.user.emailVerified) {
        window.location.href = "/dashboard";
      } else {
        alert("Verifikasi email anda terlebih dahulu!");
        auth.signOut();
      }
    } catch (error) {
      alert(error.message);
    }
  }

  render() {
    const { email, password } = this.state;
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
                    <h3 className="mb-5">Sign in</h3>
                    <form onSubmit={this.handleSubmit}>
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          id="typeEmailX-2"
                          className="form-control border form-control-lg"
                          required
                          value={email}
                          onChange={this.handleChangeField}
                          name="email"
                        />
                        <label className="form-label" htmlFor="typeEmailX-2">
                          <span className="bg-white px-2">Email</span>
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="typePasswordX-2"
                          className="form-control border form-control-lg"
                          required
                          value={password}
                          onChange={this.handleChangeField}
                          name="password"
                        />
                        <label className="form-label" htmlFor="typePasswordX-2">
                          <span className="bg-white px-2">Password</span>
                        </label>
                      </div>
                      <button
                        className="btn btn-primary btn-block"
                        type="submit"
                      >
                        Login
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
}
