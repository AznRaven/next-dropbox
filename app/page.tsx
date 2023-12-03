import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1>
            Welcome to Dropbox Clone
            <br />
            <br />
            Centralized storage for all your personal and business requirements,
            conveniently located in one unified platform.
          </h1>
          <p className="pb-20">
            "Upgrade your personal storage experience with our Dropbox Clone,
            providing a streamlined and effective method to upload, organize,
            and access files from any location. Safely store crucial documents
            and media while enjoying the convenience of effortless file
            management and sharing—all within a single, secure, and centralized
            solution."
          </p>
          <Link href="/dashboard">Try it for free!</Link>
        </div>
      </div>
      <h1>Dropbox Clone</h1>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        "This site is created solely for informational and educational purposes.
        We are not affiliated with Dropbox or any of its subsidiaries in any
        way. Copyright Disclaimer under section 107 of the Copyright Act 1976
        allows for 'fair use' of this site for educational purposes."
      </p>
    </main>
  );
}
