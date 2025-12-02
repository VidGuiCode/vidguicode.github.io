# SyntraLab Overview

SyntraLab is my personal “mini cloud” designed to keep learning projects, media services, and AI utilities online 24/7 without relying on third-party SaaS platforms. It showcases how I apply cloud-computing concepts—networking, automation, security—in a self-hosted environment.

## Goals
- Deliver media streaming, dashboards, and AI helpers to friends and family.
- Practice DevOps in a realistic setting: deployments, monitoring, backups.
- Keep costs low by combining on-prem hardware with free-tier cloud resources.

## Design Principles
1. **Defense in depth:** WireGuard tunnels, Cloudflare proxying, and TLS everywhere.
2. **Service isolation:** Docker Compose stacks per workload, plus VLAN separation.
3. **Human-friendly UX:** All services live under memorable subdomains with auto-managed certificates.
4. **Observability first:** Health checks and logs are centralized so issues surface quickly.

## Components
- **Edge / Gateway:** Cloud VPS running Caddy for reverse proxy + TLS, DNS via Cloudflare, and a WireGuard endpoint into the private network.
- **Service Node:** Raspberry Pi 5 hosting containers (Jellyfin, Radarr, Sonarr, Digest, Control Center, supporting DBs/queues).
- **Automation Layer:** IaC-style Compose files, update scripts, and backup routines executed via Git + cron.

## Why It Matters
SyntraLab demonstrates real-world experience with networking, infrastructure security, container orchestration, and multi-service lifecycle management—skills directly transferable to cloud and DevOps roles.