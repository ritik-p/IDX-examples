function videoslider(links, name, description){
    document.querySelector(".slider").src = links;
    document.querySelector("#shoutoutsName").innerHTML = name;
    document.querySelector("#shoutoutsDescription").innerHTML = description;
}

//pause all videos functions used during different user interactions
function pauseAll(){
    var videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
    });
}

//pause youtube intro video
function pauseIntro(){
    var iframe = document.querySelector("iframe");
    var iframeSrc = iframe.src;
    iframe.src = iframeSrc;
}

function checkEscPause(){
    document.addEventListener('keydown', function(event) {
        if(event.key === "Escape"){
            pauseAll();
            pauseIntro();
        }
    });
}


const aboutDiv = document.getElementById('about');
const mediaQuery = window.matchMedia('(max-width: 1280px)');

function changeCss () { 
    var bg1 = document.querySelector("body"); 
    var bg3 = document.querySelector("#contact"); 
    const divTop = aboutDiv.getBoundingClientRect().top;
    this.scrollY > 1000 ? bg1.style.backgroundImage = "linear-gradient(to top, rgba(46, 49, 65, 0.312), rgba(46, 49, 65, 0)), url('../../images/bgBeach.png')" : bg1.style = "initial";
        if(window.matchMedia('(max-width: 1280px)').matches){
        this.scrollY > 1000 ? bg3.style.backgroundImage = "linear-gradient(to top, rgba(46, 49, 65, 0.312), rgba(46, 49, 65, 0)), url('../../images/bgBeach.png')" : bg3.style.backgroundImage = "linear-gradient(to top, rgba(46, 49, 65, 0.312), rgba(46, 49, 65, 0)), url('../../images/bgBeach.png')"; 
        } 
    }
    
window.addEventListener("scroll", changeCss , false); 


document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide', {
          perPage    : 4,
          breakpoints: {
              600: {
                  perPage: 3,
              },
          },
    } ).mount();
  } );


//add mailing list submissions to google sheet
(function ($) {

if ($("#subscribeForm").length) {
    $("#subscribeForm").validate({
        rules: {
            First_Name: {
                required: true,
                minlength: 2
            },
            Last_Name: {
                required: true,
                minlength: 1
            },

            Email: "required",
        },

        messages: {
            First_Name: "Please enter your first name",
            Last_Name: "Please enter your last name",
            Email: "Please enter your email address",
        },

        submitHandler: function (form) {
            $.ajax({
                type: "POST",
                url: "https://script.google.com/macros/s/REMOVED_FOR_PRIVACY",
                data: $(form).serialize(),
                success: function () {
                    $("#loader").hide();
                    $("#success").slideDown("slow");
                    setTimeout(function () {
                        $("#success").slideUp("slow");
                    }, 3000);
                    form.reset();
                },
                error: function () {
                    $("#loader").hide();
                    $("#error").slideDown("slow");
                    setTimeout(function () {
                        $("#error").slideUp("slow");
                    }, 3000);
                }
            });
            return false; // required to block normal submit since using ajax
        }

    });
}
})(window.jQuery);
