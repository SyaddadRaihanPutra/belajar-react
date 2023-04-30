function Hero() {
  return (
    <div style={{ backgroundColor: "#111827" }}>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="https://www.siotics.org/public/images/frontImg.webp"
              className="d-block mx-lg-auto img-fluid"
              alt="Hero Image"
              loading="lazy"
              width={700}
              height={500}
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-3 fw-bolder text-light text-body-emphasis lh-1 mb-3">
              CODE FOR THE <span style={{ color: "#f97316" }}>FUTURE</span>
            </h1>
            <p className="lead py-3" style={{ color: "#9ca3af" }}>
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary px-3 py-2 me-md-2"
              >
                GET STARTED <i className='bx bx-right-arrow-alt fs-4 align-top'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
