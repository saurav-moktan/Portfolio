function ProjectItem({ title, description, icon, link, className = "" }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`block group ${className}`}
    >
      <div className="h-full p-6 text-white bg-black rounded-xl border border-gray-700">
        <div className="flex items-center gap-3 mb-3">
          <div
            className=" text-softWhite group-hover:text-blue-600 
            transition-colors"
          >
            {icon}
          </div>
          <h3
            className="text-white hover:bg-clip-text hover:text-transparent 
            group-hover:text-blue-500 transition duration-300"
          >
            {title}
          </h3>
        </div>
        <p className="text-softWhite text-sm">{description}</p>
      </div>
    </a>
  );
}

export default ProjectItem;
