import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DollarSign, Lightbulb, Zap, ArrowRight } from 'lucide-react';

export default function GCC() {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Cost Efficiency',
      description: 'Reduce operational costs while maintaining quality and scale',
      bgColor: 'bg-card-yellow',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Access to diverse talent pools driving innovation and creativity',
      bgColor: 'bg-card-amber',
    },
    {
      icon: Zap,
      title: 'Faster Delivery',
      description: 'Accelerated time-to-market with 24/7 global operations',
      bgColor: 'bg-card-warm',
    },
  ];

  const approach = [
    {
      step: 'Assess',
      title: 'Assess & Design',
      description: 'Comprehensive assessment of your needs, location analysis, and operating model design',
      bgColor: 'bg-card-yellow',
      details: [
        'Business case development',
        'Location strategy and site selection',
        'Operating model design',
        'Risk assessment and mitigation',
      ],
    },
    {
      step: 'Setup',
      title: 'Setup & Launch',
      description: 'End-to-end setup including legal, infrastructure, talent acquisition, and governance',
      bgColor: 'bg-card-amber',
      details: [
        'Legal entity setup and compliance',
        'Infrastructure and technology setup',
        'Talent acquisition and onboarding',
        'Process and governance framework',
      ],
    },
    {
      step: 'Scale',
      title: 'Scale & Optimize',
      description: 'Continuous optimization, capability expansion, and performance management',
      bgColor: 'bg-card-warm',
      details: [
        'Capability expansion and scaling',
        'Performance optimization',
        'Continuous improvement programs',
        'Change management and culture building',
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Global Capability Centers
            </h1>
            <p className="text-lg text-slate-200">
              Build, scale, and optimize your global operations with confidence
            </p>
          </div>
        </div>
      </section>

      {/* Why GCC Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why GCC?</h2>
            <p className="text-lg text-muted-foreground">
              Transform your business with strategic global capabilities
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`border-2 text-center ${benefit.bgColor}`}>
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our GCC Approach Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our GCC Approach</h2>
            <p className="text-lg text-muted-foreground">
              A proven methodology for GCC success
            </p>
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-3">
              {approach.map((phase, index) => (
                <div key={index} className="relative">
                  <Card className={`h-full border-2 ${phase.bgColor}`}>
                    <CardHeader>
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-xl font-bold text-accent-foreground">
                        {index + 1}
                      </div>
                      <CardTitle className="text-2xl">{phase.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{phase.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {phase.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start gap-2 text-sm">
                            <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                            <span className="text-muted-foreground">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  {index < approach.length - 1 && (
                    <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                      <ArrowRight className="h-8 w-8 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to establish your Global Capability Center?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Let's discuss how we can help you build and scale your GCC
          </p>
          <Link to="/contact">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
