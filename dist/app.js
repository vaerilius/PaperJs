  
    var circles = [];
    function onKeyDown(event) {

      var newCircle =  new Path.Circle(new Point( Math.random() * view.size.width, Math.random() * view.size.height), 200);
       newCircle.fillColor = "blue";
       circles.push(newCircle);
    }

    function onFrame(event) {
      
      for(var i = 0; i < circles.length; i++) {
        circles[i].fillColor.hue += 1;
        circles[i].scale(0.97);
      }

    }