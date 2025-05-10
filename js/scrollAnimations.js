export function setupScrollAnimations() {
    const fadeSections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); // ne se relance pas à chaque scroll
                }
            });
        },
        {
            threshold: 0.1,
        }
    );

    fadeSections.forEach(section => observer.observe(section));
}