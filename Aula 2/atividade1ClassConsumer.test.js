const AdressMatcher = require('./atividade1ClassConsumer');
const StringManipulations = require('./atividade1');

const mockAdressMatcher = jest.fn();

let str = "";
let strM = "";

jest.mock('./atividade1', () => {
    return jest.fn().mockImplementation(() => {
        return { 
            findFirstMatch : () => {
            return "Wellington Square";
        },
            fix_start : () => {
            return "No. 30 Welli*gto* Square";
        }}
    });
});

describe("AdressMatcher class test", () => {

    beforeEach(() => {
        StringManipulations.mockClear();
        mockAdressMatcher.mockClear();
    });

    it('should call the StringManipulations instance in the constructor of AdressMatcher class', () => {
        const addressMatcher = new AdressMatcher();
        expect(StringManipulations).toHaveBeenCalledTimes(1);
    });

    it("should returns street name in the given address", () => {
        str = "No. 30 Wellington Square"
        strM = new AdressMatcher(str);
        const output = "Wellington Square";
        expect(strM.findStreetName("Wellington Square")).toEqual(output);
    });

    it("should returns hides the street name in the adress for security", () => {
        str = "No. 30 Wellington Square"
        strM = new AdressMatcher(str);

        const output = "No. 30 Welli*gto* Square";
        expect(strM.hideStreetName('No.')).toEqual(output);
    });

});
