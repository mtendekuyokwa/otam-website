import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Check, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { PageHero } from "~/components/PageHero";
import { SiteFooter } from "~/components/SiteFooter";
import { A } from "~/lib/assets";

const interTight = { fontFamily: "'Inter Tight', sans-serif" } as const;
const playfair = { fontFamily: "'Playfair Display', serif" } as const;
const sfPro = { fontFamily: "'SF Pro Rounded', system-ui, sans-serif" } as const;

const inputCls =
  "w-full h-13 rounded-2xl border border-black/10 bg-white px-5 text-lg text-[#15221B] placeholder:text-[#15221B]/35 outline-none focus:border-[#2E7D5B] focus:ring-4 focus:ring-[#2E7D5B]/10 transition";
const textAreaCls = `${inputCls} h-auto py-4 min-h-[140px] resize-none`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — OTAM" },
      {
        name: "description",
        content:
          "Get in touch with the Occupational Therapy Association of Malawi — enquiries about membership, partnerships, education and events.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <main>
      <PageHero
        kicker="Contact us"
        titleLine1="Let's start a"
        titleAccent="conversation"
        sub="Whether you're a therapist, a student, a partner organisation or a supporter — we'd love to hear from you."
        image={A.students}
      />

      <section className="bg-[#F6F4EE]">
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 py-24 grid gap-12 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* Details */}
          <div className="flex flex-col gap-5">
            <motion.h2
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl leading-[1.15]"
              style={interTight}
            >
              Reach us{" "}
              <span className="italic" style={playfair}>
                directly
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-[28px] p-8 flex flex-col gap-3 mt-4"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#2E7D5B]/10 flex items-center justify-center">
                <Mail className="w-5.5 h-5.5 text-[#2E7D5B]" />
              </span>
              <span className="text-[#15221B]/40 text-xs tracking-[0.2em] uppercase mt-2" style={interTight}>
                Email
              </span>
              <p className="text-2xl break-all" style={interTight}>
                otammalawi@gmail.com
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-[28px] p-8 flex flex-col gap-3"
            >
              <span className="w-12 h-12 rounded-2xl bg-[#D4593B]/10 flex items-center justify-center">
                <MapPin className="w-5.5 h-5.5 text-[#D4593B]" />
              </span>
              <span className="text-[#15221B]/40 text-xs tracking-[0.2em] uppercase mt-2" style={interTight}>
                Postal address
              </span>
              <p className="text-2xl leading-snug" style={interTight}>
                P.O. Box 2, Thondwe,
                <br />
                Zomba, Malawi
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-[#15221B]/55 text-lg leading-relaxed px-1"
              style={sfPro}
            >
              For membership vetting, conference enquiries or partnership
              proposals, please allow a few working days for a response.
            </motion.p>
          </div>

          {/* Inquiry form */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-[28px] p-8 md:p-10"
          >
            {sent ? (
              <div className="h-full min-h-[420px] flex flex-col items-center justify-center gap-5 text-center">
                <span className="w-16 h-16 rounded-full bg-[#2E7D5B]/10 flex items-center justify-center">
                  <Check className="w-7 h-7 text-[#2E7D5B]" />
                </span>
                <h3 className="text-3xl" style={interTight}>
                  Message received
                </h3>
                <p className="text-[#15221B]/60 text-lg max-w-[380px] leading-relaxed" style={sfPro}>
                  Thank you for reaching out to OTAM. The team will get back
                  to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="h-11 px-6 rounded-full border border-black/10 text-[#15221B]/70 hover:bg-black/5 transition-colors"
                  style={sfPro}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required name="name" placeholder="Full name" className={inputCls} style={sfPro} />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email address"
                    className={inputCls}
                    style={sfPro}
                  />
                </div>
                <select name="subject" defaultValue="" required className={inputCls} style={sfPro}>
                  <option value="" disabled>
                    What's your enquiry about?
                  </option>
                  <option>General enquiry</option>
                  <option>Membership</option>
                  <option>Partnerships</option>
                  <option>Conference 2026</option>
                  <option>Education & CPD</option>
                </select>
                <textarea
                  required
                  name="message"
                  placeholder="Your message…"
                  className={textAreaCls}
                  style={sfPro}
                />
                <button
                  type="submit"
                  className="h-14 px-8 bg-[#15221B] text-white rounded-2xl inline-flex items-center justify-center gap-2.5 text-lg font-medium hover:bg-[#1f3327] transition-colors w-fit mt-2"
                  style={sfPro}
                >
                  Send message
                  <Send className="w-4.5 h-4.5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
