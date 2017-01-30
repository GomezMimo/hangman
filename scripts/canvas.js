$(document).ready(function() {
    //HEAD part
    var canvasHead = document.getElementById('hangman-head');
    var contextHead = canvasHead.getContext('2d');
    var centerX = canvasHead.width / 2;
    var centerY = canvasHead.height / 3;
    var radius = 70;
    contextHead.beginPath();
    contextHead.arc(centerX, 77, radius, 0, 2 * Math.PI, true);
    contextHead.fillStyle = '#CCC';
    contextHead.fill();
    contextHead.lineWidth = 5;
    contextHead.strokeStyle = '#000';
    contextHead.stroke();

    //Body part
    var canvasBody = document.getElementById("hangman-body");
    var contextBody = canvasBody.getContext("2d");
    contextBody.moveTo(150, 0);
    contextBody.lineTo(150, 200);
    contextBody.lineWidth = 5;
    contextBody.stroke();

    //Right Arm part
    var canvasArmRight = document.getElementById("hangman-rightArm");
    var contextArmRight = canvasArmRight.getContext("2d");
    contextArmRight.moveTo(50, 0);
    contextArmRight.lineTo(68, 50);
    contextArmRight.lineWidth = 2;
    contextArmRight.stroke();

    //Left Arm part
    var canvasArmLeft = document.getElementById("hangman-leftArm");
    var contextArmLeft = canvasArmLeft.getContext("2d");
    contextArmLeft.moveTo(30, 52);
    contextArmLeft.lineTo(50, 0);
    contextArmLeft.lineWidth = 2;    
    contextArmLeft.stroke();

    //Right Leg part
    var canvasLegRight = document.getElementById("hangman-rightLeg");
    var contextLegRight = canvasLegRight.getContext("2d");
    contextLegRight.moveTo(50, 45);
    contextLegRight.lineTo(68,100);
    contextLegRight.lineWidth = 2;    
    contextLegRight.stroke();

    //Left Leg part
    var canvasLegLeft = document.getElementById("hangman-leftLeg");
    var contextLegLeft = canvasLegLeft.getContext("2d");
    contextLegLeft.moveTo(50, 45);
    contextLegLeft.lineTo(32, 100);
    contextLegLeft.lineWidth = 2;    
    contextLegLeft.stroke();

    //Rope part
    var canvasRope = document.getElementById("rope");
    var contextRope = canvasRope.getContext("2d");
    contextRope.moveTo(0, 20);
    contextRope.lineTo(0, 0);
    contextRope.lineWidth = 15;  
    contextRope.strokeStyle = "red";  
    contextRope.stroke();
    //horizontal rope part
    contextRope.moveTo(0, 0);
    contextRope.lineTo(200, 0);
    contextRope.lineWidth = 15;      
    contextRope.stroke();
    //vertical rope part
    contextRope.moveTo(200, 0);
    contextRope.lineTo(200, 300);
    contextRope.lineWidth = 15;      
    contextRope.stroke();
});