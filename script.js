// DOM Content Loaded Event
document.addEventListener("DOMContentLoaded", () => {
  // Initialize all functionality
  initMobileMenu()
  initSmoothScrolling()
  initContactForm()
  initProjectFiltering()
  initScrollIndicator()
})

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const menuIcon = mobileMenuBtn.querySelector(".menu-icon")
  const closeIcon = mobileMenuBtn.querySelector(".close-icon")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  let isMenuOpen = false

  // Toggle mobile menu
  mobileMenuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen

    if (isMenuOpen) {
      mobileMenu.classList.remove("hidden")
      menuIcon.classList.add("hidden")
      closeIcon.classList.remove("hidden")
    } else {
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    }
  })

  // Close menu when clicking on mobile nav links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      isMenuOpen = false
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    })
  })

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (isMenuOpen && !mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
      isMenuOpen = false
      mobileMenu.classList.add("hidden")
      menuIcon.classList.remove("hidden")
      closeIcon.classList.add("hidden")
    }
  })
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
  const navLinks = document.querySelectorAll('a[href^="#"]')

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        const headerHeight = 64 // Height of fixed header
        const targetPosition = targetSection.offsetTop - headerHeight

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Contact Form Handling
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        subject: formData.get("subject"),
        message: formData.get("message"),
      }

      // Basic validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        showNotification("Please fill in all required fields.", "error")
        return
      }

      if (!isValidEmail(data.email)) {
        showNotification("Please enter a valid email address.", "error")
        return
      }

      // Simulate form submission (replace with actual form handling)
      submitContactForm(data)
    })
  }
}

// Email validation helper
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Simulate form submission
function submitContactForm(data) {
  const submitBtn = document.querySelector('#contactForm button[type="submit"]')
  const originalText = submitBtn.innerHTML

  // Show loading state
  submitBtn.innerHTML =
    '<svg class="icon animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 11-6.219-8.56"/></svg> Sending...'
  submitBtn.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Reset button
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false

    // Show success message
    showNotification("Thank you for your message! I'll get back to you within 24 hours.", "success")

    // Reset form
    document.getElementById("contactForm").reset()

    // In a real implementation, you would send the data to your backend:
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    // });

    console.log("Form submitted:", data)
  }, 2000)
}

// Project Filtering Functionality
function initProjectFiltering() {
  const filterButtons = document.querySelectorAll(".filter-btn")
  const projectCards = document.querySelectorAll(".project-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filter = this.getAttribute("data-filter")

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")

      // Filter projects
      projectCards.forEach((card) => {
        const category = card.getAttribute("data-category")

        if (filter === "all" || category === filter) {
          card.style.display = "block"
          // Add fade in animation
          card.style.opacity = "0"
          setTimeout(() => {
            card.style.opacity = "1"
          }, 100)
        } else {
          card.style.display = "none"
        }
      })
    })
  })
}

// Scroll Indicator Animation
function initScrollIndicator() {
  const scrollIndicator = document.querySelector(".scroll-indicator")

  if (scrollIndicator) {
    // Hide scroll indicator when user scrolls past hero section
    window.addEventListener("scroll", () => {
      const heroSection = document.getElementById("home")
      const heroHeight = heroSection ? heroSection.offsetHeight : 0

      if (window.scrollY > heroHeight * 0.8) {
        scrollIndicator.style.opacity = "0"
      } else {
        scrollIndicator.style.opacity = "1"
      }
    })
  }
}

// Notification System
function showNotification(message, type = "info") {
  // Remove existing notifications
  const existingNotifications = document.querySelectorAll(".notification")
  existingNotifications.forEach((notification) => notification.remove())

  // Create notification element
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m18 6-12 12"></path>
                    <path d="m6 6 12 12"></path>
                </svg>
            </button>
        </div>
    `

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        max-width: 400px;
        padding: 16px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === "success" ? "background-color: #10b981; color: white;" : ""}
        ${type === "error" ? "background-color: #ef4444; color: white;" : ""}
        ${type === "info" ? "background-color: #3b82f6; color: white;" : ""}
    `

  const notificationContent = notification.querySelector(".notification-content")
  notificationContent.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
    `

  const closeButton = notification.querySelector(".notification-close")
  closeButton.style.cssText = `
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
    `

  // Add to document
  document.body.appendChild(notification)

  // Animate in
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.style.transform = "translateX(100%)"
      setTimeout(() => {
        if (notification.parentElement) {
          notification.remove()
        }
      }, 300)
    }
  }, 5000)
}

// Intersection Observer for Animations (Optional Enhancement)
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate-in")
      }
    })
  }, observerOptions)

  // Observe elements for animation
  const animateElements = document.querySelectorAll(".tech-card, .project-card, .contact-card")
  animateElements.forEach((el) => observer.observe(el))
}

// Initialize scroll animations if supported
if ("IntersectionObserver" in window) {
  document.addEventListener("DOMContentLoaded", initScrollAnimations)
}

// Utility function for smooth scrolling fallback
function smoothScrollTo(targetPosition, duration = 1000) {
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = ease(timeElapsed, startPosition, distance, duration)
    window.scrollTo(0, run)
    if (timeElapsed < duration) requestAnimationFrame(animation)
  }

  function ease(t, b, c, d) {
    t /= d / 2
    if (t < 1) return (c / 2) * t * t + b
    t--
    return (-c / 2) * (t * (t - 2) - 1) + b
  }

  requestAnimationFrame(animation)
}

// Handle form input focus states
document.addEventListener("DOMContentLoaded", () => {
  const formInputs = document.querySelectorAll("input, textarea")

  formInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.parentElement.classList.add("focused")
    })

    input.addEventListener("blur", function () {
      this.parentElement.classList.remove("focused")
    })
  })
})

// Add CSS for animations
const animationStyles = document.createElement("style")
animationStyles.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-spin {
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    
    .form-group.focused label {
        color: var(--orange-accent);
    }
    
    .form-group.focused input,
    .form-group.focused textarea {
        border-color: var(--orange-accent);
        box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
    }
`

document.head.appendChild(animationStyles)
