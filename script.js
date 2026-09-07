const params = new URLSearchParams(window.location.search);
const rawGuest = params.get("to") || "Bạn thân mến";
const guest = rawGuest.trim() || "Bạn thân mến";

document.getElementById("guestName").textContent = guest;
document.getElementById("guestName2").textContent = guest;

const openBtn = document.getElementById("openBtn");
const invitation = document.getElementById("invitation");

openBtn.addEventListener("click", () => {
  invitation.scrollIntoView({ behavior: "smooth" });
  makePetals(18);
});

const target = new Date("2026-09-13T19:00:00+07:00").getTime();

function updateCountdown(){
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / 86400000);
  const h = Math.floor(diff / 3600000) % 24;
  const m = Math.floor(diff / 60000) % 60;
  const s = Math.floor(diff / 1000) % 60;
  document.getElementById("days").textContent = d;
  document.getElementById("hours").textContent = h;
  document.getElementById("minutes").textContent = m;
  document.getElementById("seconds").textContent = s;
}
updateCountdown();
setInterval(updateCountdown,1000);

function makePetals(amount=8){
  for(let i=0;i<amount;i++){
    const p=document.createElement("span");
    p.className="petal";
    p.textContent=["🌸","🌷","💮"][Math.floor(Math.random()*3)];
    p.style.left=Math.random()*100+"vw";
    p.style.animationDuration=(4+Math.random()*5)+"s";
    p.style.animationDelay=(Math.random()*1.5)+"s";
    p.style.fontSize=(10+Math.random()*12)+"px";
    document.body.appendChild(p);
    setTimeout(()=>p.remove(),10000);
  }
}
setInterval(()=>makePetals(2),2500);

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", async ()=>{
  try{
    if(music.paused){
      await music.play();
      musicBtn.textContent="🔇 Tắt nhạc";
    }else{
      music.pause();
      musicBtn.textContent="🎵 Bật nhạc";
    }
  }catch(e){
    alert("Hãy thêm file nhạc vào thư mục music với tên birthday.mp3");
  }
});

document.getElementById("rsvpBtn").addEventListener("click",()=>{
  const toast=document.getElementById("toast");
  toast.textContent=`Cảm ơn ${guest}! Mai Quỳnh rất vui khi có bạn 💕`;
  toast.classList.add("show");
  makePetals(35);
  setTimeout(()=>toast.classList.remove("show"),3500);
});
