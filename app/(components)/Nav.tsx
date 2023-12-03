import { UserButton,SignInButton, SignedOut  } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./Theme";

const Nav = () => {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center space-x-2">
        <div className="bg-[#0160fe] w-fit">
          <Image
            src="https://www.shareicon.net/download/512x512/2015/08/03/79353_dropbox_512x512.png"
            className="invert"
            alt="logo"
            height={50}
            width={50}
          />
        </div>
        <div className="font-bold text-xl">Dropbox</div>
      </Link>
      <div className="px-5 flex space-x-2 items-center">
        <ModeToggle/>
      <UserButton afterSignOutUrl="/"/>
      <SignedOut>
        <SignInButton afterSignInUrl="/dashboard" mode="modal"/>
      </SignedOut>
      </div>
    </header>
  );
};

export default Nav;
