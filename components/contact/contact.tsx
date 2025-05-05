"use client"

import ContactForm from "@/components/contact-form"
import DecorativeBackground from "../decorative/DecorativeBackground"

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 from-[#1A1A1A] dark:text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <DecorativeBackground variant="contact" /> 

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First column with text */}
          <div className="flex flex-col justify-center">
            <span className="font-bold text-3xl mb-4">
              CONTACT US
            </span>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-1">
              Let&apos;s Discuss Your <span className="text-[#239dcf]">AI Project</span>
            </h2>
            <p className="max-w-[500px] dark:text-white/80 md:text-xl mb-6">
              Want to increase your request limit or discuss how our AI solutions can help your organization? Our
              team is ready to assist you.
            </p>

            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 mt-2">
              {/* Phone */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#239dcf]/20 flex items-center justify-center mr-3">
                  <PhoneIcon className="text-[#239dcf]" />
                </div>
                <div>
                  <p className="text-sm dark:text-white/60">Call us at</p>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#239dcf]/20 flex items-center justify-center mr-3">
                  <MailIcon className="text-[#239dcf]" />
                </div>
                <div>
                  <p className="text-sm dark:text-white/60">Email us at</p>
                  <a href="mailto:ai-labs@qed42.com" className="font-medium hover:text-[#239dcf]">
                    ai-labs@qed42.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white text-black dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 relative">
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.11 4 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  )
}
