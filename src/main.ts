import "./style.css";
import encontrolLogo from "../public/encontrol_logo.jpg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://www.instagram.com/encontrol.mty/" target="_blank">
      <img src="${encontrolLogo}" class="logo" alt="EnControl logo" />
    </a>
    <h1>EnControl</h1>
    <h2>Próximamente...</h2>
    <div class="card">
    </div>
    <p class="read-the-docs">
      Este sitio es un WIP (Work in Progress), mantente al pendiente de nuestras redes sociales y Discord para más información.
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
