import CourseCard from "../components/CourseCard";
import courseData from "../data/courseData";

function Courses() {
  return (
    <div className="container mt-5">
      <h2 className="text-center text-warning mb-4 fw-bold">Our Professional Courses</h2>
      <p className="text-center text-muted mb-5">
        Choose from a variety of high-demand career paths designed by industry experts.
      </p>
      <div className="row">
        {courseData.map(course => (
          <CourseCard
            key={course.id}
            name={course.name}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Courses;
















// function Courses() {
//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Our Courses</h2>
//       <div className="row">
//         {[
//           { title: "Full Stack Development", desc: "HTML, CSS, JS, React, Node, MongoDB" },
//           { title: "Python with Django", desc: "Build web apps using Python & Django framework" },
//           { title: "Frontend Development", desc: "React, Bootstrap, Responsive Design" },
//           { title: "Java with Spring Boot", desc: "Enterprise-grade apps with Java and Spring Boot" },
//           { title: "Data Science", desc: "Pandas, Numpy, Machine Learning, Visualization" }
//         ].map((course, index) => (
//           <div className="col-md-4 mb-4" key={index}>
//             <div className="card h-100 shadow-sm">
//               <div className="card-body">
//                 <h5 className="card-title">{course.title}</h5>
//                 <p className="card-text">{course.desc}</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Courses;
