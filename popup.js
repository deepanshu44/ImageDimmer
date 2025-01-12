let valueEl = document.getElementById('image_dimmer_slider');
let video = document.getElementById("image_dimmer_video_opt");
let svg = document.getElementById("image_dimmer_svg_opt");

//init
async function init() {
    let {image_dimmer_value} = await browser.storage.local.get("image_dimmer_value")
    valueEl.value = image_dimmer_value.slider_val
    video.checked = image_dimmer_value.video
    svg.checked = image_dimmer_value.svg
}

init().catch(() => {})

async function setValue(element) {
    const {id} = element
    let updated_value = {};
    let {image_dimmer_value} = await browser.storage.local.get("image_dimmer_value");
    if (id === "image_dimmer_slider") {
	updated_value = {...image_dimmer_value, slider_val : element.value};
	
    } else if (id === "image_dimmer_video_opt") {
	updated_value = {...image_dimmer_value, video : element.checked};
	
    } else if (id === "image_dimmer_svg_opt") {
	updated_value = {...image_dimmer_value, svg : element.checked};
	
    }
    await browser.storage.local.set({ image_dimmer_value:updated_value });
    // valueEl.image_dimmer_value = updated_value;
}

// modify the listeners below so that "this" value can be accessed
valueEl.addEventListener('change', e => setValue(e.target));
video.addEventListener('change', e => setValue(e.target));
svg.addEventListener('change', e => setValue(e.target));
