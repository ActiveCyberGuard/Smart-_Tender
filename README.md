# Smart-_Tender_Pilot


### Navigate Every Tender with Confidence

**Smart Tender Document Workspace** for preparing, validating, organizing, and generating submission-ready tender document packages directly in the browser.

## Live Demo

**https://activecyberguard.github.io/Smart-_Tender/**

## GitHub

**https://github.com/ActiveCyberGuard**

**AI_Threads_I_Used**
**https://claude.ai/share/d7954c49-a263-42bd-97af-d2b73d90bf6e**

**https://lovable.dev/projects/9af59ff8-7bd0-43dd-af30-780b3cf6353b**

## Overview

BidVault is a frontend-only tender document package builder designed to help office staff turn a collection of PDF documents into one complete, checked, correctly ordered tender package.

The application loads tender requirements from `requirements.json`, accepts multiple PDF files, matches documents to requirements, validates mandatory documents and expiry dates, detects duplicate files, and generates a final combined PDF package in the required order.

## Key Features

- Load and validate `requirements.json`
- Display tender information and document requirements
- Upload multiple PDF files in the browser
- Validate PDF files and show page counts
- Match uploaded files with tender requirements
- Prevent one file from being assigned to multiple requirements
- Detect duplicate PDF files by content
- Enter and validate expiry dates
- Show document status:
  - Missing
  - Expiry date needed
  - Expired
  - Not provided
  - OK
- Automatically calculate package readiness
- Bangla / English language switch
- Reset the working state
- Generate a combined tender PDF
- Keep documents in the required order
- Generate an English cover page
- Add page numbering/footer to the final package
- Download the generated file as `<tender_id>_Package.pdf`
- Responsive interface for desktop and mobile

## Workflow

```text
Load Requirements
        ↓
Upload PDF Documents
        ↓
Match Documents
        ↓
Validate Requirements
        ↓
Resolve Blocking Issues
        ↓
Generate Tender Package
        ↓
Download Final PDF
```

## Technology

- HTML5
- CSS3
- Vanilla JavaScript
- PDF.js
- pdf-lib
- Browser File APIs
- Web Crypto API for duplicate-content detection

## Frontend Only

All document processing happens locally in the browser. Tender documents are not uploaded to a participant-controlled backend, database, or remote storage service.

## PDF Package

The generated package contains:

1. An English cover page with tender information and the included document list.
2. Matched documents in their required order.
3. All pages of each included PDF in their original order.
4. A footer on every page using the format:

```text
<tender_id> | Page X of Y
```

Optional documents without a matched file are skipped.

## Date Validation

For requirements that require expiry checking:

- Expiry before the submission deadline → **Expired**
- Expiry on the submission deadline → **OK**
- Expiry after the submission deadline → **OK**
- No expiry date entered → **Expiry date needed**

## Sample Tender

The project can be tested with the supplied sample tender data, including requirements such as:

- Trade License
- TIN Certificate
- VAT Registration Certificate
- Bank Solvency Certificate
- Experience Certificate
- Financial Proposal
- Signed Declaration

## Project Structure

```text
Smart-_Tender/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run Locally

Because this is a static frontend project, it can be served with any simple static web server.

For example, using VS Code Live Server or another local static server:

```text
Open index.html through a local web server
```

## Deployment

The application is deployed as a public HTTPS static website using GitHub Pages.

Live:

https://activecyberguard.github.io/Smart-_Tender/

## Design Philosophy

BidVault is designed to feel like a professional enterprise procurement workspace rather than a generic upload form. The interface focuses on:

- clear workflow guidance
- strong document status visibility
- simple matching interactions
- package readiness feedback
- responsive design
- Bangla and English accessibility

## AI-Assisted Development

The project was developed with AI-assisted vibe coding while keeping the application frontend-only and aligned with the contest constraints.

## License

MIT License
