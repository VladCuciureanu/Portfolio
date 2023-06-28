import { Project } from "@/types/project";
import styles from "./index.module.scss";
import Link from "next/link";

export default function ProjectsTable({ data }: { data: Project[] }) {
  const dataGroupedByYear: Record<string, Project[]> = groupDataByYear(data);
  const yearEntries = Object.keys(dataGroupedByYear).sort().reverse();

  return (
    <div className={styles.TableWrapper}>
      <table className={styles.Table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {yearEntries.map((year, yearIndex) => {
            return (
              <>
                {dataGroupedByYear[year].map((project, projectIndex) => {
                  return (
                    <>
                      <tr
                        className={styles.YearContainer}
                        key={`aside-${projectIndex}`}
                      >
                        <td>
                          <aside
                            className={styles.YearDivider}
                            style={{
                              opacity:
                                yearIndex === 0 && projectIndex === 0
                                  ? 0
                                  : undefined,
                            }}
                          />
                          {projectIndex === 0 && (
                            <aside className={styles.Year}>
                              {project.year}
                            </aside>
                          )}
                          <aside
                            className={styles.YearDivider}
                            style={{
                              opacity:
                                yearIndex + 1 === yearEntries.length &&
                                projectIndex + 1 ===
                                  dataGroupedByYear[year].length
                                  ? 0
                                  : undefined,
                            }}
                          />
                        </td>
                      </tr>
                      <tr
                        className={styles.Entry}
                        key={`project-${projectIndex}`}
                      >
                        <td>
                          {project.href ? (
                            <Link
                              href={project.href}
                              target="_blank"
                              style={{ cursor: "ne-resize" }}
                            >
                              {project.name}
                            </Link>
                          ) : (
                            project.name
                          )}
                        </td>
                        <td>{project.description}</td>
                      </tr>
                    </>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function groupDataByYear(projects: Project[]) {
  const groupedData: Record<string, Project[]> = projects.reduce(
    (hash: any, obj) => {
      const key = "year";
      if (obj[key] === undefined) return hash;
      return Object.assign(hash, {
        [obj[key]]: (hash[obj[key]] || []).concat(obj),
      });
    },
    {}
  );
  return groupedData;
}
