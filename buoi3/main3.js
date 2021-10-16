function cau1(){
   function sumArray(mang){
      let sum = 0;
      for (let i = 0; i < mang.length; i++){
          sum += mang[i];
      }
       
      return sum;
  }
   
  let mang = [1, 2, 3, 4];
  console.log(sumArray(mang));
}
cau1();

function cau2(){
  let array1 = ['Content1', 'Content2', 'Content3']
  const boxElement = document.querySelector('.box')
    const htmls = array1.map((index) =>{
      return `<p>${index}</p>`
    })
    boxElement.innerHTML = htmls.join('')
}
cau2()
function cau2_2() {
    const list =  document.querySelector('.box')
    const pElement2 = document.createElement("p");
    const pElement = document.createElement("p");
    pElement.innerHTML = 'before'
    list.appendChild(pElement);
    pElement2.innerHTML = 'after'
    list.insertBefore(pElement2, document.getElementsByTagName('p')[0]);
  }
  cau2_2();

  //------------------ cau 3:
  const container1 = document.getElementById('container1')
  const container2 = document.getElementById('container2')
  const add_product = document.getElementById("add_product");
  const actions = document.getElementById("actions");
  
  show_actions = () => {
    add_product.style.display = "none";
    actions.style.display = "block";
  };
  hidden_actions = () => {
    add_product.style.display = "block";
    actions.style.display = "none";
  };
  show_actions ();
    hidden_actions();

  container1.style.display = 'none'
  const server_pause = () => {
    container2.style.display = 'none'
    container1.style.display = 'block'
  }
  const server_play= () => {
    container1.style.display = 'none'
    container2.style.display = 'block'
  }

  // Câu 4:

  const modal = document.querySelector('.modal')
  const listContainerImage = document.querySelectorAll('.img-container img')
  const imageModal = document.querySelector('.full-img')


  listContainerImage.forEach(element => {
    element.addEventListener('click', function(){
      // add class open
      modal.classList.add('open')
      // get attribute alt image
      const attrImg = element.getAttribute('alt')
      // set src img
      imageModal.src = 'img/full/' + attrImg + '.jpg'
    })
  });

  modal.addEventListener('click', (e) =>{
    if(e.target.classList.contains('modal')){
      modal.classList.remove('open')
    }
  })

  ///Homework day 4:
4
const navLink = document.querySelectorAll('.nav-link')
console.log(navLink);

navLink.forEach((item) =>{
  item.addEventListener('click', ()=>{
    const section = document.getElementById(item.getAttribute("attr-id"))
    console.log(section);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
})

const button = document.querySelector('.btn-switch')
const text = document.querySelector('.code_color')
const bgSection = document.querySelector('.section_menu-color')

button.addEventListener('click', ()=>{
  const codeColor1 = Math.floor(Math.random() * 255);
  const codeColor2 = Math.floor(Math.random() * 255);
  const codeColor3 = Math.floor(Math.random() * 255);

  bgSection.style.backgroundColor = 'rgb(' + codeColor1 +', ' + codeColor2 +', ' + codeColor3 + ')'
  text.innerText = bgSection.style.backgroundColor
})

