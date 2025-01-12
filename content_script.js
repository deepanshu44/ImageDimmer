let styleEl = document.createElement('style');
document.body.appendChild(styleEl);

browser.storage.onChanged.addListener(async function (changes, area) {
    if (area === 'local' && 'image_dimmer_value' in changes) {
	updateCss(changes.image_dimmer_value.newValue)
    }
});

function updateCss(value) {
    styleEl.innerText = `img { opacity: ${value.slider_val} !important; }`;
    if (value.video) {
	styleEl.innerText = `${styleEl.innerText} video { opacity: ${value.slider_val} !important; }`;
    }
    if (value.svg) {
	styleEl.innerText = `${styleEl.innerText} svg { opacity: ${value.slider_val} !important; }`;
    }
}

browser.storage.local.get('image_dimmer_value')
    .then(result => {
	if (result.slider_val) {
	    updateCss(result.image_dimmer_value)
	} else throw "empty object"
    })
    .catch(async () => {
	// First time installed. Update storage
	// default opacity value set to 0.8
	await browser.storage.local.set({ image_dimmer_value:{slider_val:0.8,video:true,svg:true} })
    });
