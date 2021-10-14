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

  const show = document.getElementById('show_modal')
  const full_img = document.getElementsByClassName('full-img')[0]
  show_img = (a) => {
      full_img.src = `img/full/${a.alt}.jpg`
      show.classList.add('open')
      
  } 
  show.omclick = () => {
    show.classList.remove('open')
  }
  show.onclick = () => {
      show.classList.remove('open')
  }