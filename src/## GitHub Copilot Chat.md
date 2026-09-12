## GitHub Copilot Chat

- Extension: 0.64.1 (prod)
- VS Code: 1.136.1 (a44adf7f53e00964ab890f9f8758a334f1fc15bc)
- OS: darwin 25.6.0 arm64
- GitHub Account: Tanvir0191

## Network

User Settings:
```json
  "http.systemCertificatesNode": true,
  "telemetry.telemetryLevel": "all",
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.205.243.168 (36 ms)
- DNS ipv6 Lookup: ::ffff:20.205.243.168 (2 ms)
- Proxy URL: None (94 ms)
- Electron fetch (configured): HTTP 403 (190 ms) - unexpected content: {"message":"API rate limit exceeded for 27.123.253.193. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"… (expected: 'current_user_url')
- Node.js https: HTTP 403 (217 ms) - unexpected content: {"message":"API rate limit exceeded for 27.123.253.193. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"… (expected: 'current_user_url')
- Node.js fetch: HTTP 403 (214 ms) - unexpected content: {"message":"API rate limit exceeded for 27.123.253.193. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)","documentation_url":"… (expected: 'current_user_url')

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.22 (15 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.22 (1 ms)
- Proxy URL: None (5 ms)
- Electron fetch (configured): HTTP 200 (903 ms)
- Node.js https: HTTP 200 (825 ms)
- Node.js fetch: HTTP 200 (1068 ms)

Connecting to https://proxy.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 138.91.182.224 (24 ms)
- DNS ipv6 Lookup: ::ffff:138.91.182.224 (2 ms)
- Proxy URL: None (8 ms)
- Electron fetch (configured): HTTP 200 (233 ms)
- Node.js https: HTTP 200 (745 ms)
- Node.js fetch: HTTP 200 (756 ms)

Connecting to https://mobile.events.data.microsoft.com/OneCollector/1.0?cors=true&content-type=application/x-json-stream (Electron fetch): HTTP 200 (424 ms)
Connecting to https://telemetry.individual.githubcopilot.com/telemetry (Node.js https): HTTP 200 (891 ms)
Connecting to https://default.exp-tas.com/vscode/ab (Node.js fetch): HTTP 200 (271 ms)

Number of system certificates: 0

## Notes

- Active fetcher: Electron fetch.
- For corporate networks also see: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).