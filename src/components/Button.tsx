import { MouseEvent } from "react";

interface PropsButton {
  color?: "primary" | "secondary" | "danger";
  children: string;
  onClick: (event: MouseEvent) => void;
}
const Button = ({ color = "primary", children, onClick }: PropsButton) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
