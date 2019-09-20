import ls from 'local-storage'


const API = 'https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/profile/'
const STUDENTS = 'https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/students/'
// const STANDARDS = 'https://api.commonstandardsproject.com/api/v1/standard_sets/49FCDFBD2CF04033A9C347BFA0584DF0_D2604890_grade-04'
const STANDARDS = 'https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/standards/'
const LESSONS = 'https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/lessons/'
const COMMENTS = 'https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/comments/'
const PLANS = 'https://cors-anywhere.herokuapp.com/https://masterclass-backend.herokuapp.com/plans/'


export function getUser() {
    const jwt = ls.get('jwt')
    return fetch(API, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${jwt}`
        }
    })
    .then(res => res.json())
    
}

export function getStudents() {
    return fetch(STUDENTS).then(res => res.json()).catch(err => console.log(err))
  };

export function getStandards() {
    return fetch(STANDARDS).then(res => res.json())
}

export function getStudentStandards(id) {
    return fetch(STUDENTS + id).then(res => res.json())
}

export function getLessons() {
    return fetch(LESSONS).then(res => res.json())
}

export function getComments() {
    return fetch(COMMENTS).then(res => res.json())
}

export function getPlans() {
    return fetch(PLANS).then(res => res.json())
}

export function deleteStudent(id){
    return fetch(`https://masterclass-backend.herokuapp.com/students/${id}`, {
        method: 'DELETE',
        body: JSON.stringify(),
    }).then(res => res.json())
    .then((data) => {
        console.log(data)
        this.props.fetchStudentData()
      })
}





// export function addMastered1(student) {
//     return fetch(LESSONS, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         }, 
//         body:JSON.stringify({
//             student_id: student,
//             standard_id: 1
//         })
        
//     }).then(res => res.json())
//     .then(this.props.dispatch({type: 'ADD_MASTERED'}))
// }