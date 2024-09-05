import Image from "next/image"
import { signOut } from "../auth"
export function SignOut() {
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo:"/"})
      }}
    >
      <button type="submit" className="flex items-center  gap-3 border  p-2 rounded-lg hover:border-red-500">
        <Image src='/images/google.png' width={20} height={100} alt="google"/>
       <p className="text-white text-m font-bold">signOut</p>
      </button>
    </form>
  )
}