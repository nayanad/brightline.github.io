# Brightline agency website

A static, responsive digital agency website for digital marketing, SEO, social campaigns, software development, web development, and automation.

## Run locally

```bash
python3 -m http.server 4173
```

Open http://localhost:4173.

## Publish

This is a static site, so it can be deployed without a build step:

- **Netlify:** drag the `Digital_marketing` folder into Netlify Drop.
- **Vercel:** import the folder/repository, choose the static framework option, and leave the build command empty.
- **GitHub Pages:** push the folder to a repository and enable Pages from the main branch and root folder.

Before publishing, replace `hello@brightline.studio` in `index.html` with the agency's real email address. The site intentionally does not show sample projects or invented results while the agency is new.

Replace the WhatsApp link in `index.html` with the agency's number in international format, for example `https://wa.me/15551234567`.

## Image licensing

The current editorial images are loaded from Unsplash and are subject to the [Unsplash License](https://unsplash.com/license). They are not “copyright-free” in the legal sense. For launch, keep a record of each source URL and replace them with agency-owned or properly licensed images when available.

## Name check

“Brightline” is a strong brand direction, but this website does not establish trademark or company-name availability. Before registering the business or buying a domain, search the relevant trademark database, company registry, social handles, and domain registrar for your target country. Avoid using the name if a related digital agency or software company has enforceable rights in your market.
