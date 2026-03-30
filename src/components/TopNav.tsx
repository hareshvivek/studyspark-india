import { GraduationCap } from "lucide-react";

const TopNav = () => {
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold tracking-tight gradient-text">StudyVault</span>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {[9, 10, 11, 12].map((c) => (
            <button
              key={c}
              className="px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
            >
              Class {c}
            </button>
          ))}
        </nav>

        <button className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default TopNav;
