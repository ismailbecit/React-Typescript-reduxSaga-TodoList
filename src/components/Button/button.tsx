import { MouseEventHandler, FC } from "react";

interface IProps {
  text?: string;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
}

const Button: FC<IProps> = ({ text, disabled, style, onClick }) => {
  return (
    <button style={style} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
