"use strict";

const navCon = document.querySelector('.nav-con');
const navBars = document.querySelectorAll('.nav-con li');
const pageNums = document.querySelectorAll('.nav-con li div')

const pages = document.querySelectorAll('div section')
const inputs = document.querySelectorAll('form div input')
const small = document.querySelectorAll('form div small')

//converting nodelist to array
const navBar = Array.from(navBars)
const pageNum = Array.from(pageNums)
const page = Array.from(pages)
const input = Array.from(inputs)

//settings...
let curPage = 0;

//handling the back and next button
// const main = document.querySelector('.mainCon');
// main.addEventListener('click', function(e) {
//     const btnNext = e.target.classList.contains('btn-next')
//     const btnBack = e.target.classList.contains('btn-back')
    
//     if(!btnNext && !btnBack)return;
//     console.log(btnNext)
//     if(btnBack){
//         curPage--;
//         page[curPage].style.display = 'flex';
//         e.target.closest('section').style.display = 'none';
//         activePage()
//         return;
//     }
//     if(btnNext){
//         curPage++;
//         page[curPage].style.display = 'flex';
//         e.target.closest('section').style.display = 'none';
//         activePage()
//         return;
//     }
    
// })

function activePage() {
    pageNum.forEach(el => el.style.backgroundColor = 'inherit')
    pageNum[curPage].style.backgroundColor = 'hsl(206, 94%, 87%)'
}
activePage()

//step 1

function init() {

    input.forEach(el => el.addEventListener('input', function(e) {
        e.target.style.borderColor = 'hsl(243, 100%, 62%)';
    }))

    page[curPage].addEventListener('click', function(e) {
        
        const btn = this.querySelector('button');
        if(e.target === btn){
            if(input.every(inp => inp.value !== '')){
              this.style.display = 'none';
              curPage++
              page[curPage].style.display = 'flex';
              activePage()
            }
            else{
                input.forEach((inp,i) => {
                    if(inp.value === ''){
                        small[i].style.display = 'block';
                        small[i].textContent = 'This field is required';
                        inp.style.borderColor = 'hsl(354, 84%, 57%)'
                    }
                    else{
                        small[i].style.display = '';
                        small[i].textContent = '';  
                    }
                })
            }
          
        }
    }
        
    )
}
init()

// let data =[];
let data;

//step 2 ...
const planData = Array.from(document.querySelectorAll('.plan-data'));
const planS3 = Array.from(document.querySelectorAll('.plan-s3'));
const checkbox = document.querySelector('.checkbox input');
const btnCon2 = document.querySelector('.btn-con');

checkbox.addEventListener('change', function(e) {
    this.previousElementSibling.classList.toggle('text-gray8');
    this.nextElementSibling.classList.toggle('text-gray8');
    planData.forEach(el => el.classList.toggle('hidden'));
    planS3.forEach(el => el.classList.toggle('hidden'));
})

checkbox.closest('div').addEventListener('click', function(e) {
    const planCon = e.target.closest('.border-gray8');
    if(!planCon) return;

    planCon.classList.toggle('bg-blue6');
    const el =Array.from(planCon.children[1].children);
    const filtered =el.filter(e => e.classList.contains('hidden') === false )
    // data.push(filtered)
    data = filtered;
    
    console.log(data) 

})

btnCon2.addEventListener('click', function(e) {
    const btn = Array.from(this.querySelectorAll('button'))
    if(e.target === btn[0]){
        curPage--;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
    if(e.target === btn[1]){
        curPage++;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
    console.log(data)
})

//step 3...
const btnCon3 = document.querySelector('.btn-con3');


btnCon3.addEventListener('click', function(e) {
    const btn = Array.from(this.querySelectorAll('button'))
    if(e.target === btn[0]){
        curPage--;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
    if(e.target === btn[1]){
        curPage++;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
})

//step 4.....
const btnCon4 = document.querySelector('.btn-con4');
btnCon4.addEventListener('click', function(e) {
    const btn = Array.from(this.querySelectorAll('button'))
    if(e.target === btn[0]){
        curPage--;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
    if(e.target === btn[1]){
        curPage++;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
    }
})

// console.log(checkbox.closest('section'))