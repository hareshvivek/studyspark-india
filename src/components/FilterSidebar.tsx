import { BookOpen, GraduationCap, FileText, Calendar } from "lucide-react";
import { subjects } from "@/lib/data";

interface Filters {
  classLevel: number | null;
  board: string | null;
  subject: string | null;
  type: string | null;
  year: number | null;
}

interface FilterSidebarProps {
  filters: Filters;
  onFilterChange: (filters: Filters) => void;
}

const classLevels = [9, 10, 11, 12];
const boards = ["CBSE", "ICSE"];
const types = ["Notes", "PYQs", "Question Bank"];
const years = [2024, 2023, 2022, 2021, 2020];

const FilterChip = ({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-all ${
      active
        ? "bg-primary text-primary-foreground shadow-md"
        : "glass text-muted-foreground hover:text-foreground"
    }`}
  >
    {label}
  </button>
);

const FilterSidebar = ({ filters, onFilterChange }: FilterSidebarProps) => {
  const update = (key: keyof Filters, value: any) => {
    onFilterChange({
      ...filters,
      [key]: filters[key] === value ? null : value,
    });
  };

  return (
    <aside className="w-full lg:w-72 shrink-0 space-y-6">
      {/* Class */}
      <div className="glass rounded-2xl p-5 card-shadow space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <GraduationCap className="w-4 h-4 text-electric" />
          Class
        </div>
        <div className="flex flex-wrap gap-2">
          {classLevels.map((c) => (
            <FilterChip key={c} label={`Class ${c}`} active={filters.classLevel === c} onClick={() => update("classLevel", c)} />
          ))}
        </div>
      </div>

      {/* Board */}
      <div className="glass rounded-2xl p-5 card-shadow space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <BookOpen className="w-4 h-4 text-electric" />
          Board
        </div>
        <div className="flex flex-wrap gap-2">
          {boards.map((b) => (
            <FilterChip key={b} label={b} active={filters.board === b} onClick={() => update("board", b)} />
          ))}
        </div>
      </div>

      {/* Resource Type */}
      <div className="glass rounded-2xl p-5 card-shadow space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <FileText className="w-4 h-4 text-electric" />
          Resource Type
        </div>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <FilterChip key={t} label={t} active={filters.type === t} onClick={() => update("type", t)} />
          ))}
        </div>
      </div>

      {/* Subject */}
      <div className="glass rounded-2xl p-5 card-shadow space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <BookOpen className="w-4 h-4 text-electric" />
          Subject
        </div>
        <div className="flex flex-wrap gap-2">
          {subjects.map((s) => (
            <FilterChip key={s} label={s} active={filters.subject === s} onClick={() => update("subject", s)} />
          ))}
        </div>
      </div>

      {/* Year (for PYQs) */}
      <div className="glass rounded-2xl p-5 card-shadow space-y-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Calendar className="w-4 h-4 text-electric" />
          Year (PYQs)
        </div>
        <div className="flex flex-wrap gap-2">
          {years.map((y) => (
            <FilterChip key={y} label={String(y)} active={filters.year === y} onClick={() => update("year", y)} />
          ))}
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
