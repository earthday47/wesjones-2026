/**
 * Work history timeline: each job followed by the projects done there.
 */

interface Project {
  title: string;
  links: string[];
}

interface Job {
  title: string;
  dates: string;
  description: string[];
  projects: Project[];
}

interface Props {
  jobs: Job[];
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M10 3h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4V5a2 2 0 0 1 2-2Zm0 3h4V5h-4v1Z" />
    </svg>
  );
}

function CogIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor">
      <path d="M19.4 13a7.7 7.7 0 0 0 0-2l2.1-1.6-2-3.4-2.5 1a7.6 7.6 0 0 0-1.7-1L15 3.3h-4l-.3 2.7a7.6 7.6 0 0 0-1.7 1l-2.5-1-2 3.4L6.6 11a7.7 7.7 0 0 0 0 2l-2.1 1.6 2 3.4 2.5-1a7.6 7.6 0 0 0 1.7 1l.3 2.7h4l.3-2.7a7.6 7.6 0 0 0 1.7-1l2.5 1 2-3.4L19.4 13ZM13 15.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z" transform="translate(-1 0)" />
    </svg>
  );
}

export default function Timeline({ jobs }: Props) {
  return (
    <ol className="timeline">
      {jobs.map((job) => (
        <li key={job.title} className="timeline__job">
          <article className="timeline__item timeline__item--job">
            <span className="timeline__badge timeline__badge--job">
              <BriefcaseIcon />
            </span>
            <div className="timeline__panel">
              <h3 className="timeline__title">{job.title}</h3>
              <p className="timeline__meta">{job.dates}</p>
              {job.description.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </article>

          {job.projects.length > 0 && (
            <ul className="timeline__projects">
              {job.projects.map((project) => (
                <li key={project.title} className="timeline__item timeline__item--project">
                  <span className="timeline__badge timeline__badge--project">
                    <CogIcon />
                  </span>
                  <div className="timeline__panel">
                    <h4 className="timeline__title">{project.title}</h4>
                    <ul className="timeline__links">
                      {project.links.map((url) => (
                        <li key={url}>
                          <a href={url}>{url.replace(/^https?:\/\//, '').replace(/\/$/, '')}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
