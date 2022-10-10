

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

let invoiceData = [
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

let editData =[
   {
    id:"#786364",
    name:" Gour",
    email:"gaur@gmail.com",
    date:"12 Dec, 2020",
    status:"Complete"
   },
   {
      id:"#786365",
      name:" Mullican",
      email:"mullican@gmail.com",
      date:"12 Dec, 2020",
      status:"Pending"
      
   },
   {
      id:"#786366",
      name:"Bacins",
      email:"bacins@gmail.com",
      date:"12 Dec, 2020",
      status:"Complete"
   },
   {
      id:"#786367",
      name:"Jackson",
      email:"jackson@gmail.com",
      date:"12 Dec, 2020",
      status:"Cancel"
   },
   {
      id:"#786368",
      name:"Jacob",
      email:"jacob@gmail.com",
      date:"12 Dec, 2020",
      status:"Complete"
   }

]

window.addEventListener("DOMContentLoaded",()=>{
    loadData();
 } )


function loadData(){
    var invoice = invoiceData;
   
    let listCont = document.createElement('div')
 
    for(let i=0;i<invoice.length;i++){
       
        let list = document.createElement('div')
        list.classList.add('list')  
        listCont.appendChild(list) 
        
        let checkbox = document.createElement('input')
        checkbox.type = 'checkBox'
        checkbox.id = 'checkbox'
        list.appendChild(checkbox)
    
        for(let j in invoice[i]){
    
             let txtContainer = document.createElement('span')
              txtContainer.classList.add('txtCon')
             let textAlign = document.createElement('div')
             textAlign.classList.add('textAlign')
             textAlign.innerText +=  invoice[i][j] 
             txtContainer.appendChild(textAlign)
             list.appendChild(txtContainer)
        }
        let fav = document.createElement('div')
        fav.classList.add('star')
        fav.innerHTML = ` <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.3" d="M15.1915 9.95302C14.9598 10.1644 14.8533 10.47 14.9061 10.7698L15.7014 14.9127C15.7685 15.2638 15.6111 15.6192 15.2988 15.8221C14.9929 16.0326 14.5858 16.0579 14.2521 15.8895L10.2895 13.9443C10.1518 13.8753 9.99877 13.8382 9.8422 13.834H9.59974C9.51564 13.8458 9.43333 13.8711 9.35818 13.9098L5.39476 15.8642C5.19882 15.9568 4.97694 15.9897 4.75954 15.9568C4.22989 15.8625 3.87649 15.3876 3.96327 14.8866L4.75954 10.7437C4.81232 10.4414 4.70586 10.1341 4.47414 9.91934L1.24346 6.97217C0.973264 6.72545 0.879323 6.35494 1.00279 6.02065C1.12268 5.6872 1.42865 5.44385 1.79816 5.38911L6.2447 4.782C6.58289 4.74916 6.87992 4.55549 7.03202 4.26919L8.99136 0.488388C9.03788 0.404184 9.09783 0.326715 9.1703 0.261035L9.25082 0.202092C9.29287 0.158305 9.34118 0.122097 9.39486 0.0926254L9.49238 0.0589434L9.64447 0H10.0211C10.3575 0.0328399 10.6537 0.222301 10.8084 0.505229L12.7937 4.26919C12.9369 4.54454 13.2151 4.73568 13.5363 4.782L17.9829 5.38911C18.3586 5.43964 18.6727 5.68383 18.797 6.02065C18.9142 6.35831 18.8131 6.72881 18.5376 6.97217L15.1915 9.95302Z" fill="#06152B"/>
        </svg> `
        fav.addEventListener('click',()=>{
         let invoiceId = invoice[i].id
         let index = invoice.findIndex(x => x.id === invoiceId)
         
        })


        list.appendChild(fav)
        let editButton = document.createElement('button')
        editButton.classList.add('button')
        editButton.innerHTML = 'Edit'
        editButton.addEventListener('click',()=>{
          editedIndex()
        })
        list.appendChild(editButton)

        function editedIndex(){
      
         let invoiceLength = invoice.length
         let invoiceId = invoice[i].id
         let index = invoice.findIndex(x => x.id === invoiceId)
         // console.log(index);
         let remainder =index  % invoiceLength
         console.log(remainder);
         if(remainder != -1){
            invoice[remainder] =  editData[i]
            loadData()
         }

        
         
       }


        let deleteButton = document.createElement('button')
        deleteButton.classList.add('button')
        deleteButton.innerHTML = "Delete"
        list.appendChild(deleteButton)
        deleteButton.addEventListener('click',()=>{
         // alert(invoice[i].id)
         let deleteId = invoice[i].id;
         let index = invoice.findIndex(x =>x.id === deleteId);
        invoice.splice(index,1);
         loadData();
        });
        
    }
 
    
    // if(document.getElementById('employeeList')){
        document.getElementById('employeeList').remove();
        let employeeElement= document.createElement('div');
        employeeElement.id = "employeeList";
        document.getElementById('listContainer').appendChild(employeeElement);
    // }
    document.getElementById('employeeList').appendChild(listCont)

 
 }



//  let checkboxArray = [] 
 

// window.addEventListener('DOMContentLoaded',()=>{
//     const dashboard =[
//         {
//             taskName :"UI Design",
//             startDate:"03/12/2021",
//             endDate:"05/12/2021",
//             members:"5 Members",
//             workStatus:"Pending"
//         },
//         {
//             taskName :"Logo Design",
//             startDate:"03/12/2021",
//             endDate:"05/12/2021",
//             members:"5 Members",
//             workStatus:"Pending"
//         },
      
//     ]
    
//     for(let i = 0; i <=dashboard.length; i++){
//         dashboardArray(i)
//     }
//      function dashboardArray(indexNum){
    
     
//      let selIndex = indexNum
//      console.log(selIndex);
     
//      let taskName = dashboard[selIndex]['taskName']
//      let startDate = dashboard[selIndex]['startDate']
//      let endDate = dashboard[selIndex]['endDate']
//      let members = dashboard[selIndex]['members']
//      let workStatus = dashboard[selIndex]['workStatus']
     
    
    
     
//      DashboardCheckboxArray.push(taskName,startDate,endDate,members,workStatus )
     
//      document.getElementById('fstTaskName').innerHTML = DashboardCheckboxArray[0]
//      document.getElementById('taskStartDate').innerHTML = DashboardCheckboxArray[1]
//      document.getElementById('taskEndDate').innerHTML = DashboardCheckboxArray[2]
//      document.getElementById('fstMembers').innerHTML = DashboardCheckboxArray[3]
//      document.getElementById('workStatus').innerHTML = DashboardCheckboxArray[4]
    
//      document.getElementById('sndTaskName').innerHTML = DashboardCheckboxArray[5]
//      document.getElementById('sndTaskStartDate').innerHTML = DashboardCheckboxArray[6]
//      document.getElementById('sndTaskEndDate').innerHTML = DashboardCheckboxArray[7]
//      document.getElementById('sndMembers').innerHTML = DashboardCheckboxArray[8]
//      document.getElementById('sndworkStatus').innerHTML = DashboardCheckboxArray[9]

//      }
// })
// let DashboardCheckboxArray = [];

// function selectMenuList(value){
//     unselectedMenuList()
//     document.getElementById(value).style.display="block"
// }
// function unselectedMenuList(){
//     document.getElementById("fstEditAndDeleteContainer").style.display="none"
//     document.getElementById("sndEditAndDeleteContainer").style.display="none"
//     document.getElementById("thirdEditAndDeleteContainer").style.display="none"
//     document.getElementById("fourthEditAndDeleteContainer").style.display="none"
//     document.getElementById("fifthEditAndDeleteContainer").style.display="none"

// }