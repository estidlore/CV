const Text = ({className, ...rest}) => (
  <p {...rest} className={`my-1 ${className}`.trimEnd()} />
);

export default Text;
