let atrabiot = document.querySelectorAll(".atrabiot");
let notices = document.querySelector(".notices");
let frinds = document.querySelector(".frinds");
let ollstory = document.querySelector(".ollstory");


atrabiot.forEach(function(ele){
    ele.addEventListener("click",function(){
        ele.classList.remove("atrabiot");
        ele.classList.add ("change");
        // ele.style.position = "absolute";
        // ele.lastChild.setAttribute("width","px");
        ele.lastChild.setAttribute("height","350px");
        ollstory.style.height = "1000px";
        

        window.scrollTo({
            top : 0,
        })
        setTimeout(() => {
            ele.classList.remove("change");
            ele.classList.add ("atrabiot");
            // ele.lastChild.setAttribute("width","390px");
            ele.lastChild.setAttribute("height","130px");
            ollstory.style.height = "0px";
            

        },3000)
    })
})


//creat new post
let numbercolor = 0;
let lastpost =document.querySelector(".lastpost");
let inp = document.querySelector(".inp-newpost");
let btn = document.querySelector(".top");

btn.addEventListener("click", () =>{
    let post_js = document.createElement("div");
    post_js.classList.add("post-js")
    lastpost.appendChild(post_js);
    let value_inp = document.querySelector(".inp-newpost").value;
    let creatpost = document.createElement("div");
    let text_node = document.createTextNode(value_inp);
    creatpost.appendChild(text_node);
    creatpost.style.color = "#fff";
    creatpost.style.margin = "10px";
    creatpost.style.marginBottom = "30px";
    creatpost.style.overflowWrap = "anywhere";
    
    // if(numbercolor = 1){
    //     post_js.classList.add("post-js1")
    //     post_js.classList.remove("post-js")
    
    // }
    // else{
    //     if(numbercolor = 2){ 
    //         post_js.classList.add("post-js2")
    //         post_js.classList.remove("post-js")
    //     }
    //     else{

    //         post_js.classList.add("post-js3")
    //         post_js.classList.remove("post-js")
    //     }
    // }
    //#################################################
    let creatinformation = document.createElement("div");
    creatinformation.classList.add("text-js");
    creatinformation.style.marginLeft = "10px";
    let createimg =  document.createElement("IMG");
    createimg.style.marginRight = "20px";
    createimg.setAttribute("src", "img/myprofile-img.jpg");
    createimg.setAttribute("width", "30px");
    createimg.setAttribute("height", "30px");
    createimg.classList.add("your-img-js");
    creatinformation.appendChild(createimg);
    let text_information = document.createTextNode("omar cr7");
    creatinformation.appendChild(text_information);
    post_js.appendChild(creatinformation);
    post_js.appendChild(creatpost);
    post_js.style.minHeight = "100px";
    document.querySelector(".inp-newpost").value = "";
    let activr_inpost = document.createElement("div");
    //div
    activr_inpost.classList.add("active-inpost");
    //like
    let like = document.createElement("div");
    like.classList.add("like");
    
    //img like
    let imglike = document.createElement("img");
    imglike.setAttribute("src","img/like.png");
    imglike.setAttribute("width","15px");
    imglike.style.marginRight="5px";
    //span like
    let spanlike = document.createElement("span");
    let text_spanlike = document.createTextNode("like");
    spanlike.appendChild(text_spanlike)
    //append like in div
    like.appendChild(imglike);
    like.appendChild(spanlike);
    activr_inpost.appendChild(like);

    //comment
    comment = document.createElement("div");
    comment.classList.add("comment");
    //img comment
    let imgcomment = document.createElement("img");
    imgcomment.setAttribute("src","img/comment.png");
    imgcomment.setAttribute("width","15px");
    imgcomment.style.marginRight="5px";

    //span comment
    let spancomment = document.createElement("span");
    let text_spancomment = document.createTextNode("comment");
    spancomment.appendChild(text_spancomment)
    //append comment in div
    comment.appendChild(imgcomment);
    comment.appendChild(spancomment);
    activr_inpost.appendChild(comment);

//share
let share = document.createElement("div");
    share.classList.add("share");
    //img share
    let imgshare = document.createElement("img");
    imgshare.setAttribute("src","img/share.png");
    imgshare.setAttribute("width","15px");
    imgshare.style.marginRight="5px";

    //span share
    let spanshare = document.createElement("span");
    let text_spanshare = document.createTextNode("share");
    spanshare.appendChild(text_spanshare)
    //append share in div
    share.appendChild(imgshare);
    share.appendChild(spanshare);
    activr_inpost.appendChild(share);


    //append div
    post_js.appendChild(activr_inpost);
})

// translit the ferst post
// ##################################################

//change atrebiot src in img


let jeepx = 1;
setInterval(() => {
    let jeep = document.querySelector(".jeepx");
let randomnumber = Math.floor(Math.random()*8);
jeep.setAttribute("src", "jeep/"+randomnumber+".jpeg")

},3000)


// create new commet
// #################################
//test1
let new_comment =document.querySelector(".new-comment");
let inp2 = document.querySelector(".add-comment");
let btm2 = document.querySelector(".span");



btm2.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new_comment.appendChild(comment_js);
    let value_inp2 = inp2.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp2);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add-comment").value = "";
})

//test2
let new2 =document.querySelector(".new2");
let inp22 = document.querySelector(".add2");
let btm22 = document.querySelector(".span2");



btm22.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new2.appendChild(comment_js);
    let value_inp2 = inp2.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp2);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add2").value = "";
})

//test 3
let new3 =document.querySelector(".new3");
let inp3 = document.querySelector(".add3");
let btm3 = document.querySelector(".span3");



btm3.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new3.appendChild(comment_js);
    let value_inp3 = inp3.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp3);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add3").value = "";
})

//test 4

let new4 =document.querySelector(".new4");
let inp4 = document.querySelector(".add4");
let btm4 = document.querySelector(".span4");



btm4.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new4.appendChild(comment_js);
    let value_inp4 = inp4.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp4);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add3").value = "";
})

//test 5

let new5 =document.querySelector(".new5");
let inp5 = document.querySelector(".add5");
let btm5 = document.querySelector(".span5");



btm5.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new5.appendChild(comment_js);
    let value_inp5 = inp5.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp5);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add5").value = "";
})

//test 6
let new6 =document.querySelector(".new6");
let inp6 = document.querySelector(".add6");
let btm6 = document.querySelector(".span6");



btm6.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new6.appendChild(comment_js);
    let value_inp6 = inp6.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp6);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add6").value = "";
})

//test7

let new7 =document.querySelector(".new7");
let inp7 = document.querySelector(".add7");
let btm7 = document.querySelector(".span7");



btm7.addEventListener("click", () =>{
    let comment_js = document.createElement("div");
    comment_js.classList.add("comment-js")
    new7.appendChild(comment_js);
    let value_inp7 = inp7.value;
    let creatcomment = document.createElement("div");
    let text_node2 = document.createTextNode(value_inp7);
    creatcomment.appendChild(text_node2);
    creatcomment.style.color = "#fff";
    creatcomment.style.margin = "10px";
    creatcomment.style.marginBottom = "30px";
    creatcomment.style.overflowWrap = "anywhere";
    // creatcomment.style.background = "#1b265a";
    //#################################################
    let creatinformation2 = document.createElement("div");
    creatinformation2.classList.add("text-js");
    creatinformation2.style.marginLeft = "10px";
    let createimg2 =  document.createElement("IMG");
    createimg2.style.marginRight = "20px";
    createimg2.setAttribute("src", "img/myprofile-img.jpg");
    createimg2.setAttribute("width", "30px");
    createimg2.setAttribute("height", "30px");
    createimg2.classList.add("your-img-js");
    creatinformation2.appendChild(createimg2);
    let text_information2 = document.createTextNode("omar cr7");
    creatinformation2.appendChild(text_information2);
    comment_js.appendChild(creatinformation2);
    comment_js.appendChild(creatcomment);
    comment_js.style.minHeight = "100px";
    document.querySelector(".add7").value = "";
})


//#####################################################################################################
let sidePage = document.querySelector(".sidePage");
let side = document.querySelector("aside");
let Setting = document.querySelector(".Setting")
let Settings = document.querySelector(".Settings")
let favorite = document.querySelector(".favorite")
let favorites = document.querySelector(".favorites")

sidePage.addEventListener("click", () => {
    side.style.width = "60%";
})
Setting.addEventListener("click", ()=>{
    Settings.style.height = "200px";
})

favorite.addEventListener("click", ()=>{
    favorites.style.height = "450px";
})
let main = document.querySelector(".main");
main.addEventListener("click", () => {
    side.style.width = "0%";
    notices.style.top = "-550px";
    frinds.style.top = "-1000px";
})


//                 color site
// ###############################################

//              night


let colornight = document.querySelector("#night");
colornight.addEventListener("click",() => {
    window.localStorage.setItem("color","night");
    // /////////////////////////////////////////////
    numbercolor = 2;
    document.querySelector(".lastpost").style.background = "rgb(50 48 50 / 82%)";
    document.querySelector(".lastpost").style.color = "#fff";

    document.body.style.background = "rgb(0 0 0 / 87%)";
    document.querySelectorAll(".footer-post .span").forEach((ele) =>{
        ele.style.background = "rgb(0 0 0 / 87%)";
        ele.style.color = "#fff";
       })
    document.querySelector(".story").style.background = "rgb(50 48 50 / 82%)";
    document.querySelector(".logo").style.color = "#fff";
    document.querySelector(".new-post").style.background ="rgb(50 48 50 / 82%)";
    let ayham = document.querySelectorAll("input");
    ayham.forEach((ele) =>{
        ele.style.background = "rgb(50 48 50 / 82%)";
       })
   let ferst_post = document.querySelectorAll(".ferst-post");
   ferst_post.forEach((ele) =>{
    ele.style.background = "rgb(50 48 50 / 82%)";
   })
    document.querySelector("nav").style.background = "rgb(50 48 50 / 82%)";
   document.querySelector(".logo").style.color = "#fff";
   let laith = document.querySelectorAll(".ideas");
   laith.forEach((ele) =>{
    ele.style.color = "#fff";
   })
   let active_inpost = document.querySelectorAll(".active-inpost");
   active_inpost.forEach((ele) =>{
    ele.style.color = "#fff";
   })


})



//                  light



let colorlight = document.querySelector("#light");
colorlight.addEventListener("click",() => {
  
    window.localStorage.setItem("color","light");
    numbercolor = 1;
    document.querySelector(".lastpost").style.background = "#c1c0c0";
    document.body.style.background = "#e9e6e6";
    document.querySelectorAll(".footer-post .span").forEach((ele) =>{
        ele.style.background = "#e9e6e6";
        ele.style.color = "black";

       })
    document.querySelector(".story").style.background = "#e9e6e6";
    document.querySelector(".logo").style.color = "black";
    document.querySelector(".new-post").style.background ="#c1c0c0";
    let ayham = document.querySelectorAll("input");
    ayham.forEach((ele) =>{
        ele.style.background = "#c1c0c0";
        ele.style.color = "black";
       })
   let ferst_post = document.querySelectorAll(".ferst-post");
   ferst_post.forEach((ele) =>{
    ele.style.background = "#c1c0c0";
   })
    document.querySelector("nav").style.background = "#c1c0c0";
   document.querySelector(".logo").style.color = "black";
   let laith = document.querySelectorAll(".ideas");
   laith.forEach((ele) =>{
    ele.style.color = "black";
   })
   let active_inpost = document.querySelectorAll(".active-inpost");
   active_inpost.forEach((ele) =>{
    ele.style.color = "black";
   })


})




//                  dark


let colordark = document.querySelector("#dark");
colordark.addEventListener("click",() => {
    window.localStorage.setItem("color","dark");
    numbercolor = 0;
    document.querySelector(".lastpost").style.color = "#fff";
    document.body.style.background = "#0c112e";
    document.querySelector(".lastpost").style.background = "#1a2859";
    document.querySelectorAll(".footer-post .span").forEach((ele) =>{
        ele.style.background = "#0c112e";
        ele.style.color = "#fff";

       })
    document.querySelector(".story").style.background = "#1a2859";
    document.querySelector(".logo").style.color = "#fff";
    document.querySelector(".new-post").style.background ="#1a2859";
    let ayham = document.querySelectorAll("input");
    ayham.forEach((ele) =>{
        ele.style.background = "#1a2859";
        ele.style.color = "#fff";
       })
   let ferst_post = document.querySelectorAll(".ferst-post");
   ferst_post.forEach((ele) =>{
    ele.style.background = "#1a2859";
   })
    document.querySelector("nav").style.background = "#1a2859";
   document.querySelector(".logo").style.color = "#fff";
   let laith = document.querySelectorAll(".ideas");
   laith.forEach((ele) =>{
    ele.style.color = "#fff";
   })
   let active_inpost = document.querySelectorAll(".active-inpost");
   active_inpost.forEach((ele) =>{
    ele.style.color = "#fff";
   })



})


//                      nice

let colornice = document.querySelector("#nice");
colornice.addEventListener("click",() => {
    window.localStorage.setItem("color","nice");
    numbercolor = 3;
    // ////////////////////////////
    document.body.style.background = "linear-gradient(85deg, #365596, #00000073)";
    document.querySelector(".lastpost").style.background = "#b4ceb3";
    document.querySelectorAll(".footer-post .span").forEach((ele) =>{
        ele.style.background = "#d2d2c4";
       })
    document.querySelector(".story").style.background = "rgb(116 233 225 / 56%)";
    document.querySelector(".logo").style.color = "black";
    document.querySelector(".new-post").style.background ="#b4ceb3";
    let ayham = document.querySelectorAll("input");
    ayham.forEach((ele) =>{
        ele.style.background = "#b4ceb3";
       })
   let ferst_post = document.querySelectorAll(".ferst-post");
   ferst_post.forEach((ele) =>{
    ele.style.background = "#b4ceb3";
   })
    document.querySelector("nav").style.background = "#b4ceb3";
    // document.querySelector("aside .settings").style.background = "#b4ceb3";
    // document.querySelector(".setting").style.background = "#b4ceb3";
    // document.querySelector("favorite").style.background = "#b4ceb3";
    // document.querySelector("h3").style.background = "#b4ceb3";
    // document.querySelector(".group").forEach()
   document.querySelector(".logo").style.color = "black";
   let laith = document.querySelectorAll(".ideas");
   laith.forEach((ele) =>{
    ele.style.color = "black";
   })
   let active_inpost = document.querySelectorAll(".active-inpost");
   active_inpost.forEach((ele) =>{
    ele.style.color = "black";
   })

})
// if(window.localStorage.color = "nice"){
// document.body.style.background = "#fff";
// console.log(window.localStorage.color);
// }
// if(window.localStorage.color = "dark"){
//     document.body.style.background = "black";
//     console.log(window.localStorage.color);
//     }
console.log(window.localStorage.color);

//              notice
let spannot = document.querySelector(".spannot");
let not = document.querySelector(".not");
not.addEventListener("click", () => {
    let notices = document.querySelector(".notices");
    notices.style.top = "100px";
    spannot.style.display = "none";
})



//                  frinds
// let yes =  document.querySelectorAll(".yes");
// let spannot = document.querySelector(".spannot");
let spanfir = document.querySelector(".spanfir");
// let numbernot = spannot.innerHTML

let fir = document.querySelector(".fir");
fir.addEventListener("click", () => {
    frinds.style.top = "100px";
    spanfir.style.display = "none";
})

//              add frind
let yes =  document.querySelectorAll(".yes");
// let spannot = document.querySelector(".spannot");
// let spanfir = document.querySelector(".spanfir");
let numbernot = spannot.innerHTML
yes.forEach((ele) => {
    ele.addEventListener("click", () => {
        ele.parentElement.style.display = "none";
        numbernot = numbernot + 1 ;
        
        // spannot.
    })
})
