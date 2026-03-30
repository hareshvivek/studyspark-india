import { Search } from "lucide-react";

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const HeroSection = ({ searchQuery, onSearchChange }: HeroSectionProps) => {
  return (
    <section className="relative py-16 md:py-24 px-6 text-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-electric/8 blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-electric animate-pulse" />
          Trusted by 50,000+ students across India
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Ace Your Exams with{" "}
          <span className="gradient-text">Premium Resources</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Access curated notes, previous year questions, and question banks for CBSE & ICSE — Grades 9 to 12.
        </p>

        {/* Search bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="glass-strong rounded-2xl p-1 glow-shadow animate-pulse-glow">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for PYQs, Notes, or Courses..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-transparent rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none text-base"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
