import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

export default function Insights() {
  const articles = [
    {
      category: 'GCC Trends',
      title: 'The Future of Global Capability Centers in 2026',
      description: 'Exploring emerging trends in GCC setup and operations, including AI integration and talent strategies.',
      date: 'February 20, 2026',
      readTime: '5 min read',
      bgColor: 'bg-card-yellow',
    },
    {
      category: 'AI in Enterprises',
      title: 'Implementing AI-Led Transformation: A Practical Guide',
      description: 'How enterprises can successfully adopt AI technologies while managing change and building capabilities.',
      date: 'February 15, 2026',
      readTime: '7 min read',
      bgColor: 'bg-card-amber',
    },
    {
      category: 'Global Delivery Strategy',
      title: 'Building Resilient Global Delivery Models',
      description: 'Strategies for creating flexible, scalable global delivery operations that adapt to changing business needs.',
      date: 'February 10, 2026',
      readTime: '6 min read',
      bgColor: 'bg-card-warm',
    },
    {
      category: 'Talent Market Insights',
      title: 'Navigating the Global Talent Landscape',
      description: 'Understanding talent availability, skill gaps, and recruitment strategies across key markets.',
      date: 'February 5, 2026',
      readTime: '8 min read',
      bgColor: 'bg-card-light',
    },
    {
      category: 'GCC Trends',
      title: 'Cost Optimization in Global Capability Centers',
      description: 'Proven strategies for reducing costs while maintaining quality and scaling operations effectively.',
      date: 'January 30, 2026',
      readTime: '5 min read',
      bgColor: 'bg-card-yellow',
    },
    {
      category: 'AI in Enterprises',
      title: 'AI Governance and Ethics in Enterprise Settings',
      description: 'Establishing frameworks for responsible AI use, compliance, and ethical considerations.',
      date: 'January 25, 2026',
      readTime: '6 min read',
      bgColor: 'bg-card-amber',
    },
    {
      category: 'Global Delivery Strategy',
      title: 'Hybrid Work Models for Global Teams',
      description: 'Best practices for managing distributed teams and maintaining productivity in hybrid environments.',
      date: 'January 20, 2026',
      readTime: '7 min read',
      bgColor: 'bg-card-warm',
    },
    {
      category: 'Talent Market Insights',
      title: 'Upskilling and Reskilling in the Digital Age',
      description: 'How to build continuous learning programs that keep your workforce competitive and engaged.',
      date: 'January 15, 2026',
      readTime: '6 min read',
      bgColor: 'bg-card-light',
    },
  ];

  const categories = ['All', 'GCC Trends', 'AI in Enterprises', 'Global Delivery Strategy', 'Talent Market Insights'];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Insights & Thought Leadership
            </h1>
            <p className="text-lg text-slate-200">
              Expert perspectives on GCC, AI transformation, and global delivery
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b border-border bg-muted/30 py-6">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Badge
                key={index}
                variant={index === 0 ? 'default' : 'outline'}
                className="cursor-pointer px-4 py-2 text-sm"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Card key={index} className={`flex flex-col transition-all hover:shadow-lg ${article.bgColor}`}>
                <CardHeader>
                  <Badge variant="secondary" className="mb-3 w-fit">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-xl">{article.title}</CardTitle>
                  <CardDescription className="mt-2">{article.description}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
