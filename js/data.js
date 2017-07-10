
var username = sessionStorage.getItem("username");
if(username) {
	$("#login_A").html(username);
}
$('.z-sl').live('click', function() {
	$.ajax({
		type: 'post', //提交的方式
		url: 'http://mooc.suuweb.cn/api.php/SLogin', //请求地址
		data: {
			username: $('.username').val(),
			password: $('.password').val()
		},
		dataType: 'JSON',
		success: function(data) {
			console.log(data.data.user);
			if(data.state == 0) {
				alert("用户不存在");
			} else if(data.state == 1) {
				sessionStorage.setItem("uid", data.data.user.user_id);
				sessionStorage.setItem("username", data.data.user.user_name);
				sessionStorage.setItem("userimg", data.data.user.user_avatar);
				sessionStorage.setItem("userType", data.data.user.user_type);
				var username = sessionStorage.getItem("username");
				$("#login_A").html(username);
			}
		}
	})
});
$(".c-head-nav_ul li").click(function() {
	var title = $(this).attr("link-name");
	//console.log(title);
	document.title = title;
});
//var uid = sessionStorage.getItem("data");

//试题加载