let input = document.getElementById("inputTask")
let addTask = document.getElementById("addTask")
let tasks = document.getElementById("givenTasks")

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


let table = '<table>'
table +='<tr>'
for(let j in invoice[0]){
 table += '<th>' + j + '<th>'
 }
 table +='</tr>'
 
for(let i=0;i<invoice.length;i++){
  table += '<tr>'
 	for(let d in invoice[i]){
 		table += '<td>'+invoice[i][d]+'<td>'
      console.log(table);
	}
}
table += '</tr>'
table += '</table>'
document.getElementById("menuList").innerHTML = table


})