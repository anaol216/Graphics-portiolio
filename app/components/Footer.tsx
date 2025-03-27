const CoolFooter: React.FC = () => {
    return (
      <footer className="relative bg-black bg-opacity-80 backdrop-filter backdrop-blur-lg shadow-2xl mt-12 py-10 px-6 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Contact/Info */}
          <div className="mb-6 md:mb-0 text-white">
            <h4 className="text-xl font-semibold mb-3">Get In Touch</h4>
            <p className="text-sm text-gray-300">
              Email: anaol.atinafu-ug@aau.edu.et
              <br />
              Phone: +251 978967912
            </p>
          </div>
  
          {/* Center Section: Social Links (Animated) */}
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a
              href="https://github.com/yourusername"
              className="text-white hover:text-purple-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-2xl"></i> {/* Font Awesome GitHub icon (replace with your preference) */}
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-white hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-2xl"></i> {/* Font Awesome LinkedIn icon (replace with your preference) */}
            </a>
            <a
              href="https://twitter.com/yourusername"
              className="text-white hover:text-cyan-400 transition-colors duration-300 transform hover:scale-110"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter text-2xl"></i> {/* Font Awesome Twitter icon (replace with your preference) */}
            </a>
          </div>
  
          {/* Right Section: Unique Visual Element */}
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 animate-pulse"></div>
            <div className="absolute inset-4 bg-black bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-full"></div>
            {/* You can add a subtle image or icon in the inner circle */}
          </div>
        </div>
        {/* Bottom Section: Copyright */}
        <div className="text-center mt-8 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Anaol A.| For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." (John 3:16) 
        </div>
  
        {/* Subtle Animated Background Element */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-l from-green-500 to-purple-500 rounded-full blur-2xl animate-pulse"></div>
        </div>
      </footer>
    );
  };
  export default CoolFooter;