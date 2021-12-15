//function send_input() {
//    <!-- axios github - Performing a POST request-->
//    axios.post('/accounts/', {
//        <!-- 이 문서 중에 username 를 id로 갖는(input) 값을 제출값을 출력하겠다. -->
//        username: document.getElementById('username').value,
//        password: document.getElementById('password').value,
//      })
//
//      .then(function (response) {
//        // 성공 했을 경우
//        console.log(response);
//
//        document.getElementById('alert_box').innerHTML
//            = "<div class='btn btn-primary rounded-pill px-5'>가입이 성공했습니다</div>"
//      })
//
//      .catch(function (error) {
//        // 실패 했을 경우
//        console.log(error);
//
//            document.getElementById('alert_box').innerHTML
//            = "<div class='btn btn-danger rounded-pill px-5'>가입이 실패했습니다</div>"
//      });
//}

function send_input() {
    axios.post('/accounts/', {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
    })

        .then(function (response) {
            console.log(response);

            document.getElementById('alert_box').innerHTML
                = "<div class='btn btn-primary rounded-pill px-5'>가입이 성공했습니다</div>"
        })

        .catch(function (error) {
            console.log(error);

            document.getElementById('alert_box').innerHTML
                = "<div class='btn btn-danger rounded-pill px-5'>가입이 실패했습니다</div>"
        });
}
