angular.module("boxes-app", [])
    .controller("BoxController", function(){
        var bc = this;
        
        bc.blueBox = {
            size: 50,
            top: 100,
            left: 50,
        }
        
        bc.greenBox = {
            max: 500-bc.blueBox.size,
            min: 0
        }
       
        
        // bc.blueBoxSize = 50;
        // bc.top = 100;
        // bc.left = 50;
        // bc.max = 500-bc.blueBox.size;
        // bc.min = 0;
        
        bc.embiggen = function(){
            bc.blueBox.size +=5;
            console.log(bc.greenBox.max)
            bc.greenBox.max -=5;
        }
        
        bc.keyPressed = function(event){
            console.log(event);
            var key = event.keyCode;
            
            
            if (key === 119){
                if (bc.blueBox.top <= bc.greenBox.min){
                    return;
                }
                bc.blueBox.top -= 10;
            }
            else if (key === 115){
                if (bc.blueBox.top >= bc.greenBox.max){
                    return;
                }
                bc.blueBox.top += 10;
            }
            else if (key === 97){
                if (bc.blueBox.left <= bc.greenBox.min){
                    return;
                }
                bc.blueBox.left -= 10;
            }
            else if (key === 100){
                if (bc.blueBox.left >= bc.greenBox.max){
                    return;
                }
                bc.blueBox.left += 10;
            }
            else if (key === 98) {
                bc.embiggen();
            }
           
        };
    })