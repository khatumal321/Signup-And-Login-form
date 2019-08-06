
function Search(name1,name2,email,phone,date,nic,address) {
    this.frstname = name1;
    this.lastname = name2;
    this.email = email;
    this.phone = phone;
    this.date = date;
    this.nic = nic;
    this.address = address;
};
var totalArry = [];
function submit5(){
  var  name1 = document.getElementById("first").value;
  var  name2 = document.getElementById("last").value;
  var  email = document.getElementById("email").value;
  var  phone = document.getElementById("phone").value;
  var  date = document.getElementById("date").value;
  var  nic = document.getElementById("nic").value;
  var  address = document.getElementById("address").value;

  
  var total = new Search(name1,name2,email,phone,date,nic,address);
  console.log(total);
      totalArry.push(total);
    console.log(totalArry);
    localStorage.setItem('data' , JSON.stringify(totalArry)); 

    document.getElementById("reset").reset();


}
