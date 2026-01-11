// 1
const render = async () => {
  const response = await fetch("rockbands.json");
  const bandsData = await response.json();

  const bandSelect = document.getElementById('bandSelect');
  // get keys
  Object.keys(bandsData).forEach((bandObj) => {
    const option = document.createElement("option");
    option.value = bandObj;
    option.textContent = bandObj;
    bandSelect.append(option)
  })

  // Handle band selection
  bandSelect.addEventListener('change', () => {
    const selectedBand = bandSelect.value;
    const artistSelect = document.getElementById('artistSelect');

    // Reset artist dropdown
    artistSelect.innerHTML = '<option value="">-- Select an Artist --</option>';
    artistSelect.disabled = !selectedBand;

    if (selectedBand && bandsData[selectedBand]) {
      console.log(bandsData[selectedBand]);
      bandsData[selectedBand].forEach(artist => {
        const option = document.createElement('option');
        option.value = artist.value; // URL
        option.textContent = artist.name;
        artistSelect.appendChild(option);
      });
      artistSelect.disabled = false;
    }
  });
}

render().then();