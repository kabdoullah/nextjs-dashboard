'use client'
import {lusitana} from '@/app/ui/fonts';
import {
    AtSymbolIcon,
    KeyIcon,
    ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import {ArrowRightIcon} from '@heroicons/react/20/solid';
import {Button} from './button';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {InputField} from "@/app/ui/form/input-field";
import {UserFormData} from "@/app/lib/definitions";
import {userFormSchema} from "@/app/lib/validations";


export default function LoginForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<UserFormData>({
        resolver: zodResolver(userFormSchema)
    });
    const onSubmit = async (data: UserFormData) => {
        console.log("Données soumises:", data);
    }
    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>

            <InputField label="Email" error={errors.email} name="email" register={register} type="email"
                        required/>
            <InputField label="Password" error={errors.password} name="password" register={register} type="password"
                        required/>
            <InputField label="Confirm Password" error={errors.confirmPassword} name="confirmPassword"
                        register={register} type="password" required/>
            <button className="w-full bg-orange-500 text-white p-2 mt-4 rounded-md" type="submit">Login</button>
        </form>
    );
}
/*

<div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
  <h1 className={`${lusitana.className} mb-3 text-2xl`}>
    Please log in to continue.
  </h1>
  <div className="w-full">
    <div>
      <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="email"
      >
        Email
      </label>
      <div className="relative">
        <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
        />
        <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </div>
    <div className="mt-4">
      <label
          className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          htmlFor="password"
      >
        Password
      </label>
      <div className="relative">
        <input
            className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            id="password"
            type="password"
            name="password"
            placeholder="Enter password"
            required
            minLength={6}
        />
        <KeyIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
      </div>
    </div>
  </div>
  <Button className="mt-4 w-full">
    Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
  </Button>
  <div className="flex h-8 items-end space-x-1">
    {/!* Add form errors here *!/}
  </div>
</div>*/
