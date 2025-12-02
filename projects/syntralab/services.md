# SyntraLab Services (Public Summary)

| Category | Service | Description | URL (public alias) |
| --- | --- | --- | --- |
| Media | Jellyfin | Streams personal media library with user profiles and remote access. | syntraflix.syntralab.com |
| Media Automation | Radarr / Sonarr | Monitors curated feeds and pulls metadata/posters automatically. | movie-syntraflix.syntralab.com, shows-syntraflix.syntralab.com |
| Dashboards | Control Center | Internal admin UI for managing containers, viewing metrics, and triggering jobs. | control.syntralab.com |
| AI Utilities | Digest | Web interface for summarizing documents/feeds using preset prompts. | digest.syntralab.com |
| Core Portal | SyntraLab Hub | Landing page + status board for the environment. | syntralab.com |

## Operational Practices
- **Authentication:** Centralized accounts with role-based permissions; public endpoints require login.
- **Updates:** Rolling container updates via Compose, with nightly backups of config/data.
- **Monitoring:** Custom scripts + third-party pings track uptime and certificate validity.
- **Remote Access:** Administrative VPN via WireGuard; TOTP required for sensitive dashboards.

All sensitive implementation details (IP ranges, secrets, seed data) remain private; this document focuses on what can safely be shared publicly.