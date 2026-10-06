import { Helmet } from "react-helmet-async";

const SITE_URL = "https://calculaslab.vercel.app";

const DEFAULT_DESCRIPTION =
  "Practical Math Lab helps you learn calculus through clear explanations, formulas, rules, interactive calculators, examples, applications, visualization, and numerical methods.";

export default function SEO({
  title = "Practical Math Lab | Learn Calculus",
  description = DEFAULT_DESCRIPTION,
  canonical,
  image = "/og-image.png",
  noIndex = false,
}) {
  const canonicalUrl = canonical
    ? `${SITE_URL}${canonical.startsWith("/") ? canonical : `/${canonical}`}`
    : undefined;

  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl || SITE_URL} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
