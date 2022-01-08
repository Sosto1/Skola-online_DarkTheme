let img = document.getElementById("calendarPart_kalendar_502");
if(img != null){img.remove();}

let img2 = document.getElementById("calendarPart_kalendar_500");
if(img2 != null){img2.remove();}

if (window.location.href.includes('RychlyPrehled')){
    document.querySelector('.contact').innerHTML += '<br><span class="labInfo"></span><br><span class="btnSimulace"><a>Simulovat známky</a></span><span id="rfrsh" style="display: none;">X</span><br><br><a href="https://github.com/jakubhyza/skola-online-prumer-znamek" target="_blank">GitHub Dark theme</a>';
	

}
