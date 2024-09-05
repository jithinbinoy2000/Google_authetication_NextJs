import { SignIn } from "./components/sign-in";

export default function Home() {
  return (
    <main className="w-full h-[100vh] flex justify-center items-center p-5">
      <div className="flex flex-col items-center p-2">
        <div className="mb-5 font-semibold text-center text-xl">
          &quot;Hello again! Ready to dive back into your world?<br /> Sign in and let&apos;s get started!&quot;
        </div>
        <SignIn />
      </div>
    </main>
  );
}
