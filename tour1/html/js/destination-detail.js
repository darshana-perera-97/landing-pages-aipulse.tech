const destinations = {
    1: {
        name: "Maldives",
        location: "Indian Ocean",
        rating: "4.9 (234 reviews)",
        description: "Experience paradise on Earth with crystal-clear turquoise waters, white sandy beaches, and luxurious overwater bungalows. The Maldives offers world-class diving, snorkeling, and unforgettable sunsets.",
        image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Pristine white sandy beaches",
            "World-class diving spots",
            "Luxury overwater villas",
            "Vibrant coral reefs",
            "Exclusive island resorts"
        ]
    },
    2: {
        name: "Switzerland Alps",
        location: "Europe",
        rating: "4.8 (189 reviews)",
        description: "Discover the breathtaking beauty of the Swiss Alps with majestic mountains, pristine lakes, and charming alpine villages. Perfect for skiing, hiking, and experiencing authentic Swiss culture.",
        image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Majestic mountain peaks",
            "World-class ski resorts",
            "Pristine alpine lakes",
            "Charming mountain villages",
            "Scenic train journeys"
        ]
    },
    3: {
        name: "Paris",
        location: "France",
        rating: "4.7 (312 reviews)",
        description: "The City of Light offers iconic landmarks, world-class museums, exquisite cuisine, and romantic ambiance. Experience the charm of Parisian streets, art, and culture.",
        image: "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHl8ZW58MXx8fHwxNzY4ODA0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Iconic Eiffel Tower",
            "World-renowned museums",
            "Exquisite French cuisine",
            "Historic architecture",
            "Romantic river cruises"
        ]
    },
    4: {
        name: "Kyoto",
        location: "Japan",
        rating: "4.9 (267 reviews)",
        description: "Immerse yourself in traditional Japanese culture with ancient temples, beautiful gardens, and authentic experiences. Kyoto is a perfect blend of history and modernity.",
        image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        highlights: [
            "Ancient temples and shrines",
            "Traditional tea ceremonies",
            "Beautiful cherry blossoms",
            "Historic geisha districts",
            "Authentic Japanese cuisine"
        ]
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = parseInt(urlParams.get('id')) || 1;
    const destination = destinations[id] || destinations[1];

    // Update page content
    document.getElementById('hero-image').src = destination.image;
    document.getElementById('hero-image').alt = destination.name;
    document.getElementById('destination-name').textContent = destination.name;
    document.getElementById('destination-location').textContent = destination.location;
    document.getElementById('destination-rating').textContent = destination.rating;
    document.getElementById('destination-description').textContent = destination.description;

    // Update highlights
    const highlightsList = document.getElementById('highlights-list');
    highlightsList.innerHTML = destination.highlights.map(highlight => `
        <li class="flex items-center gap-3">
            <div class="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[rgba(19,145,167,1)] to-[rgba(43,164,149,1)] rounded-full flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
            </div>
            <span class="font-ubuntu text-[16px] text-[#696969]">${highlight}</span>
        </li>
    `).join('');
});

