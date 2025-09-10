
# HyperCloakDetected

A stealth module that detects Relay Classroom surveillance and activates cloak mode.

## Features
- Scans for DOM injections and outbound traffic
- Spoofs tab title and UI when surveillance is detected
- Logs detection results to browser and downloadable file

## Usage
1. Clone or download the repo
2. Open `index.html` in a browser
3. Wait for detection to run (3s intervals)
4. If Relay is detected, cloak mode activates and logs are saved

## Notes
- Works in browser sandbox (PlayCode, GitHub Pages)
- For deeper system scans, add PowerShell or shell modules
