$(document).ready(function (){

    $(window).on('load',function() {

        $('#flex1').flexslider({
            animation: "slide",
            controlNav: false,
            directionNav: false,
            slideshowSpeed: 15000,
        });
        $('.flex3').flexslider({
            controlNav: false,
            slideshow: false
        });
    });
    const burger = $('#burger');
    const croix = $('#croix');
    const navigate = $('#navigate');

    console.log(navigate)
    console.log(burger)

    burger.on('click',function (){
        navigate.addClass('apart');
        burger.css('display', 'none');
        croix.css('display', 'block');
        
    });
    croix.on('click',function (){
        navigate.removeClass('apart');
        burger.css('display', 'block');
        croix.css('display', 'none');
        $('.nav').css({'background-color': 'transparent',
            'color' : 'white'
        })
    });


    const viewMore = $('#viewMore');
    const boiteFirst = $('.pad')

    console.log(viewMore)
    console.log(boiteFirst)

    viewMore.on('click', function (e){
        e.preventDefault();
        // btnA.css('display', 'none')
        viewMore.fadeOut(500);
        boiteFirst.append(' <div class="avisBox">\n' +
            '            <div class="left">\n' +
            '                <div  class="flexslider flex3">\n' +
            '                    <ul class="slides">\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule1.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule2.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule3.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule4.png" />\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="right">\n' +
            '                <h2>Peugeot 208</h2>\n' +
            '                <p>Diesel 5 portes, GPS, AudioRadio, Forfait 1000km (0,5km suplémentaire).</p>\n' +
            '                <p>999euros - Agence Paris</p>\n' +
            '                <a href="">Réserver et Payer</a>\n' +
            '            </div>\n' +
            '        </div>')
        boiteFirst.append(' <div class="avisBox">\n' +
            '            <div class="left">\n' +
            '                <div  class="flexslider flex3">\n' +
            '                    <ul class="slides">\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule1.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule2.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule3.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule4.png" />\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="right">\n' +
            '                <h2>Peugeot 208</h2>\n' +
            '                <p>Diesel 5 portes, GPS, AudioRadio, Forfait 1000km (0,5km suplémentaire).</p>\n' +
            '                <p>999euros - Agence Paris</p>\n' +
            '                <a href="">Réserver et Payer</a>\n' +
            '            </div>\n' +
            '        </div>')
        boiteFirst.append(' <div class="avisBox">\n' +
            '            <div class="left">\n' +
            '                <div  class="flexslider flex3">\n' +
            '                    <ul class="slides">\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule1.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule2.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule3.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule4.png" />\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="right">\n' +
            '                <h2>Peugeot 208</h2>\n' +
            '                <p>Diesel 5 portes, GPS, AudioRadio, Forfait 1000km (0,5km suplémentaire).</p>\n' +
            '                <p>999euros - Agence Paris</p>\n' +
            '                <a href="">Réserver et Payer</a>\n' +
            '            </div>\n' +
            '        </div>')
        boiteFirst.append(' <div class="avisBox">\n' +
            '            <div class="left">\n' +
            '                <div  class="flexslider flex3">\n' +
            '                    <ul class="slides">\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule1.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule2.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule3.png" />\n' +
            '                        </li>\n' +
            '                        <li>\n' +
            '                            <img src="asset/img/vehicule4.png" />\n' +
            '                        </li>\n' +
            '                    </ul>\n' +
            '                </div>\n' +
            '            </div>\n' +
            '            <div class="right">\n' +
            '                <h2>Peugeot 208</h2>\n' +
            '                <p>Diesel 5 portes, GPS, AudioRadio, Forfait 1000km (0,5km suplémentaire).</p>\n' +
            '                <p>999euros - Agence Paris</p>\n' +
            '                <a href="">Réserver et Payer</a>\n' +
            '            </div>\n' +
            '        </div>')

        $('.flex3').flexslider({
            controlNav: false,
            slideshow: false
        });

    })





})


