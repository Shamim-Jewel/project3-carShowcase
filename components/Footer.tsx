import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constant";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 border-gray-100 border-t">
      <div className="flex max-md:flex-col px-6          py-10 justify-between gap-3 ">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            width={118}
            height={18}
            alt="Logo"
            className="object-contain"
          />
          <p className="text-gray-700 text-base">
            {" "}
            Carhub 2023 <br />
            All right reserved &copy;{" "}
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div className="footer__link" key={link.title}>
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((link) => (
                <Link href={link.url}>{link.title}</Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
