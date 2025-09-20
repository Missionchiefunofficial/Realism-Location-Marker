<!-- Revision: 1.0 -->
# 🛠️ Troubleshooting

This guide helps you resolve common issues with RLM V6.

## 🚨 Common Issues

### Script Not Loading

**Symptoms:**
- No RLM dropdown visible
- Console shows errors
- Script doesn't appear in Tampermonkey

**Solutions:**
1. **Check Tampermonkey is enabled**
   - Go to `chrome://extensions/` (Chrome) or `about:addons` (Firefox)
   - Ensure Tampermonkey is **enabled**

2. **Verify Developer Mode is ON**
   - **Chrome/Edge**: Go to `chrome://extensions/` → Toggle "Developer mode" ON
   - **Firefox**: Go to `about:addons` → Extensions → Tampermonkey → Gear icon → "Debug Add-ons" → Enable

3. **Check script installation**
   - Open Tampermonkey dashboard
   - Verify your loader script is listed and **enabled**
   - If not, reinstall the loader

4. **Clear browser cache**
   - Press `Ctrl+Shift+Delete` (Chrome) or `Ctrl+Shift+Del` (Firefox)
   - Select "Cached images and files"
   - Click "Clear data"

### No RLM Dropdown Visible

**Symptoms:**
- MissionChief loads normally
- No RLM interface visible
- Console shows no RLM messages

**Solutions:**
1. **Verify you're on a MissionChief page**
   - RLM only works on MissionChief game pages
   - Check the URL contains your game server (e.g., missionchief.com)

2. **Check browser console**
   - Press `F12` to open Developer Tools
   - Look for RLM messages in the Console tab
   - Check for any error messages

3. **Try hard refresh**
   - Press `Ctrl+F5` (Windows) or `Cmd+Shift+R` (Mac)
   - This forces a complete page reload

4. **Check script permissions**
   - In Tampermonkey dashboard, click on your RLM script
   - Verify it has permission for your MissionChief domain

### Access Denied (Beta/Dev Versions)

**Symptoms:**
- Dropdown shows "LOCKED" with padlock icon
- Message about authorization required
- Cannot access Beta/Dev features

**Solutions:**
1. **You need authorization for Beta/Dev**
   - These versions are restricted to authorized users only
   - Use Main loader for public access

2. **Request access**
   - Join our Discord server
   - Contact developers with your MCID
   - Wait for authorization approval

3. **Check your MCID**
   - Go to your MissionChief profile
   - Copy the number from the URL (e.g., `/profile/621545`)
   - This is your MCID for authorization

### Building Check Not Working

**Symptoms:**
- No warning when placing buildings near existing ones
- Feature works in incognito mode but not normal browsing

**Solutions:**
1. **Clear browser cache**
   - This is usually a caching issue
   - Use the cache clearing tools on our website

2. **Check script version**
   - Ensure you have the latest version
   - Update your loader if needed

3. **Try incognito mode**
   - If it works in incognito, it's a cache issue
   - Clear your browser cache completely

### Performance Issues

**Symptoms:**
- Slow page loading
- Laggy map interactions
- High memory usage

**Solutions:**
1. **Disable other extensions**
   - Temporarily disable other Tampermonkey scripts
   - Check if performance improves

2. **Clear browser data**
   - Clear cookies, cache, and browsing data
   - Restart your browser

3. **Check system resources**
   - Close unnecessary browser tabs
   - Restart your browser if memory usage is high

## 🔧 Advanced Troubleshooting

### Browser Console Errors

**Common Error Messages:**

1. **"RLM script not found"**
   - Script failed to load from server
   - Check internet connection
   - Try refreshing the page

2. **"Authorization failed"**
   - Beta/Dev access denied
   - Check your MCID and authorization status

3. **"Version mismatch"**
   - Loader and script versions don't match
   - Update your loader to the latest version

### Network Issues

**Symptoms:**
- Script fails to load
- API calls fail
- Intermittent functionality

**Solutions:**
1. **Check internet connection**
   - Ensure stable internet connection
   - Try accessing other websites

2. **Check firewall/antivirus**
   - Some security software blocks Tampermonkey
   - Add exceptions for your browser

3. **Try different network**
   - Test on mobile hotspot
   - Check if issue persists

### Script Conflicts

**Symptoms:**
- RLM works but other features break
- Unexpected behavior
- Console shows conflicts

**Solutions:**
1. **Disable other scripts**
   - Temporarily disable other Tampermonkey scripts
   - Test if RLM works alone

2. **Check script order**
   - In Tampermonkey dashboard, reorder scripts
   - Put RLM at the top of the list

3. **Update conflicting scripts**
   - Update other scripts to latest versions
   - Check for compatibility issues

## 📞 Getting Help

### Before Contacting Support

1. **Check this troubleshooting guide**
2. **Try the solutions listed above**
3. **Check browser console for errors**
4. **Test in incognito mode**

### When Contacting Support

**Include this information:**
- **Browser and version** (e.g., Chrome 95.0)
- **RLM version** (Main/Beta/Dev)
- **MissionChief server** (US/UK/DE/etc.)
- **Error messages** from console
- **Steps to reproduce** the issue

### Contact Methods

1. **💬 Discord** - Join our support server
2. **🌐 Website** - Use the contact form
3. **📧 Email** - Contact the development team

## 🔄 Cache Clearing Tools

### Automatic Cache Clear
- Visit [rlm.missionchief-unofficial.com/clearcache](https://rlm.missionchief-unofficial.com/clearcache)
- Use the provided tools to clear cache

### Manual Cache Clear
1. **Chrome/Edge**: `Ctrl+Shift+Delete` → Select "Cached images and files"
2. **Firefox**: `Ctrl+Shift+Del` → Select "Cache"
3. **Safari**: `Cmd+Option+E` → Clear cache

### PowerShell/Batch Scripts
- Download cache clearing scripts from our website
- Run as administrator for complete cache clear

## ✅ Success Indicators

**RLM is working correctly when:**
- ✅ RLM dropdown appears in top-right corner
- ✅ Console shows "RLM V6 Loader starting..." message
- ✅ Map shows additional markers and information
- ✅ Building check warnings appear when appropriate
- ✅ No error messages in browser console

---

*Last updated: September 2025*