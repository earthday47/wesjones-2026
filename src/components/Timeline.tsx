/**
 * Work history timeline: each job followed by the projects done there.
 */

interface Project {
  title: string;
  links: string[];
}

interface Highlight {
  label: string;
  body: string;
}

interface Job {
  title: string;
  dates: string;
  location?: string;
  description?: string[];
  highlights?: Highlight[];
  projects: Project[];
}

interface Props {
  jobs: Job[];
}

/**
 * Strips the protocol and trailing slash for display.
 */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');
}

export default function Timeline({ jobs }: Props) {
  return (
    <ol className="timeline">
      {jobs.map((job) => (
        <li key={job.title} className="timeline__job">
          <p className="timeline__meta">
            {job.dates}
            {job.location && <span className="timeline__location">{job.location}</span>}
          </p>
          <h3 className="timeline__title">{job.title}</h3>
          {job.description && (
            <div className="timeline__description">
              {job.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          )}
          {job.highlights && (
            <ul className="timeline__highlights">
              {job.highlights.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}:</strong> {item.body}
                </li>
              ))}
            </ul>
          )}

          {job.projects.length > 0 && (
            <div className="timeline__work">
              <h4 className="timeline__work-label">Selected work</h4>
              <ul className="timeline__projects">
                {job.projects.map(({ title, links: [primary, ...more] }) => (
                  <li key={title} className="timeline__project">
                    <a className="timeline__project-link" href={primary} title={displayUrl(primary)}>
                      {title}
                      <span className="timeline__arrow" aria-hidden="true">↗</span>
                    </a>
                    {more.length > 0 && (
                      <ul className="timeline__links">
                        {more.map((url) => (
                          <li key={url}>
                            <a href={url}>{displayUrl(url)}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
}
