import React, { useEffect } from 'react' // necessary to make asteroids display actual API data

import Menu from '../menu/Menu'
function drawAsteroids(context, canvasHeight, canvasWidth, asteroids) {
  // code may be replaced if we decide to plot the asteroids in their actual positions
  

    const asteroidInfo = (asteroidIndex) => {
      if (asteroids) {
        console.log('Asteroids:', asteroids)
        if (asteroids[asteroidIndex]) {
          const asteroid = asteroids[asteroidIndex]
          alert(
            `Asteroid Name: ${asteroid.name}\nEstimated Diameter: ${asteroid.estimated_diameter}`
          )
        } else {
          console.error('Asteroid index invalid:', asteroidIndex)
        }
      } else {
        console.error('Asteroids data is not available')
      }
    }


  var canvas = document.getElementById('frontend__containers__canvas')

  // first asteroid
  var centerX = canvasWidth * 0.75
  var centerY = canvasHeight / 1.25
  context.beginPath()
  context.arc(centerX, centerY, 15, 0, Math.PI * 2)
  context.fillStyle = '#71716D'
  context.fill()
  context.closePath()

  centerX = canvasWidth * 0.25
  centerY = canvasHeight * 0.1
  context.beginPath()
  context.moveTo(centerX, centerY)
  context.arc(centerX, centerY, 12, 0, Math.PI * 2)
  context.fillStyle = '#71716D'
  context.fill()
  context.closePath()

  centerX = canvasWidth / 1.08
  centerY = canvasHeight / 5
  context.beginPath()
  context.moveTo(centerX, centerY)
  context.arc(centerX, centerY, 25, 0, Math.PI * 2)
  context.fillStyle = '#71716D'
  context.fill()
  context.closePath()

  canvas.addEventListener('mousemove', function (e) {
    var rect = canvas.getBoundingClientRect()
    var mouseX = e.clientX - rect.left
    var mouseY = e.clientY - rect.top

    var ast1X = canvasWidth * 0.75
    var ast1Y = canvasHeight / 1.25
    var ast2X = canvasWidth * 0.25
    var ast2Y = canvasHeight * 0.1
    var ast3X = canvasWidth / 1.08
    var ast3Y = canvasHeight / 5
    var rad1 = 15
    var rad2 = 12
    var rad3 = 25

    // calculate the distance from the mouse to each asteroids center
    var distance1 = Math.sqrt((mouseX - ast1X) ** 2 + (mouseY - ast1Y) ** 2)
    var distance2 = Math.sqrt((mouseX - ast2X) ** 2 + (mouseY - ast2Y) ** 2)
    var distance3 = Math.sqrt((mouseX - ast3X) ** 2 + (mouseY - ast3Y) ** 2)

    // check if mouse is inside any of the circles
    if (distance1 < rad1 || distance2 < rad2 || distance3 < rad3) {
      canvas.style.cursor = 'pointer'
    } else {
      canvas.style.cursor = 'default'
    }
  })

  canvas.addEventListener('click', function (e) {
    var rect = canvas.getBoundingClientRect()
    var mouseX = e.clientX - rect.left
    var mouseY = e.clientY - rect.top

    var ast1X = canvasWidth * 0.75
    var ast1Y = canvasHeight / 1.25
    var ast2X = canvasWidth * 0.25
    var ast2Y = canvasHeight * 0.1
    var ast3X = canvasWidth / 1.08
    var ast3Y = canvasHeight / 5
    var rad1 = 15
    var rad2 = 12
    var rad3 = 25

    // calculate the distance from the mouse to each asteroids center
    var distance1 = Math.sqrt((mouseX - ast1X) ** 2 + (mouseY - ast1Y) ** 2)
    var distance2 = Math.sqrt((mouseX - ast2X) ** 2 + (mouseY - ast2Y) ** 2)
    var distance3 = Math.sqrt((mouseX - ast3X) ** 2 + (mouseY - ast3Y) ** 2)

    // check if mouse is inside any of the circles
    if (distance1 < rad1) {
      asteroidInfo(0) // Assume that the first asteroid corresponds to the first item in the asteroids array
    } else if (distance2 < rad2) {
      asteroidInfo(1) // Assume that the second asteroid corresponds to the second item in the asteroids array
    } else if (distance3 < rad3) {
      asteroidInfo(2) // Assume that the third asteroid corresponds to the third item in the asteroids array
    }
  })
}

export default drawAsteroids
