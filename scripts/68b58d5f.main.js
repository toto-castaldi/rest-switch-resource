"use strict";function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c&&(c=b.exec(location.hash)),null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}$().ready(function(){$.ajax({type:"GET",url:"config",success:function(a){var b=function(b){return a.protocol+"://"+a.host+a.port+a.context+b},c=function(){a.log&&console.log(arguments)},d=function(a){$("#"+a+" form button[name=submit]").isLoading({tpl:'<span class="glyphicon glyphicon-refresh glyphicon-refresh-animate" ></span>'})},e=function(a){$("#"+a+" form button[name=submit]").isLoading("hide")},f=function(a){$(".subsection").hide(),$("#"+a).show()},g=function(){$(".subsection").hide()};$(".subsection").each(function(a,b){var c=$(b).attr("id");$("#links a[href=#"+c+"]").click(function(){f(c)})}),""!==window.location.hash&&-1===window.location.hash.indexOf("&")&&(g(),$(window.location.hash).show());var h=function(a){return function(b,d,f){c("error",b,d,f),a&&e(a),4===b.readyState?notie.alert(3,"Error ("+b.status+", "+b.statusText+")",5):0===b.readyState?notie.alert(3,"Network Error",5):notie.alert(3,"Error !",5)}};window.location.hash.startsWith("#confirm?")&&!function(){var a=getParameterByName("e"),d=getParameterByName("t");c("confirm "+a+" with token "+d),$.ajax({type:"PUT",url:b("confirmToken")+"/"+d,data:JSON.stringify({email:a}),success:function(a){c(a),notie.alert(1,"Success! You are confirmed",1.5)},error:h,contentType:"application/json;charset=UTF-8",dataType:"json"})}(),window.location.hash.startsWith("#reset-password?")&&!function(){var a=getParameterByName("e"),b=getParameterByName("t");c("password-lost "+a+" with token "+b),$("#reset-password form input[name=email]").val(a),$("#reset-password form input[name=token]").val(b),f("reset-password")}(),$("#reset-password form").validate({rules:{password:{required:!0}}}),$("#reset-password form").submit(function(a){if($(a.target).valid()){var f=$("#reset-password form input[name=email]").val(),i=$("#reset-password form input[name=token]").val(),j=$("#reset-password form input[name=password]").val();d("reset-password"),$.ajax({timeout:2e4,cache:!1,type:"PUT",url:b("lostToken/"+i),data:JSON.stringify({email:f,password:j}),success:function(a){c(a),notie.alert(1,"Password correctly changed",1.5),e("reset-password"),g()},error:h("signup"),contentType:"application/json;charset=UTF-8",dataType:"json"})}a.preventDefault()}),$("#signup form").validate({rules:{email:{required:!0,email:!0},password:{required:!0}}}),$("#signup form").submit(function(a){if($(a.target).valid()){var f=$("#signup form input[name=email]").val(),i=$("#signup form input[name=password]").val();d("signup"),$.ajax({timeout:2e4,cache:!1,type:"POST",url:b("user"),data:JSON.stringify({email:f,password:i,urlBaseConfirm:document.location.protocol+"//"+document.location.host+document.location.pathname+"#confirm",skipEmailSend:!1}),success:function(a){c(a),notie.alert(1,"Success! Check you email",1.5),e("signup"),g()},error:h("signup"),contentType:"application/json;charset=UTF-8",dataType:"json"})}a.preventDefault()}),$("#password-lost form").validate({rules:{email:{required:!0,email:!0}}}),$("#password-lost form").submit(function(a){if($(a.target).valid()){var f=$("#password-lost form input[name=email]").val();d("password-lost"),$.ajax({timeout:2e4,cache:!1,type:"POST",url:b("lostToken"),data:JSON.stringify({email:f,baseUrl:document.location.protocol+"//"+document.location.host+document.location.pathname+"#reset-password",skipEmailSend:!1}),success:function(a){c(a),notie.alert(1,"Check you email",1.5),e("password-lost"),g()},error:h("password-lost"),contentType:"application/json;charset=UTF-8",dataType:"json"})}a.preventDefault()}),$("#change-password form").validate({rules:{email:{required:!0,email:!0},"old-password":{required:!0},"new-password":{required:!0}}}),$("#change-password form").submit(function(a){if($(a.target).valid()){var f=$("#change-password form input[name=email]").val(),i=$("#change-password form input[name=old-password]").val(),j=$("#change-password form input[name=new-password]").val();d("change-password"),$.ajax({timeout:2e4,cache:!1,type:"PUT",url:b("user/"+f),data:JSON.stringify({oldPassword:i,newPassword:j}),success:function(a){c(a),notie.alert(1,"Password changed",1.5),e("change-password"),g()},error:h("change-password"),contentType:"application/json;charset=UTF-8",dataType:"json"})}a.preventDefault()})},dataType:"json"})});