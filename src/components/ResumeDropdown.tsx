import { ChevronDown, Download, FileText } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type ResumeDropdownVariant = "hero" | "navbar" | "mobile";

const resumes = [
  {
    label: "General Resume",
    detail: "Complete profile",
    href: "/resumes/Priyanshu_Ranjan_General_Resume.pdf",
    filename: "Priyanshu_Ranjan_General_Resume.pdf",
  },
  {
    label: "AI / ML Resume",
    detail: "Machine learning and AI roles",
    href: "/resumes/Priyanshu_Ranjan_AI_ML_Resume.pdf",
    filename: "Priyanshu_Ranjan_AI_ML_Resume.pdf",
  },
  {
    label: "Data Analyst Resume",
    detail: "Analytics and business intelligence roles",
    href: "/resumes/Priyanshu_Ranjan_Data_Analyst_Resume.pdf",
    filename: "Priyanshu_Ranjan_Data_Analyst_Resume.pdf",
  },
  {
    label: "Software Developer Resume (SDE)",
    detail: "Software engineering and development roles",
    href: "/resumes/Priyanshu_Ranjan_SDE_Resume.pdf",
    filename: "Priyanshu_Ranjan_SDE_Resume.pdf",
  },
] as const;

const triggerStyles: Record<ResumeDropdownVariant, string> = {
  hero: "inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 px-6 py-3 text-sm font-bold text-white shadow-[0_18px_40px_-22px_#3b82f6] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2",
  navbar: "hidden items-center gap-2 rounded-full border border-blue-400/40 bg-blue-500/10 px-4 py-2 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 sm:inline-flex",
  mobile: "mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-blue-400/40 bg-blue-500/10 px-4 py-3 text-sm font-semibold text-blue-300 transition-colors hover:bg-blue-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400",
};

export function ResumeDropdown({
  variant = "hero",
}: {
  variant?: ResumeDropdownVariant;
}) {
  const label = variant === "navbar" ? "Resume" : "Download Resume";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label="Choose a resume to download"
          className={triggerStyles[variant]}
        >
          <Download className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{label}</span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-80" aria-hidden="true" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="z-[100] w-72 border border-border bg-popover p-1.5 text-popover-foreground shadow-xl"
      >
        <DropdownMenuLabel className="px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
          Select a resume
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {resumes.map((resume) => (
          <DropdownMenuItem key={resume.href} asChild className="cursor-pointer rounded-lg p-0 focus:bg-accent">
            <a
              href={resume.href}
              download={resume.filename}
              className="flex w-full items-center gap-3 px-3 py-2.5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <FileText className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-foreground">
                  {resume.label}
                </span>
                <span className="mt-0.5 block text-xs text-muted-foreground">
                  {resume.detail}
                </span>
              </span>
              <Download className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default ResumeDropdown;
