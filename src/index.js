export default class Validator {
  validateUsername(name) {
    let regexp = /^[a-zA-Z]+[\w_-]*[a-zA-Z]$/gm;
    let regexp2 = /[(\d\d\d)?]/gm;
    
    if (name.match(regexp) != null && name.match(regexp2) != null) {

      return name.match(regexp);
    
    }

  }
}

let user = new Validator();
user.validateUsername("Arag09_rn");

console.log()

