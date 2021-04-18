
@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

  constructor() { }


  servicetest(){
    alert("hello Badal from injectable service")
}

product="laptop"
//will cal oject in our component
mobile={type:"samsung",id:"001"}
//will call array of object in our component
employee=[
  {name:"badal",id:"001"},
  {name:"sheetal",id:"002"},
  {name:"Dhaval",id:"003"},
  {name:"Aara",id:"004"}
]
}
