# Nisaab360 advertising UI

A standalone, single-page Next.js marketing site for Nisaab360. It contains no application API, database, authentication, or additional page routes.

The institution request form collects the selected Nisaab360 plan, institution and contact details, full address, student range, and an optional government registration ID.

## Fonts and responsive layout

Inter and Bricolage Grotesque variable WOFF2 fonts are bundled in `src/app/fonts` with their SIL Open Font License files. `next/font/local` serves and preloads them from the application with `display: swap`; building or visiting the site does not need Google Fonts. The Latin subsets total approximately 122 KB. Other scripts use system fallback fonts.

The dashboard preview reflows on phones, the header navigation has separate styles from the phone illustration, and forms use 16px controls to avoid iOS focus zoom. Responsive grids accommodate narrow screens, tablets, and large displays; short-screen navigation scrolls independently. Reduced-motion preferences are respected.

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Institution requests

The request form submits directly from the browser to FormSubmit's AJAX endpoint. Submissions are addressed to `workwithhussnainahmad@gmail.com`.

On the first test submission, FormSubmit sends an activation message to that Gmail account. Open the message and activate the form before using the page for advertising.

The temporary integration is isolated in `src/components/RequestForm.tsx`. Replace `FORM_ENDPOINT` when an owned API or CRM is ready.
