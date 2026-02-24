import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Briefcase, Upload } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const benefits = [
    { text: 'Work on cutting-edge global projects', bgColor: 'bg-card-yellow' },
    { text: 'Collaborate with diverse, talented teams', bgColor: 'bg-card-amber' },
    { text: 'Continuous learning and development opportunities', bgColor: 'bg-card-warm' },
    { text: 'Competitive compensation and benefits', bgColor: 'bg-card-light' },
    { text: 'Flexible work arrangements', bgColor: 'bg-card-yellow' },
    { text: 'Career growth and advancement paths', bgColor: 'bg-card-amber' },
  ];

  const openPositions = [
    {
      title: 'Senior GCC Consultant',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: 'Lead GCC setup and scaling initiatives for enterprise clients',
      bgColor: 'bg-card-yellow',
    },
    {
      title: 'AI Transformation Specialist',
      location: 'Remote',
      type: 'Full-time',
      description: 'Drive AI adoption and digital transformation projects',
      bgColor: 'bg-card-amber',
    },
    {
      title: 'Talent Acquisition Manager',
      location: 'Hybrid',
      type: 'Full-time',
      description: 'Build and scale global talent acquisition capabilities',
      bgColor: 'bg-card-warm',
    },
    {
      title: 'Delivery Manager',
      location: 'Multiple Locations',
      type: 'Full-time',
      description: 'Manage end-to-end project delivery and client relationships',
      bgColor: 'bg-card-light',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Join Our Team
            </h1>
            <p className="text-lg text-slate-200">
              Build your career while helping enterprises build their future
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With ARS Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Why Work with ARS</h2>
            <p className="text-lg text-muted-foreground">
              Join a team that values excellence, innovation, and growth
            </p>
          </div>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 md:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-start gap-3 rounded-lg p-4 ${benefit.bgColor}`}>
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-accent" />
                  <p className="text-base">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <Briefcase className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              Explore opportunities to make an impact
            </p>
          </div>
          <div className="mx-auto max-w-4xl space-y-4">
            {openPositions.map((position, index) => (
              <Card key={index} className={`transition-all hover:shadow-lg ${position.bgColor}`}>
                <CardHeader>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <CardDescription className="mt-2">{position.description}</CardDescription>
                    </div>
                    <Button>Apply Now</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span>📍 {position.location}</span>
                    <span>💼 {position.type}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Talent Community Form Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Join Our Talent Community
              </h2>
              <p className="text-lg text-muted-foreground">
                Don't see the right role? Submit your information and we'll reach out when opportunities arise
              </p>
            </div>
            <Card className="bg-card-light">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="resume">Resume</Label>
                    <div className="flex items-center gap-2">
                      <Button type="button" variant="outline" className="w-full">
                        <Upload className="mr-2 h-4 w-4" />
                        Upload Resume
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about yourself</Label>
                    <Textarea
                      id="message"
                      placeholder="Share your experience, skills, and career interests..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Submit Application
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
