# RLM Changelog

**Revision**: 1.2

This document tracks all changes, updates, and improvements made to the Realism Location Marker (RLM) project.

---

## Version 6.3.2
**Release Date**: January 9, 2025

### 🔗 Installation Improvements
- **Direct Raw Links**: Added one-click installation links to all loader files
- **Simplified Process**: Reduced installation steps from 7 to 4 steps
- **README Enhancement**: Made loader names clickable in the comparison table
- **Path Correction**: Fixed all URLs to point to correct GitHub root directory
- **Documentation Updates**: Updated Installation Guide with direct links and alternative manual method

### 📖 Documentation Updates
- **Installation Guide**: Updated to Revision 1.1 with improved step-by-step process
- **Changelog**: Updated to Revision 1.2 with latest improvements
- **README**: Updated to Revision 1.2 with clickable loader links in comparison table
- **Visual Guide**: Updated to reflect actual GitHub repository structure

---

## Version 6.3.1
**Release Date**: January 9, 2025

### 🔧 Technical Improvements
- **Fixed Tampermonkey Auto-Update URLs**: All loader files now use proper GitHub raw URLs for automatic updates
  - Main loader: Fixed path from root directory to `RLM/loaders/`
  - Beta loader: Changed from local website URL to GitHub URL
  - Dev loader: Changed from local website URL to GitHub URL
- **Improved Update Reliability**: Tampermonkey users will now receive automatic updates directly from GitHub

### 📊 Statistics & Monitoring
- **Live Usage Statistics**: Implemented real-time tracking of loader usage
- **GitHub Badges**: Added live statistics badges to README showing user counts for each loader type
- **Custom RLM Marker Icons**: Integrated custom RLM marker icons into GitHub badges using Custom Icon Badges service
- **Web User Tracking**: Added tracking for web interface users (non-Tampermonkey users)
- **Total User Count**: Added automatic calculation and display of total unique users across all platforms
- **Enhanced Statistics Display**: Improved Discord embed formatting with clearer platform names and update frequency indication

### 🎯 Badge System
- **Main Badge**: Green badge with custom RLM marker icon
- **Beta Badge**: Yellow badge with custom RLM marker icon  
- **Dev Badge**: Red badge with custom RLM marker icon
- **Web Badge**: Blue badge with globe icon for web interface users
- **Live Updates**: Badges update every 30 minutes with current usage statistics

### 🔄 Auto-Update System
- **Enhanced Change Detection**: Improved GitHub auto-update system to accurately detect file changes
- **Detailed Version Reporting**: Discord notifications now show specific version changes (e.g., "6.3.0 → 6.3.1")
- **Proper Terminology**: Wiki/documentation files use "Revision" terminology, loader files use "Version" terminology

### 📝 Documentation
- **Loader Comparison**: Updated comparison table to include Web Interface
- **Installation Guide**: Enhanced with latest information
- **Troubleshooting**: Updated with current solutions

---

## Version 6.3.0
**Release Date**: Previous release

### 🚀 Features
- Multi-language support
- Server-specific building IDs
- Enhanced POI management system
- Improved user interface

### 🔧 Technical
- Database optimizations
- Performance improvements
- Bug fixes and stability enhancements

---

## Previous Versions

For historical changes prior to version 6.3.0, please refer to the project's commit history on GitHub.

---

## How to Read This Changelog

- **Version Numbers**: Follow semantic versioning (Major.Minor.Patch)
- **Loader Types**: 
  - **Main**: Stable release for general use
  - **Beta**: Pre-release testing version
  - **Dev**: Development version with experimental features
- **Categories**: Changes are grouped by type (Features, Technical, Documentation, etc.)
- **Icons**: Used to quickly identify the type of change

---

*This changelog is automatically updated when new versions are released.*
