interface RedTitleFormProps {
    title: string;
}

const RedTitleForm = ({title}: RedTitleFormProps) => {
    return (
        <div>
            <p className="text-[11px] text-[#FA657D]">{title}</p>
        </div>
    )
}

export default RedTitleForm;