import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CustomButton } from ".";

const Navbar = () => {
  return (
    <header className="w-full abslout z-10 ">
      <nav className="max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <CustomButton
          title="Sign In"
          containerStyle="text-primary-blue rounded-full bg-white min-w-[130px] border-[2px] z-10"
        />
      </nav>
    </header>
  );
};

export default Navbar;
