let students = [
    {id: 0, name: "James", program: "BS Mathematics"},
    {id: 1, name: "Francis", program: "BS Engineering"},
    {id: 2, name: "John", program: "BS Computer Science"},
    {id: 3, name: "Mary", program: "BS Biology"},
    {id: 4, name: "Jane", program: "BS Chemistry"},
    {id: 5, name: "Rey", program: "BS Information Technology"},
];

const createStudent = (name, program) => {
    const article = document.createElement('article');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement('button');
    
    h2.innerHTML = name;
    p.innerHTML = program;
    button.innerHTML = "Delete";

    article.append(h2);
    article.append(p);
    article.append(button);
    article.classList.add('list-item');
    
    return article;
}

const studentList = students.map((s) =>{
    return createStudent(s.name, s.program);
});

const listSection = document.querySelector('#listContainer');
studentList.forEach((s) => {
    listContainer.append(s);
});