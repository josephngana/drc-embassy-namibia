# Embassy website design

Audience: Congolese citizens, travellers, and diplomatic partners in Namibia. English and French have equal support.

Direction: welcoming light blue, formal typography, restrained gold accents. Put consular tasks immediately after the welcome section. Use natural document scrolling and compact sections.

Palette: sky surface #E2F2FC, white #FFFFFF, primary blue #176FA6, blue hover #125D8D, ink #173B56, gold #C89A3D. Retain dark ink for readable body text; do not turn text colors into pale blue. Existing section backgrounds use Tailwind literal colors; hero-light is owned by src/index.css.

Typography: Newsreader headings, Manrope body, IBM Plex Sans Condensed utility labels.

Behavior: anchor navigation, visible keyboard focus, reduced motion support, readable mobile layouts. No fabricated appointment confirmations or message delivery claims. Until backend integration exists, direct appointments to contact details and explain that form messages are not sent.

Discover DRC: light-blue two-column composition, national flag as the signature visual, three icon-led themes with native details disclosures. Do not use generic entertainment, primate, skyline, or meeting photographs as documentary Congolese imagery. Use supplied or verified photographs only.

News: photo-free bulletin with a consular notice panel and a compact story list. Existing demonstration articles remain explicitly labelled samples in both languages. Native buttons open article details; do not make entire article containers clickable.

Responsive width contract: root and main fit the viewport, never hide document overflow to mask oversized content. Header navigation uses its own wrapped second row at xl; narrower screens use the drawer. Consular actions wrap and stack until xl, with no non-shrinking action group or no-wrap translated labels. Verified document scrollWidth equals clientWidth in English (360–1920px) and French (320–1920px).

Consular assistance panel: title above a three-column action grid from md, single-column on small screens. Equal action height, sentence-case inherited labels, light-blue panel and one primary blue button. Do not wrap a flex action group into a two-plus-one arrangement.

Review phase: this is a presentation preview pending embassy validation, not a public launch. Keep sample stories and unapproved service content visibly distinguished. Approved PDFs, online appointment booking, messaging, and policy documents will follow approval; do not fabricate delivery, bookings, or download content. All overlays and navigation drawers use AccessibleModal.tsx, backed by native dialog.showModal for inert background, Escape, focus containment and focus restoration. Remaining bilateral imagery uses national flags instead of generic stock photography.

Ambassador portrait: supplied image is small; cap its display width at 182px, preserve its aspect ratio, and use a compact 220px portrait column beside the message from md upward. Do not enlarge it to fill a large editorial photo frame. Replace with a higher-resolution original when available.
