const container = document.querySelector('.container')
const settingInputs = document.querySelectorAll('.setting input')

let [X, Y] = [0, 0]
let turn = false

document.addEventListener('mouseup', () => turn = false)
document.addEventListener('mousedown', () => turn = true)
document.addEventListener('mousemove', e => {
	if (turn) {
		X += e.movementX / 2
		Y += e.movementY / 2
		container.querySelector('.cube').style.transform = `rotateX(${-Y - 45}deg) rotateY(${X + 35}deg)`
	}
})


const makeCubeHtml = (html, className="sub cube") => {
	return `
		<div class="${className}">
			<div class="side front"></div>
			<div class="side back"></div>
			<div class="side left"></div>
			<div class="side right"></div>
			<div class="side bottom"></div>
			${html}
		</div>
	`
}

const units = {
	sizeOfCube: "px",
	offset: "px",
	perspective: "px",
	margin: "%"
}

const makeCubes = count => makeCubeHtml(count <= 0 ? "" : makeCubes(count - 1))

for (let i = 0; i < settingInputs.length; i++) {
	settingInputs[i].addEventListener('change', e => {
		if (e.target.name === "count")
			container.innerHTML = makeCubeHtml(makeCubes(+e.target.value), "cube")
		else
			document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + units[e.target.name])
	})
}