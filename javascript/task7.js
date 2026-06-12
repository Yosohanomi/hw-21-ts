"use strict";
// Дано набір налаштувань (ключ-значення(enabled/disabled)). 
// Вивести ті, які є увімкненими.
var Settings;
(function (Settings) {
    Settings["Camera"] = "enabled";
    Settings["Microphone"] = "disabled";
    Settings["WiFi"] = "enabled";
    Settings["Bluetooth"] = "enabled";
    Settings["DarkTheme"] = "disabled";
})(Settings || (Settings = {}));
let enabledList = [];
for (let key in Settings) {
    if (Settings[key] === "enabled") {
        enabledList.push(key);
    }
}
console.log(enabledList);
