<script>
  (function() {
    // Prevent multiple inserts
    if (document.getElementById("kirtilals-widget")) return;

    const widget = document.createElement('div');
    widget.id = 'kirtilals-widget';
    widget.style.position = 'fixed';
    widget.style.bottom = '20px';
    widget.style.left = '20px';
    widget.style.zIndex = '9999';
    widget.style.width = '320px';
    widget.style.height = '180px';
    widget.style.borderRadius = '12px';
    widget.style.overflow = 'hidden';
    widget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    widget.style.cursor = 'move';
    widget.style.background = '#fff';

    // Add video
    const media = document.createElement('video');
    media.src = 'https://android717.github.io/kirtilal/kirtilal.mp4';
    media.autoplay = true;
    media.loop = true;
    media.muted = true;
    media.playsInline = true;
    media.style.width = '100%';
    media.style.height = '100%';
    media.style.objectFit = 'fill';
    widget.appendChild(media);

    // Controls container
    const controls = document.createElement('div');
    controls.style.position = 'absolute';
    controls.style.top = '8px';
    controls.style.right = '8px';
    controls.style.display = 'flex';
    controls.style.gap = '8px';
    controls.style.zIndex = '10000';

    // SVG Icons
    const mutedIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <line x1="23" y1="9" x2="17" y2="15"></line>
    <line x1="17" y1="9" x2="23" y2="15"></line>
  </svg>
`;

    const unmutedIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
  </svg>
`;

    // Mute/Unmute button
    const muteBtn = document.createElement('button');
    muteBtn.innerHTML = mutedIcon;
    muteBtn.style.width = '32px';
    muteBtn.style.height = '32px';
    muteBtn.style.borderRadius = '50%';
    muteBtn.style.border = 'none';
    muteBtn.style.background = 'rgba(0,0,0,0.6)';
    muteBtn.style.color = '#fff';
    muteBtn.style.cursor = 'pointer';
    muteBtn.style.display = 'flex';
    muteBtn.style.alignItems = 'center';
    muteBtn.style.justifyContent = 'center';
    muteBtn.style.transition = 'background 0.2s';

    muteBtn.onmouseover = () => muteBtn.style.background = 'rgba(0,0,0,0.8)';
    muteBtn.onmouseout = () => muteBtn.style.background = 'rgba(0,0,0,0.6)';

    muteBtn.onclick = (e) => {
      e.stopPropagation();
      media.muted = !media.muted;
      muteBtn.innerHTML = media.muted ? mutedIcon : unmutedIcon;
    };

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.width = '32px';
    closeBtn.style.height = '32px';
    closeBtn.style.borderRadius = '50%';
    closeBtn.style.border = 'none';
    closeBtn.style.background = 'rgba(0,0,0,0.6)';
    closeBtn.style.color = '#fff';
    closeBtn.style.fontSize = '18px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.display = 'flex';
    closeBtn.style.alignItems = 'center';
    closeBtn.style.justifyContent = 'center';
    closeBtn.style.transition = 'background 0.2s';
    closeBtn.style.fontWeight = 'bold';

    closeBtn.onmouseover = () => closeBtn.style.background = 'rgba(255,0,0,0.8)';
    closeBtn.onmouseout = () => closeBtn.style.background = 'rgba(0,0,0,0.6)';

    closeBtn.onclick = (e) => {
      e.stopPropagation();
      widget.remove();
    };

    controls.appendChild(muteBtn);
    controls.appendChild(closeBtn);
    widget.appendChild(controls);

    // Drag functionality
    let isDragging = false;
    let dragStartX;
    let dragStartY;
    let widgetStartX;
    let widgetStartY;
    let hasMoved = false;

    widget.addEventListener('mousedown', (e) => {
      // Don't start drag if clicking on buttons
      if (e.target === muteBtn || e.target === closeBtn || e.target.closest('button')) return;

      isDragging = true;
      hasMoved = false;

      // Get current position
      const rect = widget.getBoundingClientRect();
      widgetStartX = rect.left;
      widgetStartY = rect.top;

      // Store mouse starting position
      dragStartX = e.clientX;
      dragStartY = e.clientY;

      // Switch to top/left positioning
      widget.style.left = widgetStartX + 'px';
      widget.style.top = widgetStartY + 'px';
      widget.style.bottom = 'auto';
      widget.style.right = 'auto';
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;

      e.preventDefault();

      // Calculate how far the mouse has moved
      const deltaX = e.clientX - dragStartX;
      const deltaY = e.clientY - dragStartY;

      // Update position
      const newX = widgetStartX + deltaX;
      const newY = widgetStartY + deltaY;

      widget.style.left = newX + 'px';
      widget.style.top = newY + 'px';

      // Track if widget actually moved
      if (Math.abs(deltaX) > 3 || Math.abs(deltaY) > 3) {
        hasMoved = true;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Click opens Kirtilals site (only if not dragging)
    widget.onclick = (e) => {
      if (!hasMoved) {
        window.open('https://www.kirtilals.com/diamond-bangles', '_blank');
      }
    };

    document.body.appendChild(widget);
  })();
</script>
