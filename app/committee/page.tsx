"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Users, Award, Calendar, MapPin } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function CommitteePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const executiveCommittee = {
    faculty: [
      { 
        name: "Dr. Rajesh Kumar", 
        position: "Faculty Advisor", 
        image: "/placeholder.svg?height=200&width=200",
        department: "Mechanical Engineering",
        email: "rajesh.kumar@cusat.ac.in",
        phone: "+91 98765 43210",
        experience: "15+ years in Automotive Engineering",
        specialization: "Vehicle Dynamics & Control Systems"
      },
      { 
        name: "Prof. Meera Nair", 
        position: "Co-Faculty Advisor", 
        image: "/placeholder.svg?height=200&width=200",
        department: "Automotive Engineering",
        email: "meera.nair@cusat.ac.in",
        phone: "+91 98765 43211",
        experience: "12+ years in Research & Development",
        specialization: "Electric Vehicle Technology"
      },
    ],
    students: [
      { 
        name: "Arjun Krishnan", 
        position: "President", 
        image: "/placeholder.svg?height=200&width=200",
        year: "Final Year",
        department: "Mechanical Engineering",
        email: "arjun.president@sae.cusat.ac.in",
        achievements: ["Formula SAE Team Lead", "Best Innovation Award 2023", "National Competition Winner"],
        responsibilities: ["Strategic Planning", "Team Leadership", "External Relations"]
      },
      { 
        name: "Priya Nair", 
        position: "Vice President", 
        image: "/placeholder.svg?height=200&width=200",
        year: "Third Year",
        department: "Automotive Engineering",
        email: "priya.vp@sae.cusat.ac.in",
        achievements: ["Baja SAE Design Lead", "Technical Publication Author", "Industry Connect Coordinator"],
        responsibilities: ["Operations Management", "Academic Coordination", "Industry Partnerships"]
      },
      { 
        name: "Rohit Menon", 
        position: "Technical Head", 
        image: "/placeholder.svg?height=200&width=200",
        year: "Final Year",
        department: "Mechanical Engineering",
        email: "rohit.tech@sae.cusat.ac.in",
        achievements: ["CAD Design Expert", "Workshop Coordinator", "Technical Innovation Lead"],
        responsibilities: ["Technical Projects", "Workshop Management", "Innovation Initiatives"]
      },
      { 
        name: "Sneha Pillai", 
        position: "Secretary", 
        image: "/placeholder.svg?height=200&width=200",
        year: "Third Year",
        department: "Computer Science",
        email: "sneha.secretary@sae.cusat.ac.in",
        achievements: ["Event Management Expert", "Documentation Lead", "Digital Platform Developer"],
        responsibilities: ["Documentation", "Meeting Coordination", "Digital Management"]
      },
      { 
        name: "Karthik Raj", 
        position: "Treasurer", 
        image: "/placeholder.svg?height=200&width=200",
        year: "Third Year",
        department: "Mechanical Engineering",
        email: "karthik.treasurer@sae.cusat.ac.in",
        achievements: ["Financial Planning Expert", "Budget Management", "Cost Optimization"],
        responsibilities: ["Financial Management", "Budget Planning", "Resource Allocation"]
      },
      { 
        name: "Ananya Varma", 
        position: "Events Coordinator", 
        image: "/placeholder.svg?height=200&width=200",
        year: "Second Year",
        department: "Automotive Engineering",
        email: "ananya.events@sae.cusat.ac.in",
        achievements: ["Workshop Organizer", "Industry Relations Manager", "Event Innovation Lead"],
        responsibilities: ["Event Planning", "Workshop Coordination", "Member Engagement"]
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      <Navigation currentPage="committee" />
      
      <div id="main-content" className="pt-20">
        {/* Animated Header Section */}
        <section className="relative bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full animate-pulse"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-indigo-400/10 rounded-full animate-bounce delay-1000"></div>
            <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-purple-400/10 rounded-full animate-ping delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-6">
                <Users className="w-12 h-12 text-blue-300 mr-4" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent relative">
                  Executive Committee
                  {/* Mobile blur effect */}
                  <div className="md:hidden absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-48 h-2 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent blur-md"></div>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
                Meet the dedicated leaders driving SAE CUSAT towards excellence in automotive engineering
                and innovation. Our committee combines academic expertise with practical experience.
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-16">
          {/* Faculty Advisors */}
          <section className="mb-20">
            <div className={`text-center mb-12 transition-all duration-800 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative">
                  Faculty Advisors
                  {/* Mobile blur effect */}
                  <div className="md:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Our experienced faculty members provide guidance, mentorship, and academic support
                to ensure the success of our initiatives and maintain the highest standards of excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
              {executiveCommittee.faculty.map((member, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 bg-gradient-to-br from-white to-blue-50 border-0 shadow-lg">
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-8">
                        <div className="w-40 h-40 mx-auto relative">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="w-full h-full rounded-full object-cover border-4 border-blue-200 group-hover:border-blue-400 transition-all duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">
                        {member.name}
                      </h3>
                      <Badge variant="outline" className="mb-4 bg-blue-100 text-blue-800 border-blue-300 px-4 py-1">
                        {member.position}
                      </Badge>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-center text-gray-600">
                          <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{member.department}</span>
                        </div>
                        <div className="flex items-center justify-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{member.experience}</span>
                        </div>
                        <p className="text-sm text-gray-700 font-medium">{member.specialization}</p>
                      </div>
                      
                      <div className="flex justify-center space-x-4">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.location.href = `mailto:${member.email}`}
                          className="group/btn hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                        >
                          <Mail className="w-4 h-4 mr-2 group-hover/btn:text-blue-600" />
                          Email
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => window.location.href = `tel:${member.phone}`}
                          className="group/btn hover:bg-green-50 hover:border-green-300 transition-all duration-300"
                        >
                          <Phone className="w-4 h-4 mr-2 group-hover/btn:text-green-600" />
                          Call
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Student Executive Committee */}
          <section>
            <div className={`text-center mb-12 transition-all duration-800 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 relative">
                  Student Executive Committee
                  {/* Mobile blur effect */}
                  <div className="md:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent blur-sm"></div>
                </h2>
              </div>
              <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                Our student leaders bring passion, innovation, and fresh perspectives to drive
                the organization forward and inspire the next generation of automotive engineers.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveCommittee.students.map((member, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${900 + index * 150}ms` }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-gray-50 border-0 shadow-md">
                    <CardContent className="p-6 h-full flex flex-col">
                      <div className="text-center mb-6">
                        <div className="relative mb-4">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="w-24 h-24 rounded-full mx-auto object-cover border-3 border-blue-100 group-hover:border-blue-300 transition-all duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        
                        <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                          {member.name}
                        </h3>
                        <Badge variant="outline" className="mb-2 bg-blue-50 text-blue-700 border-blue-200">
                          {member.position}
                        </Badge>
                        <p className="text-sm text-gray-600 mb-1">{member.year}</p>
                        <p className="text-sm text-gray-600 mb-4">{member.department}</p>
                      </div>
                      
                      <div className="flex-grow space-y-4">
                        {member.achievements && (
                          <div>
                            <p className="text-xs font-semibold text-gray-700 mb-2 flex items-center">
                              <Award className="w-3 h-3 mr-1 text-yellow-500" />
                              Key Achievements:
                            </p>
                            <div className="space-y-1">
                              {member.achievements.slice(0, 2).map((achievement, i) => (
                                <Badge key={i} variant="secondary" className="text-xs mr-1 mb-1 bg-yellow-50 text-yellow-800 border-yellow-200">
                                  {achievement}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {member.responsibilities && (
                          <div>
                            <p className="text-xs font-semibold text-gray-700 mb-2">Key Responsibilities:</p>
                            <div className="space-y-1">
                              {member.responsibilities.slice(0, 2).map((responsibility, i) => (
                                <Badge key={i} variant="outline" className="text-xs mr-1 mb-1 bg-gray-50 text-gray-700">
                                  {responsibility}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex justify-center space-x-3 mt-4 pt-4 border-t border-gray-100">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => window.location.href = `mailto:${member.email}`}
                          className="group/btn hover:bg-blue-50 transition-all duration-300"
                        >
                          <Mail className="w-4 h-4 group-hover/btn:text-blue-600" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="group/btn hover:bg-blue-50 transition-all duration-300"
                        >
                          <Linkedin className="w-4 h-4 group-hover/btn:text-blue-600" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className={`mt-20 transition-all duration-800 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Card className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 text-white border-0 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
              <CardContent className="p-8 md:p-12 text-center relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 relative">
                  Want to Join Our Team?
                  {/* Mobile blur effect */}
                  <div className="md:hidden absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm"></div>
                </h3>
                <p className="text-blue-200 mb-8 max-w-2xl mx-auto text-lg">
                  We're always looking for passionate individuals to join our committee and contribute 
                  to the advancement of automotive engineering at CUSAT.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-white text-slate-900 hover:bg-gray-100 font-semibold px-8 py-3 group transition-all duration-300"
                    onClick={() => window.location.href = 'mailto:sae@cusat.ac.in?subject=Committee Application'}
                  >
                    Apply Now
                    <Mail className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline" 
                    className="border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-3"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
        
        <Footer />
      </div>
    </div>
  )
}
