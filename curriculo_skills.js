let hardskills = [
    'Java',
    'Spring Boot',
    'Angular',
    'HTML5',
    'CSS3',
    'JavaScript',
    'Node JS',
    'Python',
    'MySQL',
    'WordPress',
    'Photoshop',
    'CorelDraw',
    'Blender',
    'Cobol',
    'Postman',
    'MongoDB',
    'Power BI'
];

document.getElementById('listahard').innerHTML = 
hardskills.map(item => `<li> ${item} </li>`).join('');


let softskills = ['', ]