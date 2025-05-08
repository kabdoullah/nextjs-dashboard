import {Path, FieldError, UseFormRegister} from "react-hook-form";
import {UserFormData} from "@/app/lib/definitions";

interface FormInputProps {
    label: string;
    name: Path<UserFormData>;
    type?: string;
    register: UseFormRegister<UserFormData>
    error?: FieldError;
    required: boolean

}

export const InputField = ({label, name, type = "text", error, register, required, ...props}: FormInputProps) => {
    return (
        <div>
            <label htmlFor={name} className="block text-sm font-medium mb-2">
                {label} <span className="text-red-500">*</span>
            </label>
            <input
                id={name}
                type={type}
                {...register(name, {required})}
                {...props}
                className={`w-full border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:${error ? "ring-red-500" : "ring-orange-400"}`}
            />
            {error && (
                <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
        </div>
    );
}