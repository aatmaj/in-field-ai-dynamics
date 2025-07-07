
import { ArrowRight, Users, TrendingUp, Zap, Target, Shield, CheckCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">InField AI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#problem" className="text-gray-600 hover:text-blue-600 transition-colors">Problem</a>
            <a href="#solution" className="text-gray-600 hover:text-blue-600 transition-colors">Solution</a>
            <a href="#audience" className="text-gray-600 hover:text-blue-600 transition-colors">Who We Serve</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">
            Request a Pilot
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powered by AI
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From Static Field Plans to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Intelligent Execution
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            InField AI helps pharma commercial teams adapt faster, boost rep impact, and turn Rx, HCP, and territory signals into intelligent, real-time actions on the ground.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
              Request a Pilot
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-blue-200 hover:bg-blue-50">
              Book Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 rounded-full text-red-800 text-sm font-medium mb-6">
            <Target className="w-4 h-4 mr-2" />
            Why We Built InField AI
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Pharma's Execution Bottleneck Is No Longer Insight — It's Adaptation
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-gray-600">
            <p>
              Most pharma field plans break down within weeks. Reps lose touch with dynamic HCP needs. 
              SFE teams lack real-time visibility. Territory decisions lag behind what's happening on the ground.
            </p>
            <p className="text-blue-600 font-semibold">
              InField AI changes that. It bridges the gap between strategy and execution using real-time data, signals, and AI reasoning.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What InField AI Does
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforming execution for reps and commercial teams
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">For Reps</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Instant AI-powered briefing for every HCP visit</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Suggested actions based on market signals, plan deviation, or rep activity gaps</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Alerts for Rx shifts, digital events, or missed engagement triggers</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">For SFE & Commercial Leads</h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Plan vs Execution dashboards with deviation insights</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>Signal-driven territory realignment suggestions</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <p>HCP-Rep-Plan graph for targeting and activity orchestration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="audience" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Who Should Talk to Us
          </h2>
          <div className="bg-blue-50 rounded-2xl p-8 mb-8">
            <p className="text-lg text-gray-700 mb-6">
              If you're a <strong>CIO</strong>, <strong>Commercial Excellence Lead</strong>, or <strong>SFE Manager</strong> in a pharmaceutical company, and you're exploring:
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">AI for field force optimization</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">Territory execution intelligence</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <p className="text-gray-700 font-medium">Dynamic planning and rep enablement</p>
              </div>
            </div>
            <p className="text-lg font-semibold text-blue-600">
              Let's talk. We're onboarding 2 early partners now.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            See InField AI in Action (Coming Soon)
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Want to see how a rep's day transforms with AI? We're building a visual walkthrough. 
            Until then, request a short call or live demo.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4">
            Request Pilot Access
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            We're Onboarding Early Pilot Customers
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's explore how InField AI can support your territory, therapy area, or commercial use case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4">
              <Mail className="w-5 h-5 mr-2" />
              phani@infieldai.co
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
              Contact Form
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InField AI</span>
              </div>
              <p className="text-gray-400 text-sm">
                From static field plans to intelligent execution — powered by AI for pharmaceutical commercial teams.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Solutions</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">AI Rep Briefings</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Execution Analytics</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Signal Optimization</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pilot Program</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-300 mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="mailto:phani@infieldai.co" className="hover:text-white transition-colors">phani@infieldai.co</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Request Pilot</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book Discovery Call</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 InField AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
