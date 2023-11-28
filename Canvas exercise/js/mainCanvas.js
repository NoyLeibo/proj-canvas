'use strict'

var gElCanvas
var gCtx
var gSelectedShape
var gSelectedColor = 'black'

function onInit(){
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    gSelectedShape = 'Square'

    gCtx.fillStyle = 'white'
    gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function onColor(ev){
    gSelectedColor = ev.target.value
}

function onOption(ev){
    gSelectedShape = ev.target.value
    console.log(gSelectedShape);
}

function onMouseMove({ offsetX, offsetY}){
    onDraw({ offsetX, offsetY })
}

function onDraw({ offsetX, offsetY }) {
    switch (gSelectedShape){
        case "Square":
            drawSquare({ offsetX, offsetY })
            break
        case "Circle":
            drawCircle({ offsetX, offsetY })
            break
        case "Simple":
            drawSimple({ offsetX, offsetY })
            break
    }
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function drawSquare({ offsetX, offsetY }){
    gCtx.beginPath()
    gCtx.fillStyle = gSelectedColor
    gCtx.fillRect(offsetX, offsetY, 40, 40)
    gCtx.strokeStyle = 'black' // border color
    gCtx.strokeRect(offsetX - 7, offsetY - 7, 40, 40)
}

function drawCircle({ offsetX, offsetY }){
    gCtx.lineWidth = '100' // ??
    gCtx.beginPath()
    gCtx.arc(offsetX, offsetY, 30, 0, 2 * Math.PI)
    gCtx.fillStyle = gSelectedColor
    gCtx.fill()
}

function drawSimple({ offsetX, offsetY }){
    gCtx.beginPath()
    gCtx.moveTo(offsetX - 30, offsetY - 30)
    gCtx.lineTo(offsetX + 30, offsetY + 30)
    gCtx.lineWidth = 3
    gCtx.strokeStyle = gSelectedColor
    gCtx.stroke()
}
