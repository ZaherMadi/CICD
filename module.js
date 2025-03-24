/*
    *
    * Calculate the age of a person in years
    * 
    * @param {object} p - person object, implements the birth Date property
    * @param {number} age in years of p
*/


function calculateAge(p){
    let dateDiff = new Date(Date.now() - p.birth.getTime());
    let age = Math.abs(dateDiff.getUTCFullYear() - 1970);
    return age;

}

