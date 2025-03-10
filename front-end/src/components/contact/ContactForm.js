import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";

import emailjs from "@emailjs/browser";

import style from "./style/ContactForm.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = "service_5ealiah";
    const templateId = "template_f3ifouo";
    const publicKey = "2eEI2EOqjR6SLbL_0";

    try {
      await emailjs.send(serviceId, templateId, formData, publicKey);

      toast.success("Send mail success!");

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error("Send mail fail, try again!");

      console.error("Send mail error:", error);
    }
  };

  return (
    <div className={style.contactFormArea}>
      <div className={style.formTitle}>Contact me</div>

      <form onSubmit={handleSubmit} className={style.contactForm}>
        <label for="name" className={style.formLabel}>
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name ..."
          value={formData.name}
          onChange={handleChange}
          required
          className={style.formInput}
        />

        <label for="email" className={style.formLabel}>
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your email ..."
          value={formData.email}
          onChange={handleChange}
          required
          className={style.formInput}
        />

        <label for="message" className={style.formLabel}>
          Message
        </label>
        <input
          name="message"
          placeholder="Message ..."
          value={formData.message}
          onChange={handleChange}
          required
          className={style.formInput}
        />

        <button type="submit" className={style.btnSubmit}>
          Send email
        </button>

        {/* Toast Notification */}
        <ToastContainer autoClose={3000} position="top-right" />
      </form>
    </div>
  );
};

export default ContactForm;
