function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }

  if (otp.startsWith("ph-") && otp.length >= 8) {
    return true;
  }


  return false;
}

//testing input

// console.log(validOtp("ph-10985")); 
// console.log(validOtp("ph-1234"));
// console.log(validOtp("abc-12345"));
// console.log(validOtp(["ph-10985"]));
// console.log(validOtp(12345678));
