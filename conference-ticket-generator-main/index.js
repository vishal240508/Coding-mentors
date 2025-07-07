const hide = el => el.style.setProperty("display", "none");
const ticket = document.getElementById("second-conatiner");
hide(ticket);

function submit() {
  const Name = document.getElementById("fullname").value;
  const Email = document.getElementById("email").value;
  const GitUserName = document.getElementById("git").value;
  const img = document.getElementById("fileElem").value;
  const form = document.getElementById("first");
  const ticket = document.getElementById("second-conatiner");

  const hide = el => el.style.setProperty("display", "none");
  const show = el => el.style.setProperty("display", "block");

  const error = document.getElementById("er");


  const data = {
      fullname: Name,
      email: Email,
      git: GitUserName,
      fileElem: img
    }
  
  if (Name == "" || Email == "" || GitUserName == "" || img == "") {
    error.textContent = "Please Enter Your Details";
    setTimeout(() => {
      error.textContent = ''
    }, 3000);
    return false;
  }
  else {
    localStorage.setItem('data', JSON.stringify(data));
    console.log(data);
    show(ticket);
    hide(form);
    DisplayData();
  }



}

DisplayData();

function DisplayData() {
  const storedData = JSON.parse(localStorage.getItem('data'));
  // const userid = document.getElementById("naam");
  const detailsView =  document.getElementById("detail-view");
   const h2 =  document.getElementById("heading2");
 console.log("storedData", storedData)

  if (storedData) {
      document.getElementById("h2").innerHTML=`Congrats, ${storedData.fullname}!<br> your Ticket is Ready`
      document.getElementById("p").innerHTML=`We’ve emailed your ticket to <br> ${storedData.email} and will send update in <br> the run up to the event.`
      document.getElementById("avt").innerHTML=`${storedData.fileElem}`
      document.getElementById("ticket-h4").innerHTML=`${storedData.fullname}`
      document.getElementById("ticketp").innerHTML=`Git:${storedData.git}`
      document.getElementById("display-p").innerHTML=`Jan 21, 2025 / ${storedData.fullname}, TX`
    } else {
    userid.textContent = "no data from localstorage";
  }
}









function Filevalidation() {
  const file = document.getElementById("fileElem");
  // const s =document.getElementById('size').innerHTML="hii";

  if (file.files.length > 0) {
    for (let i = 0; i <= file.files.length - 1; i++) {

      const fsize = file.files.item(i).size;
      const fileSizeKb = Math.round((fsize / 1024));

      if (fileSizeKb > 500) {
        document.getElementById('size').style.color = "red"
        document.getElementById("size").innerHTML =
          "File is too big , please choose file less then 500KB"
      } else {
        document.getElementById('size').innerHTML =
          '<b>' + fileSizeKb + '<b>KB'
      }
    }
  }
}

