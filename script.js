let subjects = ["Css", "Html", "Python", "Js"];

let students = [
  {
    name: "bakuri",
    lastname: "jobava",
    grades: [50, 60, 70, 80]
  },
  {
    name: "nika",
    lastname: "kvara",
    grades: [90, 90, 95, 100]
  },
  {
    name: "luka",
    lastname: "dane",
    grades: [70, 85, 90, 92]
  },
  {
    name: "jemali",
    lastname: "qvatsa",
    grades: [70, 90, 95, 92]
  }
];


let average=[];
let table = document.getElementById('table');
let tbody = document.querySelector('#table tbody');
let tfoot =document.querySelector('#table tfoot');
let del1 = document.querySelector('#delete');
del1.addEventListener('click',function(){
  document.getElementById("table").deleteRow(1);
  students.shift();
  generateAver();
})

//generating header
function genHeader(){
  let thead = document.querySelector('#table thead');
  let tmp = '<tr>'+
  '<th>Name</th>' + '<th>Last Name</th>';

for(let i=0;i<subjects.length;i++){
  tmp+= `<th>${subjects[i]} </th>`
}

tmp+='</tr>';

thead.innerHTML = tmp;
}

genHeader();

function generateAver(){
  average = [];
  for(let i = 0 ;i<students.length;i++){
    for(let j=0;j<subjects.length;j++){
      if(average[j]==undefined){
        average[j] = students[i].grades[j];
      }else if(average[j]){
        average[j] += students[i].grades[j];
      }
    }
  }

  for(let i=0;i<average.length;i++){
    average[i]=Math.floor(average[i]/students.length);
  }
  let tmp='<tr>' + '<td colspan="2" style="text-align:center">Average</td>';

  for(let i =0 ;i<average.length;i++){
     tmp+= `<td>${average[i]}</td>`;
  }

  tmp+='</tr>';

  tfoot.innerHTML=tmp;
}

generateAver();

//generating students and grades

tmp='';

for(let i = 0 ;i<students.length;i++){
  addRow(students[i]);
}

tbody.innerHTML+=tmp;

function Add(){
    let nameAdd = document.querySelector('#name');
    let lastAdd = document.querySelector('#lastname');
    let gradeCss = document.querySelector('#grade1');
    let gradeHtml = document.querySelector('#grade2');
    let gradePython = document.querySelector('#grade3');
    let gradeJs = document.querySelector('#grade4');
    students.push(
      {
        name: nameAdd.value,
        lastname: lastAdd.value,
        grades: [Number(gradeCss.value),Number(gradeHtml.value),Number(gradePython.value),Number(gradeJs.value)]
      }
    )

    addRow(students[students.length-1]);
    genHeader();
    generateAver();
    
}

function addRow(student){
  let tmp =`<tr> 
          <td> ${student.name} </td>
          <td> ${student.lastname} </td>`;
          for(let i=0;i<student.grades.length;i++){
              tmp+=`<td class="${average[i]>student.grades[i] ? 'red' : 'green'}">${student.grades[i]} </td>`;
          }
  tmp += `</tr>`;
  document.querySelector('#table tbody').innerHTML+=tmp;
}

add.addEventListener('click',Add)