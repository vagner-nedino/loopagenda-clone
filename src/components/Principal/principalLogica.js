import { useState,useEffect } from "react";

export function useTextoDinamico(){
    const [texto,setTexto] = useState(0)
    useEffect(()=>{
        const intervalo = setInterval(()=>{
            setTexto((PrevIndice) => (PrevIndice + 1) % frases.length);
        },5000);
        return () => clearInterval(intervalo)
    },[]);
    return frases[texto]
}

const frases = [
    "site de magrugada",
    "você só atende",
  "Sem baixar app",
    "na sua pagina",
  "sem furos na agenda",
  "recebendo sinal no PIX",
  "tudo facil",
  "tudo simples"
]


//smartphone

export function iniciarAnimacaoSmartphone() {
  let ativo = true;
  const timeouts = [];

  const esperar = (ms) =>
    new Promise((resolve) => {
      const id = setTimeout(resolve, ms);
      timeouts.push(id);
    });

  const cursor = document.getElementById("fakeCursor");
  const screen = document.querySelector(".screen");
  const clockEl = document.getElementById("clock");

  function atualizarRelogio() {
    const agora = new Date();
    if (clockEl) {
      clockEl.innerText = `${String(agora.getHours()).padStart(2, "0")}:${String(
        agora.getMinutes()
      ).padStart(2, "0")}`;
    }
  }

  const clockInterval = setInterval(atualizarRelogio, 1000);
  atualizarRelogio();

  async function moverAte(id) {
    if (!ativo) return;
    const el = document.getElementById(id);
    if (!el || !cursor || !screen) return;
    const r = el.getBoundingClientRect();
    const s = screen.getBoundingClientRect();
    cursor.style.left = `${r.left - s.left + r.width / 2}px`;
    cursor.style.top = `${r.top - s.top + r.height / 2}px`;
    await esperar(800);
  }

  async function clicar() {
    if (!ativo || !cursor) return;
    cursor.classList.add("click");
    await esperar(200);
    if (cursor) cursor.classList.remove("click");
  }

  function mTela(n) {
    if (!ativo) return;
    document.querySelectorAll(".step-page").forEach((p) => p.classList.remove("active"));
    const p = document.getElementById(`step${n}`);
    if (p) p.classList.add("active");
    const pct = { 1: 14, 2: 28, 3: 42, 4: 56, 5: 70, 6: 85, 7: 100 };
    const fill = document.getElementById("progressFill");
    if (fill) fill.style.width = `${pct[n]}%`;
  }

  function reset() {
    if (!ativo) return;
    const chk1 = document.getElementById("chk1");
    if (chk1) chk1.checked = false;

    ["srv1", "prof1", "data1", "hora1"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.classList.remove("selected");
    });

    const notif = document.getElementById("pushNotif");
    if (notif) notif.classList.remove("show");

    ["inWhatsApp", "inNome", "inEmail", "inCPF"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = "";
    });

    const resumoSel = document.getElementById("resumoSelecao");
    if (resumoSel) resumoSel.innerText = "Procedimento selecionado: Nenhum";

    const resumoProf = document.getElementById("resumoProf");
    if (resumoProf) resumoProf.innerText = "Opção: Não definida";

    const btnPix = document.getElementById("btnCopiaPix");
    if (btnPix) btnPix.innerText = "Copiar Código Pix";

    const txtAguard = document.getElementById("txtAguardando");
    if (txtAguard) txtAguard.innerText = "🔄 Aguardando pagamento...";

    mTela(1);
    if (cursor) {
      cursor.style.left = "50%";
      cursor.style.top = "25%";
    }
  }

  async function rodar() {
    while (ativo) {
      reset();
      await esperar(1200);
      if (!ativo) break;

      await moverAte("srv1");
      await clicar();
      if (document.getElementById("chk1")) document.getElementById("chk1").checked = true;
      if (document.getElementById("srv1")) document.getElementById("srv1").classList.add("selected");
      if (document.getElementById("resumoSelecao"))
        document.getElementById("resumoSelecao").innerText = "Esmaltação em Gel (R$ 80)";
      await esperar(800);

      await moverAte("btnS1");
      await clicar();
      mTela(2);
      await esperar(400);

      await moverAte("prof1");
      await clicar();
      if (document.getElementById("prof1")) document.getElementById("prof1").classList.add("selected");
      if (document.getElementById("resumoProf")) document.getElementById("resumoProf").innerText = "Bela Costa";
      await esperar(800);

      await moverAte("btnS2");
      await clicar();
      mTela(3);
      await esperar(400);

      await moverAte("data1");
      await clicar();
      if (document.getElementById("data1")) document.getElementById("data1").classList.add("selected");
      await esperar(400);

      await moverAte("hora1");
      await clicar();
      if (document.getElementById("hora1")) document.getElementById("hora1").classList.add("selected");
      await esperar(800);

      await moverAte("btnS3");
      await clicar();
      mTela(4);
      await esperar(400);

      await moverAte("inWhatsApp");
      await clicar();
      if (document.getElementById("inWhatsApp")) document.getElementById("inWhatsApp").value = "(11) 99999-8888";
      await esperar(400);

      await moverAte("inNome");
      await clicar();
      if (document.getElementById("inNome")) document.getElementById("inNome").value = "Mariana Silva";
      await esperar(400);

      await moverAte("inEmail");
      await clicar();
      if (document.getElementById("inEmail")) document.getElementById("inEmail").value = "mariana@email.com";
      await esperar(400);

      await moverAte("inCPF");
      await clicar();
      if (document.getElementById("inCPF")) document.getElementById("inCPF").value = "445.281.992-00";
      await esperar(600);

      await moverAte("btnS4");
      await clicar();
      mTela(5);
      await esperar(800);

      await moverAte("btnCopiaPix");
      await clicar();
      if (document.getElementById("btnCopiaPix")) document.getElementById("btnCopiaPix").innerText = "✓ Copiado!";
      await esperar(1500);

      if (document.getElementById("txtAguardando"))
        document.getElementById("txtAguardando").innerText = "🎉 Pagamento Identificado!";
      await esperar(1000);
      mTela(6);
      await esperar(2000);

      mTela(7);
      await esperar(800);
      if (document.getElementById("pushNotif")) document.getElementById("pushNotif").classList.add("show");
      await esperar(5000);
    }
  }

  rodar();

  // Retorna função para parar tudo caso o componente seja desmontado
  return () => {
    ativo = false;
    clearInterval(clockInterval);
    timeouts.forEach(clearTimeout);
  };
}
