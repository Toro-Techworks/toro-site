import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & location */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center space-x-3 mb-4 justify-start">
              <img
                src="/toro-white.png"
                alt="Toro Tech logo"
                className="w-7 h-7 object-contain"
              />
              <span className="text-xl leading-7 font-bold text-white">Toro Tech</span>
            </Link>
            <div>
              <p className="text-sm text-gray-400 mb-1">Building Smart Softwares for Modern Businesses</p>
              <p className="text-sm text-gray-400">Tamilnadu, India</p>
            </div>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <a href="mailto:info@torotech.in" className="block hover:text-primary-400 transition-colors">
                  www.torotech.in
              </a>
              <a href="mailto:info@torotech.in" className="block hover:text-primary-400 transition-colors">
                  business@torotech.in
              </a>
              <p className="text-gray-500">Phone: +91 9994481981</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="grid grid-cols-4 gap-4 w-fit">
              <a
                href="https://www.linkedin.com/company/toro-techworks/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/toro__tech?igsh=NnE5Z3dlcXF0aGI5"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-pink-400 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.95 1.6a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
              </a>
              <a
                href="https://x.com/torotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.901 2H22l-6.77 7.738L23.2 22h-6.24l-4.89-6.636L6.26 22H3.16l7.242-8.278L.8 2h6.4l4.42 6.006L18.9 2Zm-1.087 18.14h1.717L6.282 3.766H4.44L17.814 20.14Z" />
                </svg>
              </a>
              <a
                href="https://github.com/torotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.595 2 12.262c0 4.534 2.865 8.38 6.839 9.737.5.096.682-.222.682-.493 0-.243-.009-.888-.014-1.744-2.782.615-3.369-1.376-3.369-1.376-.455-1.184-1.11-1.5-1.11-1.5-.908-.636.069-.624.069-.624 1.004.073 1.532 1.055 1.532 1.055.892 1.563 2.341 1.112 2.91.85.091-.664.349-1.112.635-1.368-2.221-.259-4.555-1.139-4.555-5.071 0-1.12.389-2.036 1.028-2.754-.103-.26-.446-1.302.098-2.714 0 0 .84-.276 2.75 1.052A9.327 9.327 0 0 1 12 7.06c.85.004 1.707.118 2.507.346 1.909-1.328 2.748-1.052 2.748-1.052.546 1.412.203 2.454.1 2.714.64.718 1.027 1.634 1.027 2.754 0 3.942-2.338 4.809-4.566 5.063.359.317.679.944.679 1.902 0 1.372-.012 2.477-.012 2.814 0 .274.18.594.688.492C19.138 20.639 22 16.794 22 12.262 22 6.595 17.523 2 12 2z" />
                </svg>
              </a>
              <a
                href="https://behance.net/torotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-400 transition-all duration-300"
                aria-label="Behance"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.072 10.525c.642 0 1.142-.487 1.142-1.11 0-.698-.563-1.103-1.142-1.103H5.886v2.213h2.186Zm.128 4.06c.68 0 1.28-.37 1.28-1.168 0-.816-.6-1.224-1.28-1.224H5.886v2.392H8.2ZM14.872 9.216h4.203V8.2h-4.203v1.017Zm6.128 4.9h-4.094c.084.76.64 1.2 1.448 1.2.61 0 1.02-.225 1.32-.62h1.2c-.316 1.06-1.31 1.87-2.568 1.87-1.74 0-2.97-1.27-2.97-3.03 0-1.792 1.244-3.065 2.95-3.065 1.72 0 2.814 1.266 2.814 3.12 0 .17-.01.35-.02.525ZM16.93 13h2.66c-.073-.74-.53-1.28-1.3-1.28-.79 0-1.25.53-1.36 1.28ZM1.5 5.5h7.03c1.79 0 2.95 1.03 2.95 2.62 0 1.13-.58 1.9-1.5 2.2v.03c1.25.18 2.04 1.26 2.04 2.67 0 1.93-1.49 3.07-3.5 3.07H1.5V5.5Z" />
                </svg>
              </a>
              <a
                href="https://facebook.com/torotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-blue-500 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12.07C22 6.507 17.523 2 12 2S2 6.507 2 12.07c0 5.018 3.657 9.178 8.438 9.93v-7.024H7.898v-2.906h2.54V9.845c0-2.52 1.492-3.913 3.777-3.913 1.094 0 2.238.196 2.238.196v2.476h-1.26c-1.243 0-1.63.775-1.63 1.57v1.896h2.773l-.443 2.906h-2.33V22c4.78-.752 8.437-4.912 8.437-9.93Z" />
                </svg>
              </a>
              <a
                href="https://reddit.com/r/torotech"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-orange-400 transition-all duration-300"
                aria-label="Reddit"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14.23 15.26c-.44.44-1.21.65-2.23.65s-1.79-.21-2.23-.65a.75.75 0 1 0-1.06 1.06c.75.75 1.92 1.09 3.29 1.09s2.54-.34 3.29-1.09a.75.75 0 1 0-1.06-1.06ZM9.5 13.25a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                  <path d="M22 12a2.75 2.75 0 0 0-4.68-1.97c-1.2-.8-2.8-1.32-4.56-1.4l.77-3.63 2.52.54a1.75 1.75 0 1 0 .31-1.48l-3.05-.65a.75.75 0 0 0-.89.58l-.92 4.35c-1.79.06-3.42.58-4.64 1.4A2.75 2.75 0 1 0 4 12c0 .34.06.67.17.98a4.9 4.9 0 0 0-.17 1.27c0 2.83 3.58 5.13 8 5.13s8-2.3 8-5.13c0-.43-.06-.85-.18-1.26.12-.32.18-.65.18-.99Zm-18.5 0a1.25 1.25 0 1 1 2.37.56.75.75 0 0 0-.04.72c.09.18.17.5.17.97 0 1.89 2.84 3.63 6.5 3.63s6.5-1.74 6.5-3.63c0-.46.08-.78.17-.96a.75.75 0 0 0-.04-.73A1.25 1.25 0 1 1 20.5 12c0 .25-.07.49-.2.69a.75.75 0 0 0-.1.62c.13.41.2.78.2 1.13 0 3.72-4.11 6.63-9.4 6.63S1.6 18.16 1.6 14.44c0-.35.07-.73.2-1.13a.75.75 0 0 0-.1-.62A1.25 1.25 0 0 1 3.5 12Z" />
                </svg>
              </a>
              <a
                href="mailto:business@torotech.in"
                className="order-first p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-700/50 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Toro Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
