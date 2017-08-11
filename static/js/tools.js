// 工具

var tools = {
	progress: {
		start () {
			if ( !document.querySelector('.progress-forward') )
			{
				var div = document.createElement('div');
				div.className = 'progress';
				div.innerHTML = '<div class="progress-forward"></div>';
				document.body.appendChild(div);
			}
		},
		end () {
			var progress = document.querySelector('.progress');
			if ( progress )
			{	
				progress.classList.add('active');
				setTimeout(() => {
					document.body.removeChild(progress);
				}, 210);
			}
		}
	}
};



export default tools;




