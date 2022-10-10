

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
    invoiceList();
 } )


function invoiceList(){
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
      //   fav.addEventListener('click',()=>{
      //    log("hai")
      //    let invoiceId = invoice[i].id
      //    let index = invoice.findIndex(x => x.id === invoiceId)
      //    alert()
      //    document.querySelector('').style.color='green'
      //   })


        list.appendChild(fav)

      //   let listDots = document.createElement('div')
      //   listDots.classList.add('listDots')
      //   let menuList = document.createElement('div')
      //   menuList.classList.add('menuList')
      //   menuList.innerHTML = ` <svg width="20" height="10" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      //   <g opacity="0.3">
      //   <path d="M13.4874 0.512567C12.804 -0.170848 11.696 -0.170848 11.0126 0.512567C10.3291 1.19598 10.3291 2.30402 11.0126 2.98744C11.696 3.67085 12.804 3.67085 13.4874 2.98744C14.1709 2.30405 14.1709 1.19601 13.4874 0.512567Z" fill="#06152B"/>
      //   <path d="M8.23744 0.512567C7.55402 -0.170848 6.44598 -0.170848 5.76257 0.512567C5.07915 1.19598 5.07915 2.30402 5.76257 2.98744C6.44598 3.67085 7.55402 3.67085 8.23744 2.98744C8.92085 2.30405 8.92085 1.19601 8.23744 0.512567Z" fill="#06152B"/>
      //   <path d="M2.98744 0.512567C2.30402 -0.170848 1.19598 -0.170848 0.512564 0.512567C-0.170852 1.19598 -0.170852 2.30402 0.512564 2.98744C1.19598 3.67085 2.30402 3.67085 2.98744 2.98744C3.67085 2.30405 3.67085 1.19601 2.98744 0.512567Z" fill="#06152B"/>
      //   </g>
      //   </svg>`
      //   listDots.addEventListener('click',()=>{
            
      //   })
      //   listDots.appendChild(menuList)
      //   list.appendChild(listDots)
        
        let editButton = document.createElement('div')
        editButton.id = "invoiceEdit"
        editButton.innerHTML = `<p>Edit</p>`
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
         // console.log(remainder);
         if(remainder != -1){
            invoice[remainder] =  editData[i]
            invoiceList()
         }

        
         
       }


        let deleteButton = document.createElement('div')
        deleteButton.id = 'invoiceDelete'
        deleteButton.innerHTML =  `<p>Delete</p>`
        list.appendChild(deleteButton)
        deleteButton.addEventListener('click',()=>{
         // alert(invoice[i].id)
         let deleteId = invoice[i].id;
         let index = invoice.findIndex(x =>x.id === deleteId);
        invoice.splice(index,1);
        invoiceList();
        });
        
    }
 
    
    
        document.getElementById('employeeList').remove();
        let employeeElement= document.createElement('div');
        employeeElement.id = "employeeList";
        document.getElementById('listContainer').appendChild(employeeElement);
    
    document.getElementById('employeeList').appendChild(listCont)

 
 }
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
    
    const dashboardEditData =[
      {
          taskName :"UI",
          startDate:"03/12/2021",
          endDate:"05/12/2021",
          members:"5 Members",
          workStatus:"Pending"
      },
      {
          taskName :"Logo",
          startDate:"03/12/2021",
          endDate:"05/12/2021",
          members:"5 Members",
          workStatus:"Pending"
      },
    
  ]
    window.addEventListener("DOMContentLoaded",()=>{
      dashboardList();
   })

   function dashboardList(){
      
      let dashboardListCon = document.createElement('div') 

      for(let i = 0;i< dashboard.length;i++){

         let list = document.createElement('div')
         list.classList.add('dashList')
         dashboardListCon.appendChild(list)

         let checkbox = document.createElement('input')
         checkbox.type = 'checkBox'
         checkbox.id = 'dashboardCheckBox'
         list.appendChild(checkbox)

         for(let d in dashboard[0]){

           let wordContainer = document.createElement('span')
           wordContainer.classList.add('wordCon')
           let textAlign = document.createElement('div')
           textAlign.classList.add('textAlign')
           textAlign.innerText +=  dashboard[i][d] 
           wordContainer.appendChild(textAlign)
           list.appendChild(wordContainer)
         }

         let editButton = document.createElement('div')
        editButton.id = "edit"
        editButton.innerHTML=`<svg width="15" height="13" style="margin-top: 17px;" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83395 7.56796L6.73901 2.51797C6.95125 2.24565 7.02671 1.9308 6.95596 1.61022C6.89465 1.31878 6.71543 1.04168 6.44661 0.83146L5.79105 0.310695C5.22038 -0.143182 4.51294 -0.0954059 4.10734 0.425359L3.66873 0.994378C3.61214 1.06556 3.62629 1.17067 3.69703 1.22801C3.69703 1.22801 4.80535 2.11665 4.82893 2.13576C4.90439 2.20742 4.96099 2.30298 4.97513 2.41764C4.99872 2.64219 4.84308 2.85241 4.61198 2.88107C4.50351 2.89541 4.39975 2.86196 4.32429 2.79985L3.15938 1.87299C3.10278 1.83047 3.01789 1.83955 2.97073 1.89688L0.202284 5.48012C0.023066 5.70467 -0.0382454 5.99611 0.023066 6.27799L0.376785 7.81162C0.39565 7.89284 0.466394 7.95017 0.551287 7.95017L2.10765 7.93106C2.39063 7.92628 2.65474 7.79728 2.83395 7.56796ZM5.01328 7.09027H7.5511C7.7987 7.09027 8.00008 7.29428 8.00008 7.5451C8.00008 7.79641 7.7987 7.99994 7.5511 7.99994H5.01328C4.76567 7.99994 4.56429 7.79641 4.56429 7.5451C4.56429 7.29428 4.76567 7.09027 5.01328 7.09027Z" fill="#3A36DB"/>
        </svg>`
        editButton.addEventListener('click',()=>{
          editedIndex()
        })
        list.appendChild(editButton)

        function editedIndex(){
      
         let dashboardLength = dashboard.length
         let dashboardId = dashboard[i].taskName
         let index = dashboard.findIndex(x => x.taskName === dashboardId)
         
         let remainder =index  % dashboardLength
         // console.log(remainder);
         if(remainder != -1){
            dashboard[remainder] =  dashboardEditData[i]
            dashboardList()
         }
       }


        let deleteButton = document.createElement('div')
        deleteButton.id = 'delete'
        deleteButton.innerHTML =  ` <svg width="20" height="20" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.83564 1.65752C9.03447 1.65752 9.2 1.8226 9.2 2.03267V2.22689C9.2 2.43184 9.03447 2.60204 8.83564 2.60204H0.364858C0.165528 2.60204 0 2.43184 0 2.22689V2.03267C0 1.8226 0.165528 1.65752 0.364858 1.65752H1.85511C2.15783 1.65752 2.42129 1.44234 2.48939 1.13874L2.56743 0.79017C2.68872 0.315352 3.08788 0 3.54469 0H5.65531C6.10715 0 6.51078 0.315352 6.6276 0.765126L6.71111 1.13823C6.77871 1.44234 7.04216 1.65752 7.34539 1.65752H8.83564ZM8.0785 8.75748C8.23409 7.30747 8.50649 3.86262 8.50649 3.82786C8.51643 3.72257 8.48213 3.62291 8.41403 3.54267C8.34096 3.46753 8.2485 3.42307 8.1466 3.42307H1.05721C0.954812 3.42307 0.857383 3.46753 0.78978 3.54267C0.721183 3.62291 0.687381 3.72257 0.692352 3.82786C0.693265 3.83425 0.70304 3.95559 0.719381 4.15846C0.791974 5.05967 0.994163 7.56973 1.12481 8.75748C1.21727 9.63249 1.7914 10.1824 2.62302 10.2024C3.26475 10.2172 3.92587 10.2223 4.6019 10.2223C5.23867 10.2223 5.88537 10.2172 6.54699 10.2024C7.40744 10.1876 7.98107 9.64732 8.0785 8.75748Z" fill="#FF69B4"/>
        </svg>   `
        list.appendChild(deleteButton)
        deleteButton.addEventListener('click',()=>{
         // alert(invoice[i].id)
         let dashboardTaskName = dashboard[i].taskName
         let index = dashboard.findIndex(x => x.taskName === dashboardTaskName)
         dashboard.splice(index,1);
         dashboardList();
        });
     
      }

      document.getElementById("todoListContainer").remove();
      let employeeElement= document.createElement('div');
      employeeElement.id = "todoListContainer";
      document.querySelector('.todoContainer').appendChild(employeeElement);

         
      document.getElementById('todoListContainer').appendChild(dashboardListCon)
   }








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