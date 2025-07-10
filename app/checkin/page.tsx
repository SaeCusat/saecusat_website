"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, ExternalLink } from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

export default function CheckinPage() {
  const handleCheckin = () => {
    // This will redirect to the actual attendance system when it's built
    alert("Redirecting to attendance system... (To be implemented)")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation currentPage="checkin" />

      <div id="main-content">
      {/* Header */}
      <section className="bg-gradient-to-r from-navy-900 to-blue-800 text-white py-16 mt-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Lab Facility Check-in</h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Mark your attendance for using SAE lab facilities and equipment.
          </p>
        </div>
      </section>

      {/* Check-in Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="mb-8">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-navy-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-navy-900">Lab Attendance System</CardTitle>
                <CardDescription className="text-lg">
                  Click the button below to access the attendance marking system for SAE lab facilities.
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button
                  size="lg"
                  className="bg-navy-900 hover:bg-navy-800 text-white px-8 py-4 text-lg"
                  onClick={handleCheckin}
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Check-in to Lab
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-sm text-gray-500 mt-4">This will redirect you to the attendance marking system</p>
              </CardContent>
            </Card>

            {/* Lab Information */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-900">
                    <Clock className="w-5 h-5 mr-2" />
                    Lab Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-navy-900">
                    <MapPin className="w-5 h-5 mr-2" />
                    Lab Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>SAE Workshop</p>
                    <p>Mechanical Engineering Department</p>
                    <p>CUSAT Campus, Kochi</p>
                    <p className="text-gray-500">Building B, Ground Floor</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Guidelines */}
            <Card>
              <CardHeader>
                <CardTitle className="text-navy-900">Lab Usage Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• All students must check-in before using lab facilities</li>
                  <li>• Proper safety equipment must be worn at all times</li>
                  <li>• Equipment usage must be supervised by lab assistants</li>
                  <li>• Clean up your workspace after use</li>
                  <li>• Report any equipment issues immediately</li>
                  <li>• Maximum session duration: 4 hours</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  )
}
