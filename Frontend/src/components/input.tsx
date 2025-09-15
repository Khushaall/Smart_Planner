import { ReactElement } from "react";

interface InputProps {
    type: string;
    placeholder?: string;
    className?: string;
    children?: ReactElement;
    label?:string;

}
export default function Input({ type, placeholder, className, children,label }: InputProps) {
    return (
        <>
            <label>{label}</label>
            <input type={type} placeholder={placeholder} className={`p-2 border-none rounded-xl bg-white text-black flex justify-center items-start ${className}`}>
                {children}
            </input>
        </>
    );

}