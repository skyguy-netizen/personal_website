const canonicalUrl = process.env.SITE_URL || 'https://aaravsane.com';
const metaImage = process.env.SITE_URL
  ? `${process.env.SITE_URL}/og-image.png`
  : 'https://aaravsane.com/og-image.png';
const metaDescription =
  'Computer Science Doctorate Student at Purdue University with a passion for Machine Learning and Artificial Intelligence';

const defaultSEOConfig = {
  defaultTitle: 'Aarav Sane - Personal Website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Aarav Sane - Personal Website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'Aarav Sane - Personal Website',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'Aarav Sane - Personal Website',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'Aarav Sane - Personal Website',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'Aarav Sane',
  },
  twitter: {
    handle: '@aaravsane',
    site: '@aaravsane',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
