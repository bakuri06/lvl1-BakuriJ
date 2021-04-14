let subjects = ["css", "html", "python", "js"];

let students = [
  {
    name: "bakuri",
    grades: [50, 60, 70, 80]
  },
  {
    name: "nika",
    grades: [90, 90, 95, 100]
  },
  {
    name: "luka",
    grades: [70, 85, 90, 92]
  },
  {
    name: "jemali",
    grades: [70, 90, 95, 92]
  }
];

function average(massive){
    let sum=0;
    for(let i = 0;i<massive.length;i++){
        sum+=massive[i];
    }
    return sum / massive.length;
}

let aver1 = average(students[0]['grades']);
let aver2 = average(students[1]['grades']);
let aver3 = average(students[2]['grades']);
let aver4 = average(students[3]['grades']);


let table = document.getElementById("table");
let tr = document.getElementById("head");
let tr1 = document.getElementById("tr-1");
let tr2 = document.getElementById("tr-2");
let tr3 = document.getElementById("tr-3");
let tr4 = document.getElementById("tr-4");


tr.innerHTML+= `<th>Name</th>`;

for (let i = 0; i < subjects.length; i++) {
  tr.innerHTML += `
    <th>
        ${subjects[i]}
    </th>
    `;
}

for (let i = 0; i < students.length; i++) {
  document.getElementById(`tr-${i}`).innerHTML += `
    <td >
        ${students[i].name}
    </td>
    <td class="smth${0}">${students[i].grades[0]}</td>
    <td class="smth${1}">${students[i].grades[1]}</td>
    <td class="smth${2}">${students[i].grades[2]}</td>
    <td class="smth${3}">${students[i].grades[3]}</td>
    `;

    if(document.getElementsByClassName(`smth${1}`).value > aver1){
      document.getElementsByTagName(`smth${1}`).style.color='red';
    }
}
table.innerHTML += `
<tr> 
<td> Average </td>
 <td> ${aver1} </td>
 <td> ${aver2} </td>
 <td> ${aver3} </td>
 <td> ${aver4} </td>
 </tr>`