

function selectedPage(item){
    unselectedPage();
    document.getElementById(item).style.color="Blue";
    document.getElementById(item).style.font="cabrial"
   
}
function unselectedPage(){
    document.getElementById("dashboard").style.color="gray"
    document.getElementById("analytics").style.color="gray"
    document.getElementById("invoice").style.color="gray"
    document.getElementById("schedule").style.color="gray"
    document.getElementById("calender").style.color="gray"
    document.getElementById("messages").style.color="gray"
    document.getElementById("notification").style.color="gray"
    document.getElementById("settings").style.color="gray"
}
 function openPage(value){
    closePage();
    document.getElementById(value).style.display="block"
 }
 function closePage(){
    document.getElementById("dashboardExpContainer").style.display="none"
    document.getElementById("analyticsExpContainer").style.display="none"
    document.getElementById("invoiceExpContainer").style.display="none"
    document.getElementById("scheduleExpContainer").style.display="none"
    document.getElementById("calenderExpContainer").style.display="none"
    document.getElementById("messagesExpContainer").style.display="none"
    document.getElementById("notificationExpContainer").style.display="none"
    document.getElementById("settingsExpContainer").style.display="none"
 }

// function changeFont()
// {
//     document.getElementById("text").style.color="red";
//     document.getElementById("text").style.font="calibri";
// }
// document.addEventListener('DOMContentLoaded',()=>{
//     const invoiceListId = ["#876364","#876365","#876366","#876367","#876368"]
//     const invoiceName = ["Arrora gaur","James Mullican","Robert Bacins","Bethany Jackson","Anne Jacob"]
//     document.getElementById('firstList').innerHTML = invoiceListId[0]
//     document.getElementById('firstName').innerHTML = invoiceName[0]
//     document.getElementById('secondList').innerHTML = invoiceListId[1]
//     document.getElementById('secondName').innerHTML = invoiceName[1]
//     document.getElementById('thirdList').innerHTML = invoiceListId[2]
//     document.getElementById('thirdName').innerHTML = invoiceName[2]
//     document.getElementById('fourthList').innerHTML = invoiceListId[3]
//     document.getElementById('fourthName').innerHTML = invoiceName[3]
//     document.getElementById('fifthList').innerHTML = invoiceListId[4]
//     document.getElementById('fifthName').innerHTML = invoiceName[4]
        
//     })
window.addEventListener("DOMContentLoaded",()=>{
    const invoice = [
       {
       id:"#876364",
       name:"Arrora Gour",
       email:"arroragaur@gmail.com",
       date:"12 Dec, 2020",
       status:"Complete"
    },
       {
       id:"#876365",
       name:"James Mullican",
       email:"jamesmullican@gmail.com",
       date:"12 Dec, 2020",
       status:"Pending"
       
    },
       {
       id:"#876366",
       name:"Robert Bacins",
       email:"robert bacins@gmail.com",
       date:"12 Dec, 2020",
       status:"Complete"
    },
       {
       id:"#876367",
       name:"Bethany Jackson",
       email:"bethanyjackson@gmail.com",
       date:"12 Dec, 2020",
       status:"Cancel"
    },
       {
       id:"#876368",
       name:"Anne Jacob",
       email:"annejacob@gmail.com",
       date:"12 Dec, 2020",
       status:"Complete"
    }
   ]
   
   let listCont = document.createElement('div')



   for(let i=0;i<invoice.length;i++){
      
       list = document.createElement('div')
       list.classList.add('list')  
       listCont.appendChild(list) 
       
       let checkbox = document.createElement('input')
       checkbox.type = 'checkBox'
       checkbox.id = 'checkbox'
       list.appendChild(checkbox)
   
       for(let j in invoice[i]){
   
        let txtCon = document.createElement('span')
        txtCon.classList.add('txtCon')
        let textAlign = document.createElement('div')
        textAlign.classList.add('textAlign')
        textAlign.innerText +=  invoice[i][j] 
        txtCon.appendChild(textAlign)
        list.appendChild(txtCon)
        // let span = document.createElement('span')
        // span.classList.add('mySpan')
        // span.innerHTML =  invoice[i][j] 
        // txtCon.appendChild(span)
        // listAlign.appendChild(txtCon)
           
       }
   }
   
   document.getElementById('employeeList').appendChild(listCont)
   
   })
 let checkboxArray = [] 
 

window.addEventListener('DOMContentLoaded',()=>{
    const dashboard =[
        {
            taskName :"UI Design",
            startDate:"03/12/2021",
            endDate:"05/12/2021",
            members:"5 Members",
            workStatus:"Pending"
        },
        {
            taskName :"Logo Design",
            startDate:"03/12/2021",
            endDate:"05/12/2021",
            members:"5 Members",
            workStatus:"Pending"
        },
      
    ]
    
    for(let i = 0; i <=dashboard.length; i++){
        dashboardArray(i)
    }
     function dashboardArray(indexNum){
    
     
     let selIndex = indexNum
     console.log(selIndex);
     
     let taskName = dashboard[selIndex]['taskName']
     let startDate = dashboard[selIndex]['startDate']
     let endDate = dashboard[selIndex]['endDate']
     let members = dashboard[selIndex]['members']
     let workStatus = dashboard[selIndex]['workStatus']
     
    
    
     
     DashboardCheckboxArray.push(taskName,startDate,endDate,members,workStatus )
     
     document.getElementById('fstTaskName').innerHTML = DashboardCheckboxArray[0]
     document.getElementById('taskStartDate').innerHTML = DashboardCheckboxArray[1]
     document.getElementById('taskEndDate').innerHTML = DashboardCheckboxArray[2]
     document.getElementById('fstMembers').innerHTML = DashboardCheckboxArray[3]
     document.getElementById('workStatus').innerHTML = DashboardCheckboxArray[4]
    
     document.getElementById('sndTaskName').innerHTML = DashboardCheckboxArray[5]
     document.getElementById('sndTaskStartDate').innerHTML = DashboardCheckboxArray[6]
     document.getElementById('sndTaskEndDate').innerHTML = DashboardCheckboxArray[7]
     document.getElementById('sndMembers').innerHTML = DashboardCheckboxArray[8]
     document.getElementById('sndworkStatus').innerHTML = DashboardCheckboxArray[9]

     }
})
let DashboardCheckboxArray = [];

function selectMenuList(value){
    unselectedMenuList()
    document.getElementById(value).style.display="block"
}
function unselectedMenuList(){
    document.getElementById("fstEditAndDeleteContainer").style.display="none"
    document.getElementById("sndEditAndDeleteContainer").style.display="none"
    document.getElementById("thirdEditAndDeleteContainer").style.display="none"
    document.getElementById("fourthEditAndDeleteContainer").style.display="none"
    document.getElementById("fifthEditAndDeleteContainer").style.display="none"

}