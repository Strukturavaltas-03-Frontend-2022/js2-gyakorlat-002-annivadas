2/*. feladat
- A `02/solution/js/numericConverter.js` fájlban dolgozz!
- Készíts egy függvényt `numericConverter` néven!
- Ez a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas és tizenhatos
számrendszerbe is.
- Ezeket az értékeket egy objektumban add vissza. A property-k neve legyen: binary, octal, hexa. */
const numericConverter = (decimal) => {
    return {
    binary: decimal.toString(2),
    octal: decimal.toString(8),
    hexa: decimal.toString(16)
    };
};


export default numericConverter;

