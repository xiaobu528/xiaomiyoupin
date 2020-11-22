var Message = {
	alert: function(msg) {
			if(document.querySelector(".message-alert")) return;
			var div = document.createElement('div');
			div.className = "message-alert";
			div.style.position = "fixed";
			div.style.left = "0";
			div.style.top = "0";
			div.style.width = "100%";
			div.style.height = "100%";
			div.style.backgroundColor = "rgba(0,0,0,0.5)";
			div.innerHTML += `
				<div style="
					min-width: 300px;max-width: 500px;
					position: absolute;left: 50%;top: 50%;
					transform: translate(-50%,-50%);
					background-color: #fff;
					padding: 0 20px 50px 20px;
					box-shadow: 0 0 10px 0 #fff;
				">
					<h2 style="margin-top:20px;">提示</h2>
					<p style="text-indent: 2em; color: #999;margin-top:30px;font-size:16px;">${ msg }</p>
					<input type="button" value="确定" class="btn-ok" style="border-radius: 10px;width:60px;height:30px;margin-top:20px;margin-left:150px;background-color: #ffdd00;color:white;" />
				</div>
			`;
			document.body.appendChild(div);
			div.querySelector('input.btn-ok').onclick = function() {
				document.body.removeChild(div);
			};
		},
		confirm: function(msg,callback){
			if(document.querySelector(".message-confirm")) return;
			var div = document.createElement('div');
			div.className = "message-confirm";
			div.style.position = "fixed";
			div.style.left = "0";
			div.style.top = "0";
			div.style.width = "100%";
			div.style.height = "100%";
			div.style.backgroundColor = "rgba(0,0,0,0.5)";
			div.innerHTML += `
				<div style="
					min-width: 300px;max-width: 500px;
					position: absolute;left: 50%;top: 50%;
					transform: translate(-50%,-50%);
					background-color: #fff;
					padding: 0 20px 50px 20px;
					border-radius: 10px;
				">
					<h2 style="margin-top:20px;">提示</h2>
					<p style="text-indent: 2em; color: #999;margin-top:30px;font-size:16px;">${ msg }</p>
					<input type="button" value="确定" class="btn-ok" style="border-radius: 10px;width:60px;height:30px;margin-top:20px;margin-left:150px;background-color: #ffdd00;color:white;" />
					<input type="button" value="取消" class="btn-cancel" style="border-radius: 10px;width:60px;height:30px;background-color: #ffdd00;color:white;" />
				</div>
			`;
			document.body.appendChild(div);
			div.querySelector('input.btn-ok').onclick = function() {
				document.body.removeChild(div);
				if(typeof callback === "function") callback();
			};
			div.querySelector('input.btn-cancel').onclick = function() {
				document.body.removeChild(div);
			};
		 
			
		},
	notice: function(msg){
		var div = document.createElement("div");
		div.className = "message-notice";
		div.innerText = msg;
		div.style.left = "50%";
		div.style.top = "50%";
		div.style.transform = "translate(-50%,-50%)";
		div.style.padding = "10px 20px";
		div.style.backgroundColor = "black";
		div.style.position = "fixed";
		div.style.color = "white";
		document.body.appendChild(div);
		setTimeout(function(){
			document.body.removeChild(document.querySelector(".message-notice"));
		},2000);
	}
};