

## Plan: Connect Resources to Real PDF URLs

Currently all mock resources have `file_url: "#"`, so nothing downloads. I'll replace them with publicly available, freely licensed PDF files that match each subject/topic.

### Changes

**File: `src/lib/data.ts`**

Update each resource's `file_url` from `"#"` to a real, publicly accessible PDF URL. I'll use freely available educational PDFs from sources like NCERT (ncert.nic.in) or other open educational resources that match the subjects (Math, Physics, Chemistry, Biology, English, Computer Science, Economics, Accountancy).

For any resource where a direct matching PDF isn't available, I'll use a relevant sample PDF from a public source.

The download button logic in `ResourceCard.tsx` already handles real URLs via `window.open(resource.file_url, "_blank")` — no changes needed there.

