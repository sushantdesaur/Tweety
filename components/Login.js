import { signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="bg-black min-h-screen flex max-w-[1500px] mx-auto">
      <div className="flex">
        <img
          className="min-h-screen flex xl:max-w-[900px] mx-auto"
          src="./index.png"
        />
      </div>
      <div className=" flex flex-col  py-[200px] px-[200px]">
        <Image
          src="https://rb.gy/ogau5a"
          width={150}
          height={150}
          objectFit="contain"
        />
        <h1 className="text-[#d9d9d9] text-lg">Happening now</h1>

        <h2 className="text-[#d9d9d9] text-lg">Join Tweety today.</h2>

        <div className="pt-5">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              {/* https://devdojo.com/tailwindcss/buttons#_ */}
              <button
                className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group"
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              >
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1d9bf0] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                  Sign in
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Login;
