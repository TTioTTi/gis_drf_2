////https://github.com/axios/axios
//
//function initialize(pk) {
//    axios.get('/accounts/' + pk )
//
//        .then(function (response) {
//            // handle success
//            console.log(response);
//
//            document.getElementById('username').innerHTML = response.data['username'];
//            document.getElementById('date_joined').innerHTML = response.data['date_joined'];
//        })
//
//        .catch(function (error) {
//            // handle error
//            console.log(error);
//        })
//
//        .then(function () {
//            // always executed
//        });
//}

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}


function initialize(pk) {
    axios({
        method: 'get',
        url: '/accounts/' + pk,
        headers: {
            Authorization: decodeURIComponent(getCookie('drf_token'))
        }
    })

        .then(function (response) {
            // handle success
            console.log(response);

            document.getElementById('nickname').innerHTML = response.data['profile']['nickname'];
            document.getElementById('message').innerHTML = response.data['profile']['message'];

            if (response.data['profile']['thumb'] !== null) {
                document.getElementById('image').src = response.data['profile']['thumb'];
            } else if (response.data['profile']['image'] !== null) {
                document.getElementById('image').src = response.data['profile']['image'];
            } else {
                document.getElementById('image').style.display = 'none';
            }


            var user_id = response.data['id'];
            var profile_id = response.data['profile']['id'];

            if (response.data['is_page_owner'] === 'True') {
                document.getElementById('owner_section').innerHTML =
                    "<div>" +
                    "<a href='/accounts/update_template/" + user_id + "'>Update Account</a>" +
                    "</div>" +
                    "<div>" +
                    "<a href='/profiles/update_template/" + profile_id + "'>Update Profile</a>" +
                    "</div>"
            }
        })

        .catch(function (error) {
            // handle error
            console.log(error);
        })

        .then(function () {
            // always executed
        });
}
