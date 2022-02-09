const Title = ({children, highlight = false}) => highlight ? (
  <div className="bg-info p-3 rounded">
    <h3 className="mb-0">{children}</h3>
  </div>
) : (
  <h3 className="mt-4 mb-2 text-primary">{children}</h3>
);

export default Title;