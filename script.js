 const mains = document.querySelector('.main');
 const hidden = document.querySelector('.ongoing');
 const started = document.querySelector('.start');
 const buttons = document.querySelectorAll('.up-down button');
 const display = document.querySelector('#display');
 const countdown = document.querySelector('#countdown');
 const done = document.querySelector('.done');
 function up(){
    let current = Number(document.querySelector('#display').textContent);
    if (current < 50){
        current+=5;
        display.textContent=current
    }
 }
 function down(){
    let current = Number(document.querySelector('#display').textContent);
    if (current  >1){
        current-=5;
        display.textContent=current
    }
 }
 function start(){
    mains.style.display='none';
    hidden.style.display='flex';
    startcountdown();
 }
 let totalsec=0;
 let interval=null;
 function startcountdown(){
    let minutes=Number(document.querySelector('#display').textContent);
    totalsec = minutes * 60;
    interval=setInterval(() => {
        totalsec--;
        let mins = Math.floor(totalsec/60);
        let secs = totalsec % 60 ;
         countdown.textContent = 
      String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0')

    if (totalsec <= 0) {
      clearInterval(interval)
      interval = null
      hidden.style.display = 'none';
      done.style.display = 'flex';
      setTimeout(() => {
         done.style.display = 'none';
         mains.style.display = 'flex';
         display.textContent = '25' ;

      },10000)
    }

    },1000)

 }
 function stop(){
  clearInterval(interval)
  mains.style.display = 'flex'
  hidden.style.display = 'none'
  display.textContent = '25'
 }
 let paused = false
 function pause(){
   if(paused){
      interval = setInterval(() => {
      totalsec--
      let mins = Math.floor(totalsec / 60)
      let secs = totalsec % 60
      countdown.textContent =
        String(mins).padStart(2, '0') + ':' + String(secs).padStart(2, '0')
      if (totalsec <= 0) clearInterval(interval)
    }, 1000)
      paused = false;
   }
   else{
      clearInterval(interval);
      paused = true;
   }
 }