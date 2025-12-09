const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          {/* Left: Logo + Title */}
          <div className="flex items-center mr-8">
            <img src="/arm.svg" alt="GymBro Logo" className="h-8 w-8" />
            <span className="ml-2 font-bold text-xl">GymBro</span>
          </div>

          {/* Right: Links */}
          <div className="flex space-x-6 ml-auto">
            <a href="#" className="hover:text-blue-400 transition-colors">
              User Info
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Dashboard
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
