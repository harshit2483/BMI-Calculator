const form = document.querySelector('form');
form.addEventListener('submit',function(e)
{   e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if(height==='' || isNaN(height) || height<=0)
 {
    
    results.innerHTML=`Please give the valid height`;
 }
 else if(weight==='' || isNaN(weight) || weight<=0)
 {
    
    results.innerHTML=`Please give the valid weight`;
 }
 else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.8)
    {
    results.innerHTML=`<span>Your BMI is ${bmi}</span><br><p>Your body weight is low...</p>`;
    }
    else if(bmi<=24.9)
    {
        results.innerHTML=`<span>Your BMI is ${bmi}</span><br><p>Your weight and height is balanced...</p>`;
    }
    else{
        results.innerHTML=`<span>Your BMI is ${bmi}</span><br><p>Your body is over weighted...</p>`;
    }
 }
});
 