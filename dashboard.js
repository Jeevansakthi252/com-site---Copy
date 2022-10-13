const invoiceData = [
  {
    id: "#876364",
    name: "Arrora Gour",
    email: "arroragaur@gmail.com",
    date: "12 Dec 2020",
    status: "Complete",
  },
  {
    id: "#876365",
    name: "James Mullican",
    email: "jamesmullican@gmail.com",
    date: "12 Dec 2020",
    status: "Pending",
  },
  {
    id: "#876366",
    name: "Robert Bacins",
    email: "robert bacins@gmail.com",
    date: "12 Dec 2020",
    status: "Complete",
  },
  {
    id: "#876367",
    name: "Bethany Jackson",
    email: "bethanyjackson@gmail.com",
    date: "12 Dec 2020",
    status: "Cancel",
  },
  {
    id: "#876368",
    name: "Anne Jacob",
    email: "annejacob@gmail.com",
    date: "12 Dec 2020",
    status: "Complete",
  },
];

const editData = [
  {
    id: "#786364",
    name: " Gour",
    email: "gaur@gmail.com",
    date: "12 Dec 2020",
    status: "Complete",
  },
  {
    id: "#786365",
    name: " Mullican",
    email: "mullican@gmail.com",
    date: "12 Dec 2020",
    status: "Pending",
  },
  {
    id: "#786366",
    name: "Bacins",
    email: "bacins@gmail.com",
    date: "12 Dec 2020",
    status: "Complete",
  },
  {
    id: "#786367",
    name: "Jackson",
    email: "jackson@gmail.com",
    date: "12 Dec 2020",
    status: "Cancel",
  },
  {
    id: "#786368",
    name: "Jacob",
    email: "jacob@gmail.com",
    date: "12 Dec 2020",
    status: "Complete",
  },
];

const dashboard = [
  {
    taskName: "UI Design",
    startDate: "03/12/2021",
    endDate: "05/12/2021",
    members: "5 Members",
    workStatus: "Pending",
  },
  {
    taskName: "Logo Design",
    startDate: "03/12/2021",
    endDate: "05/12/2021",
    members: "5 Members",
    workStatus: "Pending",
  },
];

const dashboardEditData = [
  {
    taskName: "UI",
    startDate: "03/12/2021",
    endDate: "05/12/2021",
    members: "5 Members",
    workStatus: "Pending",
  },
  {
    taskName: "Logo",
    startDate: "03/12/2021",
    endDate: "05/12/2021",
    members: "5 Members",
    workStatus: "Pending",
  },
];

function selectedPage(item) {
  unselectedPage();
  document.getElementById(item).style.color = "Blue";
  document.getElementById(item).style.font = "cabrial";
}

function unselectedPage() {
  document.getElementById("dashboard").style.color = "gray";
  document.getElementById("analytics").style.color = "gray";
  document.getElementById("invoice").style.color = "gray";
  document.getElementById("schedule").style.color = "gray";
  document.getElementById("calender").style.color = "gray";
  document.getElementById("messages").style.color = "gray";
  document.getElementById("notification").style.color = "gray";
  document.getElementById("settings").style.color = "gray";
}

function openPage(value) {
  closePage();
  document.getElementById(value).style.display = "block";
}

function closePage() {
  document.getElementById("dashboardExpContainer").style.display = "none";
  document.getElementById("analyticsExpContainer").style.display = "none";
  document.getElementById("invoiceExpContainer").style.display = "none";
  document.getElementById("scheduleExpContainer").style.display = "none";
  document.getElementById("calenderExpContainer").style.display = "none";
  document.getElementById("messagesExpContainer").style.display = "none";
  document.getElementById("notificationExpContainer").style.display = "none";
  document.getElementById("settingsExpContainer").style.display = "none";
}

window.addEventListener("DOMContentLoaded", () => {
  dashboardList();
});
window.addEventListener("DOMContentLoaded", () => {
  invoiceList();
});

function invoiceList() {
  var invoice = invoiceData;

  let listCont = document.createElement("div");

  for (let i = 0; i < invoice.length; i++) {
    let list = document.createElement("div");
    list.classList.add("list");
    listCont.appendChild(list);

    let checkbox = document.createElement("input");
    checkbox.type = "checkBox";
    checkbox.id = "checkbox";
    list.appendChild(checkbox);

    let textCon = document.createElement("div");
    textCon.classList.add("textCon");

    let idContainer = document.createElement("div");
    idContainer.classList.add("idContainer");
    textCon.appendChild(idContainer);

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("nameContainer");
    textCon.appendChild(nameContainer);

    let emailContainer = document.createElement("div");
    emailContainer.classList.add("emailContainer");
    textCon.appendChild(emailContainer);

    let dateContainer = document.createElement("div");
    dateContainer.classList.add("dateContainer");
    textCon.appendChild(dateContainer);

    let statusContainer = document.createElement("div");
    statusContainer.id = "statusContainer";

    textCon.appendChild(statusContainer);

    let id = document.createElement("div");
    id.classList.add("id");
    idContainer.appendChild(id);

    let name = document.createElement("div");
    name.id = "name";
    nameContainer.appendChild(name);

    let email = document.createElement("div");
    email.id = "email";
    emailContainer.appendChild(email);

    let date = document.createElement("div");
    date.id = "date";
    dateContainer.appendChild(date);

    let status = document.createElement("div");
    status.id = "status";
    statusContainer.appendChild(status);

    id.innerHTML += invoice[i]["id"];
    name.innerHTML += invoice[i]["name"];
    email.innerHTML += invoice[i]["email"];
    date.innerHTML += invoice[i]["date"];
    status.innerHTML += invoice[i]["status"];

    if (status.innerHTML === "Complete") {
      statusContainer.style.backgroundColor = "#d0d1f7";
      statusContainer.style.color = "blue";
    } else if (status.innerHTML === "Pending") {
      statusContainer.style.backgroundColor = "#b6f0c1";
      statusContainer.style.color = "green";
    } else {
      statusContainer.style.backgroundColor = "#f0cdb6";
      statusContainer.style.color = "red";
    }

    let fav = document.createElement("div");
    let favouriteSvg = document.createElement("div");
    favouriteSvg.id = "favouriteSvg";
    favouriteSvg.innerHTML += `<i id="svgIcon" class="fa-solid fa-star"></i>`;
    fav.classList.add("star");
    fav.appendChild(favouriteSvg);

    favouriteSvg.addEventListener("click", () => {
      favouriteSvg.style.color = "green";
    });

    textCon.appendChild(fav);

    let editButton = document.createElement("div");
    editButton.id = "invoiceEdit";
    editButton.innerHTML = `<p>Edit</p>`;
    editButton.addEventListener("click", () => {
      let invoiceId = invoiceData[i].id;
      let editid = editData[i].id;

      editedIndex(invoiceId, editid);
    });
    textCon.appendChild(editButton);

    let deleteButton = document.createElement("div");
    deleteButton.id = "invoiceDelete";
    deleteButton.innerHTML = `<p>Delete</p>`;

    deleteButton.addEventListener("click", () => {
      if (checkbox.checked === true) {
        deleted(invoice[i].id);
      }
    });

    textCon.appendChild(deleteButton);

    list.appendChild(textCon);
  }

  document.getElementById("employeeList").remove();
  let employeeElement = document.createElement("div");
  employeeElement.id = "employeeList";
  document.getElementById("listContainer").appendChild(employeeElement);

  document.getElementById("employeeList").appendChild(listCont);
}

function editedIndex(invoiceIndex, editDataIndex) {
  let invoiceLength = invoiceData.length;
  let index = invoiceIndex;
  let editValIndex = editDataIndex;
  let indexNum = invoiceData.findIndex((x) => x.id === index);
  let editIndexNum = editData.findIndex((x) => x.id == editValIndex);

  let remainder = indexNum % invoiceLength;
  if (remainder != -1) {
    invoiceData[remainder] = editData[editIndexNum];
    invoiceList();
  }
}

function deleted(value) {
  let deleteId = value;
  let index = invoiceData.findIndex((x) => x.id === deleteId);
  invoiceData.splice(index, 1);
  invoiceList();
}

function dashboardList() {
  let dashboardListCon = document.createElement("div");

  for (let i = 0; i < dashboard.length; i++) {
    let list = document.createElement("div");
    list.classList.add("dashList");
    dashboardListCon.appendChild(list);

    let checkbox = document.createElement("input");
    checkbox.type = "checkBox";
    checkbox.id = "dashboardCheckBox";
    list.appendChild(checkbox);

    let wordContainer = document.createElement("div");
    wordContainer.classList.add("wordContainer");

    let taskNameContainer = document.createElement("div");
    taskNameContainer.classList.add("taskNameContainer");
    wordContainer.appendChild(taskNameContainer);

    let startDateContainer = document.createElement("div");
    startDateContainer.classList.add("startDateContainer");
    wordContainer.appendChild(startDateContainer);

    let endDateContainer = document.createElement("div");
    endDateContainer.classList.add("endDateContainer");
    wordContainer.appendChild(endDateContainer);

    let membersContainer = document.createElement("div");
    membersContainer.classList.add("membersContainer");
    wordContainer.appendChild(membersContainer);

    let statusContainerDash = document.createElement("div");
    statusContainerDash.classList.add("statusContainerDash");
    wordContainer.appendChild(statusContainerDash);

    let taskName = document.createElement("div");
    taskName.classList.add("taskName");
    taskNameContainer.appendChild(taskName);

    let startDate = document.createElement("div");
    startDate.id = "startDate";
    startDateContainer.appendChild(startDate);

    let endDate = document.createElement("div");
    endDate.id = "endDate";
    endDateContainer.appendChild(endDate);

    let members = document.createElement("div");
    members.id = "members";
    membersContainer.appendChild(members);

    let dasboardstatus = document.createElement("div");
    dasboardstatus.id = "status";
    statusContainerDash.appendChild(dasboardstatus);

    taskName.innerHTML += dashboard[i]["taskName"];
    startDate.innerHTML += dashboard[i]["startDate"];
    endDate.innerHTML += dashboard[i]["endDate"];
    members.innerHTML += dashboard[i]["members"];
    dasboardstatus.innerHTML += dashboard[i]["workStatus"];

    if (dasboardstatus.innerHTML === "Complete") {
      statusContainerDash.style.backgroundColor = "#d0d1f7";
      statusContainerDash.style.color = "blue";
    } else if (dasboardstatus.innerHTML === "Pending") {
      statusContainerDash.style.backgroundColor = "#b6f0c1";
      statusContainerDash.style.color = "green";
    } else if (dasboardstatus.innerHTML === "Cancel") {
      statusContainerDash.style.backgroundColor = "#f0cdb6";
      statusContainerDash.style.color = "red";
    }

    let editButton = document.createElement("div");
    editButton.id = "edit";
    editButton.innerHTML = `<svg width="15" height="13" style="margin-top: 17px;" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
             <path fill-rule="evenodd" clip-rule="evenodd" d="M2.83395 7.56796L6.73901 2.51797C6.95125 2.24565 7.02671 1.9308 6.95596 1.61022C6.89465 1.31878 6.71543 1.04168 6.44661 0.83146L5.79105 0.310695C5.22038 -0.143182 4.51294 -0.0954059 4.10734 0.425359L3.66873 0.994378C3.61214 1.06556 3.62629 1.17067 3.69703 1.22801C3.69703 1.22801 4.80535 2.11665 4.82893 2.13576C4.90439 2.20742 4.96099 2.30298 4.97513 2.41764C4.99872 2.64219 4.84308 2.85241 4.61198 2.88107C4.50351 2.89541 4.39975 2.86196 4.32429 2.79985L3.15938 1.87299C3.10278 1.83047 3.01789 1.83955 2.97073 1.89688L0.202284 5.48012C0.023066 5.70467 -0.0382454 5.99611 0.023066 6.27799L0.376785 7.81162C0.39565 7.89284 0.466394 7.95017 0.551287 7.95017L2.10765 7.93106C2.39063 7.92628 2.65474 7.79728 2.83395 7.56796ZM5.01328 7.09027H7.5511C7.7987 7.09027 8.00008 7.29428 8.00008 7.5451C8.00008 7.79641 7.7987 7.99994 7.5511 7.99994H5.01328C4.76567 7.99994 4.56429 7.79641 4.56429 7.5451C4.56429 7.29428 4.76567 7.09027 5.01328 7.09027Z" fill="#3A36DB"/>
             </svg>`;
    editButton.addEventListener("click", () => {
      let dashboardId = dashboard[i].taskName;
      let editid = dashboardEditData[i].taskName;

      dashboardIndex(dashboardId, editid);
    });
    wordContainer.appendChild(editButton);

    let deleteButton = document.createElement("div");
    deleteButton.id = "delete";
    deleteButton.innerHTML = ` <svg width="25" height="30" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.83564 1.65752C9.03447 1.65752 9.2 1.8226 9.2 2.03267V2.22689C9.2 2.43184 9.03447 2.60204 8.83564 2.60204H0.364858C0.165528 2.60204 0 2.43184 0 2.22689V2.03267C0 1.8226 0.165528 1.65752 0.364858 1.65752H1.85511C2.15783 1.65752 2.42129 1.44234 2.48939 1.13874L2.56743 0.79017C2.68872 0.315352 3.08788 0 3.54469 0H5.65531C6.10715 0 6.51078 0.315352 6.6276 0.765126L6.71111 1.13823C6.77871 1.44234 7.04216 1.65752 7.34539 1.65752H8.83564ZM8.0785 8.75748C8.23409 7.30747 8.50649 3.86262 8.50649 3.82786C8.51643 3.72257 8.48213 3.62291 8.41403 3.54267C8.34096 3.46753 8.2485 3.42307 8.1466 3.42307H1.05721C0.954812 3.42307 0.857383 3.46753 0.78978 3.54267C0.721183 3.62291 0.687381 3.72257 0.692352 3.82786C0.693265 3.83425 0.70304 3.95559 0.719381 4.15846C0.791974 5.05967 0.994163 7.56973 1.12481 8.75748C1.21727 9.63249 1.7914 10.1824 2.62302 10.2024C3.26475 10.2172 3.92587 10.2223 4.6019 10.2223C5.23867 10.2223 5.88537 10.2172 6.54699 10.2024C7.40744 10.1876 7.98107 9.64732 8.0785 8.75748Z" fill="#FF69B4"/>
                </svg> `;

    deleteButton.addEventListener("click", () => {
      let dashboardIndex = dashboard[i].taskName;
      if (checkbox.checked === true) {
        deleteIndex(dashboardIndex);
      }
    });
    wordContainer.appendChild(deleteButton);
    list.appendChild(wordContainer);
  }
  document.getElementById("todoListContainer").remove();
  let employeeElement = document.createElement("div");
  employeeElement.id = "todoListContainer";
  document.querySelector(".todoContainer").appendChild(employeeElement);

  document.getElementById("todoListContainer").appendChild(dashboardListCon);
}

function dashboardIndex(dashboardIndex, editDataIndex) {
  let dashboardLength = dashboard.length;
  let index = dashboardIndex;
  let editValIndex = editDataIndex;
  let indexNum = dashboard.findIndex((x) => x.taskName === index);
  let editIndexNum = dashboardEditData.findIndex(
    (x) => x.taskName == editValIndex
  );
  let remainder = indexNum % dashboardLength;

  if (remainder != -1) {
    dashboard[remainder] = dashboardEditData[editIndexNum];

    dashboardList();
  }
}

function deleteIndex(val) {
  let deleteName = val;
  let index = dashboard.findIndex((x) => x.taskName === deleteName);
  dashboard.splice(index, 1);
  dashboardList();
}
