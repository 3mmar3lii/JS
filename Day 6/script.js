
const xml = new XMLHttpRequest();
// 1
xml.open("GET", "rockbands.json");

// 3
xml.send();

xml.onreadystatechange = function () {
  if (xml.readyState === 4 && xml.status === 200) {
    const bandsData = JSON.parse(xml.responseText);
    console.log("data", bandsData);

    const bandSelect = document.getElementById("bandSelect");
    console.log(Object.keys(bandsData)); // 
    Object.keys(bandsData).forEach((bandName) => {
      const option = document.createElement("option");
      option.value = bandName;
      option.textContent = bandName;
      bandSelect.appendChild(option);
    });

    bandSelect.addEventListener("change", () => {
      const selectedBand = bandSelect.value;
      const artistSelect = document.getElementById("artistSelect");

      artistSelect.innerHTML =
        '<option value="">-- Select an Artist --</option>';

      if (selectedBand && bandsData[selectedBand]) {
        bandsData[selectedBand].forEach((artist) => {
          const option = document.createElement("option");
          option.textContent = artist.name;
          artistSelect.appendChild(option);
        });
        artistSelect.disabled = false;
      }
    });
  }
};

