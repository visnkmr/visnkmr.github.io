---
publishDate: ''
title: 'Filedime'
downloadurl: https://github.com/visnkmr/filedime
description: 'The rust based file explorer for PC.'
download: ''
image: 'fx'
tags: [pc,gh,win,lx,mos]
---

Filedime, an open source almost feature complete file explorer written in Rust (for all filesystem interaction,backend), Tauri(for frontend, front-backend intercom).

Features implemented:

 multi window, open in new window open in right click context menu
 tabs, open in new tab option in context menu
 hot reload/ monitor for changes: markdown, html files using the watch button that shows up on opening the file.
 search with speed and responsiveness parity with fzf
 folder size compute with speed and responsiveness parity with baobab(Disk Usage Analyzer).
 preview html, markdown files.
 LOC for ts, rs, js, java, md ,css, html, toml, etc more can be implemented as required.
 bookmark files or folders.
 details screen for list sort by date, size.
 path autocomplete as you type.
 recent files list that ignores node_modules, and hidden folders and files etc.
 no of each file type in present location.
 optionally show immediate sub folder count of a folder.
 show image dimension along with file type.
 System Tray icons for opening new window and access recent files.
 rsync based copy, cut, move, etc.
 
Subtle features

 show name of right click file above context menu
 show file location on hover at bottom left of window when scrolling over results of search
