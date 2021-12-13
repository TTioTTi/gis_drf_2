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

        document.getElementById('new_model_list').innerHTML += "<h5>" + response.data['text'] + "</h5>"
        document.getElementById('new_model_list').innerHTML += "<p>" + response.data['created_at'] + "</p>"
      })
      .catch(function (error) {
        console.log(error);
      });
}
