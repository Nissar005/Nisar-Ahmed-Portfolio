import { useEffect } from "react";

type SeoProps = {
  title?: string;
  description?: string;
  path?: string;
};

const SITE = "https://nisarahmedsiddiqui.in";
const DEFAULT_TITLE = "Nisar Ahmed Siddiqui | Nisar Ahmed | DevOps Engineer";
const DEFAULT_DESCRIPTION =
  "Nisar Ahmed Siddiqui, also known as Nisar Ahmed, is a Computer Science Engineering graduate from Ballari, Karnataka, exploring DevOps, AWS, cloud infrastructure, CI/CD, Kubernetes, automation, QA and web development.";

export default function Seo({ title = DEFAULT_TITLE, description = DEFAULT_DESCRIPTION, path = "/" }: SeoProps) {
  useEffect(() => {
    const url = `${SITE}${path === "/" ? "/" : path}`;
    document.title = title;

    const setMeta = (selector: string, attribute: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.setAttribute(attribute, content);
    };

    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = url;

    const schema = document.querySelector<HTMLScriptElement>('script[type="application/ld+json"]');
    if (schema && path !== "/") {
      schema.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: title,
        description,
        url,
        isPartOf: { "@id": `${SITE}/#website` },
        about: { "@id": `${SITE}/#person` },
      });
    }

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description, path]);

  return null;
}
