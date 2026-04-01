export type Resource = {
  id: string;
  title: string;
  class_level: 9 | 10 | 11 | 12;
  subject: string;
  board: "CBSE" | "ICSE";
  type: "Notes" | "PYQs" | "Question Bank";
  year?: number;
  file_url: string;
};

export const subjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "English",
  "Computer Science",
  "Economics",
  "Accountancy",
];

export const mockResources: Resource[] = [
  { id: "1", title: "Quadratic Equations – Complete Notes", class_level: 10, subject: "Mathematics", board: "CBSE", type: "Notes", file_url: "/pdfs/sample.pdf" },
  { id: "2", title: "Physics PYQ 2024", class_level: 12, subject: "Physics", board: "CBSE", type: "PYQs", year: 2024, file_url: "/pdfs/sample.pdf" },
  { id: "3", title: "Organic Chemistry Question Bank", class_level: 11, subject: "Chemistry", board: "CBSE", type: "Question Bank", file_url: "/pdfs/sample.pdf" },
  { id: "4", title: "Biology – Cell Division Notes", class_level: 11, subject: "Biology", board: "ICSE", type: "Notes", file_url: "/pdfs/sample.pdf" },
  { id: "5", title: "English Literature PYQ 2023", class_level: 10, subject: "English", board: "ICSE", type: "PYQs", year: 2023, file_url: "/pdfs/sample.pdf" },
  { id: "6", title: "Trigonometry Question Bank", class_level: 9, subject: "Mathematics", board: "CBSE", type: "Question Bank", file_url: "/pdfs/sample.pdf" },
  { id: "7", title: "Python Programming Notes", class_level: 12, subject: "Computer Science", board: "CBSE", type: "Notes", file_url: "/pdfs/sample.pdf" },
  { id: "8", title: "Economics PYQ 2024", class_level: 12, subject: "Economics", board: "CBSE", type: "PYQs", year: 2024, file_url: "/pdfs/sample.pdf" },
  { id: "9", title: "Accountancy – Partnership Firms", class_level: 12, subject: "Accountancy", board: "CBSE", type: "Notes", file_url: "/pdfs/sample.pdf" },
  { id: "10", title: "Chemistry PYQ 2023", class_level: 11, subject: "Chemistry", board: "ICSE", type: "PYQs", year: 2023, file_url: "/pdfs/sample.pdf" },
  { id: "11", title: "Mathematics PYQ 2024", class_level: 9, subject: "Mathematics", board: "CBSE", type: "PYQs", year: 2024, file_url: "/pdfs/sample.pdf" },
  { id: "12", title: "Physics – Optics Notes", class_level: 12, subject: "Physics", board: "CBSE", type: "Notes", file_url: "/pdfs/sample.pdf" },
];
