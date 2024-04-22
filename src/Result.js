import React from 'react'

const Result = ({secretNum,term}) => {
    let result;
    if(term){
        if(term>secretNum){
            result = 'Higher';
        }else if(term<secretNum){
            result='Lower';
        }else if(term==secretNum){
            result='Yipee! correct';
        }else{
            result='Enter valid input';
        }
    }
    
  return (
    <div>Your guessed:{result}</div>
  )
}

export default Result