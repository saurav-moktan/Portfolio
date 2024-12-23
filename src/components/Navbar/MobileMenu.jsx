import { RxCross1 } from "react-icons/rx";
import Navigation from "./Navigation";
import SocialLinks from "./SocialLinks";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      {/* Sidebar Menu */}
      <div className="fixed inset-y-0 right-0 w-64 z-50 p-6">
        {/* Close Button */}
        <div className="flex justify-end mb-8">
          <button
            onClick={onClose}
            className="p-2 rounded-md text-white/70 hover:text-white focus:outline-none"
          >
            <RxCross1 className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation and Social Links */}
        <nav className="flex flex-col space-y-8 bg-black bg-opacity-50 backdrop-blur-lg px-4 py-4">
          {/* Navigation Links */}
          <div className="flex flex-col space-y-4">
            <Navigation />
          </div>
          {/* Social Links */}
          <div className="pt-4 border-t border-white/10">
            <SocialLinks />
          </div>
        </nav>
      </div>
    </div>
  );
}
