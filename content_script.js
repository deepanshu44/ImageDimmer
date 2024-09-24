let styleEl = document.createElement('style');
document.body.appendChild(styleEl);

browser.storage.onChanged.addListener(function (changes, area) {
    if (area === 'local' && 'image_dimmer_value' in changes) {
	update(changes.image_dimmer_value.newValue)
    }
});

function update(value) {
    styleEl.innerText = `img { opacity: ${value} !important; }`;
}

browser.storage.local.get(['image_dimmer_value']).then(result => update(result.value));
