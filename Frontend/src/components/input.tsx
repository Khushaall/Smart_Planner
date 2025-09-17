import { ReactElement } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    className?: string;
    children?: ReactElement;
    label?:string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;

}
export default function Input({ type, placeholder, className, children,label,onChange }: InputProps) {
    return (
        <>
            <label>{label}</label>
            <input onChange={onChange} type={type} placeholder={placeholder} className={`p-2 border-none rounded-xl bg-white text-black flex justify-center items-start ${className}`}>
                {children}
            </input>
        </>
    );

}