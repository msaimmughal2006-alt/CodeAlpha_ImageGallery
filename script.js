/**
 * CodeAlpha Image Gallery - Interactive Script (script.js)
 * Task 1: Build an Image Gallery - CodeAlpha Frontend Development Internship
 * Author: Muhammad Saim Ahmad
 * 
 * Features:
 * - Dynamic Gallery Card Interaction
 * - Lightbox Modal with Smooth Scale & Fade transitions
 * - Next & Previous Image Navigation (with circular loop)
 * - Category Filtering (All, Nature, Cars, Technology, Travel)
 * - Context-aware Lightbox (navigates within active filtered category)
 * - Full Keyboard Navigation (ArrowRight, ArrowLeft, Escape)
 * - Touch Swipe Navigation for mobile screens
 * - Image Loading Spinner and Preloading
 */

class Gallery {
  constructor() {
    // DOM Elements
    this.cards = Array.from(document.querySelectorAll('.gallery-card'));
    this.filterButtons = Array.from(document.querySelectorAll('.filter-btn'));
    this.lightbox = document.getElementById('lightbox');
    this.lightboxBackdrop = document.getElementById('lightboxBackdrop');
    this.lightboxImg = document.getElementById('lightboxImg');
    this.lightboxSpinner = document.getElementById('lightboxSpinner');
    this.lightboxClose = document.getElementById('lightboxClose');
    this.lightboxPrev = document.getElementById('lightboxPrev');
    this.lightboxNext = document.getElementById('lightboxNext');
    this.lightboxCategory = document.getElementById('lightboxCategory');
    this.lightboxTitle = document.getElementById('lightboxTitle');
    this.lightboxDesc = document.getElementById('lightboxDesc');
    this.lightboxCounter = document.getElementById('lightboxCounter');

    // State Variables
    this.currentFilter = 'all';
    this.filteredCards = [...this.cards];
    this.currentIndex = 0;
    this.isOpen = false;

    // Touch variables for mobile swipe
    this.touchStartX = 0;
    this.touchEndX = 0;

    this.init();
  }

  /**
   * Initializes event listeners and setup
   */
  init() {
    this.initFilters();
    this.initCardClicks();
    this.initLightboxControls();
    this.initKeyboardSupport();
    this.initTouchSupport();
  }

  /**
   * Setup category filter buttons (Bonus Feature)
   */
  initFilters() {
    this.filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        if (filter === this.currentFilter) return;

        // Update active button UI
        this.filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        this.currentFilter = filter;
        this.applyFilter(filter);
      });
    });
  }

  /**
   * Filters gallery cards by category with smooth animations
   * @param {string} category 
   */
  applyFilter(category) {
    this.filteredCards = [];

    this.cards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      const matches = category === 'all' || cardCategory === category;

      if (matches) {
        card.classList.remove('hidden');
        this.filteredCards.push(card);
      } else {
        card.classList.add('hidden');
      }
    });
  }

  /**
   * Setup click events on individual gallery cards to open lightbox
   */
  initCardClicks() {
    this.cards.forEach(card => {
      card.addEventListener('click', () => {
        // Find index of clicked card within currently active filtered cards
        const indexInFiltered = this.filteredCards.indexOf(card);
        if (indexInFiltered !== -1) {
          this.openLightbox(indexInFiltered);
        }
      });
    });
  }

  /**
   * Setup controls for Lightbox (Close, Next, Prev, Backdrop)
   */
  initLightboxControls() {
    // Close button click
    this.lightboxClose.addEventListener('click', () => this.closeLightbox());

    // Backdrop click to close
    this.lightboxBackdrop.addEventListener('click', () => this.closeLightbox());

    // Previous button click
    this.lightboxPrev.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showPrevImage();
    });

    // Next button click
    this.lightboxNext.addEventListener('click', (e) => {
      e.stopPropagation();
      this.showNextImage();
    });
  }

  /**
   * Keyboard accessibility for desktop navigation
   */
  initKeyboardSupport() {
    window.addEventListener('keydown', (e) => {
      if (!this.isOpen) return;

      if (e.key === 'Escape') {
        this.closeLightbox();
      } else if (e.key === 'ArrowRight') {
        this.showNextImage();
      } else if (e.key === 'ArrowLeft') {
        this.showPrevImage();
      }
    });
  }

  /**
   * Touch swipe navigation for mobile screens
   */
  initTouchSupport() {
    this.lightbox.addEventListener('touchstart', (e) => {
      this.touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    this.lightbox.addEventListener('touchend', (e) => {
      this.touchEndX = e.changedTouches[0].screenX;
      this.handleSwipe();
    }, { passive: true });
  }

  /**
   * Determines if swipe was left or right
   */
  handleSwipe() {
    const swipeThreshold = 50;
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swiped Left -> Next image
        this.showNextImage();
      } else {
        // Swiped Right -> Previous image
        this.showPrevImage();
      }
    }
  }

  /**
   * Opens lightbox modal at specific index
   * @param {number} index 
   */
  openLightbox(index) {
    if (this.filteredCards.length === 0) return;

    this.currentIndex = index;
    this.isOpen = true;
    this.lightbox.classList.add('active');
    this.lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent page background scroll

    this.renderCurrentImage();
  }

  /**
   * Closes the lightbox modal
   */
  closeLightbox() {
    this.isOpen = false;
    this.lightbox.classList.remove('active');
    this.lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Restore page background scroll
  }

  /**
   * Displays the previous image in the active set
   */
  showPrevImage() {
    if (this.filteredCards.length <= 1) return;
    this.currentIndex = (this.currentIndex - 1 + this.filteredCards.length) % this.filteredCards.length;
    this.renderCurrentImage();
  }

  /**
   * Displays the next image in the active set
   */
  showNextImage() {
    if (this.filteredCards.length <= 1) return;
    this.currentIndex = (this.currentIndex + 1) % this.filteredCards.length;
    this.renderCurrentImage();
  }

  /**
   * Updates lightbox image and caption details
   */
  renderCurrentImage() {
    const card = this.filteredCards[this.currentIndex];
    if (!card) return;

    const imgElement = card.querySelector('img');
    const title = card.querySelector('.card-title')?.innerText || '';
    const desc = card.querySelector('.card-desc')?.innerText || '';
    const category = card.querySelector('.category-tag')?.innerText || '';

    // Show loading spinner & fade out previous image
    this.lightboxSpinner.classList.add('show');
    this.lightboxImg.classList.add('fade-out');

    // Create a new Image object for preloading to avoid flicker
    const tempImg = new Image();
    tempImg.src = imgElement.src;

    tempImg.onload = () => {
      this.lightboxImg.src = tempImg.src;
      this.lightboxImg.alt = imgElement.alt || title;
      this.lightboxSpinner.classList.remove('show');
      this.lightboxImg.classList.remove('fade-out');
    };

    tempImg.onerror = () => {
      // Fallback in case of network or loading issues
      this.lightboxImg.src = imgElement.src;
      this.lightboxSpinner.classList.remove('show');
      this.lightboxImg.classList.remove('fade-out');
    };

    // Update text and counter
    this.lightboxCategory.innerText = category;
    this.lightboxTitle.innerText = title;
    this.lightboxDesc.innerText = desc;
    this.lightboxCounter.innerText = `${this.currentIndex + 1} / ${this.filteredCards.length}`;
  }
}

// Instantiate Gallery when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new Gallery();
});
