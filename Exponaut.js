let targetanim1 = document.querySelector(".btn1anim");
let targetanim2 = document.querySelector(".btn_2");
let targetanim3 = document.querySelector(".btn_3");
let targetanim4 = document.querySelector(".btn_4");

let targetanim4box = document.querySelector(".rotating_btn_container4");


let targetanimshadow1 = document.querySelector(".btn1shadow");
let targetanimshadow2 = document.querySelector(".btn1shadow2");
let targetanimshadow3 = document.querySelector(".btn1shadow3");

let black_cover1 = document.querySelector(".cover_screen1");
let black_cover2 = document.querySelector(".cover_screen2");
let black_cover3 = document.querySelector(".cover_screen3");

let starter_btn = document.querySelector(".starter_btn");
let starter_btn_endless = document.querySelector(".starter_btn_endless");
let starter_btn_tutorial = document.querySelector(".starter_btn_tutorial");

let targetcontainer1 = document.querySelector(".obstacle_container1");

let targetcontainer2 = document.querySelector(".obstacle_container2");

let targetcontainershadow1 = document.querySelector(".obstacle_container1shadow");

let targetcontainershadow2 = document.querySelector(".obstacle_container2shadow");

let targetcontainerwarning1 = document.querySelector(".obstacle_container1warning");

let targetcontainerwarning2 = document.querySelector(".obstacle_container2warning");

let onetimebtn = document.querySelector(".onetimebtn");

let permanent_display = document.querySelector(".permanent_display");




let anim1type;
let anim2type;

let anim1delay;
let anim2delay;

let obstacle1top;
let obstacle1left;
let obstacle1scale;

let obstacle2top;
let obstacle2left;
let obstacle2scale;

let anim1wdur;
let anim2wdur;


let obstacleanimduration = 45000;


let targetScore = 1000000;





let button2_effect_target = document.querySelector(".btn_2");









let permanent_multiplier_value = 1;
let comboValue = 1;
let hoverTime = 0;
let clickCount = 0;
let inactivityTime = 0;







let offset_left = "-20%";
let offset_top = "-120%";
let offset_rotate = "90deg";
let offset_scale = "150%";





let offset_rotate2 = 0;



function runanims() {

    starter_btn.style.animationPlayState = 'running';
    starter_btn_endless.style.animationPlayState = 'running';
    starter_btn_tutorial.style.animationPlayState = 'running';


    targetanim1.style.animationPlayState = 'running';
    targetanim2.style.animationPlayState = 'running';
    targetanim3.style.animationPlayState = 'running';
    targetanim4.style.animationPlayState = 'running';

    targetanimshadow1.style.animationPlayState = 'running';
    targetanimshadow2.style.animationPlayState = 'running';
    targetanimshadow3.style.animationPlayState = 'running';


    black_cover1.style.animationPlayState = 'running';
    black_cover2.style.animationPlayState = 'running';
    black_cover3.style.animationPlayState = 'running';


    targetcontainer1.style.animationPlayState = 'running';
    targetcontainer2.style.animationPlayState = 'running';
    targetcontainershadow1.style.animationPlayState = 'running';
    targetcontainershadow2.style.animationPlayState = 'running';
    targetcontainerwarning1.style.animationPlayState = 'running';
    targetcontainerwarning2.style.animationPlayState = 'running';


    onetimebtn.style.animationPlayState = "running";

}


function startnormalanims() {

    r.style.setProperty('--anim1type', 'obstacle1move 30s 8s infinite');
    r.style.setProperty('--anim2type', 'obstacle2move 40s 24s infinite');


    r.style.setProperty("--anim1wdur", "15s")

    r.style.setProperty("--anim2wdur", "10s")

    r.style.setProperty("--anim1wdel", "8s")

    r.style.setProperty("--anim2wdel", "24s")


    r.style.setProperty("--shadow1delay", "8.05s")

    r.style.setProperty("--shadow2delay", "24.1s")


    r.style.setProperty('--containerrotate', '90deg');

    r.style.setProperty('--obstacle1top', '300%');
    r.style.setProperty('--obstacle1left', '80%');
    r.style.setProperty('--obstacle1scale', '200%');

    r.style.setProperty('--obstacle2top', '50%');
    r.style.setProperty('--obstacle2left', '0%');
    r.style.setProperty('--obstacle2scale', '150%');

    obstacleanimduration = 45000;


}











function starthardanims() {

    r.style.setProperty('--anim1type', 'obstacle1movehard 7.5s 10s infinite');
    r.style.setProperty('--anim2type', 'obstacle2movehard 10s 20s infinite');



    r.style.setProperty("--anim1wdur", "2s")

    r.style.setProperty("--anim2wdur", "2s")

    r.style.setProperty("--anim1wdel", "9s")

    r.style.setProperty("--anim2wdel", "19s")


    r.style.setProperty("--shadow1delay", "10.05s")

    r.style.setProperty("--shadow2delay", "20.05s")


    r.style.setProperty('--containerrotate', '0%');

    r.style.setProperty('--obstacle1top', '-40%');
    r.style.setProperty('--obstacle1left', '200%');
    r.style.setProperty('--obstacle1scale', '80%');

    r.style.setProperty('--obstacle2top', '-200%');
    r.style.setProperty('--obstacle2left', '-30%');
    r.style.setProperty('--obstacle2scale', '80%');

    obstacleanimduration = 45000;


}



function starthard2anims() {
    starthardanims();

    r.style.setProperty('--anim1type', 'obstacle1movehard2 15s 10s infinite');
    r.style.setProperty('--anim2type', 'obstacle2movehard2 25s 20s infinite ease-in');



    r.style.setProperty("--anim1wdur", "2s")

    r.style.setProperty("--anim2wdur", "4s")

    r.style.setProperty("--anim1wdel", "9s")

    r.style.setProperty("--anim2wdel", "19s")


    r.style.setProperty("--shadow1delay", "10.05s")

    r.style.setProperty("--shadow2delay", "20.05s")


    r.style.setProperty('--containerrotate', '0%');

    r.style.setProperty('--obstacle1top', '150%');
    r.style.setProperty('--obstacle1left', '0%');
    r.style.setProperty('--obstacle1scale', '80%');

    r.style.setProperty('--obstacle2top', '-230%');
    r.style.setProperty('--obstacle2left', '-30%');
    r.style.setProperty('--obstacle2scale', '80%');


    obstacleanimduration = 45000;

}

setTimeout(starthardanims, obstacleanimduration);


function select_obstacleset(){
    obstacle_setID = Math.floor(Math.random() * 3 + 1);

}

function runchoosenset() {


        if (obstacle_setID == 1) {console.log("set1");

        startnormalanims();


        } else if (obstacle_setID  == 2) {console.log("set2");

        starthardanims();


        

        } else if (obstacle_setID  == 3) {console.log("set3");

        starthard2anims();    
       
               }
        else {console.log("this cant happen");
      }

    }

function deployobstacle() {
    select_obstacleset();
    runchoosenset();
}



function obstacle_loop (){

    setInterval(deployobstacle, obstacleanimduration)
}














var normal_mode = false;

var endless_mode = false;

var tutorial = false;

var disableCombo = false;







let progress1 = document.querySelector(".progress1");
let progress2 = document.querySelector(".progress2");
let progress3 = document.querySelector(".progress3");
let progress4 = document.querySelector(".progress4");
let progress5 = document.querySelector(".progress5");
let progress6 = document.querySelector(".progress6");
let progress7 = document.querySelector(".progress7");
let progress8 = document.querySelector(".progress8");
let progress9 = document.querySelector(".progress9");
let progress10 = document.querySelector(".progress10");

let progress1check = false;
let progress2check = false;
let progress3check = false;
let progress4check = false;
let progress5check = false;
let progress6check = false;
let progress7check = false;
let progress8check = false;
let progress9check = false;
let progress10check = false;

const tutorialText = document.querySelector(".tutorialtext");


const onetimebtn1 = document.querySelector("#onetimebtn_1");
const onetimebtn2 = document.querySelector("#onetimebtn_2");
const onetimebtn3 = document.querySelector("#onetimebtn_3");
const onetimebtn4 = document.querySelector("#onetimebtn_4");


var enable_deadly_check = false;



const music_endless = new Audio("sounds/music_loop_endless.mp3");

music_endless.loop=true;

var vol = 1;



const music_tutorial = new Audio("sounds/tutorial_loop.mp3");

music_tutorial.loop=true;


const music_scoreTarget = new Audio("sounds/score_target_loop.mp3");

music_scoreTarget.loop=true;






$(".starter_btn").click(function() {
    start_all();

    r.style.setProperty('--meter_left_offset', "-200%");

    runanims();

    disableBar = true;

    normal_mode = true;

    document.querySelector(".fever_deco").style.opacity = '0%';


    music_scoreTarget.play();


}

)

$(".starter_btn_endless").click(function() {
    start_all();

    endless_mode = true;

    r.style.setProperty('--permanent_opacity', "100%");

    runanims();

    disableBar = false;

    enable_deadly_check = false;

    permanent_applyBuffer = true;



    music_endless.volume = vol;

    music_endless.play();





}

)

function fadeout() {

    setInterval(function() {

  if (vol > 0.05) {
    vol -= 0.05;
    music_endless.volume = vol;
  }
  else {

    clearInterval(fadeout);
  }

}, 250);



}

$(".starter_btn_tutorial").click(function() {
    start_all();

    tutorial = true;

    disableCombo = true;

    disableBar = true;

    stop_onetimebtn = true;

    enable_deadly_check = false;


    music_tutorial.play();



    targetanim4.style.animation = 'none';
    targetanim4.style.opacity = '0%';

    targetanim4box.style.animation = 'none';

    r.style.setProperty('--meter_left_offset', '-200%');

    document.querySelector(".fever_deco").style.opacity = '0%';


    
    tutorialText.innerHTML = "Welcome to Exponaut! Here are the rules, try to keep up.";

    setTimeout(() => {
        if (stop_onetimebtn == true) {

            console.log("went off")
            
            r.style.setProperty('--animstate', 'paused');



        }
    }, 2000);


    setInterval(() => {

        if (disableCombo == true) {
            
            inactivityTime = 1;
            comboValue = 1;

        }
        
    }, 100);

    r.style.setProperty('--tutorial_position', 'absolute');
    r.style.setProperty('--tutorial_opacity', '0%');
    r.style.setProperty('--tutorial_top', '0.25vw');
    r.style.setProperty('--tutorialtxt_opacity', '100%');



    progress1.style.animationPlayState = 'running';

    starter_btn.style.animationPlayState = 'running';
    starter_btn_endless.style.animationPlayState = 'running';
    starter_btn_tutorial.style.animationPlayState = 'running';

    black_cover1.style.animationPlayState = 'running';
    black_cover2.style.animationPlayState = 'running';
    black_cover3.style.animationPlayState = 'running';


    const btn_1 = ".btn_1"
    const btn_2 = ".btn_2"
    const btn_3 = ".btn_3"
    const btn_4 = ".btn_4"

function remove_btn(x) {


    document.querySelector(".btn_" + x).style.animation = 'none';
    document.querySelector(".btn_" + x).style.opacity = '0%';
    document.querySelector(".btn_" + x).style.pointerEvents = 'none';

    }

function readd_btn(x) {


    document.querySelector(".btn_" + x).style.animation = 'initial';
    document.querySelector(".btn_" + x).style.opacity = 'initial';
    document.querySelector(".btn_" + x).style.pointerEvents = 'all';

    }



    
    


    $(".progress1").click(function() {


        tutorialText.innerHTML = "Each circle has a slightly different effect, and correct way of interacting with it.<br> Yellow circles need to be SLASHED, try scoring 500 points so that you may proceed.";

        progress1.style.animation = 'progress_btn_leave 1s ease-in';

        targetanim1.style.animationPlayState = 'running';

            setInterval(function() {

                if (current_amount >= 500 && progress1check == false) {

                    progress2.style.animationPlayState = 'running';

                    progress1check = true;

                    remove_btn(1);
                }


            }, 500);


    });


    $(".progress2").click(function() {

        tutorialText.innerHTML = "Red circles need to be HOVERED over, to provide points consistently.<br> 750 points to continue.";


        progress2.style.animation = 'progress_btn_leave 1s ease-in';

        targetanim2.style.animationPlayState = 'running';

            setInterval(function() {

                if (current_amount >= 750 && progress2check == false) {

                    progress3.style.animationPlayState = 'running';

                    progress2check = true;

                    remove_btn(2);
                }


            }, 500);



    });


    $(".progress3").click(function() {

        tutorialText.innerHTML = "Green circles need to be CLICKED, no rocket science here.<br> 1500 points to proceed.";

        progress3.style.animation = 'progress_btn_leave 1s ease-in';

        targetanim3.style.animationPlayState = 'running';
        targetanim3.style.animation = "btn3loop infinite 60s";


            setInterval(function() {


                if (current_amount >= 1500 && progress3check == false) {

                    progress4.style.animationPlayState = 'running';

                    progress3check = true;

                    remove_btn(3);
                }


            }, 500);

    });


    $(".progress4").click(function() {

        tutorialText.innerHTML = "Alright, it's time for the more advanced stuff: The POINTS MULTIPLIER!";

        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards ease-out');
        r.style.setProperty('--tutorial_top', 'initial');

        progress4.style.animation = 'progress_btn_leave 1s ease-in';

            setInterval(function() {

              
                if (progress4check == false) {

                    progress5.style.animationPlayState = 'running';

                    progress4check = true;

                    remove_btn(1);


                }


            }, 500);
        
    });

    $(".progress5").click(function() {

        tutorialText.innerHTML = "The Points Multiplier is the key to scoring BIG. To increase your Multiplier, interact with any of the circles for a while. But be careful - NOT INTERACTING with any of the buttons resets your multiplier, so try to keep your Score Multiplier REFRESHED, by briefly interacting with any of the buttons before the Refresh Period runs out.";
            
        readd_btn(1);


        targetanim1.style.animationPlayState = 'running';
        targetanim1.style.animation = "btn1loop infinite 15s";



        disableCombo = false;


        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards');

        progress5.style.animation = 'progress_btn_leave 1s ease-in';

            setInterval(function() {


                if (comboValue >= 3 && progress5check == false) {

                    progress6.style.animationPlayState = 'running';

                    progress5check = true;

                    remove_btn(1);
                }


            }, 500);
        
    });


    $(".progress6").click(function() {

        tutorialText.innerHTML = "Try to reach the Points Multiplier of x10. Remember to try and at least briefly interact with a circle about every single second, it may not increase the Multiplier but it's better to have it refreshed rather than completely reset to x1.";

        readd_btn(1);

        targetanim2.style.animation = "btn2loop infinite 20s";
        targetanim2.style.animationPlayState = 'running';
        targetanim2.style.pointerEvents = 'all';

        targetanim1.style.animation = "btn1loop infinite 15s"

        targetanim3.style.animation = "btn3loop infinite 60s";



        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards');

        progress6.style.animation = 'progress_btn_leave 1s ease-in';


            setInterval(function() {


                if (comboValue >= 10 && progress6check == false) {

                    progress7.style.animationPlayState = 'running';

                    progress6check = true;

                    remove_btn(4);
                    remove_btn(1);
                    remove_btn(2);
                    remove_btn(3);

                }


            }, 500);
        
    });


    $(".progress7").click(function() {

        targetanim4.style.opacity = '0%';


        tutorialText.innerHTML = "Great job! You really are getting the hang of this. Increasing your combo doesn't always need to require such good moves though, sometimes you can just WHALE on the Blue circle, which gives you +1 Multiplier on each CLICK!";

        targetanim4.style.animationPlayState = 'running';
        targetanim4.style.animation = "btn4loop infinite 25s";
        targetanim4.style.opacity = '100%';
        targetanim4.style.pointerEvents = "all";

        targetanim4box.style.animation = "container_movement 25s ease-in-out infinite";



        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards');

        progress7.style.animation = 'progress_btn_leave 1s ease-in';


            setInterval(function() {

             
                if (comboValue >= 5 && progress7check == false) {

                    progress8.style.animationPlayState = 'running';

                    progress7check = true;
                }


            }, 1000);
        
    });


    $(".progress8").click(function() {


        disableBar = false;

        r.style.setProperty('--meter_left_offset', '-14%');
        
        tutorialText.innerHTML = "Now it's getting real HOT in here... uh, anyway here's the MULTIMETER! Now this is where it gets seriously fast. Filling the Meter grants you +1 PERMANENT MULTIPLIER, alongside with 10000 points, multiplied by your current points multiplier AND your Permanent Multiplier, but there is a more DEADLY side to this thing as well.";


        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards');

        progress8.style.animation = 'progress_btn_leave 1s ease-in';


            setInterval(function() {


                if (progress8check == false) {

                    setTimeout(() => {

                        progress9.style.animationPlayState = 'running';
                        
                    }, 2000);

                    progress8check = true;
                }


            }, 500);
        
    });


    $(".progress9").click(function() {

        readd_btn(1);

        targetanim2.style.animation = "btn2loop infinite 20s";
        targetanim2.style.animationPlayState = 'running';
        targetanim2.style.pointerEvents = 'all';

        targetanim1.style.animation = "btn1loop infinite 15s"

        targetanim3.style.animation = "btn3loop infinite 60s";


        tutorialText.innerHTML = "Fill the Multimeter to proceed. Remember that in the actual game - The ENDLESS Mode, once you reach 1000000 score, the Bar will actually END YOUR (endless) GAME upon filling up, so learn to keep the meter from filling up completely.";


        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards');

        progress9.style.animation = 'progress_btn_leave 1s ease-in';


            setInterval(function() {


                if (permanent_multiplier_value >= 2 && progress9check == false) {

                    progress10.style.animationPlayState = 'running';

                    progress9check = true;
                }


            }, 500);
        
    });

    $(".progress10").click(function() {

        tutorialText.innerHTML = "Congratulations! You are now ready for the real deal, try finishing the TARGET SCORE mode now, as that will be a good basic scoring practice. Good luck!";


        r.style.setProperty('--tutorial_position', 'relative');
        r.style.setProperty('--tutorial_anim', 'comboAnim 2s forwards');

        progress10.style.animation = 'progress_btn_leave 1s ease-in';


            setInterval(function() {


                if (progress10check == false) {

                    var win_screen = document.getElementsByClassName('winstate')[0];
                    win_screen.innerHTML = "CONGRATULATIONS<br> You finished the introduction!";

                    winstate();

                    endscreen_triggered = true;

                    progress10check = true;
                }


            }, 500);
        
    });







    


}

)

var r = document.querySelector(':root');




function start_all() {
    
current_amount = 0;


document.querySelector(".info").style.top = '100%';
document.querySelector(".info").style.opacity = '0%';

document.querySelector(".title_top").style.opacity = '0%';
document.querySelector(".title_top").style.top = '-15%';



r.style.setProperty('--animstate', "running");

document.querySelector(".btns_container").style.animationPlayState = 'running';




$(function() {


    let playdelay = false;

    let intervalId;
    let isHovering = false;
    let debounceInterval = 50; // Debounce interval time in milliseconds


    // Track mouse movement over btn_2 to reset inactivityTime and trigger hover behavior
    $(".btn_2").mousemove(function() {

        checkScore();

        if (!isHovering) {
            isHovering = true;

            intervalId = setInterval(function() {
                current_amount += 3 * (comboValue * permanent_multiplier_value);
                update_score();

                if (endless_mode == true || disableBar == false) {
                    increase_bar();
            }           

                score_increase ="+" + 3 * (comboValue * permanent_multiplier_value);

                triggerCustomEffect();


                if (playdelay == false) {

                playdelay = true;

                const sound_click = new Audio("sounds/collect2.wav");
                sound_click.volume = 0.25;
                sound_click.play();

                setTimeout(function() {

                    playdelay = false;
                }, 100);



                }


                if (hoverTime < 5) {
                    hoverTime++;
                    handleHover(true);
                    
                }
            }, debounceInterval); // Debounce the interval start
        }
        resetInactivity();
    });




    $(".btn_2").mouseout(function() {


        checkScore();

        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isHovering = false;
        setTimeout(function(){hoverTime = 0;}, 50);
        handleHover(false);
        update_combo();


    },
    function() {

        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
        isHovering = false;
        setTimeout(function(){hoverTime = 0;}, 50);
        resetInactivity();
    
    });



    let startTime = null;
    let endTime = null;


    let timerInterval; // To store the interval ID
    let elapsedTime = 0; // To store the elapsed time


    function updateTimerDisplay(seconds) {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
      document.getElementById('timer_display').textContent = formattedTime;
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        elapsedTime++;
        updateTimerDisplay(elapsedTime);
      }, 1000);
    }

    function detailed_time() {
  
          hours = Math.floor(elapsedTime / 3600);
          minutes = Math.floor(elapsedTime / 60);
          seconds = Math.floor(elapsedTime) - minutes * 60;
          hundredths = elapsedTime % 100; };


    function stopTimer() {

            clearInterval(timerInterval);
            // Now `elapsedTime` contains the elapsed time in seconds
            console.log(`Elapsed Time: ${elapsedTime} seconds`);
      
            detailed_time();
      
            if (endless_mode == false) {

                var win_screen = document.getElementsByClassName('winstate')[0];
                win_screen.innerHTML = "You reached the target score of " + targetScore + " points in:<br>" + minutes + "m " + seconds + "s";    
                
            }


    }


    startTimer();

    

    function checkScore() {
        if (current_amount >= targetScore && normal_mode == true) {            
            
        

            if (endless_mode == false || disableBar == false) {
            winstate();
            stopTimer();

        }

        } else {
            console.log(`Current score: ${current_amount}`);
        }


    }



    // ...

   // Function to handle button hover
   function handleHover(isHoverStart) {
        if (isHoverStart) {
            hoverTime = Math.min(10, hoverTime + 1); // Increase hover time, max value is 5
        } else {
            setTimeout(function(){hoverTime = 0;}, 100);
        }
        resetInactivity(); // Reset inactivity when hovering changes
    }
    
    $(".btn_4").click(function() {
        resetInactivity()
        comboValue = comboValue + 1;
        
        update_score();

        checkScore();

        handleClick();

        update_combo();

        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/combo_increased.wav");
            sound_click.volume = 1;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 100);



            }


if (endless_mode == true || disableBar == false) {
        increase_bar_strong();
}



        score_increase = "Combo Increased!";

        triggerCustomEffect();


    });
    
    $(".btn_3").click(function() {
        resetInactivity()
        current_amount += parseInt($(this).text().replace("+", "") * (comboValue * permanent_multiplier_value));
        update_score();

        checkScore();

        handleClick();

        update_combo();


        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/collect1.wav");
            sound_click.volume = 0.25;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 100);



            }

        if (endless_mode == true || disableBar == false) {
            increase_bar_strong();
    }


        score_increase ="+" + 50 * (comboValue * permanent_multiplier_value);

        triggerCustomEffect();


    });

    $(".btn_1").hover(function() {
        resetInactivity()
        
        current_amount += parseInt($(this).text().replace("+", "") * (comboValue * permanent_multiplier_value));
        update_score();

        checkScore();

        handleClick();

        update_combo();

        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/btn_slash.wav");
            sound_click.volume = 0.5;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 50);



            }



        if (endless_mode == true || disableBar == false) {
            increase_bar();
    }


        score_increase ="+" + 15 * (comboValue * permanent_multiplier_value);

        triggerCustomEffect();

    });




    $("#onetimebtn_1").click(function() {
        resetInactivity();
        current_amount += 5000 * (comboValue * permanent_multiplier_value);
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn1 = document.getElementById("onetimebtn_1");
    
        // Add a class to the element to apply the override with transition
        onetimebtn1.classList.add("override-opacity");

        score_increase = 5000 * (comboValue * permanent_multiplier_value);

        triggerCustomEffect();

        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/collect3.wav");
            sound_click.volume = 0.25;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 100);



            }


        if (endless_mode == true || disableBar == false) {
            increase_bar_strong();
    }
    });

    $("#onetimebtn_2").click(function() {
        resetInactivity();
        current_amount += 5000 * (comboValue * permanent_multiplier_value);
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn2 = document.getElementById("onetimebtn_2");
    
        // Add a class to the element to apply the override with transition
        onetimebtn2.classList.add("override-opacity");

        score_increase = 5000 * (comboValue * permanent_multiplier_value);

        triggerCustomEffect();

        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/collect3.wav");
            sound_click.volume = 0.25;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 100);



            }



        if (endless_mode == true || disableBar == false) {
            increase_bar_strong();
    }
    });

    $("#onetimebtn_3").click(function() {
        resetInactivity();
        current_amount += 5000 * (comboValue * permanent_multiplier_value);
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn3 = document.getElementById("onetimebtn_3");
    
        // Add a class to the element to apply the override with transition
        onetimebtn3.classList.add("override-opacity");

        score_increase = 5000 * (comboValue * permanent_multiplier_value);

        triggerCustomEffect();

        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/collect3.wav");
            sound_click.volume = 0.25;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 100);



            }



        if (endless_mode == true || disableBar == false) {
            increase_bar_strong();
    }
    });


    $("#onetimebtn_4").click(function() {
        resetInactivity();
        current_amount += 5000 * (comboValue * permanent_multiplier_value);
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn4 = document.getElementById("onetimebtn_4");
    
        // Add a class to the element to apply the override with transition
        onetimebtn4.classList.add("override-opacity");

        score_increase = 5000 * (comboValue * permanent_multiplier_value);

        triggerCustomEffect();

        if (playdelay == false) {

            playdelay = true;

            const sound_click = new Audio("sounds/collect3.wav");
            sound_click.volume = 0.25;
            sound_click.play();

            setTimeout(function() {

                playdelay = false;
            }, 100);



            }



        if (endless_mode == true || disableBar == false) {
            increase_bar_strong();
    }
    });

    /*

    $("#onetimebtn_5").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn5 = document.getElementById("onetimebtn_5");
    
        // Add a class to the element to apply the override with transition
        onetimebtn5.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        if (endless_mode == true) {
            increase_bar_strong();
    }
    });


    $("#onetimebtn_6").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn6 = document.getElementById("onetimebtn_6");
    
        // Add a class to the element to apply the override with transition
        onetimebtn6.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        if (endless_mode == true) {
            increase_bar_strong();
    }
    });


    $("#onetimebtn_7").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn7 = document.getElementById("onetimebtn_7");
    
        // Add a class to the element to apply the override with transition
        onetimebtn7.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        if (endless_mode == true) {
            increase_bar_strong();
    }
    });


    $("#onetimebtn_8").click(function() {
        resetInactivity();
        current_amount += 5000 * comboValue;
        update_score();
    
        checkScore();
    
        handleClick();
        update_combo();
    
        var onetimebtn8 = document.getElementById("onetimebtn_8");
    
        // Add a class to the element to apply the override with transition
        onetimebtn8.classList.add("override-opacity");

        score_increase = 5000 * comboValue;

        triggerCustomEffect();

        if (endless_mode == true) {
            increase_bar_strong();
    }
    });

    */




    // Interval to check and update the combo



    combo_feedback_buffer = true;

    setInterval(() => {
    
        if (clickCount >= 5) {
            comboValue++;


            console.log("Combo increased! New comboValue:", comboValue);
            clickCount = 0; // Reset clickCount after reaching 5
            
            r.style.setProperty('--combo_increased', "0.5vw red solid");

            setTimeout(function(){r.style.setProperty('--combo_increased', "0vw black solid");}, 150);

            r.style.setProperty('--combo_fontsize', "2.5vw");


        } else if (clickCount > 0) {
            clickCount = 0; // Reset clickCount if clicked once
        }
    
        if (hoverTime >= 5) {
            comboValue++;
            console.log("Combo increased! New comboValue:", comboValue);

            setTimeout(function(){hoverTime = 0;}, 50);

            r.style.setProperty('--combo_increased', "0.5vw red solid");
            setTimeout(function(){r.style.setProperty('--combo_increased', "0vw black solid");}, 150);
        }

        if (comboValue >= 2) {

            combo_feedback_buffer = true;
        }
    
        if (inactivityTime >= 1 && comboValue > 0) {

            comboValue = 1;

            
            setTimeout(function(){

                if (comboValue == 1 && combo_feedback_buffer == true && disableCombo == false) {
                    const sound_click = new Audio("sounds/combo_reset.wav");
                    sound_click.volume = 1;
                    sound_click.play();

                    combo_feedback_buffer = false;

                    }
    
                }, 100);
    
            console.log("Combo reset!");
            inactivityTime = 1; // Reset inactivityTime

            r.style.setProperty('--combo_fontsize', "2vw");

            r.style.setProperty('--combo_fontcolor', "red");

            setTimeout(function(){r.style.setProperty('--combo_fontcolor', "black")}, 200);

        } else if (hoverTime === 0 && clickCount === 0) {
            inactivityTime++;
        }
    
        update_combo(); // Update combo display value

        var comboDisplay = document.getElementsByClassName('combo_display')[0];
        comboDisplay.innerHTML = "x" + comboValue;


        // Add animation class
        comboDisplay.classList.add('animate_combo');

        // Remove animation class after a delay
        setTimeout(function() {
            comboDisplay.classList.remove('animate_combo');

        }, 250);
    
    }, 1000);

    // Function to handle button click
    function handleClick() {
        
        clickCount++;
        inactivityTime = 0; // Reset inactivityTime when interaction occurs
    }

    // Function to update combo display
    function update_combo() {

        if (disableCombo == false) {

        var comboDisplay = document.getElementsByClassName('combo_display')[0];
        comboDisplay.innerHTML = "x" + comboValue;

        }
    }

function resetInactivity() {
    inactivityTime = 0; // Reset inactivityTime when interaction occurs
}










function onetimebtnClickHandler(event) {
    resetInactivity();
    current_amount += 5000 * (comboValue * permanent_multiplier_value);
    update_score();

    checkScore();

    handleClick();
    update_combo();

    var onetimebtn = event.currentTarget;

    // Add a class to the element to apply the override with transition
    onetimebtn.classList.add("override-opacity");

    score_increase = 5000 * (comboValue * permanent_multiplier_value);

    triggerCustomEffect();

    if (endless_mode == true || disableBar == false) {
        increase_bar_strong();
    }
}

function createButtonsAndAttachListeners() {
    const parentElement = document.getElementById('reset_target'); // Replace with your parent element's ID
    const elementsToReset = ['onetimebtn_1', 'onetimebtn_2', 'onetimebtn_3', 'onetimebtn_4'];

    // Remove elements from the parent
    elementsToReset.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            parentElement.removeChild(element);
        }
    });

    // Re-add elements
    elementsToReset.forEach(id => {
        const newElement = document.createElement('div');
        newElement.id = id;
        newElement.className = 'onetimebtn'; // Add the class
        parentElement.appendChild(newElement);
    });

    // Attach event listeners
    $("#reset_target").off("click", ".onetimebtn");
    $("#reset_target").on("click", ".onetimebtn", onetimebtnClickHandler);
}

setInterval(() => {
    createButtonsAndAttachListeners();
}, 110000);















});






function change_btn_offset_left() {
r.style.setProperty('--left_mod', offset_left);
}

function change_btn_offset_top() {
r.style.setProperty('--top_mod', offset_top);

}

function change_btn_offset_rotate() {
r.style.setProperty('--rotate_mod', offset_rotate);

}

function fix_btn_offset_rotate() {
r.style.setProperty('--rotate_fix', "-" + offset_rotate);
    
    }

function change_btn_offset_scale() {
r.style.setProperty('--scale_mod', offset_scale);

}

function randomizemod1() {

    setTimeout(() => {
        

    if (tutorial == false) {
    
    fix_btn_offset_rotate();
    change_btn_offset_rotate();

    change_btn_offset_left();

    change_btn_offset_top();

    change_btn_offset_scale();

    }

}, 200);

}

function randomizemod2() {

    setTimeout(() => {
        

    if (tutorial == false) {


        r.style.setProperty('--left_mod2', offset_left2);
        
        

        r.style.setProperty('--top_mod2', offset_top2);
        
        
        
        r.style.setProperty('--rotate_mod2', offset_rotate2);



        r.style.setProperty('--rotate_fix2', "-" + offset_rotate2);
        
        
        
        r.style.setProperty('--scale_mod2', offset_scale2);


    }

}, 200);
    
}


function randomizemod3() {

    setTimeout(() => {
        

if (tutorial == false) {

    r.style.setProperty('--left_mod3', offset_left3);
    
    

    r.style.setProperty('--top_mod3', offset_top3);
    
    
    
    r.style.setProperty('--rotate_mod3', offset_rotate3);
    
    
    
    r.style.setProperty('--rotate_fix3', "-" + offset_rotate3);
        
    
    
    r.style.setProperty('--scale_mod3', offset_scale3);

    }

}, 200);

}


function randomizemod4() {

    setTimeout(() => {
        

if (tutorial == false) {

    r.style.setProperty('--left_mod4', offset_left4);
    
    

    r.style.setProperty('--top_mod4', offset_top4);
    
    
    
    r.style.setProperty('--rotate_mod4', offset_rotate4);
    
    
    
    r.style.setProperty('--rotate_fix4', "-" + offset_rotate4);
        
    
    
    r.style.setProperty('--scale_mod4', offset_scale4);

    }

}, 200);

}



function randomizemodvalues() {

offset_rotate = Math.floor((Math.random() * 500) + 1) + "deg";
offset_scale = Math.max(Math.min(Math.floor((Math.random() * 200) + 1), 180), 40) + "%";
offset_left = Math.floor((Math.random() * 10) + 1) + "%";
offset_top = Math.floor((Math.random() * 10) + 1) + "%";

}

function randomizemodvaluesmod2() {

    offset_rotate2 = Math.floor((Math.random() * 200) + 1) + "deg";
    offset_scale2 = Math.max(Math.min(Math.floor((Math.random() * 180) + 1 - 90), 180), 60) + "%";
    offset_left2 = Math.floor((Math.random() * 101) - 50) + "%";
    offset_top2 = Math.floor((Math.random() * 151) - 50) + "%";
    
    }

    function randomizemodvaluesmod3() {

        offset_rotate3 = Math.floor((Math.random() * 200) + 1) + "deg";
        offset_scale3 = Math.max(Math.min(Math.floor((Math.random() * 300) + 1 - 50), 150), 40) + "%";
        offset_left3 = Math.floor((Math.random() * 101) - 50) + "%";
        offset_top3 = Math.floor((Math.random() * 101) - 50) + "%";
        
        }

        function randomizemodvaluesmod4() {

            offset_rotate4 = Math.floor((Math.random() * 500) + 1) + "deg";
            offset_scale4 = Math.max(Math.min(Math.floor((Math.random() * 300) + 1 - 100), 150), 60) + "%";
            offset_left4 = Math.floor((Math.random() * 101) -50) + "%";
            offset_top4 = Math.floor((Math.random() * 101) -50) + "%";
            
            }

function reroll_mod2() {

    if (tutorial == false) {

        randomizemodvaluesmod2();
        randomizemod2();

    }

        }
    setInterval(reroll_mod2, 20000);


    
function reroll_mod3() {

   
    if (tutorial == false) {

        randomizemodvaluesmod3();
        randomizemod3();

    }

        }
        setInterval(reroll_mod3, 45000);
        reroll_mod3();

    
function reroll_mod4() {

    setTimeout(() => {

        if (tutorial == false) {
                
            randomizemodvaluesmod4();
            randomizemod4();
        }
        
    }, 200);


    }


        setTimeout(() => {

            if (tutorial == false) {

                setInterval(reroll_mod4, 25000);
                reroll_mod4();    
                
            }

        }, 100);
        








let animdelay_mod = "0s";
let animdelay_mod_pure = 0;

    function reroll_delay() {
    animdelay_mod_pure = Math.floor(Math.random() * 10000) + 1, 700;
    
    }
    
    function convert_delay() {
    animdelay_mod = animdelay_mod_pure + "s";
    
    }

    let iteration = 0;
    let offset_rotate3pure = 0

    function rotate_smooth(iteration = 0) {

    
        if (iteration < 500) {
            offset_rotate3pure += 1; // Increase the rotation value by 1 degree
            offset_rotate3 = offset_rotate3pure + "deg";
            r.style.setProperty('--rotate_mod3', offset_rotate3);
            console.log(offset_rotate3);
    
            setTimeout(() => {
                rotate_smooth(iteration + 1);
            }, 50); // Adjust the delay time in milliseconds
        }

   
    }

let running;

function check_anim_state() {
running = document.querySelector(".btn_1").style.animationPlayState === 'running';

}

function change_state_yes() {

document.querySelector(".btn_1").style.animationPlayState = 'running';

}

function change_state_no() {

document.querySelector(".btn_1").style.animationPlayState = 'paused';
    
}

    
function update_anim_time() {
    
    r.style.setProperty('--anim_time', anim_time_converted + "s");
}


function reroll_anim_time() {
    anim_time = Math.floor(Math.random() * 20000) + 1;
    
}

function convert_anim_time() {
    anim_time_converted = anim_time * 1/1000;

}

let anim_time = 15000;
let anim_time_converted = anim_time * 1/1000 + "s";





let anim_speed_mod = 1; // Initial speed modifier
let baseAnimationDuration = 15000; // Base animation duration in milliseconds

function reroll_anim_speed_mod() {
    anim_speed_mod = Math.floor(Math.random() * 2) + 1;
    console.log("Current anim speed mod:", anim_speed_mod);
}

function updateAnimation() {

    if (tutorial == false) {
        
    

    randomizemodvalues();
    randomizemod1();
    reroll_anim_speed_mod();
  
    const elements = document.querySelectorAll(".btn_1, .btn1shadow, .btn1shadow2, .btn1shadow3");
  
    // Calculate the new animation duration by dividing the base duration by the animation speed modifier
    const newAnimationDuration = baseAnimationDuration / anim_speed_mod;
  
    // Loop through each selected element and update its animation duration using the style property
    elements.forEach(element => {
      element.style.animationDuration = `${newAnimationDuration}ms`;
    });
  
    console.log(newAnimationDuration);

    }
  }
  
  // Initial call to start the animation loop
  setInterval(updateAnimation, baseAnimationDuration / anim_speed_mod);










obstacle_loop();


const sound_meter_filled = new Audio("sounds/bar_filled.wav");

const feverElement = document.querySelector(".fever");
const fevercover = document.querySelector(".fevermeter_cover");

const fevertext1 = document.querySelector(".multiplied_text");
const fevertext2 = document.querySelector(".multiplied_text_right");


let decreaseTimeout;


var isActive = false;




function fever_filled_anim() {

    feverElement.style.transitionDuration = "0s";
    feverElement.style.height = "25%";


    
    fevercover.style.animation = "fever_cover_effect 1s ease-out";

    
    sound_meter_filled.play();

    setTimeout(function() {

        fevercover.style.animation = "none";

    }, 1000)


    fevertext1.style.animation = "multiplied_text forwards 2s";
    fevertext2.style.animation = "multiplied_text_right forwards 2s 0.5s";

    setTimeout(function() {

        fevertext1.style.animation = "none";
        fevertext2.style.animation = "none";

    }, 2000);

}






    function update_score() {
        var scoreDisplay = document.getElementsByClassName('score_display')[0];
        scoreDisplay.innerHTML = current_amount;

        // Add animation class
        scoreDisplay.classList.add('animate_score');

        // Remove animation class after a delay
        setTimeout(function() {
            scoreDisplay.classList.remove('animate_score');
        }, 25);


        if (current_amount >= 1000000 && isActive == false && endless_mode == true) {
        
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            let meterDeadlyLoopSource;
            
            // Create a GainNode and set the gain to 0.5
            const gainNode = audioContext.createGain();
            gainNode.gain.value = 0.5;
            
            // Load the looping audio file
            fetch('sounds/meter_deadly_loop.wav')
              .then(response => response.arrayBuffer())
              .then(buffer => {
                audioContext.decodeAudioData(buffer, decodedBuffer => {
                  // Create a buffer source node
                  meterDeadlyLoopSource = audioContext.createBufferSource();
                  meterDeadlyLoopSource.buffer = decodedBuffer;
                  meterDeadlyLoopSource.loop = true;
                  meterDeadlyLoopSource.playbackRate.value = 1; // Set playback rate to half speed

            
                  // Connect the source node to the gain node
                  meterDeadlyLoopSource.connect(gainNode);
            
                  // Connect the gain node to the destination (output)
                  gainNode.connect(audioContext.destination);
            
                  // Start the audio immediately to preload it
                  meterDeadlyLoopSource.start(0);
                });
              });
        
            isActive = true;
            
        
        }


            if (current_amount >= 1000000 && current_amount < 1000000000) {

                r.style.setProperty('--variable_width', '12vw');

        }

            else if (current_amount >= 1000000000) {

                r.style.setProperty('--variable_width', '16vw');

        }




    }



function increase_bar() {
  
  feverElement.style.transitionDuration = "5s"; // Set transition duration to 0 to instantly grow

  feverElement.style.height = "100%";

  clearTimeout(decreaseTimeout); // Clear any ongoing decrease animation
  decreaseTimeout = setTimeout(() => {

    feverElement.style.transitionDuration = "7.5s"; // Set transition duration to 0 to instantly grow

    decrease_bar(); // Start decrease animation after a delay

  }, 300);
}

function decrease_bar() {

  feverElement.style.height = "0";



};


var endscreen_triggered = false;


function check_barpos() {

    if (current_amount >= 1000000) {

        setTimeout(() => {

            enable_deadly_check = true
        
            
        }, 500);
         
        }
setTimeout(() => {

    permanent_applyBuffer = true;

    
}, 50);


    if (current_amount >= 1000000) {

        r.style.setProperty("--skull_opacity", "100%");

        }
    
    if (feverElement.offsetHeight === 0) {

        if (current_amount > 1000000 && endscreen_triggered == false) {

            endscreen_triggered = true;

            setTimeout(function(){var win_screen = document.getElementsByClassName('winstate')[0];
            win_screen.innerHTML = "MULTIMETER EMPTIED!<br>" + "The final score is:<br>" + current_amount + " !";

            update_score();
            winstate();

            permanent_display.style.opacity = "0%";

            const permanent_skull = document.getElementsByClassName('permanent_skull')[0];
            permanent_skull.style.opacity = "0%";

            const permanent_bg = document.getElementsByClassName('permanent_bg')[0];
            permanent_bg.style.opacity = "0%";
    
            const scoreContainer = document.getElementsByClassName('score_container')[0];
            scoreContainer.style.opacity = "0%";
    

        }, 400);
    
            }


    } else if (Math.abs(feverElement.offsetHeight - feverElement.parentElement.offsetHeight) < 1) {

        fever_filled_anim();

        deadly_check();
            


        if (permanent_applyBuffer == true) {

            permanent_applyBuffer = false;

        }
     
        setTimeout(() => {

            if (permanent_applyBuffer == true) {

                current_amount += 10000 * (comboValue * permanent_multiplier_value);

                permanent_multiplier_value ++;
                permanent_display.innerHTML = "x" + permanent_multiplier_value;
        
                permanent_applyBuffer = false;

        
    }
            
        }, 100);


    }
}

setInterval(() => {

    console.log(permanent_multiplier_value)
    
}, 50);
        

setInterval(function() {
    
    if (endless_mode == true || disableBar == false) {
        
        check_barpos();


    }
    
    
    }, 250);





function increase_bar_strong() {
  
    feverElement.style.transitionDuration = "2.5s"; // Set transition duration to 0 to instantly grow
  
    feverElement.style.height = "100%";
  
    clearTimeout(decreaseTimeout); // Clear any ongoing decrease animation
    decreaseTimeout = setTimeout(() => {
  
      feverElement.style.transitionDuration = "7.5s"; // Set transition duration to 0 to instantly grow
  
      decrease_bar(); // Start decrease animation after a delay
  
    }, 450);
  }


  function deadly_check() {

        if (enable_deadly_check == true && current_amount > 1000000 && endscreen_triggered == false) {
    
            setTimeout(() => {

        var win_screen = document.getElementsByClassName('winstate')[0];
        win_screen.innerHTML = "MULTIMETER OVERFLOW!<br>" + "The final score is:<br>" + current_amount + " !";

        update_score();
        winstate();


        endscreen_triggered = true;

        permanent_display.style.opacity = "0%";

        const permanent_skull = document.getElementsByClassName('permanent_skull')[0];
        permanent_skull.style.opacity = "0%";

        const permanent_bg = document.getElementsByClassName('permanent_bg')[0];
        permanent_bg.style.opacity = "0%";

        const scoreContainer = document.getElementsByClassName('score_container')[0];
        scoreContainer.style.opacity = "0%";

        
        }, 200);
        
    }
            
  }
  




}











const failtext = document.querySelector('.failstate');




function failstate(){

r.style.setProperty("--failstate_opacity", "80%");
r.style.setProperty("--endscreen_pointerblock", "all");

endscreen_triggered = true;

const ender_btn = document.querySelector(".ender_btn");
ender_btn.style.animationPlayState = "running";

fadeout();



if (endless_mode == true || disableBar == false) {

    failtext.innerHTML = "OBSTACLE HIT!<br>" + "The final score is: " + current_amount + " !";


}

}



function winstate(){

r.style.setProperty("--winstate_opacity", "80%");
r.style.setProperty("--endscreen_pointerblock", "all");

const ender_btn = document.querySelector(".ender_btn");
ender_btn.style.animationPlayState = "running";

fadeout();

}





$(".rectangle_shape").mouseenter(function() {
    failstate();
});

$(".circle_shape").mouseenter(function() {
    failstate();
});

$(".rectangle_shape").mouseleave(function() {
    failstate();
});

$(".circle_shape").mouseleave(function() {
    failstate();
});





var div = $('.btns_container');
var width = div.width() * (100 / 100);
div.css('height', width);

setInterval(oneSecondFunction, 200);

function oneSecondFunction() {
    var div = $('.btns_container');
    var width = div.width() * (50 / 100);
    div.css('height', width);
}




const score_feedback = document.getElementById('score_feedback');
const animationBoxTemplate = document.querySelector('.animation-box');

let mouseX = 0;
let mouseY = 0;

document.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function triggerCustomEffect() {
    const newAnimationBox = animationBoxTemplate.cloneNode(true);

    // Generate random displacement values between -10 and 10 pixels
    const displacementX = getRandomValue(-50, 50);
    const displacementY = getRandomValue(-50, 50);

    newAnimationBox.style.left = mouseX + displacementX + 'px';
    newAnimationBox.style.top = mouseY + displacementY + 'px';

    // Set the text inside the animation box
    const variableText = score_increase;
    newAnimationBox.innerText = variableText;

    score_feedback.appendChild(newAnimationBox);

    // Start the animation by adding the 'animate' class
    newAnimationBox.classList.add('animate');

    // Remove the animation box after the animation is done
    newAnimationBox.addEventListener('animationend', () => {
        score_feedback.removeChild(newAnimationBox);
    });
}

// Function to generate a random value between min and max
function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
}





$(".ender_btn").click(function() {

    location.reload();
    
});















