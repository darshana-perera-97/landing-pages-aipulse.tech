const destinations = [
    { id: 1, name: "Maldives", location: "Indian Ocean", category: "Beach", price: "$1,299", rating: 4.9, image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 2, name: "Switzerland Alps", location: "Europe", category: "Mountain", price: "$2,499", rating: 4.8, image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 3, name: "Paris", location: "France", category: "City", price: "$1,899", rating: 4.7, image: "https://images.unsplash.com/photo-1616036902568-fa623d8f0c0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldXJvcGVhbiUyMGNpdHl8ZW58MXx8fHwxNzY4ODA0ODcxfDA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 4, name: "Kyoto", location: "Japan", category: "Cultural", price: "$1,699", rating: 4.9, image: "https://images.unsplash.com/photo-1655316281160-e3a9e78472e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHRlbXBsZXxlbnwxfHx8fDE3Njg4ODMwMzl8MA&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 5, name: "Bali", location: "Indonesia", category: "Beach", price: "$999", rating: 4.8, image: "https://images.unsplash.com/photo-1603477849227-705c424d1d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGJlYWNofGVufDF8fHx8MTc2ODgyODk2OHww&ixlib=rb-4.1.0&q=80&w=1080" },
    { id: 6, name: "New Zealand", location: "Oceania", category: "Mountain", price: "$2,299", rating: 4.9, image: "https://images.unsplash.com/photo-1604223190546-a43e4c7f29d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3Njg4NDI2Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080" }
];

let selectedCategory = 'All';

function filterDestinations(category) {
    selectedCategory = category;
    
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('bg-gradient-to-br', 'from-[rgba(19,145,167,1)]', 'to-[rgba(43,164,149,1)]', 'text-white');
        btn.classList.add('bg-gray-100', 'text-[#696969]');
    });
    event.target.classList.remove('bg-gray-100', 'text-[#696969]');
    event.target.classList.add('bg-gradient-to-br', 'from-[rgba(19,145,167,1)]', 'to-[rgba(43,164,149,1)]', 'text-white');
    
    renderDestinations();
}

function renderDestinations() {
    const grid = document.getElementById('destinations-grid');
    const filtered = selectedCategory === 'All' 
        ? destinations 
        : destinations.filter(dest => dest.category === selectedCategory);
    
    grid.innerHTML = filtered.map(dest => `
        <a href="destination-detail.html?id=${dest.id}" class="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="relative h-[300px] overflow-hidden">
                <img src="${dest.image}" alt="${dest.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300">
                <div class="absolute top-4 right-4 bg-[#0D3E55] text-white px-3 py-1 rounded-full font-ubuntu font-medium text-[14px]">
                    ${dest.price}
                </div>
                <div class="absolute top-4 left-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full font-ubuntu font-medium text-[14px]">
                    ${dest.category}
                </div>
            </div>
            <div class="p-6">
                <h3 class="font-ubuntu font-bold text-[24px] text-[#0D3E55] mb-2">
                    ${dest.name}
                </h3>
                <div class="flex items-center gap-2 text-[#696969] mb-3">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span class="font-ubuntu text-[14px]">${dest.location}</span>
                </div>
                <div class="flex items-center gap-1">
                    <svg class="w-4 h-4 fill-[#FFC107] text-[#FFC107]" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                    <span class="font-ubuntu font-medium text-[14px] text-[#0D3E55]">${dest.rating}</span>
                </div>
            </div>
        </a>
    `).join('');
}

document.addEventListener('DOMContentLoaded', function() {
    renderDestinations();
});

