import { Component, NgModule } from '@angular/core';



@Component({

  selector: 'App-Sel',

   templateUrl: './app.component.html',

  //templateUrl :'../index.html',

  styleUrls: ['./app.component.css'],


 

})

export class AppComponent{
 myVar=""
  employees: any[]=[    

    {    

        code: '1001', name: 'Satya', gender: 'Male',    

        annualSalary: 5500, dateOfBirth: '25/6/1988',occupation:'Trainee'   

    },    

    {    

        code: '1002', name: 'Mohit', gender: 'Male',    

        annualSalary: 5700.95, dateOfBirth: '9/6/1982',occupation:'Manager'    

    },    

    {    

        code: '1003', name: 'Rohit', gender: 'Male',    

        annualSalary: 5900, dateOfBirth: '12/8/1979',occupation:'Trainee'     

    },    

    {    

        code: '1004', name: 'Satyaprakash Samantaray', gender: 'Female',    

        annualSalary: 6500.826, dateOfBirth: '14/10/1980',occupation:'Manager'   

    },]
title="Angular" 
    count=0 
    isDisabled=false;//prop binding
    onClick()//event binding
    {
      console.log("button clicked");
      this.count++;
    }
    value=""
    principle=0
    amount=0
    rate=0
    SI=0
    onSI()
    {
      this.SI=this.principle*this.amount*this.rate;
    }
    
    }

  


  
  



    

 

  
