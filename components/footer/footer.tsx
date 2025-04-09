"use client"

import Link from "next/link"

export default function Footer(){
    return(
      <footer className="border-t py-6 md:py-8 bg-white">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 0C26.9 0 0 26.9 0 60C0 93.1 26.9 120 60 120C93.1 120 120 93.1 120 60C120 26.9 93.1 0 60 0Z"
                fill="#e41e26"
              />
              <path d="M85 35H35V85H85V35Z" fill="white" />
              <path
                d="M60 50C54.5 50 50 54.5 50 60C50 65.5 54.5 70 60 70C65.5 70 70 65.5 70 60C70 54.5 65.5 50 60 50Z"
                fill="#e41e26"
              />
            </svg>
            <span className="text-lg font-semibold">QED42 AI Labs</span>
          </div>
          <p className="text-sm text-qed-gray">© {new Date().getFullYear()} QED42. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-qed-gray hover:text-qed-red">
              Privacy
            </Link>
            <Link href="#" className="text-qed-gray hover:text-qed-red">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    )
}