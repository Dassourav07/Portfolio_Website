import Resume from "../../assets/Resume.pdf";

export const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} download className="btn">
        Download Resume
      </a>
      <a
        href={Resume}
        className="btn btn-primary"
        target="_blank"
        rel="noreferrer noopener"
      >
        View Resume
      </a>
    </div>
  );
};
