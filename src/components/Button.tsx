interface PropsButton {
  children: string;
  onClick: () => void;
}

const Button = ({ children, onClick }: PropsButton) => {
  return (
    <button type="button" className="btn btn-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
