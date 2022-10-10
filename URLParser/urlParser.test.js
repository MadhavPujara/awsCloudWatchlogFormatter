const UrlParser = require(`./urlParser.js`);

// describe("Get Data", () => {
//     test("Get Sale Method", () => {
//         expect(getSalesMethod(mainUrl)).toMatch(/sale|rent|sold/);
//     });

//     test("Get Property Type", () => {
//         expect(getProperyType(mainUrl)).toEqual([
//             "houses",
//             "units",
//             "apartments",
//             "studios",
//             "townhouses",
//             "land",
//             "villas",
//             "rural",
//         ]);
//     });

//     test(`Get Suburb`, () => {
//         expect(getSuburb(mainUrl)).toBe(`richmond`);
//     });

//     test(`Get State`, () => {
//         expect(getState(mainUrl)).toBe(`vic`);
//     });

//     test(`Get PostCode`, () => {
//         expect(getPostCode(mainUrl)).toBe(`3121`);
//     });

//     test(`Get Bedrooms`, () => {
//         expect(getBedrooms(mainUrl)).toBe(`1`);
//     });

//     test(`Get Min Price`, () => {
//         expect(getMinPrice(mainUrl)).toBe(`50000`);
//     });

//     //   test(`Get Min Price`, () => {
//     //     expect(getMinPrice(mainUrl)).toBe(`0`);
//     // });

//     test(`Get Max Price`, () => {
//         expect(getMaxPrice(mainUrl)).toBe(`75000`);
//     });
// });

describe("Get Data from Url", () => {
    test("https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121/", () => {
        expect(
            UrlParser.getDataFromUrl(
                `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121/`
            )
        ).toBe({
            saleMethod: "sale",
            propertyTypes: [],
            state: "vic",
            suburb: "richmond",
            region: "",
            postcode: "3121",
            bedrooms: "",
            minPrice: "",
            maxPrice: "",
        });
    });

    test(`https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-from-50000/`, () => {
        expect(
            UrlParser.getDataFromUrl(
                `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-from-50000/`
            )
        ).toBe({
            saleMethod: "sale",
            propertyTypes: [],
            state: "vic",
            suburb: "richmond",
            region: "",
            postcode: "3121",
            bedrooms: "",
            minPrice: "50000",
            maxPrice: "",
        });
    });

    test(`https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-up-to-75000/`, () => {
        expect(
            UrlParser.getDataFromUrl(
                `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-up-to-75000/`
            )
        ).toBe({
            saleMethod: "sale",
            propertyTypes: [],
            state: "vic",
            suburb: "richmond",
            region: "",
            postcode: "3121",
            bedrooms: "",
            minPrice: "",
            maxPrice: "75000",
        });
    });

    test(`https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-between-50000-and-75000/`, () => {
        expect(
            UrlParser.getDataFromUrl(
                `https://resi.uatz.view.com.au/for-sale/in-vic-richmond-3121-between-50000-and-75000/`
            )
        ).toBe({
            saleMethod: "sale",
            propertyTypes: [],
            state: "vic",
            suburb: "richmond",
            region: "",
            postcode: "3121",
            bedrooms: "",
            minPrice: "50000",
            maxPrice: "75000",
        });
    });

    test(`https://resi.uatz.view.com.au/for-sale/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-richmond-3121-with-1-bedroom-between-50000-and-75000/?bathrooms=1&cars=1`, () => {
        expect(
            UrlParser.getDataFromUrl(
                `https://resi.uatz.view.com.au/for-sale/houses-and-units-and-apartments-and-studios-and-townhouses-and-land-and-villas-and-rural-in-vic-richmond-3121-with-1-bedroom-between-50000-and-75000/?bathrooms=1&cars=1`
            )
        ).toBe({
            saleMethod: "sale",
            propertyTypes: [
                "houses",
                "units",
                "apartments",
                "studios",
                "townhouses",
                "land",
                "villas",
                "rural",
            ],
            state: "vic",
            suburb: "richmond",
            region: "",
            postcode: "3121",
            bedrooms: "1",
            minPrice: "50000",
            maxPrice: "75000",
        });
    });

    // test("", () => {
    //     expect(UrlParser.getDataFromUrl()).toBe();
    // });
});
