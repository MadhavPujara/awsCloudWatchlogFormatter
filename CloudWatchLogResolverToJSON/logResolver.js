function Objectify(arr) {
  return {
    ip: arr[0],
    date: arr[1],
    respCode: arr[2],
    ByteSize: arr[3],
    time: `${arr[4]} ${arr[5]}`,
    dataDOM: arr[6],
    promLabel: arr[7],
    uuid: arr[8],
    reqMethod: arr[9],
    request: arr[10],
    httpVersion: arr[11],
    userAgent: arr[12],
    referralUrl: arr[13],
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
let data =
  "[106.214.117.113] [04/Jul/2022:14:17:28 +0000] [301] [350] [0.570] [ms] [Datadome: 0-human-Humans] [redirect/zenu] [db1cc809-281a-420a-9bfa-244aa07dbc2d] [GET] [http://www.realestateview.com.au/real-estate/cnr-miller-road-bendigo-murchison-road-rushworth-vic/property-details-buy-residential-14049001/[logo] [HTTP/:1.1] [(Mozilla/5.0 (Linux; Android 10; Redmi Note 7S) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.101 Mobile Safari/537.36)] [undefined]";

let array = createArray(data);
console.log(array);

CleaningArray();

let dataObject = Objectify(array);

let jsonString = JSON.stringify(dataObject);
console.log(jsonString);

