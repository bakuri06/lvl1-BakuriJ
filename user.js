let subjects= ['Css','Html','Python','Js'];
let students=[];
let average = [];


//defining table
class Table{
  constructor(name,lastname,grades){
    this._name=name;
    this._lastname=lastname;
    this._grades=grades;
    students.push({
        name:this._name,
        lastname:this._lastname,
        grades:this._grades
    })
  }
}

let someone = new Table('zura','tsiloshvili',[90,50,80,90]);
let nata =  new Table('nata','qvatsa',[80,90,70,80]);
let bakuri = new Table('bakuri','jobava',[100,100,40,50]);
let nika = new Table('nika','kobaxidze',[80,90,70,50]);


let table = document.getElementById('table');
let tbody = document.querySelector('#table tbody');
let tfoot =document.querySelector('#table tfoot');
let del1 = document.querySelector('#delete');
del1.addEventListener('click',function(){
  document.getElementById("table").deleteRow(1);
  students.shift();
  generateAver();
})

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

function lastRow(){
    tmp='';

    for(let i = 0 ;i<students.length;i++){
      addRow(students[i]);
    }
    
    tbody.innerHTML+=tmp;
}

lastRow();



function Add(){
    let nameAdd = document.querySelector('#name');
    let lastAdd = document.querySelector('#lastname');
    let gradeCss = document.querySelector('#grade1');
    let gradeHtml = document.querySelector('#grade2');
    let gradePython = document.querySelector('#grade3');
    let gradeJs = document.querySelector('#grade4');
    let student= new Table(nameAdd.value,lastAdd.value,[Number(gradeCss.value),Number(gradeHtml.value),Number(gradePython.value),Number(gradeJs.value)]);


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