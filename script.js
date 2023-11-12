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
const data4 = document.querySelector('.data4');

checkbox.addEventListener('change', function(e) {
    this.previousElementSibling.classList.toggle('text-gray8');
    this.nextElementSibling.classList.toggle('text-gray8');
    planData.forEach(el => el.classList.toggle('hidden'));
    planS3.forEach(el => el.classList.toggle('hidden'));
    data4.textContent =`${this.checked? 'Total (per year)': 'Total (per month)'}`
})

checkbox.closest('div').addEventListener('click', function(e) {
    const planCon = e.target.closest('.border-gray8');
    if(!planCon) return;

    planCon.classList.toggle('bg-blue6');
    const el =Array.from(planCon.children[1].children);
    const filtered =el.filter(e => e.classList.contains('hidden') === false )
    // data.push(filtered)
    data = filtered;

    document.querySelector('.data1').textContent = `${data[0].textContent} (monthly)`;
    document.querySelector('.data2').textContent = `${data[1].textContent}`;

})

btnCon2.addEventListener('click', function(e) {
    const btn = Array.from(this.querySelectorAll('button'))
    if(e.target === btn[0]){
        curPage--;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
    if(e.target === btn[1] && data.length > 0){
        curPage++;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
})

//step 3...
const btnCon3 = document.querySelector('.btn-con3');
const data3 = document.querySelector('.data3');
const checkEl = Array.from(document.querySelectorAll('.accent-Purple'));

/* <div class="flex justify-between">
<h3 class="text-gray8 text-sm">Online service</h3>
<p class="text-blue12 text-sm">$1/mo</p>
</div> */

btnCon3.addEventListener('click', function(e) {
    const btn = Array.from(this.querySelectorAll('button'))
    if(e.target === btn[0]){
        curPage--;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
    }
    if(e.target === btn[1] && checkEl.some(el => el.checked)){
        curPage++;
        page[curPage].style.display = 'flex';
        this.closest('section').style.display = 'none';
        activePage()
        data3.innerHTML = '';
       const checked = checkEl.filter(el => el.checked);
       checked.map(chk => {
        const noHidden = Array.from(chk.nextElementSibling.children);
        const filterHidden = noHidden.filter(el => el.classList.contains('hidden') === false);

         const html = `
         <div class="flex justify-between">
         <h3 class="text-gray8 text-sm">${filterHidden[0].firstElementChild.textContent}</h3>
         <p class="text-blue12 text-sm">${filterHidden[1].textContent}</p>
         </div>
         ` 
         data3.insertAdjacentHTML('beforeend', html);
        })
        
        
       
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