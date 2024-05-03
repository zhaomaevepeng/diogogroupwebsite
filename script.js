// scroll reveal adds animation when elements scroll into view
ScrollReveal().reveal("h1", {delay: 100});
ScrollReveal().reveal("h2", {delay: 50});
ScrollReveal().reveal("p", { delay: 150, duration: 1100 })
ScrollReveal().reveal("figure", { origin: "right", distance: "1000px", duration: 1500});
ScrollReveal().reveal(".video", { origin: "left", distance: "1000px", duration: 1500});
ScrollReveal().reveal("li", { interval: 200, delay: 500, origin: "bottom", distance: "100px", duration: 2000});

// Also… The fitVids jQuery library makes responsive video embedding easy
$(".video").fitVids();