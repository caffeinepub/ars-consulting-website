import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Industries() {
  const industries = [
    {
      name: 'Banking & Financial Services',
      icon: '🏦',
      description: 'Digital transformation and regulatory compliance solutions',
      bgColor: 'bg-card-yellow',
      capabilities: [
        'Core banking modernization',
        'Risk and compliance management',
        'Digital banking platforms',
        'Payment processing systems',
        'Fraud detection and prevention',
      ],
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: '🏥',
      description: 'Innovation in patient care and research',
      bgColor: 'bg-card-amber',
      capabilities: [
        'Electronic health records (EHR)',
        'Clinical trial management',
        'Medical device integration',
        'Healthcare analytics',
        'Regulatory compliance (FDA, HIPAA)',
      ],
    },
    {
      name: 'Retail & E-commerce',
      icon: '🛒',
      description: 'Omnichannel experiences and supply chain optimization',
      bgColor: 'bg-card-warm',
      capabilities: [
        'E-commerce platforms',
        'Inventory management systems',
        'Customer experience optimization',
        'Supply chain visibility',
        'Personalization and recommendations',
      ],
    },
    {
      name: 'Technology & SaaS',
      icon: '💻',
      description: 'Product development and engineering excellence',
      bgColor: 'bg-card-light',
      capabilities: [
        'Product engineering and development',
        'Cloud-native architecture',
        'DevOps and automation',
        'Quality assurance and testing',
        'Technical support and operations',
      ],
    },
    {
      name: 'Manufacturing & Logistics',
      icon: '🏭',
      description: 'Smart manufacturing and supply chain solutions',
      bgColor: 'bg-card-yellow',
      capabilities: [
        'IoT and smart manufacturing',
        'Supply chain optimization',
        'Predictive maintenance',
        'Quality control systems',
        'Warehouse management',
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
              Industries We Serve
            </h1>
            <p className="text-lg text-slate-200">
              Deep expertise across key industries driving global innovation
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className={`border-2 ${industry.bgColor}`}>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="text-5xl">{industry.icon}</div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl">{industry.name}</CardTitle>
                      <CardDescription className="mt-2 text-base">
                        {industry.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h4 className="mb-3 font-semibold">Key Capabilities:</h4>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {industry.capabilities.map((capability, capIndex) => (
                      <li key={capIndex} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                        <span className="text-sm text-muted-foreground">{capability}</span>
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
