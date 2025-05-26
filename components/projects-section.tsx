"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, Calendar, Users, TrendingUp } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "EduNex – AI-powered Learning Ecosystem",
      description:
        "A comprehensive learning platform that revolutionizes education through AI integration. Features dynamic frontend in React Native, robust Node.js backend, and intelligent chatbot automation.",
      period: "June 2023 – August 2024",
      technologies: ["React Native", "Node.js", "MongoDB", "OpenAI API"],
      highlights: [
        "Increased user engagement by 50%",
        "Real-time user data handling",
        "Role-based access control",
        "Chatbot automation",
      ],
      icon: <Users className="w-6 h-6" />,
      color: "blue",
    },
    {
      title: "DevSphere – Real-time Markdown Blog Editor",
      description:
        "An interactive blogging platform with live Markdown preview capabilities. Built with modern React.js and CodeMirror for seamless content creation and editing experience.",
      period: "April 2024 – May 2024",
      technologies: ["React.js", "CodeMirror", "Node.js", "SEO"],
      highlights: ["Live Markdown preview", "SEO optimized", "Interactive editor", "Blog storage & rendering"],
      icon: <TrendingUp className="w-6 h-6" />,
      color: "green",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills in full-stack development, AI integration, and
              modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } lg:flex`}
              >
                <div className="lg:w-2/3">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            project.color === "blue" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
                          }`}
                        >
                          {project.icon}
                        </div>
                        <div>
                          <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                            {project.title}
                          </CardTitle>
                          <div className="flex items-center text-slate-500 text-sm mt-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {project.period}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-slate-600 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-slate-100 text-slate-700">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Achievements</h4>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {project.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full ${
                                project.color === "blue" ? "bg-blue-600" : "bg-green-600"
                              }`}
                            ></div>
                            <span className="text-slate-600 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-4 pt-4">
                      <Button
                        variant="outline"
                        size="sm"
                        className="group/btn hover:bg-slate-900 hover:text-white transition-all duration-200"
                      >
                        <Github className="w-4 h-4 mr-2 group-hover/btn:scale-110 transition-transform duration-200" />
                        View Code
                      </Button>
                      <Button
                        size="sm"
                        className={`${
                          project.color === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-green-600 hover:bg-green-700"
                        } text-white transition-all duration-200 hover:scale-105`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    </div>
                  </CardContent>
                </div>

                {/* Project Visual/Stats */}
                <div
                  className={`lg:w-1/3 p-6 ${
                    project.color === "blue" ? "bg-blue-50" : "bg-green-50"
                  } flex items-center justify-center`}
                >
                  <div className="text-center space-y-4">
                    <div
                      className={`w-24 h-24 rounded-full ${
                        project.color === "blue" ? "bg-blue-100" : "bg-green-100"
                      } flex items-center justify-center mx-auto`}
                    >
                      <div
                        className={`text-3xl font-bold ${
                          project.color === "blue" ? "text-blue-600" : "text-green-600"
                        }`}
                      >
                        {index === 0 ? "50%" : "100%"}
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm font-medium">
                      {index === 0 ? "User Engagement Increase" : "Real-time Performance"}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open("https://github.com/rishirai13", "_blank")}
              className="hover:bg-slate-900 hover:text-white transition-all duration-200 hover:scale-105"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
