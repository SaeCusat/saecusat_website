export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 sm:py-8 relative z-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <div className="flex space-x-6 mb-3">
          <a href="https://instagram.com/saecusat" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-blue-400 transition-colors">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="https://linkedin.com/company/saecusat" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition-colors">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
        <p className="text-sm sm:text-base">&copy; 2025 SAE CUSAT. All rights reserved.</p>
        <p className="text-xs sm:text-sm text-gray-400 mt-2">
          Society of Automotive Engineers - Cochin University of Science and Technology
        </p>
      </div>
    </footer>
  )
}
