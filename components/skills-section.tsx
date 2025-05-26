"use client"

import { useEffect, useState, ReactNode } from "react"
import { Code, Database, Globe, GitBranch, Cloud, Smartphone } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Type definitions
type ColorKey = 'blue' | 'green' | 'purple' | 'orange'

interface ColorClasses {
  bg: string
  text: string
  progress: string
}

interface SkillItem {
  name: string
  level: number
}

interface SkillCategory {
  category: string
  icon: ReactNode
  color: ColorKey
  items: SkillItem[]
}

// Color mapping
const colorMap: Record<ColorKey, ColorClasses> = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    progress: "bg-blue-600",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    progress: "bg-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    text: "text-purple-600",
    progress: "bg-purple-600",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    progress: "bg-orange-600",
  },
}

// Skills data
const skillsData: SkillCategory[] = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6" />,
    color: "blue",
    items: [
      { name: "React.js", level: 90 },
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "HTML5 & CSS3", level: 90 },
      { name: "Responsive Design", level: 85 },
    ],
  },
  {
    category: "Backend Development",
    icon: <Database className="w-6 h-6" />,
    color: "green",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "REST API Development", level: 85 },
      { name: "C Programming", level: 75 },
    ],
  },
  {
    category: "Database & Cloud",
    icon: <Cloud className="w-6 h-6" />,
    color: "purple",
    items: [
      { name: "MongoDB", level: 80 },
      { name: "Firebase", level: 75 },
      { name: "Microsoft Azure", level: 70 },
      { name: "Database Design", level: 75 },
    ],
  },
  {
    category: "Tools & Technologies",
    icon: <GitBranch className="w-6 h-6" />,
    color: "orange",
    items: [
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Postman", level: 80 },
      { name: "React Native", level: 75 },
    ],
  },
]

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})

  useEffect(() => {
    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          
          // Animate progress bars with staggered timing
          let delay = 0
          const staggerDelay = 50
          
          skillsData.forEach((category) => {
            category.items.forEach((skill) => {
              setTimeout(() => {
                setAnimatedValues((prev) => ({
                  ...prev,
                  [skill.name]: skill.level,
                }))
              }, 500 + delay)
              delay += staggerDelay
            })
          })
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' },
    )

    // Observe the skills section
    const element = document.getElementById("skills")
    if (element) {
      observer.observe(element)
    }

    // Cleanup observer on component unmount
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels across various technologies and
              tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {skillsData.map((category, index) => {
              const colorClasses = colorMap[category.color]
              return (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center space-x-3">
                      <div
                        className={`w-12 h-12 rounded-lg ${colorClasses.bg} ${colorClasses.text} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        {category.icon}
                      </div>
                      <span className="text-slate-900">{category.category}</span>
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {category.items.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-700 font-medium">{skill.name}</span>
                          <span className="text-slate-500 text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${colorClasses.progress}`}
                            style={{
                              width: `${animatedValues[skill.name] || 0}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Additional Skills */}
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Additional Expertise</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Web Technologies</h4>
                <p className="text-slate-600 text-sm">
                  SEO Optimization, Performance Tuning, Cross-browser Compatibility
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Mobile Development</h4>
                <p className="text-slate-600 text-sm">React Native, Cross-platform Development, Mobile UI/UX</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">Problem Solving</h4>
                <p className="text-slate-600 text-sm">Algorithm Design, Data Structures, Competitive Programming</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
