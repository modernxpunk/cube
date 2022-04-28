const cube = document.querySelector('.cube')

let [rX, rY] = [0, 0]
let rotateability = false

document.addEventListener('mouseup', () => rotateability = false)
document.addEventListener('mousedown', () => rotateability = true)
document.addEventListener('mousemove', e => {
	if (rotateability) {
		rX += e.movementX / 2
		rY += e.movementY / 2
		cube.style.transform = `rotateX(${-rY}deg) rotateY(${rX}deg)`
	}
})