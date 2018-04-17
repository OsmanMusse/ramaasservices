

    let nav = document.querySelector(".navigation-orientation");

    $(nav).sticky({
   zIndex: 100000,
    })


    $(nav).on("sticky-start",function(){
     nav.style.top = "100";
      console.log("Done");
    });

    $(nav).on("sticky-end", function(){
     nav.style.backgroundColor = "rgba(107, 190, 152, 0.9)";
    });
