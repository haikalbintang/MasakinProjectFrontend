

interface FormButtonProps {
    text: string;
    type: "button" | "submit";
    onClick?: () => void;
    disabled?: boolean;
}

const FormButton = ({text, onClick, type}: FormButtonProps) => {
    return (
        <div>
            <button className="w-[280px] h-[54px] rounded-[10px] bg-[#7E9F10] text-[23px] text-[#FFFFFF] hover:bg-[#7E9F10]/80" onClick={onClick} type={type}>
                {text}
            </button>
    </div>
  );
};

export default FormButton;