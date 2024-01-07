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
        className="bg-[#171717] group-hover/list:bg-[#000] hover:!bg-[#171717] hover:bg-opacity-50 rounded p-6 flex justify-center transition motion-reduce:transition-none"
        download={contactinfo.download}
      >
        <Logo />
      </Link>
    </Tooltip>
  );
};

export default ContactTile;
