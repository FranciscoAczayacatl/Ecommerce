const darkMode=document.querySelector('.mode-dark');
const light=document.querySelector('.light');
const nav=document.querySelector('.desktop-menu');
const proviers=document.querySelector('.providers');
const sectionsKey=document.querySelector('.key');
const sectionsMou=document.querySelector('.mou');
const sectionsHeard=document.querySelector('.heard');

light.addEventListener('click',(e)=>{
  darkMode.style.display='flex';
  light.style.display='none';
});
darkMode.addEventListener('click',(e)=>{
  nav.style.backgroundColor='#5c6b73';
  darkMode.style.display='none';
  light.style.display='flex';
  proviers.style.backgroundColor='#5c6b73';
  sectionsKey.style.backgroundColor='#000';
  sectionsMou.style.backgroundColor='#000';
  sectionsHeard.style.backgroundColor='#000'
 
});