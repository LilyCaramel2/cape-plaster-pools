/*
 * POLICY-GATED FILE
 * Navigation and interactive menu functionality
 * Source: POLICY-GATED-CPP-HANDOFF.md
 * Date: 2 January 2026
 */

(function() {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    function init() {
        initMobileMenu();
        initDropdowns();
        initSmoothScroll();
    }

    // Mobile menu toggle
    function initMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');
        
        if (!toggle || !nav) return;

        toggle.addEventListener('click', function() {
            const isOpen = nav.classList.contains('open');
            nav.classList.toggle('open');
            toggle.setAttribute('aria-expanded', !isOpen);
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!toggle.contains(e.target) && !nav.contains(e.target)) {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Close mobile menu on nav link click
        const navLinks = nav.querySelectorAll('.nav-link, .nav-dropdown-item');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                nav.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Desktop dropdown menus
    function initDropdowns() {
        const dropdowns = document.querySelectorAll('.nav-dropdown');
        
        dropdowns.forEach(function(dropdown) {
            const toggle = dropdown.querySelector('.nav-dropdown-toggle');
            const menu = dropdown.querySelector('.nav-dropdown-menu');
            
            if (!toggle || !menu) return;

            // Click to toggle (mobile + desktop)
            toggle.addEventListener('click', function(e) {
                e.stopPropagation();
                const isOpen = dropdown.classList.contains('open');
                
                // Close all other dropdowns
                document.querySelectorAll('.nav-dropdown.open').forEach(function(other) {
                    if (other !== dropdown) {
                        other.classList.remove('open');
                    }
                });
                
                dropdown.classList.toggle('open');
            });

            // Desktop hover behavior
            if (window.innerWidth >= 768) {
                dropdown.addEventListener('mouseenter', function() {
                    dropdown.classList.add('open');
                });

                dropdown.addEventListener('mouseleave', function() {
                    dropdown.classList.remove('open');
                });
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', function() {
            document.querySelectorAll('.nav-dropdown.open').forEach(function(dropdown) {
                dropdown.classList.remove('open');
            });
        });
    }

    // Smooth scroll for anchor links
    function initSmoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(function(link) {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip empty anchors or just #
                if (!href || href === '#') return;
                
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    
                    // Calculate offset for fixed header
                    const headerHeight = document.querySelector('.site-header')?.offsetHeight || 72;
                    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Update active nav link on scroll
    function updateActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            link.classList.remove('nav-link-active');
            const href = link.getAttribute('href');
            if (href === '#' + currentSection || (href === '/' && window.pageYOffset < 100)) {
                link.classList.add('nav-link-active');
            }
        });
    }

    // Throttle scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(function() {
            updateActiveNav();
        });
    });

})();