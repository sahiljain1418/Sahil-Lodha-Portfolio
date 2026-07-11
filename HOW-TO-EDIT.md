# HOW TO EDIT SAHIL'S PORTFOLIO

You do not need to redesign the website for normal updates.

## 1. Change your LinkedIn and email

Open `app/page.js`.

Near the bottom, search for:

`Replace with your LinkedIn URL`

Replace the `#` with your full LinkedIn profile URL.

Search for:

`mailto:YOUR-EMAIL-HERE`

Replace it with your email.

Example:

`mailto:sahil@example.com`

## 2. Add the IMPELz hosting video

Upload your video to:

`public/videos/impelz-hosting.mp4`

The current V1 intentionally shows a video placeholder. Once the file is available, ask ChatGPT to replace the placeholder block in `app/page.js` with a video element.

## 3. Add the missing photos

Use these exact filenames:

- `public/images/dance/dance-trophy.jpg`
- `public/images/hosting/hosting-coordinator.jpg`
- `public/images/hosting/impelz-hosting-cover.jpg`
- `public/images/events/event-outreach-coordinator.jpg`

The folders already exist.

## 4. Add or edit projects

Open:

`data/content.js`

Find `projects`.

Copy one project block and edit:

- `no`
- `tag`
- `title`
- `description`
- `image`

Upload the project image inside `public/images/finance/` or another suitable image folder.

## 5. Add LinkedIn posts / writings

Open:

`data/content.js`

Find `posts`.

Edit the title, category and note. V1 uses "Coming Soon" because your final LinkedIn post URLs were not supplied.

## 6. Add your resume

Upload your resume as:

`public/documents/sahil-lodha-resume.pdf`

Then, in `app/page.js`, add or change a footer link to:

`/documents/sahil-lodha-resume.pdf`

## 7. Update a photo

Put the new photo in the correct folder under `public/images/`.

Then search `app/page.js` for the old image path and replace it.

Example:

`/images/journey/journey-15.jpeg`

## 8. Publish an edit

On GitHub:

1. Upload/change the file.
2. Click `Commit changes`.
3. If the repository is connected to Vercel, Vercel will build the new version.

## Public portfolio safety checklist

Before publishing:
- Do not upload client names, phone numbers, account IDs or identifiable portfolio data.
- Do not expose confidential internal datasets.
- Confirm that every performance/impact metric is accurate.
- Use only photos you are comfortable displaying publicly.
- Review company presentation screenshots for internal/confidential information.
