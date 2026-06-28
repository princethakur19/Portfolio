let activeAnimationFrame = null;

function getHeaderOffset() {
  const header = document.querySelector(".header");
  const headerHeight = header?.getBoundingClientRect().height ?? 78;

  return headerHeight + 18;
}

function easeInOutCubic(progress) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

export function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) return;

  if (activeAnimationFrame) {
    cancelAnimationFrame(activeAnimationFrame);
    activeAnimationFrame = null;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  const targetTop = targetSection.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
  const destination = Math.max(0, Math.min(targetTop, maxScrollTop));

  if (prefersReducedMotion) {
    window.scrollTo(0, destination);
    window.history.replaceState(null, "", `#${sectionId}`);
    return;
  }

  const startTop = window.scrollY;
  const distance = destination - startTop;
  const duration = Math.min(950, Math.max(500, Math.abs(distance) * 0.45));
  const startTime = performance.now();

  const animateScroll = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      activeAnimationFrame = requestAnimationFrame(animateScroll);
      return;
    }

    activeAnimationFrame = null;
    window.history.replaceState(null, "", `#${sectionId}`);
  };

  activeAnimationFrame = requestAnimationFrame(animateScroll);
}
