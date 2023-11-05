import ContactTile from "@/app/components/atom/ContactTile";
import { ContactInfo } from "@/app/lib/data";

const Contact = () => {
  return (
    <>
      <h6 className="block md:hidden pl-6 mb-[-32px] uppercase text-sm tracking-widest">
        Contact
      </h6>
      <div
        className="p-10 pl-5 md:p-12 md:pl-6 lg:p-20 2xl:p-24 flex justify-end gap-2"
        id="contact"
      >
        {ContactInfo.map((contact) => (
          <ContactTile key={contact.type} contactinfo={contact} />
        ))}
      </div>
    </>
  );
};

export default Contact;
