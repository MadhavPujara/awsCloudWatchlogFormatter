let baseURL = `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121/`;
let minPriceURL = `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-from-50000/`;
let maxPriceURL = `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-up-to-75000/`;
let priceFilteredURL = `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-between-50000-and-75000/`;
let allFiltersURL = `https://resi.uatz.view.com.au/for-sale/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-richmond-3121-with-1-bedroom-between-50000-and-75000/?bathrooms=1&cars=1`;
let soldMinPriceURL = `https://resi.uatz.view.com.au/sold-properties/in-vic-melbourne-from-50000/`;

let mainUrl = allFiltersURL;

let getSalesMethod = (url) => {
    if (url.indexOf(`sold`) !== -1) {
        return url
            .split(/.au/)[1]
            .split(/-properties/)[0]
            .replace(/\//, "");
    }
    return url.split(/for-/)[1].split(/\//)[0];
};
let saleMethod = getSalesMethod(mainUrl);
saleMethod;

// let getProperyType = (url) => {
//     let isProperty = url.split(/[a-z]+\//)
//     isProperty;
//     if (true) {
//         let array = url
//             .split(/for-[a-z]+\//)[1]
//             .split(/in/)[0]
//             .split(/-and-/)
//             .map((property) => {
//                 return property.replace(/-/, "");
//             });
//         return array;
//     }
// };
// let propertyType = getProperyType(mainUrl);
// propertyType;

let getState = (url) => url.split(/in-/)[1].split(/-/)[0];
let state = getState(mainUrl);
state;

let getPostCode = (url) => {
    let postcode = url.split(/in-/)[1].split(/-/)[2].replace(/\/$/, "");
    postcode = parseInt(postcode);
    postcode;
    let h = typeof postcode;
    h;
    if (typeof postcode != `number`) return "";
    return postcode;
};
// .match(/[0-9]+/)[0]
let pincode = getPostCode(mainUrl);
pincode;
let getSuburb = (url) => {
    if (typeof getPostCode(url) != "number") return "";
    return url.split(/in-/)[1].split(/-/)[1];
};
let suburb = getSuburb(mainUrl);
suburb;

function getRegion(url) {
    if (getPostCode(url) != "") return "";
    return getSuburb(url);
}
let region = getRegion(mainUrl);
region;

let getBedrooms = (url) => {
    if (url.indexOf(`bedroom`) != -1) {
        return url.match(/with-[0-9]-bedroom/g)[0].split(/-/)[1];
    }
    return "";
};
let bedrooms = getBedrooms(mainUrl);
bedrooms;

let getMinPrice = (url) => {
    if (url.indexOf(`up-to`) === -1) {
        // if(url.indexOf(`from`) === -1) return ""
        return url
            .split(/from-|between-/)[1]
            .replace(
                /-and-[\d]+\/\?[\w]+\=[\d]\&[\w]+\=[\d]|-[-\w]+\/|\/$/g,
                ""
            );
    } else {
        // if (url.indexOf(`from` || `between`) !== -1) {
        return "";
    }
    // }
    // return "";
};
let minPrice = getMinPrice(mainUrl);
minPrice;

let getMaxPrice = (url) => {
    if (url.indexOf(`from`) === -1) return "";
    // if(url.indexOf(`up-to`) === -1) return "";
    // if (url.indexOf(`up-to` || `between`) !== -1) {
    return url
        .split(/up-to-|between-[0-9]+\-/)[1]
        .replace(/[a-zA-Z]+-/, "")
        .replace(/\/\?[\w]+=[0-9]\&[\w]+\=[0-9]|\/$/, "");
    // }
    // return "";
};
let maxPrice = getMaxPrice(mainUrl);
maxPrice;

module.exports = {
    mainUrl,
    getSalesMethod,
    getProperyType,
    getSuburb,
    getState,
    getPostCode,
    getBedrooms,
    getMinPrice,
    getMaxPrice,
};
