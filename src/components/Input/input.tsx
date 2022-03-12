import { FC, InputHTMLAttributes } from "react";
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
  value?: string | number;
  type?: string;
}

const Input: FC<IInput> = ({ value, type, onChange }) => {
  return <input value={value} type={type} onChange={onChange} />;
};

export default Input;
