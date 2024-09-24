let valueEl = document.querySelector('.image_dimmer_slider');

async function init() {
    let { image_dimmer_value } = await browser.storage.local.get(['image_dimmer_value']);
    if (!image_dimmer_value) {
	image_dimmer_value = 0;
    }
    setValue(image_dimmer_value);
}

async function setValue(image_dimmer_value) {
    await browser.storage.local.set({ image_dimmer_value });
    valueEl.image_dimmer_value = image_dimmer_value;
}

valueEl.addEventListener('change', e => setValue(e.target.value));

init().catch(e => console.error(e));
