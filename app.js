 
function show(){ 
    alert("yes the js is working ");
}



let addFrm = document.addfrm; 
let text = addFrm.add;  
let ul= document.querySelector(".todos");
let addItem = (item)=> {  
    let str = ` <li><span>${item}</span><i class="fa fa-trash-o delete" aria-hidden="true"></i></li> `;
    ul.innerHTML+=str;
}
addFrm.addEventListener("submit",(e)=>{  
       e.preventDefault();
       let item=text.value;  
       if(item.length>0){
       addItem(item); 
       text.value=""; 
       }
});  

ul.addEventListener("click",(e)=>{  
    // check wheather clicked item is I tag
    if(e.target.nodeName==="I"){  
        // remove parent of I tag
        e.target.parentElement.remove();
    }
}); 
 
let searchItem = (text)=>{  
    let listItems = ul.children; 
    for(let li of listItems){ 
        if(li.innerText.toLowerCase().indexOf(text)=== -1) { 
            li.classList.add("filtered");
        } 
        else { 
            li.classList.remove("filtered");
        }
    }

}
let searchText = document.querySelector(".search input"); 
searchText.addEventListener("keyup",(e)=>{  
  searchItem(searchText.value.toLowerCase());

});

