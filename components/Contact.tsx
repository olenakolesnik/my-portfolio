
'use client';
import { BiLocationPlus, BiLogoGithub } from "react-icons/bi";
import { BsTelegram } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      await emailjs.sendForm(
        "service_eza26tp", // твій service id
        "template_d9stigw", // твій template id
        form.current,
        "pRyIUIDJdpKyYhVxu" // твій public key
      );

      alert("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };
    return (
      <section className="section contact-section" id="contact">
        <div className="container contact">
          <div className="contact__intro">
            <p className="section-label">Get in touch</p>
  
            <h2 className="section-title">
              Let&apos;s Work <span>Together!</span>
            </h2>
  
            <p>
              I&apos;m always open to new opportunities and interesting projects.
            </p>
  
            <a href="mailto:your-email@gmail.com" className="btn btn--primary">
              Get In Touch →
            </a>
          </div>
  
          <div className="contact__info">
            <div className="contact-item">
              <span><MdEmail /></span>
              <div>
                <h3>Email</h3>
                <p>kolesnikolena1988@gmail.com</p>
              </div>
            </div>
  
            <div className="contact-item">
              <span><BsTelegram /></span>
              <div>
                <h3>Telegram</h3>
                <p>@Olena_6350</p>
              </div>
            </div>
  
            <div className="contact-item">
              <span><BiLocationPlus /></span>
              <div>
                <h3>Location</h3>
                <p>Ukraine, Kiev</p>
              </div>
            </div>
  
            <div className="contact-item">
              <span><BiLogoGithub /></span>
              <div>
                <h3>GitHub</h3>
                <p>github.com/olenakolesnik</p>
              </div>
            </div>
          </div>
  
          <form className="contact-form" onSubmit={sendEmail} ref={form}>
          <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        required
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        required
      />

      <button type="submit">
        Send Message
      </button>
          </form>
        </div>
      </section>
    );
  }