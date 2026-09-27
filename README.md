# CodeAlpha Image Gallery

A responsive, modern image gallery developed using **HTML5**, **CSS3**, and **JavaScript** as part of the **CodeAlpha Frontend Development Internship** (Task 1: Build an Image Gallery).

![Project Status](https://img.shields.io/badge/Status-Completed-success?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue?style=for-the-badge)
![Task](https://img.shields.io/badge/CodeAlpha-Task%201-orange?style=for-the-badge)

---

## 📌 Project Overview

The **CodeAlpha Image Gallery** allows users to explore a collection of curated visual assets in a clean, modern grid layout. Users can interact with the gallery via category filters, card hover states, and click any image to open an immersive lightbox modal with smooth previous/next navigation controls.

---

## ✨ Features

### 🖼️ Responsive Gallery Layout
- **CSS Grid & Flexbox**: Clean multi-column layout adapting seamlessly across desktop (3 columns), tablets (2 columns), and mobile devices (single column).
- **Aspect-Ratio Preservation**: Consistent image framing with `object-fit: cover` to maintain aesthetic balance.

### 🔍 Interactive Lightbox Viewer
- **Full-Screen Modal**: Clicking any gallery card opens an immersive dark frosted-glass lightbox (`backdrop-filter: blur(20px)`).
- **Next & Previous Navigation**: Step through images using on-screen buttons, arrow keys, or mobile swipe gestures.
- **Image Counter**: Displays the active position in the collection (e.g., `3 / 6`).
- **Captions & Metadata**: Shows category tag, image title, and detailed descriptions for each photo.
- **Loading Spinner**: Visual feedback during image preloading to prevent flickering.
- **Backdrop & Close Controls**: Easily close the modal via the `✕` button, clicking outside the image, or pressing the `Escape` key.

### 🏷️ Category Filter System *(CodeAlpha Bonus Feature)*
- Filter cards by category: **All**, **Nature**, **Cars**, **Technology**, and **Travel**.
- Smooth animated transitions when filtering.
- Context-aware lightbox navigation: when a category filter is active, the lightbox navigates strictly within the selected category!

### ✨ Visual Polish & Animations
- **Hover Micro-Interactions**: Smooth card lift (`translateY(-8px)`), image zoom (`scale(1.09)`), and elegant gradient overlay reveal.
- **Fluid Transitions**: CSS cubic-bezier easing curves on all interactive elements.

### ⌨️ Comprehensive Keyboard & Touch Navigation
| Input | Action |
| :--- | :--- |
| `Click on Card` | Opens image in Lightbox |
| `Right Arrow (→)` | Next image in collection |
| `Left Arrow (←)` | Previous image in collection |
| `Escape (Esc)` | Closes Lightbox |
| `Swipe Left` (Mobile) | Next image |
| `Swipe Right` (Mobile) | Previous image |

---

## 💻 Technologies Used

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible ARIA attributes, modal dialogs |
| **CSS3** | Modern dark theme, CSS Grid & Flexbox, smooth transitions, mobile queries |
| **JavaScript (ES6+)** | Object-Oriented Gallery engine, modal management, filtering, swipe & keyboard handlers |

---

## 📂 Project Structure

```text
CodeAlpha_ImageGallery/
│
├── index.html        # Main gallery structure & lightbox modal markup
├── style.css         # Complete styling, animations, and responsive media queries
├── script.js         # Interactive gallery engine, navigation, and filter logic
│
├── images/           # High-resolution gallery photographs
│   ├── image1.jpg    # Nature: Yosemite Valley
│   ├── image2.jpg    # Cars: Modern Supercar
│   ├── image3.jpg    # Technology: Cyber Processor
│   ├── image4.jpg    # Travel: Tropical Paradise
│   ├── image5.jpg    # Nature: Sunlit Forest
│   └── image6.jpg    # Cars: Classic Sports Roadster
│
└── README.md         # Comprehensive project documentation
```

---

## 🚀 How to Run the Project

No dependencies, compilers, or build steps required!

1. Clone or download this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/CodeAlpha_ImageGallery.git
   ```
2. Navigate into the project folder:
   ```bash
   cd CodeAlpha_ImageGallery
   ```
3. Open `index.html` in any web browser:
   - **Double-click** `index.html`, OR
   - Right-click and choose **Open with > Chrome / Firefox / Edge / Safari**, OR
   - Open via VS Code **Live Server**.

---

## 🧪 Testing Checklist

All functionality has been verified against the official CodeAlpha test plan:

- [x] **Gallery Display**: All 6 images render cleanly in the responsive grid.
- [x] **Image Click / Lightbox**: Clicking any image opens the lightbox modal.
- [x] **Next Button**: Navigates forward with smooth fade transitions and wraps around to the beginning.
- [x] **Previous Button**: Navigates backward with circular looping.
- [x] **Close Button & Backdrop**: Lightbox closes via `✕`, clicking backdrop, or `Esc`.
- [x] **Hover Effects**: Images elevate, zoom, and reveal metadata overlays on hover.
- [x] **Category Filters**: Filtering smoothly displays/hides matching cards.
- [x] **Keyboard Navigation**: `ArrowRight`, `ArrowLeft`, and `Escape` work as expected.
- [x] **Mobile Responsive**: Adapts seamlessly to mobile, tablet, and desktop viewports.

---

## 🎥 LinkedIn Demonstration Walkthrough

Follow this outline when recording your project video for CodeAlpha:

1. **Introduction**:
   > *"Hello, my name is Muhammad Saim Ahmad. This is my Image Gallery project developed as part of my CodeAlpha Frontend Development Internship."*
2. **Technologies**:
   > *"I developed this project using HTML5, CSS3, and modern Vanilla JavaScript."*
3. **Core Features**:
   - Showcase the responsive grid layout and hover overlay animations.
   - Demonstrate category filters (**All**, **Nature**, **Cars**, **Technology**, **Travel**).
   - Click an image to open the **Lightbox Viewer**.
   - Demonstrate the **Next** and **Previous** buttons and counter.
   - Demonstrate closing via the `✕` button, backdrop click, and `Escape` key.
   - Demonstrate physical keyboard arrow navigation.
4. **Responsive UI**:
   - Resize the browser window to show tablet (2 columns) and mobile (1 column) layouts.
5. **Conclusion**:
   - Conclude with what you learned about DOM manipulation, CSS Grid, and responsive UX.
   - Share your GitHub repository link in your post.

---

## 👤 Author

- **Name**: Muhammad Saim Ahmad
- **Internship**: CodeAlpha Frontend Development Internship
- **Project**: Task 1 — Image Gallery
- **Organization**: [CodeAlpha](https://www.codealpha.tech/)
