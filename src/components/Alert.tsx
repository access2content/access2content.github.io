import { ReactNode } from "react";

interface PropAlert {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: PropAlert) => {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}

      <button
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
