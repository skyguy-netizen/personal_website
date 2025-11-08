# Image Setup Guide

This guide will help you add the necessary logo images for your website.

## Required Images

### Education Logos
Place these in `public/images/education/`:

1. **purdue.png** - Purdue University logo
   - Download from: https://www.purdue.edu/brand/visual-identity/logos/
   - Or search for "Purdue University logo" and save as `purdue.png`

2. **riv.png** - ✅ Already exists (UCR logo)

### Career/Company Logos
Place these in `public/images/careers/`:

1. **harbinger-motors.png** - Harbinger Motors logo
   - Download from: https://harbingermotors.com
   - Or search for "Harbinger Motors logo" and save as `harbinger-motors.png`

2. **excellon-software.png** - Excellon Software logo
   - Download from: https://excellonsoftware.com
   - Or search for "Excellon Software logo" and save as `excellon-software.png`

3. **engineers-for-good.png** - Engineers for Good logo
   - You can use a generic non-profit icon or download their logo if available
   - Or use a placeholder image

4. **ucr-highlanders.png** - UCR Highlanders logo
   - Download from: https://gohighlanders.com
   - Or search for "UCR Highlanders logo" and save as `ucr-highlanders.png`

5. **acm.png** - ACM logo
   - Download from: https://www.acm.org
   - Or search for "ACM logo" and save as `acm.png`

## Quick Setup Steps

1. Create the careers folder if it doesn't exist:
   ```bash
   mkdir -p public/images/careers
   ```

2. Download or create the logo images listed above

3. Save them with the exact filenames specified

4. Recommended image specifications:
   - Format: PNG (with transparency) or SVG
   - Size: 200x200px to 400x400px
   - Background: Transparent (preferred) or white

## Alternative: Using External URLs

If you prefer to use external URLs instead of local images, you can update the logo paths in:
- `src/common/constant/education.ts`
- `src/common/constant/careers.ts`
- `src/common/constant/volunteer.ts`

Just replace the `/images/...` paths with full URLs.

## Image Sources

Here are some reliable sources for logos:

1. **Company Websites**: Most companies have a press/media kit with logos
2. **Wikipedia**: Many logos are available on Wikipedia pages
3. **Logo Search**: https://logos-world.net/ or https://worldvectorlogo.com/
4. **Official Brand Guidelines**: Many universities and companies publish brand guidelines with downloadable logos

