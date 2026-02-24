import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Brain, Users, Globe } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Global Capability Center (GCC)',
      description: 'Comprehensive GCC setup and scaling solutions',
      bgColor: 'bg-card-yellow',
      items: [
        'Location strategy and site selection',
        'Operating model design',
        'Talent setup and recruitment',
        'Governance and compliance frameworks',
      ],
    },
    {
      icon: Brain,
      title: 'AI & Digital Transformation',
      description: 'AI-led transformation and digital engineering',
      bgColor: 'bg-card-amber',
      items: [
        'AI adoption strategy and roadmap',
        'Automation and process optimization',
        'Digital engineering and modernization',
        'Change management and training',
      ],
    },
    {
      icon: Users,
      title: 'Talent & Engineering Capability',
      description: 'Building high-performing global teams',
      bgColor: 'bg-card-warm',
      items: [
        'Dedicated teams and staff augmentation',
        'Skill-based hiring and assessment',
        'Long-term capability building',
        'Talent retention strategies',
      ],
    },
    {
      icon: Globe,
      title: 'Managed Delivery',
      description: 'End-to-end project delivery excellence',
      bgColor: 'bg-card-light',
      items: [
        'End-to-end project delivery',
        'Performance governance and metrics',
        'Cost optimization and efficiency',
        'Quality assurance and compliance',
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
              Our Services
            </h1>
            <p className="text-lg text-slate-200">
              Comprehensive solutions for global capability building and digital transformation
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 lg:gap-12">
            {services.map((service, index) => (
              <Card key={index} className={`border-2 ${service.bgColor}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-accent/20 p-3">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <div className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
