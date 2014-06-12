var receiver = new cast.receiver.Receiver(
	'1B4C4253', [cast.receiver.RemoteMedia.NAMESPACE], "", 5);
var remoteMedia = new cast.receiver.RemoteMedia();
remoteMedia.addChannelFactory(
	receiver.createChannelFactory(cast.receiver.RemoteMedia.NAMESPACE));

receiver.start();

window.addEventListener('load', function() {
	var elem = document.getElementById("artist-image");
	remoteMedia.setMediaElement(elem);
});
