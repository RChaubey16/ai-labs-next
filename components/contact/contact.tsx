"use client"

import ContactForm from "@/components/contact-form"



export default function Contact(){
    return(
        <section
          id="contact"
          className="py-16 md:py-24 bg-gradient-to-br from-qed-dark to-black text-white relative overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-qed-red blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-qed-red blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-qed-red/20 blur-3xl"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First column with text */}
              <div className="flex flex-col justify-center">
                <div className="inline-block mb-4">
                  <span className="bg-qed-red px-4 py-1 text-sm font-medium rounded-full text-white">CONTACT US</span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                  Let's Discuss Your <span className="text-qed-red">AI Project</span>
                </h2>
                <p className="max-w-[500px] text-white/80 md:text-xl mb-8">
                  Want to increase your request limit or discuss how our AI solutions can help your organization? Our
                  team is ready to assist you.
                </p>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 mt-2">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-qed-red/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-qed-red"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Call us at</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-qed-red/20 flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-qed-red"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/60">Email us at</p>
                      <a href="mailto:ai-labs@qed42.com" className="font-medium hover:text-qed-red">
                        ai-labs@qed42.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second column with the form */}
              <div className="bg-white text-qed-dark rounded-lg shadow-xl p-6 md:p-8 transform md:translate-y-4 relative">
                <div className="absolute -top-2 -left-2 w-12 h-12 bg-qed-red rounded-lg transform -rotate-6"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-qed-red rounded-lg transform rotate-6"></div>
                <div className="relative z-10">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}