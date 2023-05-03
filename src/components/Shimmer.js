import "./Shimmer.css";

const Shimmer = () => {
  return (
    <section className="restaurant-list">
      {Array(10).fill().map((_, index) => (
        <article key={index} className="restaurant-card">
          {/* Shimmer effect */}
          <div className="shimmer-wrapper">
            <div className="shimmer-line shimmer-line-1"></div>
            <div className="shimmer-line shimmer-line-2"></div>
            <div className="shimmer-line shimmer-line-3"></div>
          </div>
          {/* Card content */}
          <div className="card-content">
            <div className="card-title"></div>
            <div className="card-text"></div>
            <div className="card-text"></div>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Shimmer;

/* Old Shimmer 
const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
      .fill("")
      .map((e, index) => (
        <div key={index} className="shimmer-card"></div>
      ))
      }
    </div>
  )
}

export default Shimmer;
*/