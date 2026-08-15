/* ==========================================================================
   Modern Portfolio Interactive Controller - jackhallloween21
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initProjectFilters();
  initLivePreviewModal();
  initContactForm();
  initTopWeatherWidget();
  initYouTubeUploads();
});

/* 1. Navbar Scroll Effect & Mobile Drawer */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky Navbar on Scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = navToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
      }
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = navToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-times');
        }
      });
    });
  }
}

/* 2. Project Category Filtering */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });
}

/* 3. Live Project Preview Modal */
function initLivePreviewModal() {
  const modalOverlay = document.getElementById('previewModal');
  const modalIframe = document.getElementById('modalIframe');
  const modalTitle = document.getElementById('modalTitle');
  const modalUrl = document.getElementById('modalUrl');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const previewBtns = document.querySelectorAll('.btn-preview');

  if (!modalOverlay || !modalIframe) return;

  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.getAttribute('data-url');
      const title = btn.getAttribute('data-title');

      modalTitle.textContent = title || 'Project Preview';
      modalUrl.textContent = url;
      modalUrl.href = url;
      modalIframe.src = url;

      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    modalIframe.src = 'about:blank'; // Stop iframe playback
    document.body.style.overflow = '';
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });
}

/* 4. Contact Form Handler */
function initContactForm() {
  const contactForm = document.getElementById('portfolioContactForm');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    // If form has mailto action, allow default or provide feedback
    const nameInput = contactForm.querySelector('[name="yourname"]');
    if (nameInput && nameInput.value.trim() === '') {
      e.preventDefault();
      alert('Please enter your name before submitting.');
      return;
    }
  });
}

/* 5. Top Weather Widget & Interactive City Selector */
function initTopWeatherWidget() {
  const weatherIcon = document.getElementById('weatherIcon');
  const weatherTemp = document.getElementById('weatherTemp');
  const weatherDesc = document.getElementById('weatherDesc');
  const weatherPill = document.getElementById('weatherPill');
  const weatherCitySelect = document.getElementById('weatherCitySelect');
  const customCityModal = document.getElementById('customCityModal');
  const closeCityModalBtn = document.getElementById('closeCityModalBtn');
  const cancelCityBtn = document.getElementById('cancelCityBtn');
  const customCityForm = document.getElementById('customCityForm');
  const customCityInput = document.getElementById('customCityInput');

  if (!weatherCitySelect || !weatherTemp) return;

  const API_KEY = 'Y39B8VVUS3UBFV6QEFW8XYYEG';
  const DEFAULT_CITY = 'Bardhaman, India';

  // Helper to map weather condition strings to FontAwesome icon classes & colors
  function getWeatherIconInfo(iconStr, conditionsStr) {
    const icon = (iconStr || '').toLowerCase();
    const cond = (conditionsStr || '').toLowerCase();
    const isNight = icon.includes('night') || cond.includes('night');

    // 1. Thunderstorm / Lightning
    if (icon.includes('thunder') || cond.includes('thunder') || cond.includes('lightning') || cond.includes('storm')) {
      return { iconClass: 'fa-cloud-bolt', color: '#f59e0b' }; // Amber thunder
    }
    // 2. Snow / Ice
    if (icon.includes('snow') || cond.includes('snow') || cond.includes('ice') || cond.includes('flurry')) {
      return { iconClass: 'fa-snowflake', color: '#60a5fa' }; // Icy blue
    }
    // 3. Rain / Showers / Drizzle
    if (icon.includes('rain') || icon.includes('shower') || cond.includes('rain') || cond.includes('shower') || cond.includes('drizzle')) {
      if (isNight) {
        return { iconClass: 'fa-cloud-moon-rain', color: '#38bdf8' };
      }
      return { iconClass: 'fa-cloud-showers-heavy', color: '#38bdf8' }; // Vivid rain
    }
    // 4. Fog / Mist / Haze
    if (icon.includes('fog') || cond.includes('fog') || cond.includes('mist') || cond.includes('haze')) {
      return { iconClass: 'fa-smog', color: '#94a3b8' };
    }
    // 5. Night Sky Moon (Clear vs Partly Cloudy)
    if (isNight) {
      if (icon.includes('partly-cloudy') || cond.includes('partly') || cond.includes('cloud')) {
        return { iconClass: 'fa-cloud-moon', color: '#c084fc' }; // Soft purple moon & cloud
      }
      return { iconClass: 'fa-moon', color: '#e0e7ff' }; // Glowing night sky moon
    }
    // 6. Day Clear / Sun
    if (icon === 'clear-day' || cond.includes('clear') || cond.includes('sunny') || cond.includes('fair')) {
      return { iconClass: 'fa-sun', color: '#fbbf24' }; // Golden sun
    }
    // 7. Overcast / Clouds
    if (icon === 'cloudy' || cond.includes('overcast') || (cond.includes('cloudy') && !cond.includes('partly'))) {
      return { iconClass: 'fa-cloud', color: '#94a3b8' };
    }
    // 8. Default: Partly Cloudy Day
    return { iconClass: 'fa-cloud-sun', color: '#f59e0b' };
  }

  async function fetchWeather(location) {
    if (!location) return;

    // Show loading state
    if (weatherIcon) {
      weatherIcon.className = 'fa-solid fa-spinner fa-spin weather-icon';
      weatherIcon.style.color = 'var(--accent-gold)';
    }
    if (weatherTemp) weatherTemp.textContent = '--°C';
    if (weatherDesc) weatherDesc.textContent = 'Loading...';

    try {
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(location)}?unitGroup=metric&key=${API_KEY}&contentType=json`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Weather fetch failed: ${response.statusText}`);
      }

      const data = await response.json();
      const current = data.currentConditions || (data.days && data.days[0]);

      if (current) {
        const tempC = Math.round(current.temp);
        const cond = current.conditions || 'Clear';
        const { iconClass, color } = getWeatherIconInfo(current.icon, cond);

        if (weatherIcon) {
          weatherIcon.className = `fa-solid ${iconClass} weather-icon`;
          weatherIcon.style.color = color;
        }
        if (weatherTemp) weatherTemp.textContent = `${tempC}°C`;
        if (weatherDesc) weatherDesc.textContent = cond;

        // Save selected city
        localStorage.setItem('user_selected_city', location);
      } else {
        throw new Error('No weather conditions found');
      }
    } catch (err) {
      console.warn('Weather fetch error:', err);
      if (weatherIcon) {
        weatherIcon.className = 'fa-solid fa-cloud-exclamation weather-icon';
        weatherIcon.style.color = '#ef4444';
      }
      if (weatherTemp) weatherTemp.textContent = '--°C';
      if (weatherDesc) weatherDesc.textContent = 'Unavailable';
    }
  }

  // Check saved city or default
  let savedCity = localStorage.getItem('user_selected_city') || DEFAULT_CITY;

  // Ensure option exists in dropdown
  let existingOption = Array.from(weatherCitySelect.options).find(opt => opt.value === savedCity);
  if (!existingOption) {
    const customOpt = document.createElement('option');
    customOpt.value = savedCity;
    customOpt.textContent = `📍 ${savedCity}`;
    // Insert before 'custom' option
    weatherCitySelect.insertBefore(customOpt, weatherCitySelect.querySelector('option[value="custom"]'));
  }
  weatherCitySelect.value = savedCity;

  // Initial Fetch
  fetchWeather(savedCity);

  // Dropdown Change Listener
  weatherCitySelect.addEventListener('change', (e) => {
    const val = e.target.value;
    if (val === 'custom') {
      openCustomCityModal();
    } else {
      fetchWeather(val);
    }
  });

  // Pill Manual Refresh Click
  if (weatherPill) {
    weatherPill.addEventListener('click', () => {
      fetchWeather(weatherCitySelect.value === 'custom' ? DEFAULT_CITY : weatherCitySelect.value);
    });
  }

  // Modal Handlers
  function openCustomCityModal() {
    if (!customCityModal) return;
    customCityModal.classList.add('active');
    if (customCityInput) {
      customCityInput.value = '';
      setTimeout(() => customCityInput.focus(), 100);
    }
  }

  function closeCustomCityModal() {
    if (!customCityModal) return;
    customCityModal.classList.remove('active');
    // Reset dropdown selection back to saved city if cancelled
    weatherCitySelect.value = localStorage.getItem('user_selected_city') || DEFAULT_CITY;
  }

  if (closeCityModalBtn) closeCityModalBtn.addEventListener('click', closeCustomCityModal);
  if (cancelCityBtn) cancelCityBtn.addEventListener('click', closeCustomCityModal);

  if (customCityModal) {
    customCityModal.addEventListener('click', (e) => {
      if (e.target === customCityModal) closeCustomCityModal();
    });
  }

  if (customCityForm) {
    customCityForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const city = customCityInput ? customCityInput.value.trim() : '';
      if (!city) return;

      // Check if city option exists, if not create it
      let opt = Array.from(weatherCitySelect.options).find(o => o.value.toLowerCase() === city.toLowerCase());
      if (!opt) {
        opt = document.createElement('option');
        opt.value = city;
        opt.textContent = `📍 ${city}`;
        weatherCitySelect.insertBefore(opt, weatherCitySelect.querySelector('option[value="custom"]'));
      }
      weatherCitySelect.value = opt.value;

      if (customCityModal) customCityModal.classList.remove('active');
      fetchWeather(opt.value);
    });
  }
}

// Fetch page views from Miles Hilliard's CountAPI fork
fetch('https://countapi.mileshilliard.com/api/v1/hit/jackhallloween21.github.io')
  .then(response => response.json())
  .then(data => {
    const viewsElement = document.getElementById('page-views-count');
    if (viewsElement && data.value) {
      viewsElement.innerText = Number(data.value).toLocaleString();
    }
  })
  .catch(error => {
    console.error('Error fetching view count:', error);
    const viewsElement = document.getElementById('page-views-count');
    if (viewsElement) viewsElement.innerText = '1';
  });
/* 6. Dynamic Auto-Updating YouTube Showcase (Fetched via local yt-stats.json) */
function initYouTubeUploads() {
  const uploadsGrid = document.getElementById('ytRecentUploadsGrid');
  const topVideosGrid = document.getElementById('ytTopVideosGrid');
  const playlistFallback = document.getElementById('ytPlaylistFallback');
  const tabRecent = document.getElementById('ytTabRecent');
  const tabTop = document.getElementById('ytTabTop');
  const subscriberCountEl = document.getElementById('ytSubscriberCount');
  const viewCountEl = document.getElementById('ytViewCount');
  const videoCountEl = document.getElementById('ytVideoCount');

  if (!uploadsGrid) return;

  function formatNumber(value) {
    const num = Number(value || 0);
    if (!Number.isFinite(num)) return '0';
    if (num >= 1000000) return (num / 1000000).toFixed(num >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(num >= 100000 ? 0 : 1).replace(/\.0$/, '') + 'K';
    return String(num);
  }

  function updateChannelStats(subscribers, views, videos) {
    if (subscriberCountEl) subscriberCountEl.textContent = subscribers;
    if (viewCountEl) viewCountEl.textContent = views;
    if (videoCountEl) videoCountEl.textContent = videos;
  }

  // Tab Switcher Handler
  if (tabRecent && tabTop) {
    tabRecent.addEventListener('click', () => {
      tabRecent.classList.add('active');
      tabTop.classList.remove('active');
      if (uploadsGrid) uploadsGrid.style.display = 'grid';
      if (topVideosGrid) topVideosGrid.style.display = 'none';
    });

    tabTop.addEventListener('click', () => {
      tabTop.classList.add('active');
      tabRecent.classList.remove('active');
      if (uploadsGrid) uploadsGrid.style.display = 'none';
      if (topVideosGrid) topVideosGrid.style.display = 'grid';
    });
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    try {
      const date = new Date(dateStr);
      return date.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
    } catch {
      return '';
    }
  }

  function escapeHtml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function createVideoCard(item, rankBadgeText = null) {
    const videoId = item.videoId || item.id;
    if (!videoId) return null;

    const title = escapeHtml(item.title || 'Untitled video');
    const date = formatDate(item.publishedAt);
    const thumbUrl = item.thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

    const card = document.createElement('div');
    card.className = 'yt-upload-card';
    card.setAttribute('data-video-id', videoId);
    card.setAttribute('data-title', title);

    const badgeHtml = rankBadgeText ? `<div class="yt-top-badge"><i class="fa-solid fa-fire"></i> ${rankBadgeText}</div>` : '';

    card.innerHTML = `
      <div class="yt-thumb-wrapper">
          ${badgeHtml}
          <img src="${thumbUrl}" alt="${title}" class="yt-thumb-img" loading="lazy">
          <div class="yt-play-overlay">
              <div class="yt-play-btn-circle"><i class="fa-solid fa-play"></i></div>
          </div>
      </div>
      <div class="yt-video-info">
          <h4 class="yt-video-title">${title}</h4>
          <div class="yt-video-meta">
              <span class="yt-video-date"><i class="fa-regular fa-calendar"></i> ${date}</span>
              <span style="color: var(--primary-cyan); font-weight: 600;">Play <i class="fa-solid fa-angle-right"></i></span>
          </div>
      </div>
    `;

    card.addEventListener('click', () => {
      const modalOverlay = document.getElementById('previewModal');
      const modalIframe = document.getElementById('modalIframe');
      const modalTitle = document.getElementById('modalTitle');
      const modalUrl = document.getElementById('modalUrl');

      if (modalOverlay && modalIframe) {
        const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        if (modalTitle) modalTitle.textContent = title;
        if (modalUrl) {
          modalUrl.href = `https://www.youtube.com/watch?v=${videoId}`;
          modalUrl.textContent = 'Watch on YouTube';
        }
        modalIframe.src = embedUrl;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });

    return card;
  }

  function renderVideoGrid(container, items, isTopSection = false) {
    if (!container) return;
    container.innerHTML = '';

    if (!items.length) {
      container.innerHTML = '<div class="yt-empty-state">No videos available right now.</div>';
      return;
    }

    items.forEach((item, index) => {
      const badgeText = isTopSection ? `#${index + 1} Top` : null;
      const card = createVideoCard({
        videoId: item.videoId,
        title: item.title,
        publishedAt: item.publishedAt,
        thumbnail: item.thumbnail
      }, badgeText);

      if (card) container.appendChild(card);
    });
  }

  async function fetchYouTubeShowcase() {
    if (playlistFallback) playlistFallback.style.display = 'none';
    if (uploadsGrid) uploadsGrid.innerHTML = '<div class="yt-empty-state">Loading YouTube data...</div>';
    if (topVideosGrid) {
      topVideosGrid.innerHTML = '<div class="yt-empty-state">Loading top videos...</div>';
      topVideosGrid.style.display = 'none';
    }

    try {
      const response = await fetch('./yt-stats.json');
      if (!response.ok) throw new Error('Failed to load yt-stats.json');

      const data = await response.json();

      // Update Channel Statistics
      const formattedSubscribers = formatNumber(data.subscriberCount);
      const formattedViews = formatNumber(data.viewCount);
      const formattedVideos = formatNumber(data.videoCount);
      updateChannelStats(formattedSubscribers, formattedViews, formattedVideos);

      // Render Video Grids
      const recentVideos = data.recentVideos || [];
      const topVideos = data.topVideos || [];

      if (!recentVideos.length && !topVideos.length) {
        throw new Error('No video data found in JSON');
      }

      renderVideoGrid(uploadsGrid, recentVideos, false);
      renderVideoGrid(topVideosGrid, topVideos, true);

      if (uploadsGrid) uploadsGrid.style.display = 'grid';
      if (topVideosGrid) topVideosGrid.style.display = 'none';
    } catch (error) {
      console.warn('YouTube JSON fetch fallback activated:', error);
      updateChannelStats('102', 'Public stats', '97');

      const fallbackEmbed = `
        <div class="yt-channel-embed">
          <iframe
            width="100%"
            height="320"
            src="https://www.youtube.com/embed/videoseries?list=UU-5-P2ShRYIis_HItg8YsWw"
            title="YouTube Channel Recent Uploads"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
      `;

      if (uploadsGrid) uploadsGrid.innerHTML = fallbackEmbed;
      if (topVideosGrid) {
        topVideosGrid.innerHTML = '';
        topVideosGrid.style.display = 'none';
      }
      if (playlistFallback) playlistFallback.style.display = 'block';
      if (uploadsGrid) uploadsGrid.style.display = 'grid';
    }
  }

  fetchYouTubeShowcase();
}
