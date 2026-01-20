// Load Header
function loadHeader() {
    const header = document.getElementById('header');
    if (header) {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        header.style.display = 'block';
        header.innerHTML = `
            <nav class="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex items-center justify-between h-16">
                        <!-- Logo -->
                        <a href="index.html" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <p class="font-ubuntu font-bold text-xl text-[#0D3E55]">TOUR</p>
                        </a>

                        <!-- Desktop Navigation -->
                        <div class="hidden md:flex items-center gap-8">
                            <a href="index.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'index.html' || currentPage === '' ? 'text-[#0D3E55] border-b-2 border-[#0D3E55] pb-1' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors">
                                Home
                            </a>
                            <a href="destinations.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'destinations.html' ? 'text-[#0D3E55] border-b-2 border-[#0D3E55] pb-1' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors">
                                Destinations
                            </a>
                            <a href="packages.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'packages.html' ? 'text-[#0D3E55] border-b-2 border-[#0D3E55] pb-1' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors">
                                Packages
                            </a>
                            <a href="about.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'about.html' ? 'text-[#0D3E55] border-b-2 border-[#0D3E55] pb-1' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors">
                                About Us
                            </a>
                            <a href="contact.html" class="font-ubuntu font-medium text-[15px] ${currentPage === 'contact.html' ? 'text-[#0D3E55] border-b-2 border-[#0D3E55] pb-1' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors">
                                Contact
                            </a>
                        </div>

                        <!-- Mobile Menu Button -->
                        <button id="mobile-menu-btn" class="md:hidden text-gray-600 hover:text-[#0D3E55] transition-colors" aria-label="Menu">
                            <svg id="menu-icon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <svg id="close-icon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Mobile Menu -->
                <div id="mobile-menu" class="md:hidden hidden border-t border-gray-200 bg-white">
                    <div class="px-4 py-4 space-y-3">
                        <a href="index.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'index.html' || currentPage === '' ? 'text-[#0D3E55] border-l-4 border-[#0D3E55] pl-3' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors py-2">
                            Home
                        </a>
                        <a href="destinations.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'destinations.html' ? 'text-[#0D3E55] border-l-4 border-[#0D3E55] pl-3' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors py-2">
                            Destinations
                        </a>
                        <a href="packages.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'packages.html' ? 'text-[#0D3E55] border-l-4 border-[#0D3E55] pl-3' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors py-2">
                            Packages
                        </a>
                        <a href="about.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'about.html' ? 'text-[#0D3E55] border-l-4 border-[#0D3E55] pl-3' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors py-2">
                            About Us
                        </a>
                        <a href="contact.html" class="block font-ubuntu font-medium text-[15px] ${currentPage === 'contact.html' ? 'text-[#0D3E55] border-l-4 border-[#0D3E55] pl-3' : 'text-gray-600 hover:text-[#0D3E55]'} transition-colors py-2">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        `;
        
        // Mobile menu toggle functionality
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');
        
        if (mobileMenuBtn && mobileMenu) {
            mobileMenuBtn.addEventListener('click', function() {
                const isHidden = mobileMenu.classList.contains('hidden');
                if (isHidden) {
                    mobileMenu.classList.remove('hidden');
                    menuIcon.classList.add('hidden');
                    closeIcon.classList.remove('hidden');
                    document.body.classList.add('menu-open');
                } else {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.classList.remove('menu-open');
                }
            });
            
            // Close mobile menu when clicking on a link
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.classList.remove('menu-open');
                });
            });
            
            // Close mobile menu when clicking outside
            document.addEventListener('click', function(event) {
                if (!mobileMenu.contains(event.target) && 
                    !mobileMenuBtn.contains(event.target) && 
                    !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                    closeIcon.classList.add('hidden');
                    document.body.classList.remove('menu-open');
                }
            });
        }
    }
}

// Load Footer
function loadFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = `
            <div class="bg-gradient-to-br from-[rgba(19,145,167,1)] to-[rgba(43,164,149,1)] py-16">
                <div class="w-full max-w-[1280px] mx-auto px-8">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <!-- Company Info -->
                        <div>
                            <div class="flex items-center gap-2 mb-6">
                                <div class="relative size-[60px]">
                                    <svg class="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 153 89.562">
                                        <path d="M0 0H31.4822V8.1767H0V0ZM9.94125 10.0473L9.67127 9.77733H21.2131V40.1893H10.4234V25.6583C10.4234 20.6708 10.4234 16.9199 10.4234 14.4057C10.4234 11.8938 10.4041 10.6018 10.3655 10.5294C10.3318 10.3896 10.192 10.2281 9.94125 10.0473Z" fill="white"/>
                                        <path d="M17.1055 0.16392C17.3948 0.094013 17.6455 0.057854 17.8576 0.057854C17.9974 0.057854 18.1397 0.057854 18.2819 0.057854L18.494 0V4.16549C18.494 6.98105 18.441 8.38883 18.3397 8.38883C17.766 8.38883 16.9464 8.63954 15.8809 9.14094C12.7038 10.6403 11.2068 14.6322 11.3876 21.1167C11.4262 22.1846 11.5419 23.3778 11.7347 24.694C11.9324 26.0126 12.2795 27.2782 12.7761 28.4931C13.2775 29.7032 13.9549 30.7542 14.8106 31.6462C15.664 32.5332 16.7512 33.0684 18.0697 33.2468L18.4458 33.295L18.494 37.258V41.2596H17.9637C16.5752 41.2596 15.1819 41.0884 13.7885 40.7485C12.4 40.4135 11.0815 39.9337 9.83519 39.3118C8.5865 38.6875 7.42942 37.9137 6.36394 36.988C5.29605 36.0623 4.37039 35.0113 3.58695 33.835C1.76696 31.1616 0.590593 27.794 0.057854 23.7298C0.0192847 23.4092 0 22.9656 0 22.3992C0 21.8278 0 21.1312 0 20.3068C0 19.5233 0.00964234 18.8484 0.028927 18.2819C0.0482117 17.7106 0.0771387 17.2477 0.115708 16.8934C0.359177 15.1843 0.78344 13.5186 1.3885 11.8986C1.99837 10.2739 2.79146 8.76489 3.77015 7.37639C4.75367 5.98789 5.91075 4.77055 7.2414 3.72194C8.57686 2.66852 10.1004 1.85615 11.8119 1.28243C13.3787 0.641216 15.1433 0.267575 17.1055 0.16392ZM19.7282 4.16549V0H20.2103C21.6687 0 23.103 0.197668 24.5108 0.588183C25.9186 0.981108 27.2444 1.52349 28.4931 2.21774C29.7394 2.91199 30.9061 3.75087 31.9933 4.73439C33.078 5.71309 34.0134 6.80508 34.7992 8.01278C36.6505 10.8283 37.8076 13.9862 38.2704 17.4816C38.3404 17.766 38.3862 18.183 38.4054 18.7351C38.4247 19.2895 38.4344 19.9211 38.4344 20.6346C38.362 22.6981 38.1113 24.7302 37.6823 26.7286C37.258 28.7221 36.4914 30.6289 35.3874 32.4465C33.888 34.9414 31.9885 36.9157 29.6888 38.3765C27.3939 39.8349 24.7471 40.7437 21.7531 41.1053C21.4687 41.1366 21.2228 41.1631 21.0107 41.1824C20.7985 41.2017 20.6177 41.2114 20.4707 41.2114H20.0464L19.9982 39.1286C19.9596 37.8028 19.9596 36.4842 19.9982 35.1656L20.0464 33.2468L20.7407 33.0829C22.0569 32.6923 23.1247 32.0873 23.9419 31.2701C24.7639 30.4481 25.3979 29.5031 25.8415 28.4353C26.2898 27.3698 26.6032 26.2223 26.7768 24.9929C26.9552 23.7587 27.066 22.5197 27.1046 21.271C27.2059 18.5977 26.9045 16.175 26.1982 14.0007C25.0918 10.621 23.238 8.73355 20.6346 8.34062L19.7764 8.1767L19.7282 4.16549Z" fill="white"/>
                                        <path d="M0.482117 0.212131L0 0H13.2582L13.3161 14.3189V28.4353L13.6343 29.2356C14.1284 30.8362 15.3916 31.9595 17.4237 32.6007C17.8865 32.6393 18.118 32.7647 18.118 32.9768C18.118 33.0491 18.118 33.4059 18.118 34.0471C18.118 34.6907 18.1011 35.6164 18.0697 36.8241V40.5171C16.5704 40.5171 15.0734 40.4424 13.5764 40.2953C12.077 40.1531 10.6548 39.6903 9.30486 38.9068C7.73557 38.1596 6.37359 37.1278 5.21651 35.8116C4.05942 34.4955 3.21331 33.0154 2.68057 31.3762C2.53111 30.8748 2.413 30.3685 2.3238 29.8527C2.23943 29.332 2.17917 28.7703 2.1406 28.1653C2.10685 27.594 2.08275 26.2561 2.06346 24.1541C2.04418 22.052 2.03453 19.222 2.03453 15.6592V13.0943C2.0731 10.2088 2.08275 7.91154 2.06346 6.20002C2.04418 4.49092 2.01525 3.38446 1.97668 2.88306C1.94293 1.95739 1.76696 1.31859 1.44635 0.964234C1.12333 0.643626 0.802725 0.392925 0.482117 0.212131ZM22.1292 0.16392C21.9869 0.12535 22.0231 0.0723172 22.2352 0H35.5417V13.8946C35.5417 18.3879 35.532 21.8471 35.5127 24.2698C35.4983 26.6876 35.4742 28.0399 35.4356 28.3292C35.2235 30.1805 34.7148 31.8655 33.9121 33.3818C33.1142 34.8932 32.0921 36.1636 30.8458 37.2001C29.5972 38.2343 28.1701 39.0346 26.5646 39.6011C24.964 40.1724 23.2525 40.4593 21.4349 40.4593H19.5643L19.6222 36.448V32.6007L19.9886 32.5525C20.9528 32.3742 21.8254 31.8824 22.6113 31.0773C23.3947 30.2745 23.9467 29.3224 24.2698 28.2231C24.3782 27.794 24.4337 23.4791 24.4337 15.2831C24.4337 6.94731 24.3782 2.61789 24.2698 2.29488C23.9467 1.29931 23.2332 0.588183 22.1292 0.16392Z" fill="white"/>
                                    </svg>
                                </div>
                                <p class="font-ubuntu font-bold text-[24px] text-white">TOUR</p>
                            </div>
                            <p class="text-white/80 font-ubuntu text-[14px] leading-relaxed mb-6">
                                Plan for your next weekend and create a tour with Travys to any places you want at cheapest price
                            </p>
                            <div class="flex items-center gap-4">
                                <a href="#" class="text-white hover:opacity-80 transition-opacity">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                                </a>
                                <a href="#" class="text-white hover:opacity-80 transition-opacity">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
                                </a>
                                <a href="#" class="text-white hover:opacity-80 transition-opacity">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                                </a>
                                <a href="#" class="text-white hover:opacity-80 transition-opacity">
                                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path></svg>
                                </a>
                            </div>
                        </div>

                        <!-- Quick Links -->
                        <div>
                            <h3 class="font-ubuntu font-bold text-[18px] text-white mb-6">Quick Links</h3>
                            <ul class="space-y-3">
                                <li><a href="index.html" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Home</a></li>
                                <li><a href="destinations.html" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Destinations</a></li>
                                <li><a href="packages.html" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Packages</a></li>
                                <li><a href="about.html" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">About Us</a></li>
                                <li><a href="contact.html" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <!-- Tour Packages -->
                        <div>
                            <h3 class="font-ubuntu font-bold text-[18px] text-white mb-6">Tour Packages</h3>
                            <ul class="space-y-3">
                                <li><a href="#" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Beach Getaways</a></li>
                                <li><a href="#" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Mountain Adventures</a></li>
                                <li><a href="#" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">City Tours</a></li>
                                <li><a href="#" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Cultural Experiences</a></li>
                                <li><a href="#" class="text-white/80 font-ubuntu text-[14px] hover:text-white transition-colors">Luxury Escapes</a></li>
                            </ul>
                        </div>

                        <!-- Subscribe -->
                        <div>
                            <h3 class="font-ubuntu font-bold text-[18px] text-white mb-6">Subscribe to Newsletter</h3>
                            <p class="text-white/80 font-ubuntu text-[14px] mb-4">
                                Get updates on exclusive deals and travel tips
                            </p>
                            <div class="flex gap-2">
                                <input type="email" placeholder="Your email" class="flex-1 px-4 py-2 rounded bg-white/20 backdrop-blur-sm text-white placeholder:text-white/60 border border-white/30 focus:outline-none focus:border-white/50">
                                <button class="px-6 py-2 bg-[#0D3E55] text-white rounded font-ubuntu font-medium hover:bg-[#0D3E55]/80 transition-colors">Submit</button>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Bar -->
                    <div class="border-t border-white/20 pt-8 flex items-center justify-between">
                        <p class="text-white/60 font-ubuntu text-[14px]">
                            © 2026 TOUR. All rights reserved.
                        </p>
                        <div class="flex items-center gap-6">
                            <a href="#" class="text-white/60 font-ubuntu text-[14px] hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" class="text-white/60 font-ubuntu text-[14px] hover:text-white transition-colors">Terms & Conditions</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    loadFooter();
});

