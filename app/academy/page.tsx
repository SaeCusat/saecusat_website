import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar, Star } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function AcademyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="academy" />

      <div id="main-content">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-blue-800 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">SAE Academy</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Comprehensive learning platform for automotive engineering excellence - Coming Soon!
          </p>
          <div className="inline-flex items-center bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full font-semibold">
            <Star className="w-4 h-4 mr-2" />
            Under Development
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-navy-900 mb-4 relative animate-fade-in-up">
                <span className="relative z-10">What's Coming</span>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-navy-900 to-blue-600 rounded-full"></div>
              </h2>
              <p className="text-lg text-gray-600">
                SAE Academy will be your gateway to advanced automotive engineering education, featuring comprehensive
                courses, hands-on projects, and industry insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-navy-900">Comprehensive Courses</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Structured learning paths covering vehicle dynamics, engine design, aerodynamics, and modern
                    automotive technologies.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-navy-900">Expert Mentorship</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Learn from industry professionals and experienced faculty members through personalized guidance and
                    mentorship programs.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-navy-900">Flexible Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Self-paced learning modules with flexible schedules to accommodate your academic and project
                    commitments.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>

            {/* Planned Features */}
            <div className="bg-gray-50 rounded-lg p-8 mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Planned Features</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy-900">Learning Modules</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Vehicle Dynamics & Control</li>
                    <li>• Engine Design & Performance</li>
                    <li>• Aerodynamics & CFD Analysis</li>
                    <li>• Electric Vehicle Technology</li>
                    <li>• Manufacturing Processes</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-navy-900">Interactive Features</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Virtual Labs & Simulations</li>
                    <li>• Project-Based Learning</li>
                    <li>• Peer Collaboration Tools</li>
                    <li>• Progress Tracking</li>
                    <li>• Certification Programs</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Development Timeline</h3>
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-navy-900">Phase 1: Platform Development</div>
                      <div className="text-sm text-gray-600">Q2 2024 - Core platform and user interface</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-navy-900">Phase 2: Content Creation</div>
                      <div className="text-sm text-gray-600">Q3 2024 - Course materials and interactive content</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-navy-900">Phase 3: Beta Testing</div>
                      <div className="text-sm text-gray-600">Q4 2024 - Limited beta release for SAE members</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="flex-1 text-left">
                      <div className="font-semibold text-navy-900">Phase 4: Full Launch</div>
                      <div className="text-sm text-gray-600">Q1 2025 - Public launch with all features</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-navy-900 text-white rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6 text-blue-200">
                Be the first to know when SAE Academy launches. Get exclusive early access and updates.
              </p>
              <div className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <Button className="bg-white text-navy-900 hover:bg-gray-100">Notify Me</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
