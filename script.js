const variables = document.querySelector(':root')
const settings = document.querySelector('.settings')
const cube = document.querySelector('.cube')

let [X, Y, Z, rX, rY] = [0, 0, 0, 0, 0, 0]
const step = 10

let perspective = 500
document.addEventListener('wheel', e => {
	if (e.deltaY < 0)
		perspective += 5 * step
	else
		perspective -= 5 * step
	perspective = Math.max(250, Math.min(perspective, 1000))
	variables.style.setProperty('--perspective', perspective + "px")
})

document.addEventListener('keydown', e => {
	if (event.code === 'KeyW') {
		Z += step
	} else if (event.code === "KeyA") {
		X += step
	} else if (event.code === "KeyS") {
		Z -= step
	} else if (event.code === "KeyD") {
		X -= step
	}
	cube.style.transform = `translate3d(${X}px, ${Y}px, ${Z}px) rotateX(${-rY}deg) rotateZ(${-rX}deg)`
})

let rotateability = false
document.addEventListener('mouseup', () => rotateability = false)
document.addEventListener('mousedown', () => rotateability = true)
document.addEventListener('mousemove', e => {
	if (rotateability) {
		rX += e.movementX / 5
		rY += e.movementY / 5
		cube.style.transform = `translate3d(${X}px, ${Y}px, ${Z}px) rotateX(${-rY}deg) rotateZ(${-rX}deg)`
	}
})