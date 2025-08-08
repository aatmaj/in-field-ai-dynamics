
import { ArrowRight, Users, TrendingUp, Zap, Target, Shield, CheckCircle, BarChart3, Workflow, Settings, Database, Brain, UserCheck, Building2, Pill, Truck, FileText, Phone, ShoppingCart, Calendar, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const handleRequestAccess = () => {
    window.open('mailto:contact@paramanu.com?subject=Request Early Access&body=Hi, I would like to request early access to Paramanu. Please contact me to discuss further.', '_blank');
  };

  const handleBookPilot = () => {
    window.open('mailto:contact@paramanu.com?subject=Book a Pilot&body=Hi, I would like to book a pilot for Paramanu. Please contact me to schedule a demo and discuss implementation.', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-1 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/156d695a-4ad7-4a18-8d00-b84d76015e46.png" 
              alt="Paramanu Logo" 
              className="w-24 h-24"
            />
            <span className="text-xl font-bold text-blue-900">Paramanu</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-blue-600 transition-colors">Features</button>
            <button onClick={() => scrollToSection('solutions')} className="text-gray-600 hover:text-blue-600 transition-colors">Solutions</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleRequestAccess}>
            Request Early Access
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Transforming Pharma Field Execution
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            From Static Planning to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
              Intelligent Execution
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Paramanu transforms static field force plans into dynamic, intelligent execution for pharmaceutical companies. 
            Empower your reps with real-time signals and optimize territory execution based on enterprise data and in-field activity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" onClick={handleBookPilot}>
              Book a Pilot
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-blue-200 hover:bg-blue-50" onClick={handleRequestAccess}>
              Request Early Access
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Challenge: Static Plans in a Dynamic Market
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Field force plans become outdated the moment they're created</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Reps lack real-time insights to adapt their approach</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Territory execution deviations go unnoticed until quarterly reviews</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Missed opportunities due to delayed signal recognition</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The Solution: AI-Powered Execution Intelligence
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p>Real-time AI briefings with HCP alerts and suggested actions</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p>Territory-level analytics showing plan vs. actual execution</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p>Signal-based optimization from Rx changes and digital triggers</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                  <p>Seamless integration with existing CRM/SFE tools</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section id="features" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Intelligent Execution, Not Just Planning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI-powered platform transforms how pharmaceutical teams execute in the field
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Rep Briefings</h3>
                <p className="text-gray-600 mb-4">
                  Real-time HCP alerts, suggested actions, and intelligent insights delivered directly to your field reps
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• HCP behavior pattern alerts</li>
                  <li>• Suggested conversation starters</li>
                  <li>• Territory-specific insights</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Execution Analytics</h3>
                <p className="text-gray-600 mb-4">
                  Territory-level insights showing plan deviations and optimization opportunities
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Plan vs. actual execution tracking</li>
                  <li>• ROI impact measurement</li>
                  <li>• Predictive territory insights</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Signal-Based Optimization</h3>
                <p className="text-gray-600 mb-4">
                  Automatically detect and respond to Rx changes, digital triggers, and field feedback
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Prescription trend analysis</li>
                  <li>• Digital engagement signals</li>
                  <li>• Field feedback integration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Architecture */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Pharma Field Intelligence Architecture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end workflow connecting field activities with enterprise intelligence
            </p>
          </div>
          
          {/* Top Level - Analytics, Workflows, Integrations */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">ANALYTICS</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    <span>Territory performance tracking</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span>HCP engagement analytics</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span>ROI measurement</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">WORKFLOWS</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span>Rep scheduling</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Workflow className="w-4 h-4 text-green-600" />
                    <span>Follow up automation</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Activity tracking</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">INTEGRATIONS</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Settings className="w-3 h-3 text-gray-600" />
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 flex-1 text-center">Veeva</div>
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 flex-1 text-center">OCE</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="w-3 h-3 text-gray-600" />
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 flex-1 text-center">IQVIA</div>
                    <div className="text-xs bg-gray-100 rounded px-2 py-1 flex-1 text-center">Salesforce</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Middle Level - Ontology */}
          <div className="mb-16">
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm max-w-4xl mx-auto">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">ONTOLOGY</h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <UserCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">Reps</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">HCPs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Building2 className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-xs text-gray-600">Stockists</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Pill className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600">Pharmacies</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Calendar className="w-6 h-6 text-teal-600" />
                    </div>
                    <p className="text-xs text-gray-600">Visits</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Package className="w-6 h-6 text-red-600" />
                    </div>
                    <p className="text-xs text-gray-600">Samples</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <ShoppingCart className="w-6 h-6 text-indigo-600" />
                    </div>
                    <p className="text-xs text-gray-600">Sales</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Shield className="w-6 h-6 text-gray-600" />
                    </div>
                    <p className="text-xs text-gray-600">Compliance</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* Bottom Level - Data and Models */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">DATA</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-600">CRM records</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Pill className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-xs text-gray-600">Rx data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Phone className="w-6 h-6 text-orange-600" />
                    </div>
                    <p className="text-xs text-gray-600">Call activity logs</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600">Market research</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 bg-white/60 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">MODELS</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Brain className="w-6 h-6 text-indigo-600" />
                    </div>
                    <p className="text-xs text-gray-600">Predictive analytics</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Target className="w-6 h-6 text-teal-600" />
                    </div>
                    <p className="text-xs text-gray-600">Territory optimization</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <TrendingUp className="w-6 h-6 text-red-600" />
                    </div>
                    <p className="text-xs text-gray-600">Rep effectiveness</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Zap className="w-6 h-6 text-yellow-600" />
                    </div>
                    <p className="text-xs text-gray-600">Market intelligence</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Built for Pharma Excellence Teams
            </h2>
            <p className="text-xl text-gray-600">
              Designed specifically for the unique challenges of pharmaceutical field execution
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commercial Excellence Teams</h3>
              <p className="text-gray-600">
                Optimize field force effectiveness with AI-driven insights and real-time execution monitoring
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">SFE Leaders</h3>
              <p className="text-gray-600">
                Transform sales force effectiveness with intelligent territory management and performance analytics
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CIOs & Digital Heads</h3>
              <p className="text-gray-600">
                Seamlessly integrate with existing CRM/SFE infrastructure for enterprise-grade execution intelligence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Field Execution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join leading pharmaceutical companies in piloting the future of intelligent field force execution
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-4" onClick={handleBookPilot}>
              Book a Pilot
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4" onClick={handleRequestAccess}>
              Request Early Access
            </Button>
          </div>
          <div className="mt-8 text-blue-200 text-sm">
            <p>Simple pilot setup • Measurable execution lift • Enterprise-grade security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
