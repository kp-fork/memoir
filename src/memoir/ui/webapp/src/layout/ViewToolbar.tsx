import { useEffect } from "react";
import { useStore } from "../state/storeSlice";
import { useUI, AUTO_REFRESH_MS } from "../state/uiSlice";
import "./ViewToolbar.css";

/**
 * Right-aligned toolbar on top of the view body. Two affordances:
 *   - Manual refresh — re-fetches the connected store (which propagates
 *     through to all views via ``revision`` bumps in storeSlice).
 *   - Auto-refresh toggle — polls every ``AUTO_REFRESH_MS`` while on.
 *     Session-only (not persisted) because polling has a real cost.
 *
 * The refresh icon spins while a fetch is in flight OR auto-refresh
 * is engaged, so the user always has a visual cue for "is data live?".
 */
export default function ViewToolbar() {
  const isRefreshing = useStore((s) => s.status === "connecting");
  const storePath = useStore((s) => s.storePath);
  const autoRefresh = useUI((s) => s.autoRefresh);
  const toggleAutoRefresh = useUI((s) => s.toggleAutoRefresh);
  const setAutoRefresh = useUI((s) => s.setAutoRefresh);

  const refresh = () => {
    void useStore.getState().refresh();
  };

  // Polling loop — only runs when toggle is on AND we have a store to
  // poll against. ``silent: true`` suppresses status flicker, history
  // entries, and re-renders when the payload is unchanged. Cleanup on
  // unmount or toggle-off cancels the interval cleanly so we don't
  // leak fetches.
  useEffect(() => {
    if (!autoRefresh || !storePath) return;
    const id = window.setInterval(() => {
      // Skip a tick if a manual refresh is already in flight — avoids
      // doubling the request rate on slow networks.
      if (useStore.getState().status === "connecting") return;
      void useStore.getState().refresh({ silent: true });
    }, AUTO_REFRESH_MS);
    return () => window.clearInterval(id);
  }, [autoRefresh, storePath]);

  // If the store disconnects while auto-refresh is on, flip it off so
  // the icon doesn't spin forever for nothing.
  useEffect(() => {
    if (!storePath && autoRefresh) setAutoRefresh(false);
  }, [storePath, autoRefresh, setAutoRefresh]);

  const spinning = isRefreshing || autoRefresh;

  return (
    <div className="view-toolbar" role="toolbar" aria-label="View refresh controls">
      <button
        type="button"
        className="view-toolbar-btn"
        onClick={refresh}
        disabled={!storePath || isRefreshing}
        title="Refresh now"
        aria-label="Refresh the active view"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={spinning ? "view-toolbar-spinning" : undefined}
        >
          <polyline points="23 4 23 10 17 10" />
          <polyline points="1 20 1 14 7 14" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      </button>
      <button
        type="button"
        className={`view-toolbar-toggle${autoRefresh ? " active" : ""}`}
        onClick={toggleAutoRefresh}
        disabled={!storePath}
        aria-pressed={autoRefresh}
        title={
          autoRefresh
            ? `Auto-refresh on — polling every ${AUTO_REFRESH_MS / 1000}s. Click to stop.`
            : `Click to auto-refresh every ${AUTO_REFRESH_MS / 1000}s.`
        }
      >
        <svg
          className={`view-toolbar-led${autoRefresh ? " on" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          aria-hidden="true"
        >
          {/* Claude/Anthropic burst — 12 rays at 30° intervals from center. */}
          <line x1="12" y1="2" x2="12" y2="22" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <line x1="20.66" y1="7" x2="3.34" y2="17" />
          <line x1="17" y1="3.34" x2="7" y2="20.66" />
          <line x1="3.34" y1="7" x2="20.66" y2="17" />
          <line x1="7" y1="3.34" x2="17" y2="20.66" />
        </svg>
        <span className="view-toolbar-toggle-label">
          {autoRefresh ? `Live · ${AUTO_REFRESH_MS / 1000}s` : "Auto"}
        </span>
      </button>
    </div>
  );
}
