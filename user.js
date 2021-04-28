let subjects= ['Css','Html','Python','Js'];
let students=[
  {
    name:'zura',
    lastname:'tsiloshvili',
    grades:[90,50,80,90]
  },
  {
    name:'nata',
    lastname:'qvatsa',
    grades:[80,90,70,80]
  },
  {
    name:'bakuri',
    lastname:'jobava',
    grades:[100,100,40,50]
  },
  {
    name:'nika',
    lastname:'kobaxidze',
    grades:[80,90,70,50]
  }
];

let aver;
let table = document.getElementById('table');
let tbody = document.querySelector('#table tbody');
let tfoot =document.querySelector('#table tfoot');



//defining table
class Table{
  student;
  subject;
  constructor(students,subjects){
    this.student=students;
    this.subject=subjects;
    this.genHeader();
    this.generateAver(students,subjects);
    this.genBody(students);
    this.eventListeners();

  }
  eventListeners(){
    document.getElementById('add').addEventListener('click',this.Add.bind(this));
  } 
  genHeader(){
    let thead = document.querySelector('#table thead');
    let tmp = '<tr>'+
    '<th>Name</th>' + '<th>Last Name</th>';
  
    for(let i=0;i<this.subject.length;i++){
        tmp+= `<th>${this.subject[i]} </th>`
    }
  
    tmp+='</tr>';
  
    thead.innerHTML = tmp;
  }
  generateAver(student,subject){
    let average = [];
    for(let i = 0 ;i<this.student.length;i++){
      for(let j=0;j<this.subject.length;j++){
        if(average[j]==undefined){
          average[j] = this.student[i].grades[j];
        }else if(average[j]){
          average[j] += this.student[i].grades[j];
        }
      }
    }
  
    for(let i=0;i<average.length;i++){
      average[i]=Math.floor(average[i]/this.student.length);
    }
    let tmp='<tr>' + '<td colspan="2" style="text-align:center">Average</td>';
  
    for(let i =0 ;i<average.length;i++){
       tmp+= `<td>${average[i]}</td>`;
    }
  
    tmp+='</tr>';
  
    tfoot.innerHTML=tmp;

    aver=average;
  } 

  genBody(student){
    let tmp =`<tr>`;

    for(let i=0;i<student.length;i++){
      tmp+=`<td> ${student[i].name} </td>
      <td> ${student[i].lastname} </td>`;
          for(let j=0;j<student[i].grades.length;j++){
              tmp+=`<td class="${aver[i]>student[i].grades[j] ? 'red' : 'green'}">${student[i].grades[j]} </td>`;
          }
          tmp += `</tr>`;
      }

    
    
    document.querySelector('#table tbody').innerHTML=tmp;
  }

  addRow(lastst){
    let tmp =`<tr> 
            <td> ${lastst.name} </td>
            <td> ${lastst.lastname} </td>`;
            for(let i=0;i<lastst.grades.length;i++){
                tmp+=`<td class="${aver[i]>lastst.grades[i] ? 'red' : 'green'}">${lastst.grades[i]} </td>`;
            }
    tmp += `</tr>`;
    document.querySelector('#table tbody').innerHTML+=tmp;
  }
  
  Add(){
    let nameAdd = document.querySelector('#name');
    let lastAdd = document.querySelector('#lastname');
    let gradeCss = document.querySelector('#grade1');
    let gradeHtml = document.querySelector('#grade2');
    let gradePython = document.querySelector('#grade3');
    let gradeJs = document.querySelector('#grade4');
    let newsubject = document.querySelector('#newsubj');
    let grade1 = document.querySelector('#newgrade1');
    let grade2 = document.querySelector('#newgrade2');
    let grade3 = document.querySelector('#newgrade3');
    let grade4 = document.querySelector('#newgrade4');
    let grade5 = document.querySelector('#newgrade5');
    let laststudent={
      name:nameAdd.value,
      lastname:lastAdd.value,
      grades:[Number(gradeCss.value),Number(gradeHtml.value),Number(gradePython.value),Number(gradeJs.value)]
    }
    this.subject.push(newsubject.value);
    this.student.push(laststudent);
    this.student[0].grades.push(Number(grade1.value));
    this.student[1].grades.push(Number(grade2.value));
    this.student[2].grades.push(Number(grade3.value));
    this.student[3].grades.push(Number(grade4.value));
    this.student[4].grades.push(Number(grade5.value));
    this.genHeader();
    this.generateAver(students,subjects);
    this.genBody(students);
    
  }
}

let smth=new Table(students,subjects);


