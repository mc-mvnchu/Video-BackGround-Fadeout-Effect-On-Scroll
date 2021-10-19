let video = document.querySelector('video');
window.addEventListener('scroll', function(){
    let value = 1 + this.window.scrollY/-600;
    video.style.opacity = value;
});