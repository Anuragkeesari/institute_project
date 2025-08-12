function CourseCard({ name, description }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card shadow-sm border-0 h-100" style={{ backgroundColor: "#fefefe" }}>
        <div className="card-body">
          <h5 className="card-title text-primary fw-bold">{name}</h5>
          <p className="card-text text-dark" style={{ fontSize: "0.95rem" }}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
