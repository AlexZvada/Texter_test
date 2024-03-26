let password = "";
function validate(input, value) {
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const str = value.trim();
  if (!str) {
    return "Filed is required";
  }
  switch (input) {
    case "user_email":
      const res = String(value).toLowerCase().match(regex);
      if (!res) {
        return "Field email must be valid email addres with no blank space";
      }
      break;
    case "user_name":
      if (str.length < 2) {
        return "Name must contain at least 2 symbols";
      }
      break;
    case "user_lastname":
      if (str.length < 2) {
        return "Last name must contain at least 2 symbols";
      }
      break;
    case "user_password":
      password = value;
      if (str.length < 6) {
        return "password must contain at least 6 symbols";
      }
      break;
    case "user_password_repeat":
      if (password !== value) {
        password = "";
        return "Password and confirm password fields does not match";
      }
      break;
    default:
      return null;
  }
  return null;
}
const obj = {
  user_email: "aa@aa.aa",
  user_name: "aas",
  user_lastname: "123",
  user_password: "123123",
  user_password_repeat: "123123",
};
for (const input in obj) {
  const res = validate(input, obj[input]);
  console.log(`${input} :`, res);
}
