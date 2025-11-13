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
  widget.style.cursor = 'pointer';
  widget.style.background = '#fff';

  // Add video or gif
  const media = document.createElement('video');
  media.src = 'https://android717.github.io/kirtilal/video.mp4'; // replace after upload
  media.autoplay = true;
  media.loop = true;
  media.muted = true;
  media.playsInline = true;
  media.style.width = '100%';
  media.style.height = '100%';
  media.style.objectFit = 'fill';

  widget.appendChild(media);

  // Click opens Kirtilals site
  widget.onclick = () => {
    window.open('https://www.kirtilals.com/diamond-bangles', '_blank');
  };

  document.body.appendChild(widget);
})();
