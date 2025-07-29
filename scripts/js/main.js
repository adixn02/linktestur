// // Mobile menu toggle
// document.addEventListener("DOMContentLoaded", () => {
//   const mobileMenuBtn = document.getElementById("mobile-menu-btn")
//   const mobileMenu = document.getElementById("mobile-menu")

//   if (mobileMenuBtn && mobileMenu) {
//     mobileMenuBtn.addEventListener("click", () => {
//       mobileMenu.classList.toggle("hidden")
//     })
//   }

//   // Search tab functionality
//   const searchTabs = document.querySelectorAll(".search-tab")
//   searchTabs.forEach((tab) => {
//     tab.addEventListener("click", function () {
//       // Remove active class from all tabs
//       searchTabs.forEach((t) => t.classList.remove("active"))
//       // Add active class to clicked tab
//       this.classList.add("active")
//     })
//   })

//   // FAQ toggle functionality
//   const faqToggles = document.querySelectorAll(".faq-toggle")
//   faqToggles.forEach((toggle) => {
//     toggle.addEventListener("click", function () {
//       const content = this.nextElementSibling
//       const isActive = this.classList.contains("active")

//       // Close all other FAQs
//       faqToggles.forEach((t) => {
//         t.classList.remove("active")
//         t.nextElementSibling.classList.add("hidden")
//       })

//       // Toggle current FAQ
//       if (!isActive) {
//         this.classList.add("active")
//         content.classList.remove("hidden")
//       }
//     })
//   })

//   // Smooth scroll for anchor links
//   document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
//     anchor.addEventListener("click", function (e) {
//       e.preventDefault()
//       const target = document.querySelector(this.getAttribute("href"))
//       if (target) {
//         target.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         })
//       }
//     })
//   })

//   // Contact form submission
//   const contactForm = document.getElementById("contact-form")
//   if (contactForm) {
//     contactForm.addEventListener("submit", function (e) {
//       e.preventDefault()

//       // Get form data
//       const formData = new FormData(this)
//       const data = Object.fromEntries(formData)

//       // Simple validation
//       if (!data.firstName || !data.lastName || !data.email || !data.message) {
//         alert("Please fill in all required fields.")
//         return
//       }

//       // Email validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//       if (!emailRegex.test(data.email)) {
//         alert("Please enter a valid email address.")
//         return
//       }

//       // Simulate form submission
//       const submitBtn = this.querySelector('button[type="submit"]')
//       const originalText = submitBtn.textContent
//       submitBtn.textContent = "Sending..."
//       submitBtn.disabled = true

//       setTimeout(() => {
//         alert("Thank you for your message! We'll get back to you soon.")
//         this.reset()
//         submitBtn.textContent = originalText
//         submitBtn.disabled = false
//       }, 2000)
//     })
//   }

//   // Property card hover effects
//   const propertyCards = document.querySelectorAll(".property-card")
//   propertyCards.forEach((card) => {
//     card.addEventListener("mouseenter", function () {
//       this.style.transform = "translateY(-8px)"
//     })

//     card.addEventListener("mouseleave", function () {
//       this.style.transform = "translateY(0)"
//     })
//   })

//   // Lazy loading for images
//   const images = document.querySelectorAll('img[loading="lazy"]')
//   const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         const img = entry.target
//         img.classList.add("loaded")
//         observer.unobserve(img)
//       }
//     })
//   })

//   images.forEach((img) => imageObserver.observe(img))

//   // Scroll reveal animation
//   const revealElements = document.querySelectorAll(".animate-fade-in, .animate-slide-up")
//   const revealObserver = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           entry.target.style.opacity = "1"
//           entry.target.style.transform = "translateY(0)"
//         }
//       })
//     },
//     {
//       threshold: 0.1,
//       rootMargin: "0px 0px -50px 0px",
//     },
//   )

//   revealElements.forEach((el) => {
//     el.style.opacity = "0"
//     el.style.transform = "translateY(20px)"
//     el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
//     revealObserver.observe(el)
//   })

//   // Navbar background on scroll
//   const navbar = document.querySelector("nav")
//   if (navbar) {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 50) {
//         navbar.classList.add("bg-white/98")
//         navbar.classList.remove("bg-white/95")
//       } else {
//         navbar.classList.add("bg-white/95")
//         navbar.classList.remove("bg-white/98")
//       }
//     })
//   }

//   // Property search functionality (basic)
//   const searchForm = document.querySelector("form")
//   if (searchForm && !searchForm.id) {
//     // Main search form
//     searchForm.addEventListener("submit", function (e) {
//       e.preventDefault()
//       const searchInput = this.querySelector('input[type="text"]')
//       if (searchInput && searchInput.value.trim()) {
//         // Simulate search - in real app, this would redirect to results page
//         alert(`Searching for properties in: ${searchInput.value}`)
//       }
//     })
//   }

//   // Heart icon toggle for property cards
//   const heartButtons = document.querySelectorAll(".property-card button")
//   heartButtons.forEach((button) => {
//     button.addEventListener("click", function (e) {
//       e.stopPropagation()
//       const svg = this.querySelector("svg")
//       if (svg) {
//         svg.classList.toggle("text-red-500")
//         svg.classList.toggle("text-gray-600")

//         // Add a little animation
//         this.style.transform = "scale(1.2)"
//         setTimeout(() => {
//           this.style.transform = "scale(1)"
//         }, 150)
//       }
//     })
//   })
// })

// // Utility functions
// function debounce(func, wait) {
//   let timeout
//   return function executedFunction(...args) {
//     const later = () => {
//       clearTimeout(timeout)
//       func(...args)
//     }
//     clearTimeout(timeout)
//     timeout = setTimeout(later, wait)
//   }
// }

// // Search suggestions (mock data)
// const searchSuggestions = [
//   "Manhattan, NY",
//   "Brooklyn, NY",
//   "Queens, NY",
//   "Bronx, NY",
//   "Staten Island, NY",
//   "Los Angeles, CA",
//   "Beverly Hills, CA",
//   "Santa Monica, CA",
//   "Chicago, IL",
//   "Miami, FL",
// ]

// // Add search autocomplete functionality
// document.addEventListener("DOMContentLoaded", () => {
//   const searchInputs = document.querySelectorAll('input[type="text"]')

//   searchInputs.forEach((input) => {
//     if (input.placeholder && input.placeholder.includes("City")) {
//       let suggestionsList = null

//       input.addEventListener(
//         "input",
//         debounce(function () {
//           const value = this.value.toLowerCase()

//           if (value.length > 1) {
//             const matches = searchSuggestions.filter((suggestion) => suggestion.toLowerCase().includes(value))

//             showSuggestions(this, matches)
//           } else {
//             hideSuggestions()
//           }
//         }, 300),
//       )

//       input.addEventListener("blur", () => {
//         setTimeout(hideSuggestions, 200)
//       })

//       function showSuggestions(input, suggestions) {
//         hideSuggestions()

//         if (suggestions.length === 0) return

//         suggestionsList = document.createElement("div")
//         suggestionsList.className =
//           "absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-b-lg shadow-lg z-10 max-h-48 overflow-y-auto"

//         suggestions.forEach((suggestion) => {
//           const item = document.createElement("div")
//           item.className = "px-4 py-2 hover:bg-gray-100 cursor-pointer"
//           item.textContent = suggestion

//           item.addEventListener("click", () => {
//             input.value = suggestion
//             hideSuggestions()
//           })

//           suggestionsList.appendChild(item)
//         })

//         input.parentElement.style.position = "relative"
//         input.parentElement.appendChild(suggestionsList)
//       }

//       function hideSuggestions() {
//         if (suggestionsList) {
//           suggestionsList.remove()
//           suggestionsList = null
//         }
//       }
//     }
//   })
// })


   // Mobile menu toggle
        document.addEventListener("DOMContentLoaded", () => {
            const mobileMenuBtn = document.getElementById("mobile-menu-btn");
            const mobileMenu = document.getElementById("mobile-menu");
            
            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener("click", () => {
                    mobileMenu.classList.toggle("hidden");
                });
            }
            
            // Search tab functionality
            const searchTabs = document.querySelectorAll(".search-tab");
            searchTabs.forEach((tab) => {
                tab.addEventListener("click", function () {
                    // Remove active class from all tabs
                    searchTabs.forEach((t) => t.classList.remove("active"));
                    // Add active class to clicked tab
                    this.classList.add("active");
                });
            });
            
            // Typewriter effect
            const typewriterElement = document.querySelector('.typewriter p');
            const propertyTypes = ['Home', 'Office', 'Farmhouse', 'Plot', 'Apartment', 'Villa'];
            let currentIndex = 0;
            
            function updateTypewriter() {
                typewriterElement.textContent = `Find your perfect ${propertyTypes[currentIndex]}`;
                currentIndex = (currentIndex + 1) % propertyTypes.length;
            }
            
            // Initial update
            updateTypewriter();
            
            // Update every 3 seconds
            setInterval(updateTypewriter, 3000);
            
            // Initialize Swiper for builder carousel
            const builderSwiper = new Swiper('.builderSwiper', {
                slidesPerView: 2,
                spaceBetween: 20,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                breakpoints: {
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                },
            });
        });
