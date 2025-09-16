import { CheckCircle, Edit } from "lucide-react";

export default function Task() {
    return (
        <>
            <div className="bg-[#1a1a1a] text-[#d1d5db] cursor-pointer w-full relative group rounded-xl p-4 flex gap-2">
                <div
                    className="absolute z-10 left-0 top-full mt-2 w-full p-2 text-black bg-white text-sm rounded-md
                        opacity-0 invisible translate-y-2 
                        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 
                        transition-all duration-300"
                >
                    This is the description!
                </div>

                <CheckCircle className="text-green-700" />
                Title
                <Edit className="absolute right-10" />
            </div>
        </>
    );

}