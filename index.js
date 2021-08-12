new Vue({
  el: '#app',
  data: {
    name: 'Saide Diaw',
    course: 'Web Engineer Course',
    acceptancePeriod: 'October 2021',
    defaultLastId: 3,
    students: [
      { id: 1, name: 'Moussa Diop', course: 'Web Engineer Course', acceptancePeriod: 'Aout 2021' },
      { id: 2, name: 'Papis Fall', course: 'Web Engineer Course', acceptancePeriod: 'Aout 2021' },
      { id: 3, name: 'Cheikh Niang', course: 'Web Engineer Course', acceptancePeriod: 'Aout 2021' }
    ]
  },
  methods: {
    addStudent: function() {
      var lastStudentPosition = this.students.length - 1;
      let id = this.students[lastStudentPosition].id + 1;
      let name = this.name
      let course = this.course
      let acceptancePeriod = this.acceptancePeriod
      this.students.push({ id,name, course, acceptancePeriod })
    }
  }
})
