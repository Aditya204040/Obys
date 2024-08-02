function AnimationLoader(){
    const count = document.querySelector("#counter");
    const tl = gsap.timeline();
    tl.from(".line h1,.line p,.line div",{
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
        delay:2
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

    tl.from("#nav",{
        opacity:0
    })
    tl.from(".hero h1,#hero-web",{
        y:120,
        stagger:0.2
    })
}
function animation(){
    document.addEventListener("mousemove",function(details){
        gsap.to("#cursor",{
            left:details.x,
            top:details.y
        })
    })
    Shery.makeMagnet("#navPart2 h4");
}
AnimationLoader();
animation();