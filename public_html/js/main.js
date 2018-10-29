/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var images = [
    "img/biber.jpeg",
    "img/hampster.jpeg",
    "img/mouse.jpeg",
    "img/possum.jpeg",
    "img/raccoon.jpeg"
];

function allocateImage(i) {
    var image = images[i];
    document.getElementById("animal").src=image;
}