import { NextUIProvider } from "@nextui-org/react";
import { SignIn } from "./components/sign-in";

export default function Home() {
  return (
    <NextUIProvider>
      <main className="w-full h-[100vh] flex justify-center items-center p-5">
        <div className="flex flex-col items-center p-2">
          <div className="mb-5 font-semibold text-center text-xl">
            "Hello again! Ready to dive back into your world?<br /> Sign in and let's get started!"
          </div>
          <SignIn />
        </div>
      </main>
    </NextUIProvider>
  );
}
