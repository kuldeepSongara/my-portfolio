import ContactTile from "@/app/components/atom/ContactTile";
import { ContactInfo } from "@/app/lib/data";

const Contact = () => {
  return (
    <>
      <h6 className="block md:hidden pl-12 mb-[-32px] uppercase text-sm tracking-widest">
        Contact
      </h6>
      <div
        className="group/list p-10 md:p-12 md:pl-6 lg:p-20 2xl:p-24 flex justify-end gap-2"
        id="contact"
      >
        {ContactInfo.map((contact) => (
          <div
            key={contact.type}
            className="group hover:!opacity-100 group-hover/list:opacity-50"
          >
            <ContactTile contactinfo={contact} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Contact;
