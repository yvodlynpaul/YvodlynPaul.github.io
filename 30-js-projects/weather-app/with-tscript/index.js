var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var apiKey = "6911c0d6abca7fba4262af0a66455655";
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");
function checkWeather(city) {
    return __awaiter(this, void 0, void 0, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(apiUrl + city + "&appid=".concat(apiKey))];
                case 1:
                    response = _a.sent();
                    if (!(response.status == 404)) return [3 /*break*/, 2];
                    document.querySelector(".error").style.display = "block";
                    document.querySelector(".weather").style.display = "none";
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, response.json()
                    // console.log(data);
                ];
                case 3:
                    data = _a.sent();
                    // console.log(data);
                    document.querySelector(".city").innerHTML = data.name;
                    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
                    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
                    // if (data.weather[0].main == "Clouds")
                    switch (data.weather[0].main) {
                        case "Clouds":
                            weatherIcon.src = "./images/clouds.png";
                            break;
                        case "Clear":
                            weatherIcon.src = "./images/clear.png";
                            break;
                        case "Rain":
                            weatherIcon.src = "./images/rain.png";
                            break;
                        case "Drizzle":
                            weatherIcon.src = "./images/drizzle.png";
                            break;
                        case "Mist":
                            weatherIcon.src = "./images/mist.png";
                            break;
                        default:
                            break;
                    }
                    document.querySelector(".weather").style.display = "block";
                    document.querySelector(".error").style.display = "none";
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
searchBtn.addEventListener("click", function () {
    checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});
