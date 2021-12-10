function send_input() {
    <!-- axios github - Performing a POST request-->
    axios.post('/accounts/hello_world/', {
        <!-- 이 문서 중에 input_data 를 id로 갖는(input) 값을 제출값을 출력하겠다. -->
        input_data: document.getElementById('input_data').value,
      })
      .then(function (response) {
        // POST 요청이 성공 했을 경우 어떤 javascript 구동 되는지
        console.log(response);
        document.getElementById('text').innerHTML = response.data['text']; // Return text
        document.getElementById('new_model_created_at').innerHTML = response.data['created_at'];
      })
      .catch(function (error) {
        console.log(error);
      });
}


<!-- axios github - Performing a GET request-->
<!-- 서버 호출 -->
axios.get('/accounts/hello_world/')
  .then(function (response) {
    // handle success
    console.log(response);

    // 성공 했을 경우 어떤 javascript 작업을 할지
    <!-- 이 문서 중에 text 를 id로 갖는(h1) 값을 views.py의 Return text로 바꾸겠다 -->
    document.getElementById('text').innerHTML = response.data['message']; // Return text

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
