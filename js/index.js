$(document).ready(function(){

  $(window).scroll(function(){

    let pos = $(window).scrollTop();

    if(pos>50){
      $("header, .btn-top").addClass("active");
    }else{
      $("header, .btn-top").removeClass("active");
    };
  });

  $(".gnb").hover(function(){
    $(this).find(".main .sub_all").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },function(){
    $(this).find(".main .sub_all").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });


    let $img = $(".changeimg ul li");
    let $lbtn = $(".side_btn .lbtn");
    let $rbtn = $(".side_btn .rbtn");
    let oldidx = 0;  
    let idx = 0; 
    let img_n = $img.length; 
  
    function changeImg(idx){ 
  
      if(oldidx != idx){
        $img.eq(oldidx).stop().fadeOut("300");
        $img.eq(idx).stop().fadeIn("300");
  
      }
      oldidx = idx; 
  
    };
  
    function changeAuto(){
      
      idx++;
      
      if(idx > img_n-1){  
        idx=0;
      }
  
      changeImg(idx); 
  
    }
    timer = setInterval(changeAuto,4000); 
  
    /* 좌우버튼 */
    $lbtn.click(function(){
      clearInterval(timer);
  
      idx--;
      if(idx < 0){ 
        idx=img_n-1;
      }
  
      changeImg(idx);
  
      timer = setInterval(changeAuto,4000);
    });
  
  
    $rbtn.click(function(){
      clearInterval(timer);
  
      idx++;
      if(idx > img_n-1){
        idx=0;
      }
  
      changeImg(idx);
  
      timer = setInterval(changeAuto,4000);
    });

    /* content1 tabmenu Js */
    
    $(".con1_menubtn span:nth-child(2)").click(function(){

      $(".item_box1 li").stop().hide();
      $(".item_box2 li").stop().show();
      $(".con1_menubtn span:nth-child(2)").addClass("active");
      $(".con1_menubtn span:nth-child(1)").removeClass("active");

    });
    $(".con1_menubtn span:nth-child(1)").click(function(){

      $(".item_box2 li").stop().hide();
      $(".item_box1 li").stop().show();
      $(".con1_menubtn span:nth-child(1)").addClass("active");
      $(".con1_menubtn span:nth-child(2)").removeClass("active");

    });
  
    $(".btn li").click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
  
      let result = $(this).attr("data-alt");
      $(".tabContents div").removeClass("active");
      $("#"+result).addClass("active").hide().fadeIn();
    });



    $(".title").click(function(){

    $(this).siblings().removeClass("active"); 
    $(this).toggleClass("active"); 
    $(this).siblings(".desc").stop().slideUp(); 
    $(this).next().stop().slideToggle(); 

  });

  $(".cont4_item2 img:nth-child(1)").stop().show();
  $(".cont4_leftBox .cont4_item1:nth-of-type(2)").click(function(){

    $(".cont4_item2 img:nth-child(1)").stop().hide();
    $(".cont4_item2 img:nth-child(2)").stop().show();
    $(".cont4_leftBox .cont4_item1:nth-of-type(2)").addClass("active");
    $(".cont4_leftBox .cont4_item1:nth-of-type(1)").removeClass("active");

  });
  $(".cont4_leftBox .cont4_item1:nth-of-type(1)").click(function(){

    $(".cont4_item2 img:nth-child(2)").stop().hide();
    $(".cont4_item2 img:nth-child(1)").stop().show();
    $(".cont4_leftBox .cont4_item1:nth-of-type(1)").addClass("active");
    $(".cont4_leftBox .cont4_item1:nth-of-type(2)").removeClass("active");

  });



  //막대배너 js
  function bannerAuto(){
    $(".ban ul").stop(true,true).animate({marginLeft:"-=218px"},600,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");
      $(this).css({marginLeft:"0px"});
    });
  };
  bauto=setInterval(bannerAuto,4000);

  $(".ban_btn .ban_right").click(function(){

    $(".play").hide();
    $(".stop").show();

    clearInterval(bauto);
    
    $(".ban ul").stop(true,true).animate({marginLeft:"-=218px"},600,function(){
      $(".ban ul li:first-child").appendTo(".ban ul");  
      $(this).css({marginLeft:"0px"});  
    });
    bauto=setInterval(bannerAuto,4000);
  });


  $(".ban_btn .ban_left").click(function(){

    $(".play").hide();
    $(".stop").show();

    clearInterval(bauto);
    
    $(".ban ul").stop(true,true).animate({marginLeft:"218px"},600,function(){
      $(".ban ul li:last-child").prependTo(".ban ul");  
      $(this).css({marginLeft:"0px"});
    });
    bauto=setInterval(bannerAuto,4000);
  });

  $(".play").hide(); 

  $(".stop").click(function(){
    clearInterval(bauto);
    $(".stop").hide();
    $(".play").show();
  });
  $(".play").click(function(){
    bauto = setInterval(bannerAuto,4000);
    $(".play").hide();
    $(".stop").show();
  });


  //site map js
  chk1 =true;
  $(".s1").click(function(){

    $(".m1").stop().slideToggle();
    $(this).toggleClass("active");
    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });
  chk2 =true;
  $(".s2").click(function(){

    $(".m2").stop().slideToggle();
    $(this).toggleClass("active");
    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });
  chk1 =true;
  $(".s3").click(function(){

    $(".m3").stop().slideToggle();
    $(this).toggleClass("active");
    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });
  chk1 =true;
  $(".s4").click(function(){

    $(".m4").stop().slideToggle();
    $(this).toggleClass("active");
    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });
  chk1 =true;
  $(".s5").click(function(){

    $(".m5").stop().slideToggle();
    $(this).toggleClass("active");
    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });
  chk1 =true;
  $(".s6").click(function(){

    $(".m6").stop().slideToggle();
    $(this).toggleClass("active");
    if(chk1){
      $(this).find("span").html("<i class='fa fa-chevron-down'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=false;
    }else{
      $(this).find("span").html("<i class='fa fa-chevron-up'></i>");
      $(this).find("h3").css({"opacity":"1"});
      chk1=true;
    }
  });


  
  });
