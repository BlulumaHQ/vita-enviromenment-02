import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Mailto fallback
    const mailtoBody = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSubject: ${form.subject}\n\n${form.message}`;
    window.location.href = `mailto:info@vitaenv.com?subject=${encodeURIComponent(form.subject || "Website Inquiry")}&body=${encodeURIComponent(mailtoBody)}`;
    setTimeout(() => {
      toast.success("Your email client has been opened. Please send the message.");
      setSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    { icon: Phone, label: "(778) 508-1118", href: "tel:7785081118" },
    { icon: Mail, label: "info@vitaenv.com", href: "mailto:info@vitaenv.com" },
    { icon: MapPin, label: "110-60 East 5th Avenue, Vancouver, BC V5T 1G8", href: undefined },
  ];

  return (
    <>
      <Helmet>
        <title>Vita Environmental | Contact</title>
        <meta name="description" content="Contact Vita Environmental for project inquiries. Phone, email, address, and a quick contact form." />
      </Helmet>

      <PageHero title="Contact" />

      <section className="section-padding">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info + Map */}
            <ScrollReveal>
              <div>
                <span className="text-accent text-xs font-semibold uppercase tracking-widest">Get in Touch</span>
                <h2 className="text-3xl font-extrabold mt-2 mb-6">We'd love to hear from you</h2>
                <div className="space-y-5 mb-8">
                  {contactInfo.map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="text-accent" size={20} />
                      </div>
                      <div>
                        {item.href ? (
                          <a href={item.href} className="text-foreground hover:text-accent transition-colors text-sm font-medium">
                            {item.label}
                          </a>
                        ) : (
                          <span className="text-foreground text-sm font-medium">{item.label}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map */}
                <div className="rounded-lg overflow-hidden border border-border h-64">
                  <iframe
                    title="Vita Environmental Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.5!2d-123.1!3d49.267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDE2JzAxLjIiTiAxMjPCsDA2JzAwLjAiVw!5e0!3m2!1sen!2sca!4v1!5m2!1sen!2sca"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal>
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-8">
                <h3 className="font-heading font-bold text-xl mb-6">Send us a message</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1.5">Name *</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Phone (optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1.5">Subject *</label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1.5">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-accent text-accent-foreground py-3 rounded-md font-semibold text-sm hover:brightness-110 transition flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    <Send size={16} />
                    {submitting ? "Opening email client..." : "Send Message"}
                  </button>
                </div>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
