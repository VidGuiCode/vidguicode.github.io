# SyntraLab Architecture

`
Internet
   ¦
Cloudflare (DNS + Proxy)
   ¦
Cloud VPS -- WireGuard Tunnel -- Home Lab VLAN
   ¦                                      ¦
Caddy Reverse Proxy                       Raspberry Pi 5 + Docker Compose
`

## Layers

### Edge Gateway (Cloud VPS)
- Runs Caddy for HTTPS termination, automatic certificate renewal, and routing to internal services via WireGuard.
- Hosts lightweight monitoring agents to confirm public endpoints stay reachable.
- Acts as the jump point for remote maintenance.

### Secure Overlay Network
- WireGuard creates an encrypted bridge between the VPS and home lab.
- Subnets are segmented: public gateway, management VLAN, service VLAN.
- Firewall rules enforce least-privilege; only required ports are exposed.

### Service Node (Raspberry Pi 5)
- Docker Compose groups workloads by domain (media, automation, AI).
- Persistent volumes cover databases, media libraries, and configuration.
- System metrics feed into the control dashboard for quick diagnostics.

### Domain Strategy
- Each service lives under a descriptive subdomain: syntralab.com, syntraflix.syntralab.com, digest.syntralab.com, etc.
- Cloudflare handles DNS + caching, while Caddy manages origin routing and TLS.

## Reliability Considerations
- Automated updates with fallback images.
- Off-site backups of Compose manifests and critical data snapshots.
- Health probes trigger notifications if latency or resource usage spikes.