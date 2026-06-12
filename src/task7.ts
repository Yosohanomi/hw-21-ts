// Дано набір налаштувань (ключ-значення(enabled/disabled)). 
// Вивести ті, які є увімкненими.

enum Settings {
    Camera = "enabled",
    Microphone = "disabled",
    WiFi = "enabled",
    Bluetooth = "enabled",
    DarkTheme = "disabled"
}

let enabledList = []

for (let key in Settings) {
    if (Settings[key as keyof typeof Settings] === "enabled") {
        enabledList.push(key);
    }
}

console.log(enabledList);
