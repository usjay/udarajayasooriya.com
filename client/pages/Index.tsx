// src/pages/Index.tsx
import { useState, useEffect } from "react";
import { ChevronDown, Github, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { imageList } from "@/lib/imagehelper";

export default function Index() {
  const [activeNav, setActiveNav] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const totalScroll = documentHeight - windowHeight;
      const progress = totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0;
      setScrollProgress(progress);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "education",
        "leadership",
        "interests",
        "gallery",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveNav(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveNav(sectionId);
    }
  };

  return (
    <div className="bg-background text-foreground">
      {/* Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-400 to-blue-600 z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold gradient-text">Udara Jayasooriya</div>
            <div className="hidden md:flex gap-8">
              {[
                "home",
                "about",
                "skills",
                "projects",
                "experience",
                "education",
                "leadership",
                "interests",
                "gallery",
                "contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link capitalize text-sm font-medium ${
                    activeNav === item ? "active" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-transparent" />
        <div className="section-container relative z-10 text-center">
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-blue-500 overflow-hidden bg-secondary">
              <img
                src={imageList[23]}
                alt="Udara Lakshan Jayasooriya"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
            Udara Lakshan Jayasooriya
          </h1>
          <p className="text-2xl md:text-3xl gradient-text mb-6">
            Software Engineer (.NET)
          </p>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Passionate developer specializing in backend and full-stack development with C# and .NET. Project leader, organizer, researcher, and technology seeker. Athlete, social worker, and tech enthusiast.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="mailto:udarajayasooriya2307@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2"
            >
              <Mail size={20} />
              Get in Touch
            </a>
            <button
              onClick={() => scrollToSection("about")}
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Learn More
            </button>
          </div>
          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce"
          >
            <ChevronDown size={32} className="text-blue-400" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container bg-secondary/50">
        <h2 className="section-title">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={imageList[23]}
              alt="Udara at beach"
              className="rounded-lg shadow-2xl shadow-blue-500/20"
            />
          </div>
          <div>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              I'm a passionate <strong>BSc IT graduate</strong> (2025) from Rajarata University of Sri Lanka with extensive experience in backend and full-stack development. My expertise spans <strong>C#</strong>, <strong>.NET</strong>, REST APIs, and MySQL database design.
            </p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Beyond coding, I'm a dedicated <strong>athlete and social worker</strong>. I played rugby at university level, earned the position of <strong>School Rugby Captain</strong> in 2018, and remain active in multiple sports including table tennis and swimming. I'm also deeply involved in community service and have a passion for technology research and innovation.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/usjay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <Github size={24} />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/udara-jayasooriya"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
              <a
                href="https://medium.com/@udarajayasooriya2307/simplifying-data-manipulation-in-c-with-linq-eccecd9e3c1f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <ExternalLink size={24} />
                Medium
              </a>
              <a
                href="tel:+94765712855"
                className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <Phone size={24} />
                +94 76 571 2855
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8">
              Languages & Frameworks
            </h3>
            <div className="space-y-4">
              {[
                "C#",
                ".NET Framework & Core",
                "JavaScript & TypeScript",
                "Vue.js & React",
                "React Native",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="font-semibold text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-8">
              Backend & Architecture
            </h3>
            <div className="space-y-4">
              {[
                "REST API Development",
                "MySQL & Database Design",
                "JWT Authentication",
                "Role-Based Access Control",
                "Payment Gateway Integration",
                "Docker & Containerization",
                "CI/CD Pipelines",
              ].map((skill) => (
                <div key={skill} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  <span className="font-semibold text-gray-200">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-blue-400 mb-8">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-4">
            {[
              "Git",
              "GitHub",
              "Jira",
              "Visual Studio",
              "VS Code",
              "Docker",
              "MySQL Workbench",
              "Postman",
              "Figma",
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-secondary rounded-full text-blue-300 border border-blue-500/30"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container bg-secondary/50">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Coworking Space Booking System",
              description:
                "Comprehensive backend solution for managing coworking space reservations with secure authentication and integrated payment processing.",
              tech: ["C#", ".NET", "JWT Auth", "MySQL", "Payment Gateway"],
              features: [
                "JWT Authentication",
                "Secure Payment Integration",
                "Booking Management",
                "User Roles & Permissions",
              ],
            },
            {
              title: "eKYC System",
              description:
                "Know Your Customer system with backend and frontend integration, featuring controlled access and comprehensive validation rules.",
              tech: ["C#", ".NET", "React", "MySQL", "Security"],
              features: [
                "Identity Verification",
                "Document Validation",
                "Access Control",
                "Audit Logging",
              ],
            },
            {
              title: "BNPL Backend System",
              description:
                "Buy Now Pay Later backend solution with robust REST APIs and database operations for managing payment plans.",
              tech: ["C#", ".NET", "REST APIs", "MySQL", "Payments"],
              features: [
                "Payment Plans",
                "Installment Management",
                "Customer Workflows",
                "Transaction Tracking",
              ],
            },
            {
              title: "AI-Based Home Automation System",
              description:
                "Intelligent automation system utilizing AI algorithms for smart home control and optimization.",
              tech: ["C#", ".NET", "AI", "IoT", "Automation"],
              features: [
                "Smart Device Control",
                "AI Optimization",
                "Automation Rules",
                "Real-time Monitoring",
              ],
            },
          ].map((project, index) => (
            <div key={project.title} className="project-card">
              <img
                src={imageList[index + 10]}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-blue-400 font-semibold mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-gray-300 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="project-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Software Engineer Trainee / Intern
                </h3>
                <p className="text-blue-400 font-semibold">
                  PayMedia (Pvt) Ltd
                </p>
              </div>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                Recent
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Gained hands-on experience in backend development, REST API design, and integration projects. Worked on payment processing systems and learned industry best practices in software engineering.
            </p>
            <div className="flex flex-wrap gap-2">
              {["C#", ".NET", "APIs", "MySQL", "Git"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="project-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">Sales Executive</h3>
                <p className="text-blue-400 font-semibold">
                  United Glass Lanka (Pvt) Ltd
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Developed strong communication and interpersonal skills while managing client relationships and achieving sales targets. This experience enhanced my ability to understand user needs and deliver effective solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Customer Relations", "Sales", "Communication", "Problem Solving"].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container bg-secondary/50">
        <h2 className="section-title">Education</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="project-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Bachelor of Science in Information Technology
                </h3>
                <p className="text-blue-400 font-semibold">
                  Rajarata University of Sri Lanka
                </p>
              </div>
              <span className="px-4 py-2 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                Graduating 2025
              </span>
            </div>
            <p className="text-gray-300">
              Comprehensive computer science education with focus on software engineering, database design, and advanced programming concepts. Active in university sports and community service initiatives.
            </p>
          </div>

          <div className="project-card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Advanced Level & Ordinary Level
                </h3>
                <p className="text-blue-400 font-semibold">
                  Vidyaloka College, Galle
                </p>
              </div>
            </div>
            <p className="text-gray-300">
              Secondary and tertiary education providing strong foundation in mathematics, science, and languages. Served as School Rugby Captain in 2018, demonstrating leadership and commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership & Sports Section */}
      <section id="leadership" className="section-container">
        <h2 className="section-title">Leadership & Sports</h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[22]}
                alt="School Rugby Player"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              School Rugby Player
            </h3>
            <p className="text-blue-400 font-semibold mb-3">2018</p>
            <p className="text-gray-300 mb-4">
              Passionate rugby player in school, building the foundation for my athletic excellence. Demonstrated leadership and teamwork on the rugby field, earning the position of School Rugby Captain.
            </p>
          </div>

          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[2]}
                alt="University Rugby Player"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              University Rugby Player
            </h3>
            <p className="text-blue-400 font-semibold mb-3">2025</p>
            <p className="text-gray-300 mb-4">
              Active rugby player competing at university level (Inter University Rugby Championship 2022), demonstrating exceptional teamwork, physical discipline, and tactical awareness. Proud member of the university rugby team.
            </p>
          </div>

          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[6]}
                alt="Gym Training"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Fitness & Multi-Sport Athlete
            </h3>
            <p className="text-blue-400 font-semibold mb-3">Ongoing</p>
            <p className="text-gray-300 mb-4">
              Committed to physical fitness and active in gym training. Competitive in swimming, football, cricket, and other sports. Maintain rigorous fitness standards while balancing professional and academic commitments.
            </p>
          </div>

          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[0]}
                alt="Social Work & Event Organization"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Project Leader & Organizer
            </h3>
            <p className="text-blue-400 font-semibold mb-3">Ongoing</p>
            <p className="text-gray-300 mb-4">
              Lead projects with strategic vision and excellent organizational skills. Coordinate teams, manage events, and drive initiatives to successful completion. Demonstrated ability to organize complex projects and community activities.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Football", emoji: "⚽" },
            { title: "Cricket", emoji: "🏏" },
            { title: "Gym Training", emoji: "💪" },
            { title: "Sports Watching", emoji: "📺" },
            { title: "Reading", emoji: "📚" },
            { title: "Event Organizing", emoji: "🎯" },
          ].map((activity) => (
            <div
              key={activity.title}
              className="project-card text-center py-8"
            >
              <div className="text-4xl mb-3">{activity.emoji}</div>
              <h3 className="text-xl font-bold text-white">
                {activity.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Interests & Hobbies Section */}
      <section id="interests" className="section-container bg-secondary/50">
        <h2 className="section-title">Interests & Hobbies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[14]}
                alt="Travel"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Traveller</h3>
            <p className="text-gray-300">
              Passionate about exploring new cultures, destinations, and experiences. Travel enriches my perspective and fuels creativity in both personal and professional endeavors.
            </p>
          </div>

          

          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[15]}
                alt="Technology & Research"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Researcher & Technology Seeker
            </h3>
            <p className="text-gray-300">
              Deep thinker and continuous learner with keen interest in emerging technologies, AI, and innovation. Actively research new methodologies and industry trends. Published on Medium with articles on C# and LINQ.
            </p>
          </div>

          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[19]}
                alt="Social Work"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">Social Worker</h3>
            <p className="text-gray-300">
              Dedicated to social responsibility and community service. Actively involved in initiatives that make positive impact on society and vulnerable populations.
            </p>
          </div>

          <div className="project-card">
            <div className="relative mb-6 overflow-hidden rounded-lg h-64">
              <img
                src={imageList[16]}
                alt="Home Automation"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Home Automation Enthusiast
            </h3>
            <p className="text-gray-300">
              Fascinated by smart home technologies and automation systems. Explore IoT solutions and innovative ways to enhance living spaces through technology.
            </p>
          </div>

          
          
        </div>

        <div className="mt-12 p-8 bg-card rounded-lg border border-border">
          <h3 className="text-2xl font-bold text-white mb-4">
            Other Passions
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Geopolitics",
              "Law & Legal Studies",
              "Politics",
              "Science & Research",
              "Philosophy",
              "Sustainable Living",
            ].map((interest) => (
              <div key={interest} className="flex items-center gap-3">
                <span className="w-2 h-2 bg-blue-400 rounded-full" />
                <span className="text-gray-300">{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-container">
        <h2 className="section-title">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "School Rugby Days", category: "Sports" },
            { title: "Inter University Rugby Championship 2022", category: "Sports" },
            { title: "Travel Adventures", category: "Travel" },
            { title: "Fitness Training", category: "Sports" },
            { title: "Social Work & Event Organization", category: "Community" },
            { title: "Community Engagement", category: "Community" },
            { title: "Leadership & Mentoring", category: "Community" },
            { title: "Team Tournament", category: "Sports" },
          ].map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg h-64 cursor-pointer"
            >
              <img
                src={imageList[index + 8]}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold">{item.title}</h3>
                <p className="text-blue-400 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container bg-secondary/50">
        <h2 className="section-title">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <a
              href="mailto:udarajayasooriya2307@gmail.com"
              className="project-card hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Email</h3>
                  <p className="text-gray-400 text-sm">
                    udarajayasooriya2307@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <a href="tel:+94765712855" className="project-card hover:shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">Phone</h3>
                  <p className="text-gray-400 text-sm">+94 76 571 2855</p>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/usjay"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Github className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">GitHub</h3>
                  <p className="text-gray-400 text-sm">github.com/usjay</p>
                </div>
              </div>
            </a>

            <a
              href="www.linkedin.com/in/udara-jayasooriya-207028246"
              target="_blank"
              rel="noopener noreferrer"
              className="project-card hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <Linkedin className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">
                    linkedin.com/in/udara-jayasooriya
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className="project-card bg-gradient-to-r from-blue-500/10 to-blue-600/10 border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">
              Let's Connect
            </h3>
            <p className="text-gray-300 text-center mb-6">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or just have a chat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:udarajayasooriya2307@gmail.com"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Send Email
              </a>
              <a
                href="https://linkedin.com/in/udara-jayasooriya"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/80 border-t border-border py-12">
        <div className="section-container text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Udara Lakshan Jayasooriya
            </h3>
            <p className="text-gray-400 mb-4">
              Software Engineer | Athlete | Social Worker | Technology Enthusiast
            </p>
          </div>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/usjay"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/udara-jayasooriya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://medium.com/@udarajayasooriya2307/simplifying-data-manipulation-in-c-with-linq-eccecd9e3c1f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <ExternalLink size={24} />
            </a>
            <a
              href="mailto:udarajayasooriya2307@gmail.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={24} />
            </a>
            <a
              href="tel:+94765712855"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <Phone size={24} />
            </a>
          </div>

          <div className="border-t border-border pt-8">
            <p className="text-gray-500 text-sm">
              © 2025 Udara Lakshan Jayasooriya. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Built with React, Tailwind CSS, and passion for technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}