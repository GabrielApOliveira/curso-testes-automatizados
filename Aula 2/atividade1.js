class StringManipulations {

    /**
     * Class for string manipulations
     * @param  {String} string  
     */
    constructor(string) {
        this.string = string;
    }

    /**
     * Returns the first substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findFirstMatch(subStr) {
        const regex = new RegExp(subStr, "gi");
        const search = this.string.match(regex)
        return search ? search[0] : '';
    }

    /**
     * Returns the last substring that matches the given string
     * @param  {String} subStr  substring to be matched
     * @return {String}
     */
    findLastMatch(subStr) {
        const regex = new RegExp(subStr, "gi");
        const search = this.string.match(regex)
        return search ? search.pop() : '';
    }

    /**
     * Returns the fsubstring between two given other strings
     * @param  {String} subStr1  begining of the match
     * @param  {String} subStr2  ending of the match
     * @return {String}
     */
    substringBetweenMatches(subStr1, subStr2) {
        const regex = new RegExp(subStr1 + '(.*)' + subStr2);
        const search = this.string.match(regex);
        return search ? search[1].trim() : '';
    }

    /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
    both_ends() {
        if (this.string.length <= 2) {
            return '';
        }

        const firstChars = this.string.slice(0, 2);
        const lastChars = this.string.slice(-2);
        return firstChars + lastChars
    }

    /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
    fix_start(str1) {
        let index = 0
        const firstChar = str1[0];
        const regexp = new RegExp(firstChar,"ig");
        const result = this.string.replace(regexp, m  => !index++ ? m : '*');
        return result;
    }

}

module.exports = StringManipulations;