"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FahrenheitToRankine = exports.RankineToFahrenheit = exports.CelsiusToRankine = exports.RankineToCelsius = exports.KelvinToRankine = exports.RankineToKelvin = exports.FahrenheitToKelvin = exports.KelvinToFahrenheit = exports.KelvinToCelsius = exports.CelsiusToKelvin = exports.CelsiusToFahrenheit = exports.FahrenheitToCelsius = void 0;
function FahrenheitToCelsius(F) {
    if (F == null || F == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Fahrenheit not supplied" }]);
        return 0;
    }
    else if (isNaN(F)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Fahrenheit is not a number" }]);
        return 0;
    }
    else {
        var Res = ((5 / 9) * (F - 32)).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.FahrenheitToCelsius = FahrenheitToCelsius;
function CelsiusToFahrenheit(C) {
    if (C == null || C == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Celsius not supplied" }]);
        return 0;
    }
    else if (isNaN(C)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Celsius is not a number" }]);
        return 0;
    }
    else {
        var Res = ((C * (9 / 5)) + 32).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.CelsiusToFahrenheit = CelsiusToFahrenheit;
function CelsiusToKelvin(C) {
    if (C == null || C == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Celsius not supplied" }]);
        return 0;
    }
    else if (isNaN(C)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Celsius is not a number" }]);
        return 0;
    }
    else {
        var Res = (C + 273.15).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.CelsiusToKelvin = CelsiusToKelvin;
function KelvinToCelsius(K) {
    if (K == null || K == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Kelvin not supplied" }]);
        return 0;
    }
    else if (isNaN(K)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Kelvin is not a number" }]);
        return 0;
    }
    else {
        var Res = (K - 273.15).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.KelvinToCelsius = KelvinToCelsius;
function KelvinToFahrenheit(K) {
    if (K == null || K == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Kelvin not supplied" }]);
        return 0;
    }
    else if (isNaN(K)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Kelvin is not a number" }]);
        return 0;
    }
    else {
        var Res = ((K * (9 / 5)) - 459.67).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.KelvinToFahrenheit = KelvinToFahrenheit;
function FahrenheitToKelvin(F) {
    if (F == null || F == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Fahrenheit not supplied" }]);
        return 0;
    }
    else if (isNaN(F)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Fahrenheit is not a number" }]);
        return 0;
    }
    else {
        var Res = ((F - 32) / (9 / 5) + 273.15).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.FahrenheitToKelvin = FahrenheitToKelvin;
function RankineToKelvin(R) {
    if (R == null || R == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Rankine not supplied" }]);
        return 0;
    }
    else if (isNaN(R)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Rankine is not a number" }]);
        return 0;
    }
    else {
        var Res = (R / (9 / 5)).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.RankineToKelvin = RankineToKelvin;
function KelvinToRankine(K) {
    if (K == null || K == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Kelvin not supplied" }]);
        return 0;
    }
    else if (isNaN(K)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Kelvin is not a number" }]);
        return 0;
    }
    else {
        var Res = (K * (9 / 5)).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.KelvinToRankine = KelvinToRankine;
function RankineToCelsius(R) {
    if (R == null || R == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Rankine not supplied" }]);
        return 0;
    }
    else if (isNaN(R)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Rankine is not a number" }]);
        return 0;
    }
    else {
        var Res = ((R - 491.67) / (9 / 5)).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.RankineToCelsius = RankineToCelsius;
function CelsiusToRankine(C) {
    if (C == null || C == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Celsius not supplied" }]);
        return 0;
    }
    else if (isNaN(C)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Celsius is not a number" }]);
        return 0;
    }
    else {
        var Res = ((C + 273.15) * (9 / 5)).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.CelsiusToRankine = CelsiusToRankine;
function RankineToFahrenheit(R) {
    if (R == null || R == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Rankine not supplied" }]);
        return 0;
    }
    else if (isNaN(R)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Rankine is not a number" }]);
        return 0;
    }
    else {
        var Res = (R - 459.67).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.RankineToFahrenheit = RankineToFahrenheit;
function FahrenheitToRankine(F) {
    if (F == null || F == undefined) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Fahrenheit not supplied" }]);
        return 0;
    }
    else if (isNaN(F)) {
        console.table([{ "Log Type": "Warn", "Log Reason": "Fahrenheit is not a number" }]);
        return 0;
    }
    else {
        var Res = (F + 459.67).toFixed(2);
        if (Res.endsWith(".00")) {
            Res = Number(parseInt(Res).toFixed(0));
        }
        return Res;
    }
}
exports.FahrenheitToRankine = FahrenheitToRankine;
