    $(function() {
         //雪花
    var flakeColor = "#fff"; //雪花的颜色
    var newOn = 200; //间隔多长时间产生一个雪花
    var flake = $("<div></div>").css("position", "absolute").html('<img src= "image/snow.png">');
        setInterval(function() {
            var documentWidth = $(document).width(); //获取浏览器的宽度
            var documentHeight = $(document).height();
            var startLeft = Math.random() * documentWidth; //雪花开始时距离浏览器的left
            var endLeft = Math.random() * documentWidth; //雪花下落后距离浏览器的left
            var flakeSize = Math.random() * 5; //雪花随机的大小
            var startOpacity = 0.7 + 0.3 * Math.random() //雪花一开始的透明度
            var endOpacity = 0.4 + 0.3 * Math.random() //雪花下落后的透明度
            var durationTime = 4000 + 6000 * Math.random() //雪花下落的时间
            flake.clone().appendTo($("body")).css({
                "left": startLeft,
                "color": flakeColor,
                "top": "-55px",
                "width": flakeSize + "%",
                "opacity": startOpacity
            }).animate({
                "left": endLeft,
                "top": documentHeight,
                "opacity": startOpacity
            }, durationTime, function() {
                $(this).remove();
            });
        }, newOn);
    })