"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_FEATURES = void 0;
const myFeatures = ['WiFi', 'Kitchen', 'Bathroom', 'Air Conditioner', 'Heater', 'Washing Machine', 'Cooker', 'Balcony', 'Refrigerator', 'TV', 'Microwave', 'Elevator'];
exports.ALL_FEATURES = '111111111111';
const encryptFeatues = (features) => {
    let res = "";
    for (const myFeature of myFeatures) {
        if (features.includes(myFeature))
            res += '1';
        else
            res += '0';
    }
    return res;
};
exports.default = encryptFeatues;
