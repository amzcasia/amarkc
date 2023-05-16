let itemContainer = document.getElementById('itemContainer');
let itemElements = document.querySelectorAll('.itemElement');
let shiftLeft = document.getElementById('shiftLeft');
let shiftRight = document.getElementById('shiftRight');
let beginBtn = document.getElementById('beginBtn');

let shiftIndex = 3;
let maxIndex = itemElements.length;
//console.log(`itemElement# 3 is: ${itemElements[2]}`);

itemContainer.style.transform = `translate(-900px)`;


function nextItem(){
    itemContainer.style.transition = 'transform 0.3s ease-in-out';
    shiftIndex++;
    console.log(shiftIndex);
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    setTimeout(()=>{
        if(shiftIndex >= maxIndex-3){ //maxindex = 11, will shift at 8
        console.log('reset at: ' + shiftIndex);
        itemContainer.style.transition = 'none';
        itemContainer.style.transitionDuration = '0s';
            console.log('done waiting');            
            itemContainer.style.transform = `translate(-900px)`;
            shiftIndex = 3;
            
        }
    },301);
}

/*
0   3    0       *
1   4   -300
2   5   -600
3   1   -900
4   2   -1200
5   3   -1500
6   4   -1800
7   5   -2100
8   1   -2400 *
9   2   -2700
10  3   -3000


*/

function prevItem(){
    itemContainer.style.transition = 'transform 0.3s ease-in-out';
    shiftIndex--;
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    
    console.log(shiftIndex);
    setTimeout(()=>{
        if(shiftIndex <= 0){ //maxindex = 11, will shift at 8
            console.log('prev');
            itemContainer.style.transition = 'none';    
            itemContainer.style.transitionDuration = '0s';
            itemContainer.style.transform = `translate(-1500px)`;
            shiftIndex = 5;
        }
    },310);
}


shiftRight.addEventListener('click', () => {nextItem()});
/*
shiftRight.addEventListener('click', () => {
    
    shiftIndex++;
    console.log(shiftIndex);
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    setTimeout(()=>{
        if(shiftIndex >= maxIndex-3){ //maxindex = 11, will shift at 8
        console.log('reset at: ' + shiftIndex);
        itemContainer.style.transition = 'none';
        itemContainer.style.transitionDuration = '0s';
            console.log('done waiting');            
            itemContainer.style.transform = `translate(-900px)`;
            shiftIndex = 3;
            itemContainer.style.transition = 'transform 0.3s ease-in-out';
        }
    },301);
});*/

//beginBtn.addEventListener('click', nextItem());

shiftLeft.addEventListener('click', () => {prevItem()});

    /*
    console.log('left')
    if(shiftIndex < 1) return;
    shiftIndex--;
    console.log(shiftIndex);
    itemContainer.style.transform = `translate(${-shiftIndex*300}px)`;
    setTimeout(nextItem(), 400);
    //nextItem();
    
    
});  */

itemContainer.addEventListener('transitionend',() =>{
    //console.log('test');
    //nextItem();
});


