import { useState, useMemo } from "react";
import TopNav from "@/components/TopNav";
import HeroSection from "@/components/HeroSection";
import FilterSidebar from "@/components/FilterSidebar";
import ResourceCard from "@/components/ResourceCard";
import { mockResources } from "@/lib/data";
import { SlidersHorizontal, X } from "lucide-react";

interface Filters {
  classLevel: number | null;
  board: string | null;
  subject: string | null;
  type: string | null;
  year: number | null;
}

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<Filters>({
    classLevel: null,
    board: null,
    subject: null,
    type: null,
    year: null,
  });
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    return mockResources.filter((r) => {
      if (searchQuery && !r.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      if (filters.classLevel && r.class_level !== filters.classLevel) return false;
      if (filters.board && r.board !== filters.board) return false;
      if (filters.subject && r.subject !== filters.subject) return false;
      if (filters.type && r.type !== filters.type) return false;
      if (filters.year && r.year !== filters.year) return false;
      return true;
    });
  }, [searchQuery, filters]);

  const activeCount = Object.values(filters).filter(Boolean).length;

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <main className="max-w-7xl mx-auto px-6 pb-20">
        {/* Mobile filter toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass text-sm font-medium text-foreground"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {activeCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                {activeCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar filters={filters} onFilterChange={setFilters} />
          </div>

          {/* Mobile filter overlay */}
          {showFilters && (
            <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
              <div className="absolute right-0 top-0 h-full w-80 bg-background p-6 overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold">Filters</h2>
                  <button onClick={() => setShowFilters(false)}>
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterSidebar filters={filters} onFilterChange={setFilters} />
              </div>
            </div>
          )}

          {/* Resources grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold">
                Resources
                <span className="text-muted-foreground font-normal text-base ml-2">
                  ({filtered.length})
                </span>
              </h2>
            </div>

            {filtered.length > 0 ? (
              <div className="bento-grid">
                {filtered.map((resource, i) => (
                  <div key={resource.id} className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }}>
                    <ResourceCard resource={resource} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="glass rounded-2xl p-12 text-center card-shadow">
                <p className="text-muted-foreground text-lg">No resources found. Try adjusting your filters.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
