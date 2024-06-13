const navDialog = document.getElementById("nav-dialog");
function handleMenu(){
    navDialog.classList.toggle('hidden');
}
const initLTR = -48*4;
const initRTL = 36*4;
function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if(isIntersecting){
            document.addEventListener('scroll', scrollHandler);
        }
        else{
            document.removeEventListener('scroll',scrollHandler);
        }
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);
    function scrollHandler(){
        
        const translateX = (window.innerHeight-element.getBoundingClientRect().top)*speed;
        let totaltanslate = 0;
        if(isLTR){
            totaltanslate = translateX+initLTR
        }
        else{
            totaltanslate = -(translateX+initRTL)
        }
        element.style.transform = `translateX(${totaltanslate}px)`;
    }
}
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
