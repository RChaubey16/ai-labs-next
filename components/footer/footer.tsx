"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t py-4 md:py-4 dark:border-gray-800">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <svg width="26" height="47" viewBox="0 0 26 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.8993 0.847656V4.39517H11.3572V0.847656H14.8993ZM21.9097 18.4374V14.8899H18.3676V18.4374H14.8255V21.911H11.2834V18.3635H14.8255V14.816H18.3676V4.39517H14.8255V7.86877H11.2834V11.4163H7.7413V14.9638H4.34679V18.5113H0.804688V25.5324H4.34679V29.0799H21.9097V25.5324H25.4518V18.5113L21.9097 18.4374Z"
              fill="url(#paint0_radial_5570_2896)"
            />
            <path
              d="M4.34766 29.0059V32.4795H7.88976V36.027H11.4319V46.5217H14.9002V36.027H18.4423V32.4795H21.9106V29.0059H4.34766Z"
              fill="url(#paint1_linear_5570_2896)"
            />
            <path d="M21.9106 28.4883H4.34766V29.0056H21.9106V28.4883Z" fill="#ED1C24" />
            <defs>
              <radialGradient
                id="paint0_radial_5570_2896"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.809 12.5569) scale(23.7044 23.7406)"
              >
                <stop stopColor="#ED1C24" />
                <stop offset="1" stopColor="#8C003F" />
              </radialGradient>
              <linearGradient
                id="paint1_linear_5570_2896"
                x1="4.37562"
                y1="37.7656"
                x2="21.9314"
                y2="37.7656"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6D6E71" />
                <stop offset="0.09" stopColor="#727376" />
                <stop offset="0.2" stopColor="#818285" />
                <stop offset="0.31" stopColor="#9A9B9D" />
                <stop offset="0.44" stopColor="#BCBEBF" />
                <stop offset="0.51" stopColor="#D1D3D4" />
                <stop offset="0.54" stopColor="#C0C2C4" />
                <stop offset="0.62" stopColor="#A2A4A6" />
                <stop offset="0.7" stopColor="#8B8C8F" />
                <stop offset="0.79" stopColor="#7A7B7E" />
                <stop offset="0.88" stopColor="#707174" />
                <stop offset="1" stopColor="#6D6E71" />
              </linearGradient>
            </defs>
          </svg>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">QED42 AI Labs</span>
        </div>
        <p className="text-md text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} QED42. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
            Privacy
          </Link>
          <Link href="#" className="text-gray-600 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-500">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}
