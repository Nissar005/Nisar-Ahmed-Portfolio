import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star } from "lucide-react";
import { GithubIcon } from "../components/icons";
import SectionHeading from "../components/SectionHeading";

// Set this to your GitHub username to pull repositories live from the GitHub API.
export const GITHUB_USERNAME = "Nissar005";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!GITHUB_USERNAME) return;
    let cancelled = false;

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API request failed");
        return res.json();
      })
      .then((data: Repo[]) => {
        if (!cancelled) setRepos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="github" className="py-24 sm:py-32 border-t border-line-soft">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="git remote -v" title="GitHub Projects" />

        {!GITHUB_USERNAME && (
          <p className="mt-6 text-sm text-ink-faint">
            Set <code className="font-mono">GITHUB_USERNAME</code> in{" "}
            <code className="font-mono">src/sections/GitHubProjects.tsx</code> to pull your
            repositories live from the GitHub API.
          </p>
        )}
        {GITHUB_USERNAME && error && (
          <p className="mt-6 text-sm text-ink-faint">Couldn't load repositories from GitHub right now.</p>
        )}

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {(repos ?? placeholderRepos).map((repo, i) => {
            const Wrapper = repo.html_url ? motion.a : motion.div;
            return (
              <Wrapper
                key={repo.id}
                {...(repo.html_url ? { href: repo.html_url, target: "_blank", rel: "noreferrer" } : {})}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="panel rounded-lg p-5 flex flex-col hover:border-mint-dim transition-colors"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon size={16} className="text-ink-dim" />
                  <span className="font-mono text-sm text-ink truncate">{repo.name}</span>
                </div>
                <p className="mt-2.5 text-sm text-ink-dim leading-relaxed flex-1">
                  {repo.description ?? "[ADD YOUR INFORMATION]"}
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
                  {repo.language && <span>{repo.language}</span>}
                  <span className="inline-flex items-center gap-1">
                    <Star size={12} /> {repo.stargazers_count}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={12} /> {repo.forks_count}
                  </span>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const placeholderRepos: Repo[] = Array.from({ length: 3 }).map((_, i) => ({
  id: i,
  name: "[ADD YOUR REPOSITORY]",
  description: "Connect a GitHub username to display real repositories here.",
  html_url: "",
  language: null,
  stargazers_count: 0,
  forks_count: 0,
}));
