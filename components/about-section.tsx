"use client"

import { useEffect, useState } from "react"
import { GraduationCap, Briefcase, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutSection() {
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

    const element = document.getElementById("about")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate Full Stack Developer currently pursuing my Bachelor's in Computer Science at GLA
              University. With hands-on experience in modern web technologies and a strong foundation in both frontend
              and backend development, I love creating innovative solutions that solve real-world problems.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <GraduationCap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Education</h3>
                <p className="text-slate-600 mb-2">Bachelor of Technology</p>
                <p className="text-slate-500 text-sm">Computer Science & Engineering</p>
                <p className="text-slate-500 text-sm">GLA University, Mathura</p>
                <p className="text-blue-600 font-medium text-sm">Graduating May 2025</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-300">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Experience</h3>
                <p className="text-slate-600 mb-2">Software Development Intern</p>
                <p className="text-slate-500 text-sm">THALES DIS Technology Pvt. Ltd.</p>
                <p className="text-slate-500 text-sm">Banking & Payment Services</p>
                <p className="text-green-600 font-medium text-sm">June - July 2023</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-300">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Achievements</h3>
                <p className="text-slate-600 mb-2">5-Star Coder</p>
                <p className="text-slate-500 text-sm">HackerRank (Python, Java)</p>
                <p className="text-slate-500 text-sm">250+ LeetCode Problems</p>
                <p className="text-purple-600 font-medium text-sm">Microsoft Azure Certified</p>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Bio */}
          <div className="bg-slate-50 rounded-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
                <div className="space-y-4 text-slate-600">
                  <p>
                    My passion for technology began early, and I've been dedicated to mastering the art of full-stack
                    development. During my internship at THALES DIS Technology, I worked on critical banking systems,
                    creating PAM authentication modules in C for secure Linux-based login systems.
                  </p>
                  <p>
                    I've built several impactful projects, including EduNex, an AI-powered learning ecosystem that
                    increased user engagement by 50%, and DevSphere, a real-time Markdown blog editor with live preview
                    capabilities.
                  </p>
                  <p>
                    When I'm not coding, you can find me solving algorithmic challenges on LeetCode and HackerRank,
                    where I've achieved 5-star ratings and solved over 250 problems. I'm also Microsoft Azure certified
                    and continuously learning new technologies.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Certifications</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-600">Microsoft Azure Data Fundamentals (DP-900)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-slate-600">Microsoft Azure Fundamentals (AZ-900)</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {["AI/ML", "Cloud Computing", "Open Source", "Problem Solving", "Sports"].map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
