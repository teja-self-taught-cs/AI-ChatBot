(function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://your-vercel-domain.vercel.app/widget.html"; // update after deploy
  iframe.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 350px;
      height: 500px;
      border: none;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      z-index: 100000;
      display: none;
    `;

  const toggle = document.createElement("button");
  toggle.innerText = "💬";
  toggle.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: #007bff;
      color: white;
      font-size: 24px;
      z-index: 100001;
    `;

  toggle.onclick = () => {
    iframe.style.display = iframe.style.display === "none" ? "block" : "none";
  };

  document.body.appendChild(toggle);
  document.body.appendChild(iframe);
})();
