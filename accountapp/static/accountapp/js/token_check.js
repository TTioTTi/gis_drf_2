//// 주어진 이름의 쿠키를 반환하는데,
//// 조건에 맞는 쿠키가 없다면 undefined를 반환합니다.
//function getCookie(name) {
//  let matches = document.cookie.match(new RegExp(
//    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
//  ));
//  return matches ? decodeURIComponent(matches[1]) : undefined;
//}
//
//
//var check = getCookie('drf_token');
//
//if (check !== undefined) {
//    document.getElementById('signup_button').innerHTML = "";
//    document.getElementById('login_button').innerHTML =
//        "<a href=\"/accounts/logout_template/\">\n" +
//        "Logout\n" +
//        "</a>";
//}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


var check = getCookie('drf_token');

if (check !== undefined) {
    document.getElementById('signup_button').innerHTML =
        "<a href=\"/accounts/retrieve_template/\">\n" +
        "MyPage\n" +
        "</a>";
    document.getElementById('login_button').innerHTML =
        "<a href=\"/accounts/logout_template/\">\n" +
        "Logout\n" +
        "</a>";
}
