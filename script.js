function AnimationLoader(){
    const count = document.querySelector("#counter");
    const tl = gsap.timeline();
    tl.from(".line h1",{
        y:150,
        stagger:0.2,
        duration:0.6,
        delay:0.5
    });

    tl.from(".line-one, #now",{
        opacity:0,
        onStart:function(){
            var counter=0;
            setInterval(function(){
                if(counter<100){
                    count.innerHTML = counter++;
                }
                else{
                    count.innerHTML = 100;
                }

            },35);
                }
    });

    tl.to('.line-one h2',{
        animationName:"anime",
        opacity:1
    });

    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:4
    });

    tl.from("#page1",{
        delay:0.2,
        y:1200,
        opacity:0,
        duration:0.5,
        ease:Power4
    });

    tl.to("#loader",{
        display:"none"
    });
}

AnimationLoader();