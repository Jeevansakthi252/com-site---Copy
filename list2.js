window.addEventListener("DOMContentLoaded",()=>{
    const invoice = [
       {
       id:"#876364",
       name:"Arrora Gour",
       email:"arroragaur@gmail.com",
       date:"12 Dec, 2020",
    },
       {
       id:"#876365",
       name:"James Mullican",
       email:"jamesmullican@gmail.com",
       date:"12 Dec, 2020",
    },
       {
       id:"#876366",
       name:"Robert Bacins",
       email:"robert bacins@gmail.com",
       date:"12 Dec, 2020",
    },
       {
       id:"#876367",
       name:"Bethany Jackson",
       email:"bethanyjackson@gmail.com",
       date:"12 Dec, 2020",
    },
       {
       id:"#876368",
       name:"Anne Jacob",
       email:"annejacob@gmail.com",
       date:"12 Dec, 2020",
    }
   ]
   
  
let listCont = document.createElement('div')



for(let i=0;i<invoice.length;i++){
   
    list = document.createElement('div')
    list.classList.add('list')  
    listCont.appendChild(list) 
    let listAlign = document.createElement('div')
    list.appendChild(listAlign)
    listAlign.classList.add('listAlign')

    for(let j in invoice[i]){

        let span = document.createElement('span')
        span.classList.add('mySpan')
        
        span.innerHTML =  invoice[i][j] 
        listAlign.appendChild(span)
        
    }
}

document.getElementById('employeeList').appendChild(listCont)

})