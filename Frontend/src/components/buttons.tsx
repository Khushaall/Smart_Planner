import { ReactElement, ReactNode } from "react";

type Size = "sm" | "md" | "lg" | "xl";
type Variant = "primary" | "secondary" | "destructive" | "outline" | "special";

interface ButtonProps {
    startIcon?: ReactElement;
    children?: ReactNode;
    variant: Variant;
    size: Size;
    className?: string;
    onClick?: () => void;
    active?: boolean
}

const sizes = {
    sm: "px-4 py-1",
    md: "px-6 py-2",
    lg: "px-8 py-2",
    xl: "px-20 py-4"
}

const variants = {

    primary: "bg-black text-white hover:shadow-[16px_0_16px_rgba(0,0,0,0.4)] transition-all duration-300",
    special: "bg-[#6A3FFB] text-[#FFFFFF] hover:bg-[#875BFF] transition-all duration-300 ease-in-out hover:shadow-custom-glow",
    secondary: "bg-[#FFFFFF] text-[#6A3FFB] hover:bg-[#F0E6FF] transition-all duration-300 ease-in-out hover:shadow-custom-glow border-[#6A3FFB]",
    destructive: "bg-[#FF2E63] hover:bg-[#E01E4F] text-[#FFFFFF] transition-all duration-300 ease-in-out",
    outline: "hover:shadow-[5px_0px_30px_rgba(255,255,255,0.5)] transition-all duration-300",

}
export default function Button({ startIcon, children, variant, size, className, active, onClick }: ButtonProps) {
    return (
        <>
            <button className={`${variants[variant]} ${active ? "text-indigo-400 " : ""
                }  ${sizes[size]} flex justify-center rounded-3xl gap-2 cursor-pointer ${className} `} onClick={onClick}>
                {startIcon}
                {children}
            </button>
        </>
    );
}