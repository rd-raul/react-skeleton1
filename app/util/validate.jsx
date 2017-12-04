module.exports = {
  name : (name) => {
    if(name != undefined){
      let nameStr = name.trimLeft()
      nameStr = nameStr.trim();
      return nameStr && nameStr.length > 1;
    }
    return name && name.length > 1;
  },
  email : (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email && re.test(email);
  },
  password : (password) => {
    return password && password.length >= 3;
  },
  //Rgex to check only for numbers
  numeric : (value) => {
    const regex = /(^$)|(^\d+$)/;
    return value && regex.test(value);
  },
  phoneNumber: (phoneNumber) => {
    return phoneNumber && phoneNumber.length > 1;
  },
  promocode : (promocode) => {
    const regex = /^[a-zA-Z0-9]*$/g;
    return promocode && regex.test(promocode);
  },
  validAmount : (amount) =>{
    let newAmt = amount
    if(newAmt)
    {
      if(newAmt.toString().replace(".","").length > 6)
      {
        return false;
      }else{
        return true;
      }
    }
    return true;
  },
  validatePhoneWithCountyCode : (number) =>{
    let newAmt = number
    if(newAmt)
    {
      if(newAmt.toString().length < 5)
      {
        return false;
      }else{
        return true;
      }
    }
    return false;
  },
  isEmpty : (obj) => {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }
}
