import { Link } from "react-router-dom";

const navigationItems = [
  { name: "Home", to: "/" },
  { name: "My Project", to: "/project" },
  { name: "About Me", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navigation() {
  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.to}
          className="text-white/70 hover:text-white transition-colors 
          duration-400 text-x font-medium"
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
