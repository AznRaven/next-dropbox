import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row items-center bg-[#2b2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2b2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to Dropbox Clone
            <br />
            <br />
            Centralized storage for all your personal and business requirements,
            conveniently located in one unified platform.
          </h1>
          <p className="pb-20">
            &quot;Upgrade your personal storage experience with our Dropbox Clone,
            providing a streamlined and effective method to upload, organize,
            and access files from any location. Safely store crucial documents
            and media while enjoying the convenience of effortless file
            management and sharing—all within a single, secure, and centralized
            solution.&quot;
          </p>
          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try it for free!
            <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1e1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        &quot;This site is created solely for informational and educational purposes.
        We are not affiliated with Dropbox or any of its subsidiaries in any
        way. Copyright Disclaimer under section 107 of the Copyright Act 1976
        allows for &apos;fair use&apos; of this site for educational purposes.&quot;
      </p>
    </main>
  );
}
