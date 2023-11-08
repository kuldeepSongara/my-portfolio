import { ContactInfoType } from "@/app/lib/definitions";
import Link from "next/link";
import { Tooltip } from "@nextui-org/react";

const ContactTile = ({ contactinfo }: { contactinfo: ContactInfoType }) => {
  const { Logo } = contactinfo;

  return (
    <Tooltip content={contactinfo.type}>
      <Link
        href={contactinfo.href}
        target="_blank"
        className="bg-[#171717] p-6 flex justify-center ease-in-out"
        download={contactinfo.download}
      >
        <Logo />
      </Link>
    </Tooltip>
  );
};

export default ContactTile;
