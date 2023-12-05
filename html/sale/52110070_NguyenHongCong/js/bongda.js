function setEventClickComponent(){


  document.querySelector('#vo-thuat')
  .addEventListener("click", function(e){

    window.location.href ="trangchu.html";
  });

}

setEventClickComponent();


function setComponent(){


const elements = [

  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  },
  {

    img : `https://cdnmedia.webthethao.vn/thumb/125-90/uploads/2023-12-04/nhan-dinh-tran-wolves-vs-burnley.jpg`,
    text : `
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành vé1
Nhận định, soi kèo Monchengladbach vs Wolfsburg: Chủ nhà giành`,

  }
];

console.log(elements);


for(let i=0; i<elements.length; i++){

  document.querySelector('.component-right-1-con-1-rendering')
  .innerHTML+=`
  <div class="component-right-1-con-1">
    <div class="component-right-1-con-1-img">
    <img src="${elements[i].img}" alt="">
    <!-- <div class="o-so"> -->
    <!--   <h2>1</h2> -->
    <!-- </div> -->
    </div>
    <div class="component-right-1-con-1-text">
      <b>
        ${elements[i].text}
      </b>
    </div>  
  </div>
  `;
}



}

setComponent();


function setTitle() {

let title = document.querySelector('title');
let currentTitleValue = title.textContent;
let trangchu = "Trang chủ";
let bongda = "Bóng đá";
let bongchuyen="Bóng chyền";
let bongro='Bóng rổ';
let vothuat='Võ thuật';

if (!currentTitleValue.trim()) {

  title.textContent = `Tin tức thể thao - ${bongda}`;
}




}

window.onload = setTitle;
