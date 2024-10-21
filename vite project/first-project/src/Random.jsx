
function Random() {
  let number = Math.random()*1000000;
  return (
    <div>
      <h1>Random number is:{Math.round(number)}</h1>
    </div>
  )
}
export default Random;  
