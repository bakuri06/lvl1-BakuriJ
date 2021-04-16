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

//average

function average(studs,subjs){
  let average=[];
  for(let i = 0 ;i<studs.length;i++){
    for(let j=0;j<subjs.length;j++){
      if(average[j]==undefined){
        average[j] = studs[i].grades[j];
      }else if(average[j]){
        average[j] += studs[i].grades[j];
      }
    }
  }
  for(let i=0;i<average.length;i++){
    average[i]/=subjs.length;
  }

  return average;

}
average(students,subjects);


let table = document.getElementById('table');

let thead = document.querySelector('#table thead');
let tbody = document.querySelector('#table tbody');
//generating header
let tmp = '<tr>'+
  '<th>Name</th>' + '<th>Last Name</th>';

for(let i=0;i<subjects.length;i++){
  tmp+= `<th>${subjects[i]} </th>`
}

tmp+='</tr>';

thead.innerHTML += tmp;

//generating average row

tmp='<tr>' + '<td colspan="2" style="text-align:center">Average</td>';

for(let i =0 ;i<average(students,subjects).length;i++){
  tmp+= `<td class="change">${average(students,subjects)[i]}</td>`;
}

tmp+='</tr>';

tbody.innerHTML+=tmp;

//generating students and grades

tmp='';

for(let i = 0 ;i<students.length;i++){
  tmp+=`<tr> 
        <td> ${students[i].name} </td>
        <td> ${students[i].lastname} </td>`;
        for(let j=0;j<subjects.length;j++){
            tmp+=`<td class="${average(students,subjects)[j]<students[i].grades[j] ? 'green' : 'red'}">${students[i].grades[j]} </td>`
        }
}

tbody.innerHTML+=tmp;

function Add(){
  let nameAdd = document.querySelector('#name');
  let lastAdd = document.querySelector('#lastname');
  let gradeCss = document.querySelector('#grade1');
  let gradeHtml = document.querySelector('#grade2');
  let gradePython = document.querySelector('#grade3');
  let gradeJs = document.querySelector('#grade4');
  let add = document.querySelector('#add');
  let tmp='';
  students.push(
    {
      name: nameAdd.value,
      lastname: lastAdd.value,
      grades: [gradeCss.value,gradeHtml.value,gradePython.value,gradeJs.value]
    }
  )

  average(students,subjects);


  tmp+=`<tr> 
          <td> ${students[students.length-1].name} </td>
          <td> ${students[students.length-1].lastname} </td>`;

  //pirobaa gaawitlos tu gaamwvanos
          
  for(let i=0;i<subjects.length;i++){
    tmp+=`<td class="${average(students,subjects)[students.length-1]>students[subjects.length-1].grades[subjects.length-1]?'red':'green'}">${students[students.length-1].grades[i]} </td>`;
  }
  
  tmp+='</tr>';
  tbody.innerHTML+=tmp;
  tmp='';
  let change=document.getElementsByClassName('.change');
  for(let i =0 ;i<average(students,subjects).length;i++){
    tmp+= `<td class="change">${average(students,subjects)[i]}</td>`;
  }
  change.innerHTML=tmp;
}

add.addEventListener('click',Add)