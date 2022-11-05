// selecting the button and user feedback box
// const button = document.querySelector('#tire_anim')
// const music_1animation = document.querySelector('.music_1animation')
// const merch_2animation = document.querySelector('.merch_2animation')
// const video_3animation = document.querySelector('.video_3animation')
// const photodiary_4animation = document.querySelector('.photodiary_4animation')

// the CSS animation end event listener

        const container = document.querySelector('.container');
        const button = document.querySelector('.tire');
        // const button__Roll = document.querySelector('.tireRoll');
        const button__Move = document.querySelector('.tireMove');
        const button__Roll = document.querySelector('.tireRotate');
        const music_1 = document.querySelector('.music_1')
        const merch_2 = document.querySelector('.merch_2')
        const video_3 = document.querySelector('.video_3')
        const photodiary_4 = document.querySelector('.photodiary_4')


        // click on button
        button.addEventListener("click", clickAnimation);

        function clickAnimation() {
            button__Move.style.transform = 'translate(540px)'
            button__Move.style.transition = 'transform 1.5s ease-in-out .1s'
            button__Roll.style.transform = 'rotate(360deg)'
            button__Roll.style.transition = 'transform 1.5s ease-in-out .1s'
            // music_1.classList.add('music_1--animIn')
            // merch_2.classList.add('merch_2--animIn')
            // video_3.classList.add('video_3--animIn')
            // photodiary_4.classList.add('photodiary_4--animIn')
            music_1.style.visibility = "visible"
            music_1.style.opacity = '100%'
            music_1.style.transition = 'opacity 1s ease-in-out .25s'
            merch_2.style.opacity = '100%'
            merch_2.style.transition = 'opacity 1s ease-in-out .5s'
            video_3.style.opacity = '100%'
            video_3.style.transition = 'opacity 1s ease-in-out .75s'
            photodiary_4.style.opacity = '100%'
            photodiary_4.style.transition = 'opacity 1s ease-in-out 1s'
            
            

        }

        // hover off microinteraction
        container.addEventListener("mouseleave", hoverOffTireAnim);

        function hoverOffTireAnim() {
            button__Move.style.transform = 'translate(0px)'
            button__Move.style.transition = 'transform 1.5s ease-in-out .1s'
            button__Roll.style.transform = 'rotate(-360deg)'
            button__Roll.style.transition = 'transform 1.5s ease-in-out .1s'
            
            
            music_1.style.opacity = '0%'
            music_1.style.transition = 'opacity 1s ease-in-out .65s'
            merch_2.style.opacity = '0%'
            merch_2.style.transition = 'opacity 1s ease-in-out .5s'
            video_3.style.opacity = '0%'
            video_3.style.transition = 'opacity 1s ease-in-out .25s'
            photodiary_4.style.opacity = '0%'
            photodiary_4.style.transition = 'opacity 1s ease-in-out .1s'

        }
            // music_1.classList.remove('music_1--animIn')
            // merch_2.classList.remove('merch_2--animIn')
            // video_3.classList.remove('video_3--animIn')
            // photodiary_4.classList.remove('photodiary_4--animIn')
            
            // music_1.classList.add('music_1--animOut')
            // merch_2.classList.add('merch_2--animOut')
            // video_3.classList.add('video_3--animOut')
            // photodiary_4.classList.add('photodiary_4--animOut')

        //     addEventListener("transitionend", hoverOffMenuAnim);
            
        //     function hoverOffTireAnim() {
            
            // function onHover() {
            //     music_1hoverColor();
            //     merch_2hoverColor();
            //     item3On();
            //     item4On();

            //   }
        


// when the button (tire__anim) is clicked, fadeIN on all menu items

// button.addEventListener('click', () => {

//     userFeedback.classList.add('user-feedback--anim')
//   })














// const nav = document.getElementById("nav");
// const menu = document.getElementById("menu");
// // var bottom2 = document.getElementById("bottom2");
// const tire = document.getElementById("tire");
// const music = document.getElementById("music_1");
// const merch = document.getElementById("merch_2");
// const video = document.getElementById("video_3");
// const photodiary = document.getElementById("photodiary_4");

// // const button = document.querySelector('#tire__anim')
// // const menu__item = document.querySelector('.menu__anim')

// nav.onmouseover = function() {mouseOver()};
// nav.onmouseout = function() {mouseOut()};

// function mouseOver() {
//   menu.style.cursor = "pointer";
//   music_1On();
//   merch_2On();
//   video_3On();
//   photodiary_4On();

// }

// function mouseOut() {
//     music_1On();
//     merch_2On();
//     video_3On();
//     photodiary_4On();
// }


// function music_1On() {
//   music_1.style.opacity = "100%";
//   music_1.style.transition = "all 0.25s";
//   music_1.style.transitionTimingFunction = "ease-in-out";
// }

// function merch_2On() {
//     merch_2.style.opacity = "100%";
//     merch_2.style.transition = "all 0.25s";
//     merch_2.style.transitionDelay = "0.1s";
//     merch_2.style.transitionTimingFunction = "ease-in-out";
//   }

//   function video_3On() {
//     video_3.style.opacity = "100%";
//     video_3.style.transition = "all 0.25s";
//     video_3.style.transitionDelay = "0.15s";
//     video_3.style.transitionTimingFunction = "ease-in-out";
//   }

//   function photodiary_4On() {
//     photodiary_4.style.opacity = "100%";
//     photodiary_4.style.transition = "all 0.25s";
//     photodiary_4.style.transitionDelay = "0.2s";
//     photodiary_4.style.transitionTimingFunction = "ease-in-out";
//   }

//   function music_1On() {
//     music_1.style.opacity = "100%";
//     music_1.style.transition = "all 0.25s";
//     music_1.style.transitionTimingFunction = "ease-in-out";
//   }
  
//   function merch_2On() {
//       merch_2.style.opacity = "100%";
//       merch_2.style.transition = "all 0.25s";
//       merch_2.style.transitionDelay = "0.1s";
//       merch_2.style.transitionTimingFunction = "ease-in-out";
//     }
  
//     function video_3On() {
//       video_3.style.opacity = "100%";
//       video_3.style.transition = "all 0.25s";
//       video_3.style.transitionDelay = "0.15s";
//       video_3.style.transitionTimingFunction = "ease-in-out";
//     }
  
//     function photodiary_4On() {
//       photodiary_4.style.opacity = "100%";
//       photodiary_4.style.transition = "all 0.25s";
//       photodiary_4.style.transitionDelay = "0.2s";
//       photodiary_4.style.transitionTimingFunction = "ease-in-out";
//     }