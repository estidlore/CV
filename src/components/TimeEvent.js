const TimeEvent = ({subtitle, date, description, title}) => (
  <div className="row my-2">
    <h6 className="col-2">{date}</h6>
    <div className="col-10">
      {title && <h3 className="mb-1 text-primary">{title}</h3>}
      {subtitle && <h5 className="mb-1">{subtitle}</h5>}
      {description && <p className="mb-1">{description}</p>}
    </div>
  </div>
);

export default TimeEvent;