type ButtonProps = { title?: string };

const Button = ({ title = "title" }: ButtonProps) => {
  return <a className="px-10 py-3 hover:cursor-pointer">{title}</a>;
};

export default Button;
