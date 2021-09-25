students = [
    {name: "Jake", birthYear: 1980, marks: 80},
    {name: "John", birthYear: 1979, marks: 60},
    {name: "Abby", birthYear: 1990, marks: 70},
    {name: "Carter", birthYear: 2000, marks: 85},
    {name: "Dave", birthYear: 2010, marks: 62},
    {name: "Allison", birthYear: 1967, marks: 49},
    {name: "Isak", birthYear: 1949, marks: 30},
    {name: "Gerald", birthYear: 1996, marks: 83},
    {name: "George", birthYear: 2001, marks: 19},
] 
    //let Date= new Date
   /// let Year=Date.
  //  console.log(time)
const names=(a=>{
    return a.name
})

const ages=(a=>{
    return 2021-a.birthYear
})

const mark=(a=>{
    const degrees= a.marks
    if(degrees<102&&degrees>10){
    if(degrees<101&&degrees>89){
        return "A"
    } else if(degrees<91&&degrees>79){
        return "B"
    }else if(degrees<81&&degrees>69){
        return "C"
    }else if(degrees<71&&degrees>59){
        return "D"
    }else{
        return "F"
    }}else{
        return "ange ett giltig mark"
    }
})
    
const sameDegreese=(b=>{
    const sameStudent=students.filter(a=>{
        return mark(a)==b
    })
    return sameStudent
})
    const votes=students.map(a=>{
      return  mark(a)
    })
   // console.log(votes)
   const grades=["A","B","C","D","E","F"]

  // const gatherSameDegreeStudents=voteInLetters.map(a=>{
   //    return sameDegreese(a)
   //})

   //console.log(gatherSameDegreeStudents)
    // function fancyprint(){
       //  gatherSameDegreeStudents.forEach((students)=>{
           grades.forEach((grades)=>{
               const sameGraded=sameDegreese(grades)
               if(sameGraded.length==0){
                   console.log(`nobody got the ${grades} degree`)

               }else {
                   console.log(`there is ${sameGraded.length} students that got the ${grades} degrese`)
               }
           })


               /*if(sameGraded.grades.length!=0){
                   console.log(`there is ${sameGraded.length} peaple that scored a degrees of ${sameGraded[0]} `)
               }

           })

          /*  if(students.length!=0){
                console.log(`there is ${students.length} people that achieved a degrees of ${mark(students[0])}`)
                continue
            }
            students.push({marks: 100})
                 console.log(`nobody got the ${mark(students[0])} degrees`)
             
         })*/
     
//fancyprint()
