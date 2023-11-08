import { ContactInfoType } from "@/app/lib/definitions";
import Link from "next/link";

const ContactTile = ({ contactinfo }: { contactinfo: ContactInfoType }) => {
  const { Logo } = contactinfo;
  return (
    <Link
      href={contactinfo.href}
      target="_black"
      className="bg-[#171717] p-6 flex justify-center ease-in-out"
    >
      <Logo />
    </Link>
  );
};

export default ContactTile;
