//function setCookie(name, value, options = {}) {
//
//  options = {
//    path: '/',
//    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
//    ...options
//  };
//
//  if (options.expires instanceof Date) {
//    options.expires = options.expires.toUTCString();
//  }
//
//  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
//
//  for (let optionKey in options) {
//    updatedCookie += "; " + optionKey;
//    let optionValue = options[optionKey];
//    if (optionValue !== true) {
//      updatedCookie += "=" + optionValue;
//    }
//  }
//
//  document.cookie = updatedCookie;
//}
//
//
//function send_input() {
//    <!-- axios github - Performing a POST request-->
//    axios.post('/accounts/login/', {
//        <!-- 이 문서 중에 username 를 id로 갖는(input) 값을 제출값을 출력하겠다. -->
//        username: document.getElementById('username').value,
//        password: document.getElementById('password').value,
//      })
//
//      .then(function (response) {
//        // 성공 했을 경우
//        console.log(response);
//
//        // document.getElementById('alert_box').innerHTML
//        //     = "<div class='btn btn-primary rounded-pill px-5'>로그인이 성공했습니다.</div>";
//        // window.location.href = '/accounts/hello_world_template/';
//
//        // Token 수령 후 쿠키 생성
//        // https://cjh5414.github.io/cookie-and-session/#:~:text=%EC%84%B8%EC%85%98%EC%9D%80%20%EC%BF%A0%ED%82%A4%EB%A5%BC%20%EC%9D%B4%EC%9A%A9%ED%95%A9%EB%8B%88%EB%8B%A4.%20%EC%96%B4%EB%96%A4%20%EC%9B%B9%20%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EA%B0%80%20%EC%84%9C%EB%B2%84%EC%97%90%20%EC%9A%94%EC%B2%AD%EC%9D%84,%EC%BF%A0%ED%82%A4%EC%97%90%20%EC%A0%80%EC%9E%A5%ED%95%B4%EB%91%90%EA%B3%A0%20%EB%A7%A4%20%EC%9A%94%EC%B2%AD%EB%A7%88%EB%8B%A4%20%EC%84%B8%EC%85%98%20%EC%95%84%EC%9D%B4%EB%94%94%EB%A5%BC%20%ED%95%A8
//        // https://ko.javascript.info/cookie
//        setCookie('drf_token', 'Token' + response.data['token']);
//
//        // success_url 재연결
//        window.location.href = '/accounts/hello_world_template/';
//      })
//
//      .catch(function (error) {
//        // 실패 했을 경우
//        console.log(error);
//
//        document.getElementById('alert_box').innerHTML
//            = "<div class='btn btn-danger rounded-pill px-5'>로그인이 실패했습니다.</div>";
//      });
//}

function setCookie(name, value, options = {}) {

  options = {
    path: '/',
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}


function send_input() {
    axios.post('/accounts/login/', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    })

        .then(function (response) {
            console.log(response);

            // Token 수령 후 쿠키 생성
            setCookie('drf_token', 'Token ' + response.data['token']);

            // success_url 재연결
            window.location.href = '/accounts/hello_world_template/';
        })

        .catch(function (error) {
            console.log(error);

            document.getElementById('alert_box').innerHTML
                = "<div class='btn btn-danger rounded-pill px-5'>로그인이 실패했습니다</div>";
        });
}
