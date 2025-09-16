import { CheckCircle, Edit, Ticket, TicketCheck } from "lucide-react";
import Task from "./task";

interface TableProps {
    className?: string;
    title?: string;
}

export default function TaskTable({ className, title }: TableProps) {
    return (
        <>
            <div className={`${className} max-h-80 h-auto rounded-xl overflow-hidden p-2 flex flex-col gap-2`}>
                <div className="text-2xl font-bold p-2">
                    {title}
                </div>
                <Task />
                <Task />
                <div className="bg-[rgba(0,0,0,0.88)] cursor-pointer w-full relative group rounded-xl p-4 flex gap-2">
                    <div
                        className="absolute left-0 top-full mt-2 w-full p-2 text-black bg-white text-sm rounded-md 
                        opacity-0 invisible translate-y-2 
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                        transition-all duration-300"
                    >
                        This is the description!
                    </div>
                    <CheckCircle />
                    Title
                    <Edit className="absolute right-10" />
                </div>

                <div className="bg-[rgba(0,0,0,0.88)] cursor-pointer w-full relative group rounded-xl p-4 flex gap-2">
                    <div
                        className="absolute left-0 top-full mt-2 w-full p-2 text-black bg-white text-sm rounded-md 
                        opacity-0 invisible translate-y-2 
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                        transition-all duration-300"
                    >
                        This is the description!
                    </div>
                    <CheckCircle />
                    Title
                    <Edit className="absolute right-10" />
                </div>



            </div >


        </>
    );
}