var acc = document.getElementsByClassName("accordion");
var i;
for(i=0;i<acc.length;i++)
{
	acc[i].addEventListener("click",function(){
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if(panel.style.maxHeight)
    {
    	panel.style.maxHeight = null;
    }
    else
    {   
        for(j=0;j<acc.length;j++)
        {
            var panel1 = acc[j].nextElementSibling;
             if(panel1.style.maxHeight)
                {
                     acc[j].classList.toggle("active");
                    panel1.style.maxHeight = null;
                }
        }
    	panel.style.maxHeight = panel.scrollHeight + 'px';
    }
	});
}
var d = new Date();
document.getElementById('date1').innerHTML = d.getDate()+' / ';
document.getElementById('month1').innerHTML = d.getMonth()+2;
document.getElementById('date2').innerHTML = d.getDate()+' / ';
document.getElementById('month2').innerHTML = d.getMonth()+3;
document.getElementById('last5').innerHTML = (d.getDate()-1)+' / '+(d.getMonth()+2);