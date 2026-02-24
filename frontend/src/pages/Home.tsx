import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Building2, Brain, Users, Globe, CheckCircle2, TrendingUp } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Building2,
      title: 'Global Capability Center (GCC) Setup & Scale',
      description: 'End-to-end GCC establishment and scaling solutions',
      bgColor: 'bg-card-yellow',
    },
    {
      icon: Brain,
      title: 'AI & Digital Transformation',
      description: 'AI-led transformation and digital engineering',
      bgColor: 'bg-card-amber',
    },
    {
      icon: Users,
      title: 'Global Talent & Engineering Capability',
      description: 'Access to high-quality global talent pools',
      bgColor: 'bg-card-warm',
    },
    {
      icon: Globe,
      title: 'Global Delivery & Managed Operations',
      description: 'Scalable global operations and delivery excellence',
      bgColor: 'bg-card-light',
    },
  ];

  const differentiators = [
    'Strategy + Execution (not just advisory)',
    'Faster GCC setup and scaling',
    'Enterprise-grade governance',
    'Access to high-quality global talent',
    'Flexible engagement models',
  ];

  const industries = [
    { name: 'Banking & Financial Services', icon: '🏦', bgColor: 'bg-card-yellow' },
    { name: 'Healthcare & Life Sciences', icon: '🏥', bgColor: 'bg-card-amber' },
    { name: 'Retail & E-commerce', icon: '🛒', bgColor: 'bg-card-warm' },
    { name: 'Technology & SaaS', icon: '💻', bgColor: 'bg-card-light' },
    { name: 'Manufacturing & Logistics', icon: '🏭', bgColor: 'bg-card-yellow' },
  ];

  const engagementSteps = [
    { 
      title: 'Assess & Design', 
      description: 'Understand your needs and design the optimal solution',
      bgColor: 'bg-card-yellow',
    },
    { 
      title: 'Build & Launch', 
      description: 'Execute with precision and launch successfully',
      bgColor: 'bg-card-amber',
    },
    { 
      title: 'Scale & Optimize', 
      description: 'Continuously improve and scale operations',
      bgColor: 'bg-card-warm',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/generated/hero-background.dim_1920x800.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="relative container mx-auto px-4 py-24 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering Intelligent Growth for the Modern Enterprise
            </h1>
            <p className="mb-8 text-lg text-slate-200 sm:text-xl">
              Building Global Capability Centers, enabling AI-led transformation, and delivering scalable global operations.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Talk to an Expert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                Download Company Profile
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What We Do</h2>
            <p className="text-lg text-muted-foreground">We help enterprises with:</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <Card key={index} className={`border-2 transition-all hover:border-accent hover:shadow-lg ${service.bgColor}`}>
                <CardHeader>
                  <service.icon className="mb-4 h-12 w-12 text-primary" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why ARS Consulting Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why ARS Consulting</h2>
            <p className="text-lg text-muted-foreground">Key Differentiators</p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              {differentiators.map((item, index) => (
                <div key={index} className={`flex items-start gap-3 rounded-lg p-4 shadow-sm ${index % 2 === 0 ? 'bg-card-yellow' : 'bg-card-amber'}`}>
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <p className="text-base font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Industries We Serve</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {industries.map((industry, index) => (
              <Card key={index} className={`text-center transition-all hover:shadow-lg ${industry.bgColor}`}>
                <CardHeader>
                  <div className="mb-2 text-4xl">{industry.icon}</div>
                  <CardTitle className="text-lg">{industry.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Model Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Engagement Model</h2>
            <p className="text-lg text-muted-foreground">How we work:</p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {engagementSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className={`h-full ${step.bgColor}`}>
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                        {index + 1}
                      </div>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                  {index < engagementSteps.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:block">
                      <ArrowRight className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to build your Global Capability Center or accelerate your digital transformation?
          </h2>
          <Link to="/contact">
            <Button size="lg">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
