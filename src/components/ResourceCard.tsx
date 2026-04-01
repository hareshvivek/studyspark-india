import { Download, Eye, BookOpen, FlaskConical, Calculator, Cpu, Landmark, DollarSign, Leaf, PenLine } from "lucide-react";
import { toast } from "sonner";
import type { Resource } from "@/lib/data";

const subjectIcons: Record<string, React.ElementType> = {
  Mathematics: Calculator,
  Physics: FlaskConical,
  Chemistry: FlaskConical,
  Biology: Leaf,
  English: PenLine,
  "Computer Science": Cpu,
  Economics: DollarSign,
  Accountancy: Landmark,
};

const typeColors: Record<string, string> = {
  Notes: "bg-primary/20 text-primary",
  PYQs: "bg-electric/20 text-electric",
  "Question Bank": "bg-accent/20 text-accent",
};

const ResourceCard = ({ resource }: { resource: Resource }) => {
  const Icon = subjectIcons[resource.subject] || BookOpen;

  return (
    <div className="glass rounded-2xl p-5 card-shadow hover:scale-[1.02] transition-all duration-300 group flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${typeColors[resource.type]}`}>
          {resource.type}
        </span>
      </div>

      <div className="flex-1 space-y-1.5">
        <h3 className="font-semibold text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {resource.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="px-2 py-0.5 rounded-md bg-secondary">Class {resource.class_level}</span>
          <span>•</span>
          <span>{resource.subject}</span>
          <span>•</span>
          <span>{resource.board}</span>
          {resource.year && (
            <>
              <span>•</span>
              <span>{resource.year}</span>
            </>
          )}
        </div>
      </div>

      <div className="flex gap-2 pt-1">
        <a
          href={resource.file_url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            if (!resource.file_url || resource.file_url === "#") {
              e.preventDefault();
              toast.info("PDF not available yet", {
                description: `"${resource.title}" will be available for download soon.`,
              });
            }
          }}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <Download className="w-4 h-4" />
          Download PDF
        </a>
        <button
          onClick={() => {
            toast.info("Preview coming soon", {
              description: "The document viewer is under development.",
            });
          }}
          className="flex items-center justify-center px-3 py-2.5 rounded-xl glass text-muted-foreground hover:text-foreground transition-colors"
        >
          <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ResourceCard;
