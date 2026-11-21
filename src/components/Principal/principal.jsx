import './Principal.css'
import { useTextoDinamico } from './principalLogica';
import './smartphone.css'
import { iniciarAnimacaoSmartphone } from './principalLogica';
import { useEffect } from 'react';

export function Principal() {
  const textoDinamico = useTextoDinamico();
  useEffect(()=>{
    const pararAnimação = iniciarAnimacaoSmartphone()
    return pararAnimação;
  },[]);
  return (
    <main className="principal">
      <section className="seusclientes">
        <div className="clientesesquerda">
          <div className="textop">
            <span>Sua clientela agenda sozinha.</span>
            <br />
            <span id="dinamico">{textoDinamico}</span>
          </div>
          <div className="desct">
            <p>
              Sua página de agendamento com a cara do seu negócio. Quem agenda
              escolhe o serviço, quem vai atender e o horário, confirma na hora
              e, se você quiser, já paga o sinal no PIX.
            </p>
          </div>
          <div className="buttont">
            <button className="teste">
              testar 15 Dias grátis <i className="fa-solid fa-arrow-right-long"></i>
            </button>
            <button className="teste2">
              <i className="fa-solid fa-mobile-screen-button"></i> agendar como cliente{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </button>
          </div>
          <ul className="checklist">
            <li>
              <i className="fa-regular fa-circle-check"></i> Sem cartão de crédito
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Cancele quando quiser
            </li>
            <li>
              <i className="fa-regular fa-circle-check"></i> Sua página no ar em 10 minutos
            </li>
          </ul>
        </div>
        <div className="clientesdireita">
  <section className="mobile">
    <div className="smartphone" role="img">
      <div className="screen">
        <div className="notification-toast" id="pushNotif">
          <div>🔔</div>
          <div>
            <strong>Studio Bela</strong>
            <br />
            <span>Mariana Silva, seu agendamento foi confirmado!</span>
          </div>
        </div>
        <div className="cursor" id="fakeCursor"></div>
        <div className="notch"></div>
        <div className="status-bar">
          <div id="clock">--:--</div>
          <div>📶 🪫</div>
        </div>
        <div className="progress-bar-container">
          <div className="progress-line-fill" id="progressFill"></div>
        </div>
        <div className="app-content">
          {/* TELA 1 */}
          <div className="step-page active" id="step1">
            <div className="header-studio">
              <div className="logo-circle">✨</div>
              <p className="studio-title">Studio Bela</p>
              <p className="studio-subtitle">Unhas e Sobrancelhas com hora marcada</p>
              <div className="social-icons">
                <span>📸 Instagram</span> <span>💬 WhatsApp</span>
              </div>
            </div>
            <h2 className="h2">Selecione o Serviço</h2>
            <div className="card-item" id="srv1">
              <div className="card-left">
                <input type="checkbox" id="chk1" readOnly />
                <div className="card-details">
                  <span className="item-title">Esmaltação em Gel</span>
                  <span className="item-desc">Longa duração nas unhas</span>
                  <span className="item-time">⏱ 1h 00min</span>
                </div>
              </div>
              <span className="item-price">R$ 80,00</span>
            </div>
            <div className="card-item">
              <div className="card-left">
                <input type="checkbox" disabled />
                <div className="card-details">
                  <span className="item-title">Extensão de Cílios</span>
                  <span className="item-desc">Volume natural clássico</span>
                  <span className="item-time">⏱ 1h 30min</span>
                </div>
              </div>
              <span className="item-price">R$ 130,00</span>
            </div>
            <div className="selection-summary" id="resumoSelecao">
              Procedimento selecionado: Nenhum
            </div>
            <button className="btn" id="btnS1">
              Avançar
            </button>
          </div>

          {/* TELA 2 */}
          <div className="step-page" id="step2">
            <h2 className="h2">Profissional</h2>
            <div className="grid-3">
              <div className="box-select" id="profQualquer">
                <div className="avatar-box">✨</div>
                <strong>Qualquer um</strong>
              </div>
              <div className="box-select" id="prof1">
                <div className="avatar-box">👩‍🎨</div>
                <strong>Bela Costa</strong>
              </div>
              <div className="box-select">
                <div className="avatar-box">👩‍⚕️</div>
                <strong>Ana Reis</strong>
              </div>
            </div>
            <div className="selection-summary" id="resumoProf">
              Opção: Não definida
            </div>
            <button className="btn" id="btnS2">
              Avançar
            </button>
          </div>

          {/* TELA 3 */}
          <div className="step-page" id="step3">
            <h2 className="h2">Selecione a Data</h2>
            <div className="grid-4">
              <div className="box-select" id="data1">
                <strong>Qua</strong>
                <br />
                Amanhã
              </div>
              <div className="box-select">
                <strong>Qui</strong>
                <br />
                01/10
              </div>
              <div className="box-select">
                <strong>Sex</strong>
                <br />
                02/10
              </div>
              <div className="box-select">
                <strong>Sáb</strong>
                <br />
                03/10
              </div>
            </div>
            <h2>Horários</h2>
            <div className="grid-hours">
              <div className="box-select">14:00</div>
              <div className="box-select">16:00</div>
              <div className="box-select" id="hora1">
                18:00
              </div>
            </div>
            <button className="btn" id="btnS3">
              Avançar
            </button>
          </div>

          {/* TELA 4 */}
          <div className="step-page" id="step4">
            <h2 className="h2">Seus Dados</h2>
            <input type="text" id="inWhatsApp" placeholder="WhatsApp" readOnly />
            <input type="text" id="inNome" placeholder="Nome Completo" readOnly />
            <input type="email" id="inEmail" placeholder="E-mail" readOnly />
            <input type="text" id="inCPF" placeholder="CPF" readOnly />
            <textarea placeholder="Observações..." rows="2" readOnly></textarea>
            <button className="btn" id="btnS4">
              Ir para Pagamento
            </button>
          </div>

          {/* TELA 5 */}
          <div className="step-page" id="step5">
            <h2 className="h2">Pagamento</h2>
            <div className="timer-box">
              Finalize o Pix em até <span id="timer">10:00</span> min
            </div>
            <div className="pix-area">
              <img
                src="https://qrserver.com"
                alt="QR Code Pix"
                style={{ width: "90px", height: "90px", margin: "0 auto", display: "block" }}
              />
              <div className="btn-copy" id="btnCopiaPix">
                Copiar Código Pix
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "0.7rem", color: "var(--text-muted)" }} id="txtAguardando">
              🔄 Aguardando pagamento...
            </div>
          </div>

          {/* TELA 6 */}
          <div className="step-page" id="step6">
            <div style={{ textAlign: "center", marginTop: "40px" }}>
              <h2 style={{ border: "none" }}>✓ Pagamento Confirmado!</h2>
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Processando agendamento...</p>
            </div>
          </div>

          {/* TELA 7 */}
          <div className="step-page" id="step7">
            <div style={{ textAlign: "center", marginBottom: "8px" }}>
              <h3>Mariana, garantido!</h3>
              <span>Te esperamos com exclusividade.</span>
            </div>
            <div
              className="card-item"
              style={{
                flexDirection: "column",
                alignItems: "flex-start",
                fontSize: "0.75rem",
                lineHeight: "1.4",
                background: "var(--gray-bg)",
              }}
            >
              <div>
                <strong>Procedimento:</strong> Esmaltação em Gel
              </div>
              <div>
                <strong>Dia/Hora:</strong> Amanhã às 18:00
              </div>
              <div>
                <strong>Atendente:</strong> Bela Costa
              </div>
              <div>
                <strong>Código:</strong> #STB-883921
              </div>
            </div>
            <p style={{ fontSize: "0.65rem", color: "var(--text-muted)", textAlign: "center" }}>
              📧 Código enviado para seu e-mail.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

      </section>
    </main>
  );
}

export default Principal;
