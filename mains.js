var mouseEvent = "empty"; 

var last_position_of_x, last_position_of_y; 

canvas = document.getElementById('myCanvas'); 

ctx = canvas.getContext("2d"); color = "black"; 

width_of_line = 1; canvas.addEventListener("mousedown", my_mousedown); 

ctx.beginPath(); 

ctx.strokeStyle = color; ctx.lineWidth = 2; 

ctx.arc(200, 200, 40 ,0 ,2*Math.PI ); 

ctx.stroke(); 


function my_mousedown(e) 
{ 
    color = document.getElementById("color").value;

 width_of_line = document.getElementById("wotl").value;

  mouseEvent = "mousedown";
 }

canvas.addEventListener("mouseup", my_mouseup); 

function my_mouseup(e) { mouseEvent = "mouseup"; } 

canvas.addEventListener("mouseleave", my_mouseleave); 

function my_mouseleave(e) { mouseEvent = "mouseleave"; }


canvas.addEventListener("mousemove", my_mousemove); 

function my_mousemove(e) 
{ current_position_of_mouse_x = e.clientX - canvas.offsetLeft; 

    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") { ctx.beginPath(); 

        ctx.strokeStyle = color; 

        ctx.lineWidth = width_of_line; 

        console.log("Last position of x and y coordinates = "); 

        console.log("x = " + last_position_of_x + "y = " + last_position_of_y); 

        ctx.moveTo(last_position_of_x, last_position_of_y);

        circle(mouse_x , mouse_y);

    console.log("Current position of x and y coordinates = "); 

    console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y); 

    ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y); 
    
    ctx.stroke(); } 

    last_position_of_x = current_position_of_mouse_x; 

    last_position_of_y = current_position_of_mouse_y; }
    
    function clearArea()

     { 
         ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        
    }

    function circle(mouse_x , mouse_y) { 
        
        ctx.beginPath(); 
        
        ctx.strokeStyle = color; 
        
        ctx.lineWidth = 2; 
        
        ctx.arc(mouse_x, mouse_y, 40 ,0 , 2*Math.PI); 

        ctx.stroke(); 
    }