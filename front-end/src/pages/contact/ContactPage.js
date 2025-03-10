import data from "./../../data/contact.json";

import ContactContentArea from "./../../components/contact/ContactContentArea";
import ContactForm from "../../components/contact/ContactForm";
import PageDescription from "./../../components/others/PageDescription";
import TitleSession from "./../../components/others/TitleSession";


const ContactPage = () => {
  return (
    <>
      <TitleSession title="Contacts" />

      <PageDescription description={data.pageDescription} />

      <ContactContentArea />

      <TitleSession title="form" />

      <ContactForm />
    </>
  );
};

export default ContactPage;
