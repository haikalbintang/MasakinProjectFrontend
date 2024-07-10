import React from "react";

interface InputFormProps {
  label: string;
  type: string;
  placeholder: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm = ({ label, type, placeholder, className, value, onChange }: InputFormProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-col gap-2">
        <label>{label}</label>
        <input
          className="w-[280px] h-[55px] border-[1.5px] rounded-[10px] p-3 border-[#D9D9D9]"
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputForm;
