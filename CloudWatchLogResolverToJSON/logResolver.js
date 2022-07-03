function Objectify(arr) {
  return {
    id: arr[0],
    date: arr[1],
    request: arr[2],
    respCode: arr[3],
    ByteSize: arr[4],
    time: `${arr[5]} ms`,
    userAgent: arr[6],
    dataDOM: arr[7],
    promLabel: arr[8],
    uuid: arr[9],
  };
}

function CleaningArray() {
  array.forEach((value, index) => {
    let changingValue = value;
    while (changingValue.indexOf("[") !== -1) {
      changingValue = changingValue.replace(/\[/, "");
    }
    while (changingValue.indexOf("]") !== -1) {
      changingValue = changingValue.replace(/\]/, "");
    }
    while (changingValue.indexOf("Datadome:") !== -1) {
      changingValue = changingValue.replace(/Datadome:\s/, "");
    }
    array[index] = changingValue;
  });
}
function createArray(string) {
  return string.split(/\]\s\[|\s\-\s|\]\s[a-z]+\s\[/);
}
//Getting Data from User to make JSON
let data = prompt(
  "Enter String to be converted to JSON",
  `[1.145.199.214] [07/Apr/2022:23:59:00 +0000] [\"GET http://www.realestateview.com.au/real-estate/cnr-miller-road-bendigo-murchison-road-rushworth-vic/property-details-buy-residential-14049001/[logo]/ HTTP/:1.1\"] [301] [98] - [46.460] ms [[Mozilla/5.0 [Macintosh; Intel Mac OS X 10_13_6] AppleWebKit/605.1.15 [KHTML, like Gecko] Version/13.1.2 Safari/605.1.15]] [Datadome: 0-human-Humans] [pdp-buy] [4ee042d2-0ef3-4549-a187-e28ad1426837]`
);

//Splitting String into Array
let array = createArray(data);
console.log(array);

//Removing Square Brackets & datadom from arrays
CleaningArray();

//Making a object from cleanArray
let dataObject = Objectify(array);

//Making a JSON Object for network transfer
let jsonString = JSON.stringify(dataObject);
console.log(jsonString);

//Making a JSON Object for Logging
let jsonLog = JSON.stringify(dataObject, undefined, 2);
console.log(jsonLog);

alert(`JSON
${jsonString}`);
