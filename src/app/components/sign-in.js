import Image from "next/image"
import { signIn } from "../auth"
 
export function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google",{redirectTo:"/Dashboard"})
      }}
    >
      <button type="submit" className="flex items-center  gap-3 border  p-2 rounded-lg hover:border-red-500">
        <Image src='/images/google.png' width={40} height={100} alt="google"/>
       <p className="text-white text-xl font-bold">SignIn With Google</p>
      </button>
    </form>
  )
}