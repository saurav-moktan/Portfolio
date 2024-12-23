import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/whoami-3F",
    icon: IoLogoGithub,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/whoami-3F",
    icon: IoLogoTwitter,
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors duration-200"
          aria-label={link.name}
        >
          <link.icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}
