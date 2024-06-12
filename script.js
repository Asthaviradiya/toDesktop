const navDialog = document.getElementById("nav-dialog");
function handleMenu(){
    navDialog.classList.toggle('hidden');
}
function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        
    }

    const intersectionObserver = new IntersectionObserver(intersectionCallback);

    intersectionObserver.observe(element);
}
const line1 = document.getElementById('line-1');
const line2 = document.getElementById('line-2');
const line3 = document.getElementById('line-3');

setupIntersectionObserver(line1,true,0.15);
setupIntersectionObserver(line2,false,0.15);
setupIntersectionObserver(line3,true,0.15);
