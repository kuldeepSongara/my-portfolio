import { ContactInfoType } from "@/app/lib/definitions";
import Link from "next/link";

const ContactTile = ({ contactinfo }: { contactinfo: ContactInfoType }) => {
  const { Logo } = contactinfo;
  return (
    <Link
      href={contactinfo.href}
      target="_black"
      className="bg-[#090909] p-6 flex justify-center border-white hover:border-r transition-all duration-300 ease-in-out hover:cursor-pointer"
    >
      <Logo />
    </Link>
  );
};

export default ContactTile;
