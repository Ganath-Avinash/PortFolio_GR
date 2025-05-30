        const skills = [
      { name: "HTML", level: 100 },
      { name: "CSS", level: 100 },
      { name: "JavaScript", level: 95 },
      { name: "Java", level: 95 },
      { name: "OOPs", level: 100 },
      { name: "C", level: 95 },
      { name: "Python", level: 95 },
      { name: "DSA", level: 88 }
    ];

    const skillContainer = document.getElementById('skillBars');
    skills.forEach(skill => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('skills-bar');

      const label = document.createElement('div');
      label.classList.add('skill-label');
      label.innerHTML = `<span>${skill.name}</span><span>${skill.level}%</span>`;

      const bar = document.createElement('div');
      bar.classList.add('bar');

      const fill = document.createElement('div');
      fill.classList.add('bar-fill');
      fill.style.width = '0';

      bar.appendChild(fill);
      wrapper.appendChild(label);
      wrapper.appendChild(bar);
      skillContainer.appendChild(wrapper);

      setTimeout(() => fill.style.width = skill.level + '%', 200);
    });

function validateForm() {
    const fname = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const tarea = document.getElementById("ttt").value.trim();

    let errorMessage = "";

    if (fname === "") {
        errorMessage += "Enter Name!!\n";
    }

    const nPattern = /^[a-zA-Z]+(?: [a-zA-Z]+)*$/;
    if (!nPattern.test(fname)) {
        errorMessage += "Enter a valid Name!!\n";
    }

    if (tarea === "") {
        errorMessage += "Enter Your Query (It is mandatory)!!\n";
    }

    if (email === "") {
        errorMessage += "Enter Your Gmail (It is mandatory)!!\n";
    } else {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            errorMessage += "Enter a valid Gmail Account!!\n";
        }
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    return true;
}


  const qwe=document.getElementById("gt");
  const cross=document.getElementById("ff1");
  const bar=document.getElementById("ff");

  function op(){
    qwe.style.left="0%";
    bar.style.display="none";
    cross.style.display="block";
  }

  
  function op1(){
    qwe.style.left="-100%";
    bar.style.display="block";
    cross.style.display="none";
  }
//

  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLink = document.querySelector(`nav a[href="#${id}"]`);

      if (entry.isIntersecting) {
        navLinks.forEach(link => link.classList.remove('active-nav'));
        navLink.classList.add('active-nav');
      }
    });
  }, {
    root: null,
    rootMargin: '0px',
    threshold: 0.6 // section is considered visible when 60% in viewport
  });

  sections.forEach(section => {
    observer.observe(section);
  });

  const img1=document.getElementById("we");
  const img2=document.getElementById("we1");
  
  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      toggle.textContent = "🌙";
      img2.style.display="none";
      img1.style.display="block";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggle.textContent = "☀️";
      img1.style.display="none";
      img2.style.display="block";
    }
  });

  const w1=document.getElementById("kl");
  const w2=document.getElementById("kl1");
  const w3=document.getElementById("kl2");
  const w4=document.getElementById("kl3");
  const w5=document.getElementById("kl4");
  const w6=document.getElementById("kl5");

  const toggle1 = document.getElementById("themeToggle1");
  toggle1.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      toggle1.textContent = "🌙";
      img2.style.display="none";
      img1.style.display="block";
      w1.style.color="#3f3fb0";
      w2.style.color="#3f3fb0";
      w3.style.color="#3f3fb0";
      w4.style.color="#3f3fb0";
      w5.style.color="#3f3fb0";
      w6.style.color="#3f3fb0";

    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      toggle1.textContent = "☀️";
      img1.style.display="none";
      img2.style.display="block";
      w1.style.color="#ddd";
      w2.style.color="#ddd";
      w3.style.color="#ddd";
      w4.style.color="#ddd";
      w5.style.color="#ddd";
      w6.style.color="#ddd";
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll("section").forEach(section => {
      observer.observe(section);
    });
  });