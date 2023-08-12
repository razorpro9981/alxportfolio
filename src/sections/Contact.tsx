import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">What&apos;s Next?</h2>
      <h2 className="contact-sub-title">Get In Touch</h2>
      <p className="contact-text">
      I&apos;d love to hear from you! Whether you have a project in mind, a question, or just want to connect, feel free to reach out. Drop me a message and I&apos;ll get back to you as soon as possible. Let&apos;s collaborate and bring your ideas to life!
      </p>
      <div className="contact-cta">
        <Button link="mailto:kissieduebenezer1@gmail.com" text="Say Hello" />
      </div>
    </motion.div>
  );
}

export default Contact;
