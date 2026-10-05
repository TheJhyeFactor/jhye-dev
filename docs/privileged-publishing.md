# Privileged publishing on jhye.dev

Public blog: https://jhye.dev/privileged/
Login: https://jhye.dev/privileged/login/
Editor: https://jhye.dev/privileged/admin/
API: /privileged/api/*

The portfolio and notebook use their existing static builds. Vercel serves those files and a Node function that handles authentication, content and media. GoDaddy DNS remains authoritative; the apex A record must point at the value returned by `vercel domains inspect jhye.dev` (currently 76.76.21.21). Nameservers, email records and unrelated DNS records do not need changing. The former GitHub Pages export can remain available as a rollback source.

The editor uses the owner's email and password. The one-use setup token is supplied in a URL fragment, which is not sent to the web server in the page request. The API stores a salted scrypt password hash in private storage. The session is signed and uses a Secure, HttpOnly, SameSite=Strict cookie scoped to /privileged. Login attempts are limited per IP. Write requests require the current origin. There is no external identity provider.

Owner: omeleyjhye@gmail.com. The setup secret and session secret are configured as sensitive Vercel environment variables. A private local copy of the setup information is in `.vercel/privileged-setup.json`; do not commit it or print the session secret. Setup cannot be reused after the account exists. The user chooses their own password through the setup page.

Post content and metadata are persisted in a private Vercel Blob catalog, using ETag conditional writes to prevent stale overwrites. Individual post versions reject stale editor saves. The catalog limit is 5 MB of text/metadata, excluding uploaded binary media. Uploaded photos and videos are stored separately in the private store. The API serves them to the owner, or anonymously when referenced by a published post. Unpublish revokes access if no published post still uses the file. Deleting a post keeps its files in the media library.

Uploads go directly from the authenticated browser to private storage using a short-lived token restricted to one pathname, type and size. Completion verifies file size, MIME type and file signatures. Supported photos: JPG/PNG/WebP/GIF up to 10 MB; video: MP4/WebM up to 50 MB. YouTube and Vimeo embeds use an allowlist. Reader content is escaped rather than evaluated as HTML or MDX.

## Verification

Run root typecheck/lint/build, then `node scripts/verify-privileged.mjs` for the embedded public notebook. The local API server uses `PRIVILEGED_LOCAL_DATA_DIR` only when not in production and not on Vercel; production always uses private Blob. `scripts/privileged-auth-smoke.ts` exercises setup, password login, drafts, publishing, the public reader, stale writes, CSRF, sign-out and the mobile editor against that local server. Its password and setup token are local test fixtures only.

`vercel --prod` deploys through the existing linked project. The project is connected to TheJhyeFactor/jhye-dev; pushes to main deploy through Vercel. Build checks run before publication. Never claim that the domain has moved until DNS, HTTPS and the actual live pages have been verified. Password setup remains a user action.
