(function(){
	window.onload = function() {
		//represents an audio processing graph built from audio modules linked together 
		//contructor is AudioContext
		var ctx = new AudioContext();
		var audio = document.getElementById('myAudio');
		var audioSrc = ctx.createMediaElementSource(audio);
		var analyser = ctx.createAnalyser();
		//connecting the media element source with the analyser
		audioSrc.connect(analyser);
		//frequency bit to get the info about how many values i will receive from the analyser
		var frequencyData = new Uint8Array(analyser.frequencyBinCount);
		console.log(frequencyData);

		function renderFrame() {
			requestAnimationFrame(renderFrame);
			//updateData in frequencydata
			analyser.getByteFrequencyData(frequencyData);
		}
		audio.play();
		renderFrame();
	}
})();
