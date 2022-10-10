class UrlParser {
    static getSalesMethod(url) {
        return url.split(/for-/)[1].split(/\//)[0];
    }

    static getProperyType(url) {
        let isProperty = url.split
        isProperty
        if(true){
            
            let array = url
            .split(/for-[a-z]+\//)[1]
            .split(/in/)[0]
            .split(/-and-/)
            .map((property) => {
                return property.replace(/-/, "");
            });
            return array;
        }
    }

    static getState(url) {
        return url.split(/in-/)[1].split(/-/)[0];
    }

    static getSuburb(url) {
        if(typeof this.getPostCode(url) != "number") return ""
        return url.split(/in-/)[1].split(/-/)[1];
    }

    static getRegion(url) {
        if (this.getPostCode(url) != "") return "";
        return this.getSuburb(url);
    }

    static getPostCode(url) {
        return url.split(/in-/)[1].match(/[0-9]+/)[0]
    }

    static getBedrooms(url) {
        if (url.indexOf(`bedroom`) != -1) {
            return url.match(/with-[0-9]-bedroom/g)[0].split(/-/)[1];
        }
        return "";
    }

    static getMinPrice(url) {
        if (url.indexOf(`up-to`) !== -1) return "";
        return url
            .split(/from-|between-/)[1]
            .replace(
                /-and-[\d]+\/\?[\w]+\=[\d]\&[\w]+\=[\d]|-[-\w]+\/|\/$/g,
                ""
            );
    }

    static getMaxPrice(url) {
        if (url.indexOf(`from`) !== -1) return "";
        return url
            .split(/up-to-|between-[0-9]+\-/)[1]
            .replace(/[a-zA-Z]+-/, "")
            .replace(/\/\?[\w]+=[0-9]\&[\w]+\=[0-9]|\/$/, "");
    }

    static getDataFromUrl(url) {
        return {
            saleMethod: this.getSalesMethod(url),
            propertyTypes: this.getProperyType(url),
            state: this.getState(url),
            suburb: this.getSuburb(url),
            region: this.getRegion(url),
            postcode: this.getPostCode(url),
            bedrooms: this.getBedrooms(url),
            minPrice: this.getMinPrice(url),
            maxPrice: this.getMaxPrice(url),
        };
    }
}

module.exports = UrlParser;
