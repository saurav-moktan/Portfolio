import { FaGithub, FaTerminal } from "react-icons/fa";
import { LuCode, LuUser, LuWorkflow } from "react-icons/lu";
import { CiBoxes } from "react-icons/ci";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "MedSync",
    description:
      "A modern React component Appointment Booking: Easily book appointments for different types of health checkups",
    icon: <LuCode />,
    link: "https://github.com/whoami-3F/Health-Management-System",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Video Streaming Platform",
    description: "Video Streaming Platform ",
    icon: <FaTerminal />,
    link: "https://github.com/whoami-3F/video-streaming",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "DataFlow",
    description: "Real-time data visualization framework",
    icon: <LuWorkflow />,
    link: "https://github.com/yourusername/dataflow",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "CloudStack",
    description: "Cloud infrastructure management tools",
    icon: <CiBoxes />,
    link: "https://github.com/yourusername/cloudstack",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    title: "Community Hub",
    description: "Open-source community platform",
    icon: <LuUser />,
    link: "https://github.com/yourusername/community-hub",
    className: "md:col-span-2 md:row-span-1",
  },
];

function ProjectGrid() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-center gap-2 mb-8">
        <FaGithub className="w-8 h-8 text-white" />
        <h1 className="text-3xl font-bold text-white">GitHub Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectGrid;
