import {InputField} from "@/app/ui/form/input-field";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import LoginForm from "@/app/ui/login-form";


export default function Page() {

    return (
        <div className="flex justify-center items-center h-screen">
            <LoginForm/>
        </div>
    );
}