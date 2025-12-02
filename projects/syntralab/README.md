# SyntraLab (Public Overview)

SyntraLab is my self-hosted “mini cloud” that delivers media streaming, internal dashboards, and AI-enabled utilities on top of personal infrastructure. This document captures the high-level story that can safely be published.

## Mission
- Provide always-on access to media, automations, and side-project services without depending on third-party SaaS billing.
- Practice real-world DevOps by designing, deploying, and operating the full stack: hardware, networking, security, and application layers.

## Architecture Snapshot
- **Edge Gateway (Cloud VPS)**  
  Runs Caddy as a reverse proxy with automatic TLS and routes public traffic through Cloudflare to the private network via WireGuard.
- **Service Node (Raspberry Pi 5)**  
  Hosts Docker Compose stacks for Jellyfin, Radarr, Sonarr, custom “Digest” and “Control Center” apps, plus supporting databases and task runners.
- **Secure Overlay Network**  
  WireGuard tunnel links the VPS and home network; VLANs isolate services, and DNS is centrally managed for consistent subdomains.

## Key Capabilities
- **Media Platform:** Jellyfin plus automated acquisition pipelines (Radarr/Sonarr) exposed via vanity subdomains.
- **Operations Portal:** “Control Center” for managing services, deployments, and monitoring snapshots.
- **AI Utilities:** “Digest” web app for summarizing documents and feeds with an opinionated prompt library.
- **Automation:** IaC-style Docker Compose files, health checks, and scheduled maintenance routines.

## Highlights & Learnings
- End-to-end encryption with WireGuard + Caddy + Cloudflare keeps services private while remaining accessible.
- Domain strategy aligns each service to a clear URL, improving UX and keeping SSL management simple.
- Running everything on modest hardware forced thoughtful resource budgeting (CPU pinning, RAM limits).
- Operating this environment sharpened my troubleshooting skills across networking, containers, and OS layers.

## Next Steps
- Expand observability (Grafana/Prometheus) for proactive alerting.
- Document blue/green deployment flow for new nodes.
- Publish a public-safe demo or screenshots once redacted.

---

_For deeper technical docs, see the private context/SyntraLab directory._