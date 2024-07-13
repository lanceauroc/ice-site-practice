$('#carousel_one').owlCarousel({
    center: true,
    items: 3,
    nav: true,
    dots: false,
    loop:true,
    margin:10,
    responsive: {
        0: { items: 1 },
        480: { items: 2 },
        575: { items: 2 },
        768: { items: 2 },
        991: { items: 2 },
        1200: { items: 2 }
        }
});