import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Eye, Users } from 'lucide-react';

export default function About() {
  const leadership = [
    {
      name: 'Chief Operating Officer',
      role: 'COO',
      description: 'Leading operational excellence and strategic execution',
      bgColor: 'bg-card-yellow',
    },
    {
      name: 'Leadership Team Member',
      role: 'Executive',
      description: 'Driving innovation and client success',
      bgColor: 'bg-card-amber',
    },
    {
      name: 'Leadership Team Member',
      role: 'Executive',
      description: 'Ensuring quality and delivery excellence',
      bgColor: 'bg-card-warm',
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              About ARS Consulting
            </h1>
            <p className="text-lg text-slate-200">
              Your trusted partner in building scalable, future-ready capabilities
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground">
                ARS Consulting was founded with a clear vision: to help enterprises navigate the complexities
                of global expansion and digital transformation. We combine deep industry expertise with
                hands-on execution capabilities to deliver tangible results for our clients.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Our team brings together decades of experience in establishing and scaling Global Capability
                Centers, implementing AI-driven solutions, and building high-performing global teams. We don't
                just advise—we execute alongside you, ensuring your success every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-2 bg-card-yellow">
              <CardHeader>
                <Target className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To help enterprises build scalable, future-ready capabilities through strategic GCC setup,
                  AI-led transformation, and access to world-class global talent.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 bg-card-amber">
              <CardHeader>
                <Eye className="mb-4 h-12 w-12 text-primary" />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  To be the most trusted partner for enterprises seeking to build and scale global capabilities,
                  known for our execution excellence and measurable business impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <Users className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Our Leadership</h2>
            <p className="text-lg text-muted-foreground">
              Experienced leaders committed to your success
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-3">
              {leadership.map((member, index) => (
                <Card key={index} className={`border-2 text-center transition-all hover:shadow-lg ${member.bgColor}`}>
                  <CardHeader>
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm font-medium text-accent">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
