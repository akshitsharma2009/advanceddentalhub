import { Helmet } from "react-helmet-async";

const SITE_URL = "https://advanceddentalhub.lovable.app";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>;
}

const SEO = ({ title, description, path, type = "website", noindex, jsonLd }: SEOProps) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      {jsonLd && <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>}
    </Helmet>
  );
};

export default SEO;
