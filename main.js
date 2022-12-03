let day;
switch (new Date().getDay()) {
  case 0:
    day = "Yakshanba";
    break;
  case 1:
    day = "Dushanba";
    break;
  case 2:
    day = "Seshanba";
    break;
  case 3:
    day = "Chorshanba";
    break;
  case 4:
    day = "Payshanba";
    break;
  case 5:
    day = "Juma";
    break;
  case 6:
    day = "Shanba";
}
document.getElementById("demo").innerHTML =
  "Bugun haftaning " + day + " kuni!❄️";
