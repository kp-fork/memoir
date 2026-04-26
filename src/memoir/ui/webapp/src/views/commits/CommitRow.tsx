import type { MouseEvent, KeyboardEvent } from "react";
import type { Commit } from "../../api/types";
import { absoluteTime, relativeTime } from "../../lib/time";
import "./CommitRow.css";

interface CommitRowProps {
  commit: Commit;
  selected: boolean;
  isPrimary: boolean;
  isFirst: boolean;
  isLast: boolean;
  currentBranch: string | null;
  onClick: (hash: string, event: MouseEvent<HTMLLIElement>) => void;
  onKeyNav: (hash: string, key: "ArrowUp" | "ArrowDown" | "Enter") => void;
}

export default function CommitRow({
  commit,
  selected,
  isPrimary,
  isFirst,
  isLast,
  currentBranch,
  onClick,
  onKeyNav,
}: CommitRowProps) {
  const onKeyDown = (e: KeyboardEvent<HTMLLIElement>) => {
    if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === "Enter") {
      e.preventDefault();
      onKeyNav(commit.hash, e.key);
    }
  };

  return (
    <li
      className={`commit-row ${selected ? "selected" : ""} ${isPrimary ? "primary" : ""}`}
      role="option"
      aria-selected={selected}
      tabIndex={isPrimary ? 0 : -1}
      data-hash={commit.hash}
      onClick={(e) => onClick(commit.hash, e)}
      onKeyDown={onKeyDown}
      title={absoluteTime(commit.timestamp)}
    >
      <div className="commit-gutter" aria-hidden="true">
        <span className="commit-line commit-line-top" data-hidden={isFirst} />
        <svg
          className="commit-dot"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          {/* Claude/Anthropic burst — 12 rays at 30° intervals from center. */}
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="20.66" y1="7" x2="3.34" y2="17" />
          <line x1="17" y1="3.34" x2="7" y2="20.66" />
          <line x1="3.34" y1="7" x2="20.66" y2="17" />
          <line x1="7" y1="3.34" x2="17" y2="20.66" />
        </svg>
        <span className="commit-line commit-line-bottom" data-hidden={isLast} />
      </div>

      <div className="commit-main">
        <div className="commit-top-row">
          <code className="commit-hash">{commit.short_hash}</code>
          <span className="commit-message" title={commit.message}>
            {commit.message}
          </span>
        </div>
        <div className="commit-meta-row">
          <span className="commit-author">{commit.author}</span>
          <span className="commit-dot-sep" aria-hidden="true">
            ·
          </span>
          <span className="commit-time">{relativeTime(commit.timestamp)}</span>
          {commit.refs.map((ref) => (
            <span
              key={`ref-${ref}`}
              className={`chip accent${ref === currentBranch ? " current" : ""}`}
              title={`Branch head: ${ref}`}
            >
              {ref}
            </span>
          ))}
          {commit.tags.map((tag) => (
            <span key={`tag-${tag}`} className="chip tag" title={`Tag: ${tag}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </li>
  );
}
