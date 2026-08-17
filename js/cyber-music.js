/**
 * CYBER-TECHNO MUSIC PLAYER CONTROLLER
 * Comprehensive multi-platform player for YouTube, Spotify & SoundCloud
 * Features Real-time Visualizer, Live Listener Telemetry & Ambient SFX
 */

(function () {
  'use strict';

  // --- 1. CURATED TRACK DATABASE ---
  const CYBER_TRACKS = [
    {
      id: 'yt-1',
      title: 'Night City Cyberpunk Dark Techno Mix',
      artist: 'Cyber Syndicate',
      platform: 'youtube',
      genre: 'Dark Techno',
      badge: 'YouTube Live Mix',
      embedUrl: 'https://www.youtube.com/embed/ebXbLfLACGM?si=UF5YG9Bww4yBpeuT?autoplay=1&enablejsapi=1',
      thumbnail: 'https://www.b4l.cz/wp-content/uploads/2025/11/CALVIN-HARRIS_1080x1350-1.png?w=600&auto=format&fit=crop&q=80',
      duration: '1:45:00',
      listeners: 2480,
      bpm: '138 BPM'
    },
    {
      id: 'sp-1',
      title: 'Techno Bunker Berlin 2026 Peak Time',
      artist: 'Klangkuenstler / Charlotte / Amelie',
      platform: 'spotify',
      genre: 'Peak Techno',
      badge: 'Spotify Playlist',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX6J5NfMJS675?utm_source=generator&theme=0',
      thumbnail: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
      duration: '80+ Tracks',
      listeners: 3910,
      bpm: '142 BPM'
    },
    {
      id: 'sc-1',
      title: 'Industrial Acid Techno & Cyber Grooves',
      artist: 'Hate Berlin Underground',
      platform: 'soundcloud',
      genre: 'Acid Techno',
      badge: 'SoundCloud Set',
      embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/soundcloud%253Aplaylists%253A34350922',
      thumbnail: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=600&auto=format&fit=crop&q=80',
      duration: '58:20',
      listeners: 1840,
      bpm: '140 BPM'
    },
    {
      id: 'yt-2',
      title: 'Cyberpunk 2077 Combat & Club Cyber Beats',
      artist: 'Marcin Przybyłowicz / PT Adamczyk',
      platform: 'youtube',
      genre: 'Cyberpunk OST',
      badge: 'YouTube Mix',
      embedUrl: 'https://www.youtube.com/embed/videoseries?list=PLsDblIUMTkw3KPoe2ynbXhRqwmxQ7wSOe&autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80',
      duration: '2:10:00',
      listeners: 4120,
      bpm: '135 BPM'
    },
    {
      id: 'sp-2',
      title: 'Synthwave & Retrowave Neon Cyber Drive',
      artist: 'Kavinsky / The Midnight / Gunship',
      platform: 'spotify',
      genre: 'Synthwave',
      badge: 'Spotify Player',
      embedUrl: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXdLEN7aqioXM?utm_source=generator&theme=0',
      thumbnail: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80',
      duration: '50+ Tracks',
      listeners: 1950,
      bpm: '118 BPM'
    },
    {
      id: 'sc-2',
      title: 'Cyber Deck 24/7 Lo-Fi & Dark Electronica',
      artist: 'NetRunner Records',
      platform: 'soundcloud',
      genre: 'Cyber Electronica',
      badge: 'SoundCloud Stream',
      embedUrl: 'https://soundcloud.com/imrankhanworld-1/sets/unforgettable?si=46760a4ae5404df5a8ae4fc61d11d8c7&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
      thumbnail: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&auto=format&fit=crop&q=80',
      duration: 'Continuous',
      listeners: 1220,
      bpm: '124 BPM'
    },
    {
      id: 'yt-3',
      title: '24/7 Synthwave Radio - Chill Cyber Beats',
      artist: 'Lofi Girl / Synthwave Net',
      platform: 'youtube',
      genre: 'Synthwave / Lo-Fi',
      badge: 'YouTube 24/7',
      embedUrl: 'https://www.youtube.com/embed/4xDzrJKXOOY?autoplay=1',
      thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&auto=format&fit=crop&q=80',
      duration: 'LIVE 24/7',
      listeners: 5310,
      bpm: '110 BPM'
    },
    {
      id: 'sp-3',
      title: 'Hypnotic Deep Techno Pulse & Minimal',
      artist: 'Afterlife / Tale of Us / Mind Against',
      platform: 'spotify',
      genre: 'Melodic Techno',
      badge: 'Spotify Mix',
      embedUrl: 'https://open.spotify.com/embed/album/7E4Zm8sWQgkGyOm2v4d9D4?utm_source=generator&si=33492e2ef3194c8b',
      thumbnail: 'https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0266345dc4318d575d294e3567?w=600&auto=format&fit=crop&q=80',
      duration: '6:42',
      listeners: 2790,
      bpm: '126 BPM'
    },
    {
      id: 'yt-4',
      title: 'Hard Techno Raw Rave Set - Neo Tokyo 2026',
      artist: 'Tokyo Cyber Rave',
      platform: 'youtube',
      genre: 'Hard Techno',
      badge: 'YouTube Live',
      embedUrl: 'https://www.youtube.com/embed/GWoK3HULCLo?si=EsGU4LphDbYwWwur',
      thumbnail: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&auto=format&fit=crop&q=80',
      duration: '1:12:30',
      listeners: 3450,
      bpm: '150 BPM'
    },
    {
      id: 'yt-5',
      title: 'Cyberpunk Matrix Acid Bass & Club Mix',
      artist: 'Cyberdeck Syndicate',
      platform: 'youtube',
      genre: 'Acid Cyber Techno',
      badge: 'YouTube Playlist',
      embedUrl: 'https://www.youtube.com/embed/r-z-wFXqmw0?list=PLsDblIUMTkw3PIZ-iSdy07euvVM1Km0fP&autoplay=1',
      thumbnail: 'https://img.youtube.com/vi/r-z-wFXqmw0/hqdefault.jpg',
      duration: 'Playlist Mix',
      listeners: 4620,
      bpm: '140 BPM'
    },
    {
      id: 'yt-6',
      title: 'Cyber Techno Overdrive & Industrial Peak',
      artist: 'Night City Rave Unit',
      platform: 'youtube',
      genre: 'Industrial Techno',
      badge: 'YouTube Live',
      embedUrl: 'https://www.youtube.com/embed/8ofCZObsnOo?autoplay=1',
      thumbnail: 'https://img.youtube.com/vi/8ofCZObsnOo/hqdefault.jpg',
      duration: '1:32:45',
      listeners: 3890,
      bpm: '144 BPM'
    }
  ];

  // --- 2. CYBER ROOMS / CHANNELS WITH DEDICATED TRACKS ---
  const CYBER_ROOMS = {
    'neo-tokyo': { 
      name: '🇯🇵 Neo-Tokyo Matrix 2077 (Live)', 
      trackId: 'yt-1',
      baseListeners: 4890, 
      bpm: '138 BPM',
      theme: 'cyan',
      signal: '99.9% LOCKED',
      broadcastMsg: '⚡ Synced to Neo-Tokyo Matrix 2077 High Frequency Grid'
    },
    'berlin-vault': { 
      name: '🇩🇪 Berlin Techno Vault (Underground)', 
      trackId: 'sp-1',
      baseListeners: 3420, 
      bpm: '142 BPM',
      theme: 'magenta',
      signal: '98.7% TUNED',
      broadcastMsg: '🔊 Locked into Berlin Underground Techno Vault'
    },
    'night-city': { 
      name: '🌃 Night City Afterlife Club', 
      trackId: 'yt-4',
      baseListeners: 5410, 
      bpm: '150 BPM',
      theme: 'yellow',
      signal: '100% OVERDRIVE',
      broadcastMsg: '🔥 Connected to Night City Rave Overdrive Stream'
    },
    'london-subnet': { 
      name: '🇬🇧 London Acid Subnet Core', 
      trackId: 'sc-1',
      baseListeners: 2150, 
      bpm: '140 BPM',
      theme: 'green',
      signal: '97.4% ACID LOCKED',
      broadcastMsg: '🧪 Synchronized to London Underground Acid Subnet'
    },
    'detroit-hub': { 
      name: '🇺🇸 Detroit Analog Pulse Station', 
      trackId: 'sp-3',
      baseListeners: 1670, 
      bpm: '126 BPM',
      theme: 'purple',
      signal: '96.8% ANALOG SYNC',
      broadcastMsg: '📼 Tuning into Detroit Minimal Analog Frequencies'
    }
  };

  // --- 3. STATE MANAGEMENT ---
  const state = {
    activeTrack: CYBER_TRACKS[0],
    activePlatformFilter: 'all',
    searchQuery: '',
    currentRoom: 'neo-tokyo',
    totalListeners: 4890,
    isMuted: false,
    audioFx: {
      rain: false,
      drone: false,
      vinyl: false
    },
    visualizerTheme: 'cyan',
    scanlines: true
  };

  // --- 4. WEB AUDIO SYNTHESIZERS (AMBIENT FX & TUNING BEEPS) ---
  let audioCtx = null;
  let rainNode = null;
  let droneOsc1 = null;
  let droneOsc2 = null;
  let droneGain = null;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  function playTuningBeep() {
    try {
      initAudioContext();
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1760, audioCtx.currentTime + 0.08);
      osc.frequency.exponentialRampToValueAtTime(440, audioCtx.currentTime + 0.15);
      
      gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.18);

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.18);
    } catch (e) {
      // Audio context might require explicit user interaction
    }
  }

  function toggleCyberRain() {
    initAudioContext();
    if (!audioCtx) return;
    if (state.audioFx.rain) {
      if (rainNode) {
        try { rainNode.stop(); rainNode.disconnect(); } catch (e) {}
        rainNode = null;
      }
      state.audioFx.rain = false;
      showToast('Cyber Rain Ambience Disabled');
    } else {
      const bufferSize = audioCtx.sampleRate * 2;
      const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
      const data = buffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.04;
        b6 = white * 0.115926;
      }
      const noiseSource = audioCtx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 1200;

      const gain = audioCtx.createGain();
      gain.gain.value = 0.15;

      noiseSource.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);
      noiseSource.start();
      rainNode = noiseSource;
      state.audioFx.rain = true;
      showToast('Cyber Rain Ambience Active');
    }
    updateFxButtons();
  }

  function toggleNeonDrone() {
    initAudioContext();
    if (!audioCtx) return;
    if (state.audioFx.drone) {
      if (droneOsc1) { try { droneOsc1.stop(); droneOsc1.disconnect(); } catch (e) {} droneOsc1 = null; }
      if (droneOsc2) { try { droneOsc2.stop(); droneOsc2.disconnect(); } catch (e) {} droneOsc2 = null; }
      state.audioFx.drone = false;
      showToast('Cyber Neon Drone Disabled');
    } else {
      droneOsc1 = audioCtx.createOscillator();
      droneOsc2 = audioCtx.createOscillator();
      droneGain = audioCtx.createGain();

      droneOsc1.type = 'sawtooth';
      droneOsc1.frequency.value = 55;

      droneOsc2.type = 'sine';
      droneOsc2.frequency.value = 110.5;

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 350;

      droneGain.gain.value = 0.08;

      droneOsc1.connect(filter);
      droneOsc2.connect(filter);
      filter.connect(droneGain);
      droneGain.connect(audioCtx.destination);

      droneOsc1.start();
      droneOsc2.start();
      state.audioFx.drone = true;
      showToast('Cyber Neon Hum / Drone Active');
    }
    updateFxButtons();
  }

  function updateFxButtons() {
    const rainBtn = document.getElementById('fxRainBtn');
    const droneBtn = document.getElementById('fxDroneBtn');
    if (rainBtn) rainBtn.classList.toggle('active', state.audioFx.rain);
    if (droneBtn) droneBtn.classList.toggle('active', state.audioFx.drone);
  }

  // --- 5. DOM ELEMENTS & CACHE ---
  const elements = {};

  function cacheDom() {
    elements.playerFrame = document.getElementById('cyberPlayerFrame');
    elements.platformTag = document.getElementById('deckPlatformTag');
    elements.nowPlayingTitle = document.getElementById('deckNowPlaying');
    elements.tracksGrid = document.getElementById('cyberTracksGrid');
    elements.roomSelect = document.getElementById('cyberRoomSelect');
    elements.liveCounterNumber = document.getElementById('liveCounterNumber');
    elements.liveCounterDelta = document.getElementById('liveCounterDelta');
    elements.topListenersVal = document.getElementById('topListenersVal');
    elements.topBpmVal = document.getElementById('topBpmVal');
    elements.customInput = document.getElementById('customTrackUrl');
    elements.customLoadBtn = document.getElementById('customLoadBtn');
    elements.searchInput = document.getElementById('trackSearchInput');
    elements.filterTabs = document.querySelectorAll('.tab-pill');
    elements.canvas = document.getElementById('cyberVisualizerCanvas');
    elements.netChatStream = document.getElementById('netChatStream');
    elements.scanlineToggle = document.getElementById('scanlineToggle');
    elements.themeToggleBtn = document.getElementById('themeToggleBtn');
    elements.refreshDeckBtn = document.getElementById('refreshDeckBtn');
    elements.fullscreenBtn = document.getElementById('fullscreenDeckBtn');
    elements.locationPills = document.querySelectorAll('.loc-pill');
  }

  // --- 6. TRACK PLAYBACK ENGINE ---
  function loadTrack(track, silent = false) {
    if (!track) return;
    state.activeTrack = track;

    // Update Player Screen
    if (elements.playerFrame) {
      elements.playerFrame.src = track.embedUrl;
    }

    // Update Deck Header
    if (elements.nowPlayingTitle) {
      elements.nowPlayingTitle.textContent = `${track.title} - ${track.artist}`;
    }

    if (elements.platformTag) {
      elements.platformTag.className = `deck-platform-tag ${track.platform}`;
      const iconClass = track.platform === 'youtube' ? 'fa-youtube' : (track.platform === 'spotify' ? 'fa-spotify' : (track.platform === 'soundcloud' ? 'fa-soundcloud' : 'fa-radio'));
      elements.platformTag.innerHTML = `<i class="fa-brands ${iconClass}"></i> ${track.badge || track.platform}`;
    }

    if (elements.topBpmVal && track.bpm) {
      elements.topBpmVal.textContent = track.bpm;
    }

    // Highlight active card in grid
    document.querySelectorAll('.cyber-track-card').forEach(card => {
      card.classList.toggle('active', card.dataset.id === track.id);
    });

    if (!silent) {
      showToast(`Loaded: ${track.title}`);
    }
  }

  // --- 7. CHANNEL / ROOM SWITCHER ---
  function switchCyberChannel(roomId) {
    const room = CYBER_ROOMS[roomId];
    if (!room) return;

    state.currentRoom = roomId;

    // 1. Morph full page theme styles
    const allThemeClasses = ['theme-neo-tokyo', 'theme-berlin-vault', 'theme-night-city', 'theme-london-subnet', 'theme-detroit-hub'];
    allThemeClasses.forEach(cls => document.body.classList.remove(cls));
    document.body.classList.add(`theme-${roomId}`);

    // 2. Sync dropdown selection
    if (elements.roomSelect && elements.roomSelect.value !== roomId) {
      elements.roomSelect.value = roomId;
    }

    // 3. Sync Location Pills active status
    elements.locationPills.forEach(pill => {
      pill.classList.toggle('active', pill.dataset.room === roomId);
    });

    // 4. Switch Track on Master Deck
    const targetTrack = CYBER_TRACKS.find(t => t.id === room.trackId) || CYBER_TRACKS[0];
    loadTrack(targetTrack, true);

    // 5. Update Listener Telemetry
    state.totalListeners = room.baseListeners + Math.floor(Math.random() * 60) - 30;
    updateListenerDisplay(0);

    // 6. Update Top Telemetry Readouts
    if (elements.topBpmVal) {
      elements.topBpmVal.textContent = room.bpm;
    }

    // 7. Update Visualizer Theme
    state.visualizerTheme = room.theme || 'cyan';

    // 8. Trigger Audio Beep & Net Chat Message
    playTuningBeep();
    addCustomChatMessage('BROADCAST_SYSTEM', room.broadcastMsg);

    showToast(`📡 Tuned to ${room.name}`);
  }

  // --- 8. CUSTOM URL PARSER ---
  function parseAndLoadCustomUrl(rawUrl) {
    if (!rawUrl || !rawUrl.trim()) {
      showToast('⚠️ Please enter a valid URL');
      return;
    }
    const url = rawUrl.trim();
    let embedUrl = '';
    let platform = 'stream';
    let title = 'Custom Cyber Stream';
    let artist = 'External Net Stream';

    // YouTube handling
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      platform = 'youtube';
      let videoId = '';
      let listId = '';

      if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0];
      } else if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1]?.split('&')[0];
      } else if (url.includes('embed/')) {
        videoId = url.split('embed/')[1]?.split('?')[0];
      }

      if (url.includes('list=')) {
        listId = url.split('list=')[1]?.split('&')[0];
      }

      if (listId) {
        embedUrl = `https://www.youtube.com/embed/videoseries?list=${listId}&autoplay=1`;
        title = `YouTube Playlist (${listId.substring(0, 10)}...)`;
      } else if (videoId) {
        embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        title = `YouTube Stream (${videoId})`;
      } else {
        embedUrl = url;
      }
    }
    // Spotify handling
    else if (url.includes('spotify.com')) {
      platform = 'spotify';
      let spotifyPath = '';
      if (url.includes('open.spotify.com/')) {
        spotifyPath = url.split('open.spotify.com/')[1]?.split('?')[0];
      }
      embedUrl = `https://open.spotify.com/embed/${spotifyPath}?utm_source=generator&theme=0`;
      title = `Spotify Custom Net Stream`;
    }
    // SoundCloud handling
    else if (url.includes('soundcloud.com')) {
      platform = 'soundcloud';
      embedUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(url)}&color=%2300f2fe&auto_play=true&show_comments=false`;
      title = `SoundCloud Stream Track`;
    }
    else {
      embedUrl = url;
    }

    const customTrack = {
      id: 'custom-' + Date.now(),
      title: title,
      artist: artist,
      platform: platform,
      genre: 'User Cyber Stream',
      badge: 'Direct Cyber Link',
      embedUrl: embedUrl,
      duration: 'LIVE',
      listeners: Math.floor(Math.random() * 800) + 1200,
      bpm: '136 BPM'
    };

    loadTrack(customTrack);
    if (elements.customInput) elements.customInput.value = '';
  }

  // --- 9. RENDER TRACKS MATRIX ---
  function renderTracks() {
    if (!elements.tracksGrid) return;

    const filtered = CYBER_TRACKS.filter(track => {
      const matchPlatform = state.activePlatformFilter === 'all' || track.platform === state.activePlatformFilter;
      const query = state.searchQuery.toLowerCase();
      const matchSearch = !query || 
        track.title.toLowerCase().includes(query) || 
        track.artist.toLowerCase().includes(query) || 
        track.genre.toLowerCase().includes(query);
      return matchPlatform && matchSearch;
    });

    if (filtered.length === 0) {
      elements.tracksGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align:center; padding: 40px; color: #64748b;">
          <i class="fa-solid fa-satellite-dish" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--cyber-cyan);"></i>
          <p>No cyber tracks found matching your query in this platform frequency.</p>
        </div>
      `;
      return;
    }

    elements.tracksGrid.innerHTML = filtered.map(track => `
      <div class="cyber-track-card ${state.activeTrack.id === track.id ? 'active' : ''}" data-id="${track.id}">
        <div class="track-thumb-box">
          <img class="track-thumb-img" src="${track.thumbnail}" alt="${track.title}" loading="lazy">
          <span class="track-platform-badge ${track.platform}">
            <i class="fa-brands ${track.platform === 'youtube' ? 'fa-youtube' : (track.platform === 'spotify' ? 'fa-spotify' : 'fa-soundcloud')}"></i>
            ${track.platform.toUpperCase()}
          </span>
          <div class="track-hover-play">
            <div class="play-ring-icon"><i class="fa-solid fa-play"></i></div>
          </div>
        </div>
        <div class="track-meta-box">
          <span class="track-genre">${track.genre} • ${track.bpm || '135 BPM'}</span>
          <h4 class="track-title" title="${track.title}">${track.title}</h4>
          <span class="track-artist">${track.artist}</span>
        </div>
        <div class="track-footer-row">
          <span class="track-listeners"><i class="fa-solid fa-headphones"></i> ${(track.listeners || 1500).toLocaleString()}</span>
          <span><i class="fa-regular fa-clock"></i> ${track.duration}</span>
        </div>
      </div>
    `).join('');

    elements.tracksGrid.querySelectorAll('.cyber-track-card').forEach(card => {
      card.addEventListener('click', () => {
        const trackId = card.dataset.id;
        const track = CYBER_TRACKS.find(t => t.id === trackId);
        if (track) loadTrack(track);
      });
    });
  }

  // --- 10. LIVE LISTENER TELEMETRY & CHAT SIMULATOR ---
  const CHAT_USERS = [
    'v_phantom', 'k1r4_matrix', 'neon_samurai', 'glitch_zero',
    'techno_queen', 'acid_burn', 'net_spectre', 'cyb3r_k1d',
    'sub_bass_99', 'berlin_ghost', 'h0l0_deck', 'vector_x'
  ];

  const CHAT_REACTIONS = [
    '🔥 This drop hits hard!!',
    '⚡ Pure techno cyber vibes',
    '🎧 Bassline vibrating through the grid',
    '🚀 High frequency energy',
    '💾 Cyber deck audio synchronized',
    '✨ Aesthetic 10/10 locked in',
    '🌌 Locking into the subnet flow',
    '🔊 Lossless 24-bit sound quality!'
  ];

  function startLiveTelemetry() {
    const room = CYBER_ROOMS[state.currentRoom] || CYBER_ROOMS['neo-tokyo'];
    state.totalListeners = room.baseListeners + Math.floor(Math.random() * 80) - 40;
    updateListenerDisplay(0);

    setInterval(() => {
      const delta = Math.floor(Math.random() * 25) - 11;
      state.totalListeners = Math.max(800, state.totalListeners + delta);
      updateListenerDisplay(delta);
    }, 3500);

    setInterval(() => {
      addRandomChatMessage();
    }, 5000);
  }

  function updateListenerDisplay(delta) {
    if (elements.liveCounterNumber) {
      elements.liveCounterNumber.textContent = state.totalListeners.toLocaleString();
    }
    if (elements.topListenersVal) {
      elements.topListenersVal.textContent = state.totalListeners.toLocaleString();
    }
    if (elements.liveCounterDelta) {
      if (delta > 0) {
        elements.liveCounterDelta.className = 'live-delta up';
        elements.liveCounterDelta.innerHTML = `<i class="fa-solid fa-arrow-up"></i> +${delta}`;
      } else if (delta < 0) {
        elements.liveCounterDelta.className = 'live-delta down';
        elements.liveCounterDelta.innerHTML = `<i class="fa-solid fa-arrow-down"></i> ${delta}`;
      }
    }
  }

  function addRandomChatMessage() {
    if (!elements.netChatStream) return;
    const user = CHAT_USERS[Math.floor(Math.random() * CHAT_USERS.length)];
    const text = CHAT_REACTIONS[Math.floor(Math.random() * CHAT_REACTIONS.length)];
    addCustomChatMessage(user, text);
  }

  function addCustomChatMessage(user, text) {
    if (!elements.netChatStream) return;
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const msgEl = document.createElement('div');
    msgEl.className = 'chat-msg';
    const isSystem = user === 'BROADCAST_SYSTEM';
    msgEl.innerHTML = `
      <span class="chat-user" style="${isSystem ? 'color: var(--cyber-cyan); font-weight:800;' : ''}">${isSystem ? '📡 [SYSTEM]' : '@' + user}</span>
      <span class="chat-reaction" style="${isSystem ? 'background: rgba(0,242,254,0.15); color:#fff;' : ''}">${text}</span>
      <span class="chat-time">${time}</span>
    `;

    elements.netChatStream.appendChild(msgEl);
    elements.netChatStream.scrollTop = elements.netChatStream.scrollHeight;

    while (elements.netChatStream.children.length > 20) {
      elements.netChatStream.removeChild(elements.netChatStream.firstChild);
    }
  }

  // --- 11. REAL-TIME CANVAS AUDIO EQUALIZER VISUALIZER ---
  let canvasCtx = null;
  let animId = null;
  let visualizerBars = 64;
  let visualizerValues = [];

  function initVisualizer() {
    if (!elements.canvas) return;
    canvasCtx = elements.canvas.getContext('2d');
    visualizerValues = Array.from({ length: visualizerBars }, () => Math.random() * 30 + 10);

    function resizeCanvas() {
      if (elements.canvas) {
        elements.canvas.width = elements.canvas.offsetWidth * window.devicePixelRatio || 600;
        elements.canvas.height = elements.canvas.offsetHeight * window.devicePixelRatio || 90;
      }
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    renderVisualizerLoop();
  }

  function renderVisualizerLoop() {
    if (!canvasCtx || !elements.canvas) return;
    const w = elements.canvas.width;
    const h = elements.canvas.height;
    canvasCtx.clearRect(0, 0, w, h);

    const barWidth = (w / visualizerBars) * 0.75;
    const gap = (w / visualizerBars) * 0.25;

    // Multi-color Theme Gradients
    let grad;
    let shadow = '#00f2fe';
    if (state.visualizerTheme === 'magenta') {
      grad = canvasCtx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, '#8a2be2');
      grad.addColorStop(0.6, '#ff007f');
      grad.addColorStop(1, '#ffe600');
      shadow = '#ff007f';
    } else if (state.visualizerTheme === 'yellow') {
      grad = canvasCtx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, '#ff5500');
      grad.addColorStop(0.6, '#ffe600');
      grad.addColorStop(1, '#ffffff');
      shadow = '#ffe600';
    } else if (state.visualizerTheme === 'green') {
      grad = canvasCtx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, '#005544');
      grad.addColorStop(0.6, '#00ff88');
      grad.addColorStop(1, '#00f2fe');
      shadow = '#00ff88';
    } else if (state.visualizerTheme === 'purple') {
      grad = canvasCtx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, '#4a00e0');
      grad.addColorStop(0.6, '#8e2de2');
      grad.addColorStop(1, '#00f2fe');
      shadow = '#8e2de2';
    } else {
      grad = canvasCtx.createLinearGradient(0, h, 0, 0);
      grad.addColorStop(0, '#005577');
      grad.addColorStop(0.5, '#00f2fe');
      grad.addColorStop(1, '#00ff88');
      shadow = '#00f2fe';
    }

    for (let i = 0; i < visualizerBars; i++) {
      const target = Math.sin(Date.now() * 0.005 + i * 0.2) * 25 + Math.random() * 35 + 15;
      visualizerValues[i] += (target - visualizerValues[i]) * 0.2;

      const x = i * (barWidth + gap);
      const barHeight = (visualizerValues[i] / 80) * (h * 0.85);

      canvasCtx.fillStyle = grad;
      canvasCtx.shadowColor = shadow;
      canvasCtx.shadowBlur = 8;

      canvasCtx.fillRect(x, h - barHeight, barWidth, barHeight);

      canvasCtx.fillStyle = '#ffffff';
      canvasCtx.shadowBlur = 4;
      canvasCtx.fillRect(x, h - barHeight - 3, barWidth, 2);
    }

    animId = requestAnimationFrame(renderVisualizerLoop);
  }

  // --- 12. TOAST NOTIFICATION UTILITY ---
  let toastTimeout = null;
  function showToast(msg) {
    let toast = document.getElementById('cyberToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'cyberToast';
      toast.className = 'cyber-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-satellite-dish" style="color: var(--cyber-cyan);"></i> ${msg}`;
    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }

  // --- 13. EVENT BINDINGS & CONTROLS ---
  function bindEvents() {
    // Room Selector dropdown change
    if (elements.roomSelect) {
      elements.roomSelect.addEventListener('change', (e) => {
        switchCyberChannel(e.target.value);
      });
    }

    // Location Pills click to change channel
    elements.locationPills.forEach(pill => {
      pill.addEventListener('click', () => {
        const room = pill.dataset.room;
        if (room) switchCyberChannel(room);
      });
    });

    // Platform Filter Tabs
    elements.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        elements.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activePlatformFilter = tab.dataset.platform;
        renderTracks();
      });
    });

    // Search bar
    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderTracks();
      });
    }

    // Custom URL load button
    if (elements.customLoadBtn) {
      elements.customLoadBtn.addEventListener('click', () => {
        parseAndLoadCustomUrl(elements.customInput.value);
      });
    }

    if (elements.customInput) {
      elements.customInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          parseAndLoadCustomUrl(elements.customInput.value);
        }
      });
    }

    // Quick tag loader buttons
    document.querySelectorAll('.quick-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const url = btn.dataset.url;
        if (url) parseAndLoadCustomUrl(url);
      });
    });

    // Ambient FX Buttons
    const rainBtn = document.getElementById('fxRainBtn');
    if (rainBtn) rainBtn.addEventListener('click', toggleCyberRain);

    const droneBtn = document.getElementById('fxDroneBtn');
    if (droneBtn) droneBtn.addEventListener('click', toggleNeonDrone);

    // Scanline CRT Toggle
    if (elements.scanlineToggle) {
      elements.scanlineToggle.addEventListener('click', () => {
        const overlay = document.querySelector('.scanlines-overlay');
        if (overlay) {
          state.scanlines = !state.scanlines;
          overlay.style.display = state.scanlines ? 'block' : 'none';
          elements.scanlineToggle.classList.toggle('active', state.scanlines);
          showToast(`CRT Scanlines ${state.scanlines ? 'Enabled' : 'Disabled'}`);
        }
      });
    }

    // Visualizer Theme Cycle
    if (elements.themeToggleBtn) {
      const themes = ['cyan', 'magenta', 'yellow', 'green', 'purple'];
      elements.themeToggleBtn.addEventListener('click', () => {
        const currentIndex = themes.indexOf(state.visualizerTheme);
        state.visualizerTheme = themes[(currentIndex + 1) % themes.length];
        showToast(`Visualizer Spectrum: ${state.visualizerTheme.toUpperCase()}`);
      });
    }

    // Fullscreen Deck Toggle
    if (elements.fullscreenBtn) {
      elements.fullscreenBtn.addEventListener('click', () => {
        const deck = document.querySelector('.cyber-deck-card');
        if (deck) {
          if (!document.fullscreenElement) {
            deck.requestFullscreen().catch(() => {
              showToast('Fullscreen mode activated in container');
            });
          } else {
            document.exitFullscreen();
          }
        }
      });
    }

    // Refresh Deck
    if (elements.refreshDeckBtn) {
      elements.refreshDeckBtn.addEventListener('click', () => {
        if (elements.playerFrame && state.activeTrack) {
          const currentSrc = elements.playerFrame.src;
          elements.playerFrame.src = '';
          setTimeout(() => {
            elements.playerFrame.src = currentSrc;
          }, 100);
          showToast('Cyber Deck Re-synchronized');
        }
      });
    }
  }

  // --- 14. INITIAL STARTUP ---
  document.addEventListener('DOMContentLoaded', () => {
    cacheDom();
    bindEvents();
    renderTracks();
    switchCyberChannel(state.currentRoom);
    startLiveTelemetry();
    initVisualizer();
  });

})();
