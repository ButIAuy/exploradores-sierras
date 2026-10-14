// Generado desde "Guia Exploradores Lavalleja v3.dc.html" (módulo plantas).
// Textos y estilos copiados tal cual del prototipo.
import type { QuizVals } from '../../components/useQuiz';
import { ImageSlot } from '../../components/ImageSlot';

export default function Plantas({ quiz }: { quiz: QuizVals }) {
  return (
    <>
      <section className="g-pad-cover" data-screen-label="P0 Portada plantas" style={{"position":"relative","overflow":"hidden","width":"100%","maxWidth":"980px","boxSizing":"border-box","backgroundColor":"#17271D","backgroundImage":"radial-gradient(rgba(244,235,217,.07) 1.5px,transparent 1.5px)","backgroundSize":"22px 22px","minHeight":"440px","justifyContent":"flex-end","border":"2px solid #2C3B30","borderRadius":"22px","display":"flex","flexDirection":"column","gap":"20px"}}>
        <div style={{"position":"absolute","top":"0","left":"0","right":"0","height":"8px","background":"repeating-linear-gradient(90deg,#E08A2E 0 22px,transparent 22px 34px)"}} />
        <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"15px","letterSpacing":".16em","textTransform":"uppercase","color":"#E08A2E"}}>
          {"Parte 1 · Sierras de Lavalleja"}
        </div>
        <h1 style={{"margin":"0","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"clamp(40px,7vw,68px)","lineHeight":"1.05","color":"#FFFFFF","textWrap":"balance"}}>
          {"Plantas que "}
          <span style={{"color":"#E08A2E"}}>
            {"pinchan"}
          </span>
          {" en la sierra"}
        </h1>
        <p style={{"margin":"0","fontSize":"24px","lineHeight":"1.5","color":"#FFFFFF","maxWidth":"600px","textWrap":"pretty"}}>
          {"En el monte hay árboles y plantas con espinas. Míralas con los ojos, no con las manos."}
        </p>
      </section>
      <section className="g-pad" data-screen-label="P1 Árboles" style={{"position":"relative","overflow":"hidden","width":"100%","maxWidth":"980px","boxSizing":"border-box","background":"#F4EBD9","border":"2px solid #2C3B30","borderRadius":"22px","boxShadow":"0 6px 0 #06100B","display":"flex","flexDirection":"column","gap":"28px"}}>
        <div style={{"position":"absolute","top":"0","left":"0","right":"0","height":"8px","background":"repeating-linear-gradient(90deg,#E08A2E 0 22px,transparent 22px 34px)"}} />
        <div style={{"position":"absolute","top":"8px","right":"28px","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"140px","lineHeight":"1","color":"rgba(224,138,46,.15)"}}>
          {"1"}
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"10px","position":"relative","maxWidth":"680px"}}>
          <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"15px","letterSpacing":".16em","textTransform":"uppercase","color":"#8A4510"}}>
            {"Árboles y arbustos"}
          </div>
          <h2 style={{"margin":"0","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"44px","lineHeight":"1.1","textWrap":"balance"}}>
            {"Árboles del monte"}
          </h2>
          <p style={{"margin":"0","fontSize":"22px","lineHeight":"1.5","color":"#4A4636","textWrap":"pretty"}}>
            {"Son lindos y dan sombra, pero algunos tienen espinas o irritan la piel."}
          </p>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(280px, 100%), 1fr))","gap":"16px"}}>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡Pincha!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-coronilla" placeholder="Foto o dibujo: coronilla" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Coronilla"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Scutia buxifolia"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Hojas "}
                <strong>
                  {"chiquitas"}
                </strong>
                {" y brillantes."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Ramas con "}
                <strong>
                  {"espinas"}
                </strong>
                {" cortas y duras."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡Pincha!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-tala" placeholder="Foto o dibujo: tala" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Tala"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Celtis tala"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Ramas en "}
                <strong>
                  {"zigzag"}
                </strong>
                {" con espinas."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Frutitas naranjas que comen los pájaros."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡Pincha!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-espina-cruz" placeholder="Foto o dibujo: espina de la cruz" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Espina de la cruz"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Colletia paradoxa"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Casi "}
                <strong>
                  {"no tiene hojas"}
                </strong>
                {"."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Espinas planas, como "}
                <strong>
                  {"triángulos"}
                </strong>
                {"."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡Pica!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-ortiga" placeholder="Foto o dibujo: ortiga" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Ortiga"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Urtica spp."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Hojas con "}
                <strong>
                  {"bordes de dientes"}
                </strong>
                {" y pelitos."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Si la rozas, la piel "}
                <strong>
                  {"arde y pica"}
                </strong>
                {"."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡No tocar!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-aruera" placeholder="Foto o dibujo: aruera" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Aruera"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Lithraea brasiliensis"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Hojas verdes, duras y brillantes."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Si la tocas, la piel se pone "}
                <strong>
                  {"roja y pica"}
                </strong>
                {"."}
              </div>
            </div>
          </div>
        </div>
        <div style={{"display":"flex","gap":"16px","alignItems":"center","padding":"20px 24px","borderRadius":"16px","background":"#17271D","color":"#FFFFFF"}}>
          <div style={{"flex":"none","width":"48px","height":"48px","borderRadius":"50%","background":"#E08A2E","color":"#1F2A22","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"28px"}}>
            {"!"}
          </div>
          <div style={{"fontSize":"24px","lineHeight":"1.4","textWrap":"pretty"}}>
            {"¿No sabes qué árbol es? "}
            <strong style={{"color":"#F2A54E"}}>
              {"Míralo, pero no arranques"}
            </strong>
            {" hojas ni ramas."}
          </div>
        </div>
      </section>
      <section className="g-pad" data-screen-label="P2 Plantas bajas" style={{"position":"relative","overflow":"hidden","width":"100%","maxWidth":"980px","boxSizing":"border-box","background":"#F4EBD9","border":"2px solid #2C3B30","borderRadius":"22px","boxShadow":"0 6px 0 #06100B","display":"flex","flexDirection":"column","gap":"28px"}}>
        <div style={{"position":"absolute","top":"0","left":"0","right":"0","height":"8px","background":"repeating-linear-gradient(90deg,#E08A2E 0 22px,transparent 22px 34px)"}} />
        <div style={{"position":"absolute","top":"8px","right":"28px","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"140px","lineHeight":"1","color":"rgba(224,138,46,.15)"}}>
          {"2"}
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"10px","position":"relative","maxWidth":"680px"}}>
          <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"15px","letterSpacing":".16em","textTransform":"uppercase","color":"#8A4510"}}>
            {"Plantas bajas"}
          </div>
          <h2 style={{"margin":"0","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"44px","lineHeight":"1.1","textWrap":"balance"}}>
            {"Cerca del suelo y entre las piedras"}
          </h2>
          <p style={{"margin":"0","fontSize":"22px","lineHeight":"1.5","color":"#4A4636","textWrap":"pretty"}}>
            {"Están en el pasto y en las rocas. Mira dónde pisas y dónde pones las manos."}
          </p>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(280px, 100%), 1fr))","gap":"16px"}}>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡Pincha!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-cardilla" placeholder="Foto o dibujo: cardilla / caraguatá" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Cardilla / Caraguatá"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Eryngium horridum"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Hojas largas con "}
                <strong>
                  {"dientes"}
                </strong>
                {" en el borde."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Crece en el pasto: usa "}
                <strong>
                  {"calzado cerrado"}
                </strong>
                {"."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#B0402C","borderRadius":"999px","padding":"8px 14px"}}>
              {"¡Pincha!"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-tuna" placeholder="Foto o dibujo: tunas y cactus" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Tunas y cactus"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Opuntia y otros"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Paletas gordas o "}
                <strong>
                  {"bolitas"}
                </strong>
                {" entre las piedras."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#B0402C","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Espinas y "}
                <strong>
                  {"pelitos"}
                </strong>
                {" casi invisibles que se clavan."}
              </div>
            </div>
          </div>
        </div>
        <div style={{"display":"flex","gap":"16px","alignItems":"center","padding":"20px 24px","borderRadius":"16px","background":"#17271D","color":"#FFFFFF"}}>
          <div style={{"flex":"none","width":"48px","height":"48px","borderRadius":"50%","background":"#E08A2E","color":"#1F2A22","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"28px"}}>
            {"!"}
          </div>
          <div style={{"fontSize":"24px","lineHeight":"1.4","textWrap":"pretty"}}>
            {"Antes de subir a una piedra, "}
            <strong style={{"color":"#F2A54E"}}>
              {"mira si hay cactus"}
            </strong>
            {". Si se te clava algo, avisa a un adulto."}
          </div>
        </div>
      </section>
      <section className="g-pad" data-screen-label="P3 Plantas amigas" style={{"position":"relative","overflow":"hidden","width":"100%","maxWidth":"980px","boxSizing":"border-box","background":"#F4EBD9","border":"2px solid #2C3B30","borderRadius":"22px","boxShadow":"0 6px 0 #06100B","display":"flex","flexDirection":"column","gap":"28px"}}>
        <div style={{"position":"absolute","top":"0","left":"0","right":"0","height":"8px","background":"repeating-linear-gradient(90deg,#E08A2E 0 22px,transparent 22px 34px)"}} />
        <div style={{"position":"absolute","top":"8px","right":"28px","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"140px","lineHeight":"1","color":"rgba(224,138,46,.15)"}}>
          {"3"}
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"10px","position":"relative","maxWidth":"680px"}}>
          <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"15px","letterSpacing":".16em","textTransform":"uppercase","color":"#8A4510"}}>
            {"Para conocer"}
          </div>
          <h2 style={{"margin":"0","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"44px","lineHeight":"1.1","textWrap":"balance"}}>
            {"Plantas amigas"}
          </h2>
          <p style={{"margin":"0","fontSize":"22px","lineHeight":"1.5","color":"#4A4636","textWrap":"pretty"}}>
            {"Tienen frutas ricas. Pero solo las pruebas si un adulto que las conoce te dice que sí."}
          </p>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(240px, 100%), 1fr))","gap":"16px"}}>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#3B6B42","borderRadius":"999px","padding":"8px 14px"}}>
              {"Amiga"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-pitanga" placeholder="Foto o dibujo: pitanga" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Pitanga"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Eugenia uniflora"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#3B6B42","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Fruta roja con "}
                <strong>
                  {"gajitos"}
                </strong>
                {"."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#3B6B42","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Sus hojas huelen rico al frotarlas."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#3B6B42","borderRadius":"999px","padding":"8px 14px"}}>
              {"Amiga"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-guayabo" placeholder="Foto o dibujo: guayabo del país" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Guayabo del país"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Acca sellowiana"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#3B6B42","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Flores con "}
                <strong>
                  {"pelitos rojos"}
                </strong>
                {"."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#3B6B42","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Fruta verde que huele dulce."}
              </div>
            </div>
          </div>
          <div style={{"display":"flex","flexDirection":"column","gap":"14px","padding":"24px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA"}}>
            <div style={{"alignSelf":"flex-start","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"18px","letterSpacing":".08em","textTransform":"uppercase","color":"#FFFFFF","background":"#3B6B42","borderRadius":"999px","padding":"8px 14px"}}>
              {"Amiga"}
            </div>
            <div style={{"height":"220px","borderRadius":"12px","overflow":"hidden","background":"#FFFFFF"}}>
              <ImageSlot id="planta-arrayan" placeholder="Foto o dibujo: arrayán" radius={12} />
            </div>
            <div style={{"display":"flex","flexDirection":"column","gap":"2px"}}>
              <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"30px","lineHeight":"1.1"}}>
                {"Arrayán"}
              </div>
              <div style={{"fontSize":"16px","fontStyle":"italic","color":"#4A4636"}}>
                {"Blepharocalyx salicifolius"}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#3B6B42","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"1"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Hojas "}
                <strong>
                  {"finitas"}
                </strong>
                {" que huelen rico."}
              </div>
            </div>
            <div style={{"display":"flex","gap":"12px","alignItems":"flex-start"}}>
              <div style={{"flex":"none","width":"36px","height":"36px","borderRadius":"50%","background":"#3B6B42","color":"#FFFFFF","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px"}}>
                {"2"}
              </div>
              <div style={{"fontSize":"22px","lineHeight":"1.4"}}>
                {"Frutitas chiquitas para los pájaros."}
              </div>
            </div>
          </div>
        </div>
        <div style={{"display":"flex","gap":"16px","alignItems":"center","padding":"20px 24px","borderRadius":"16px","background":"#17271D","color":"#FFFFFF"}}>
          <div style={{"flex":"none","width":"48px","height":"48px","borderRadius":"50%","background":"#E08A2E","color":"#1F2A22","display":"flex","alignItems":"center","justifyContent":"center","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"28px"}}>
            {"!"}
          </div>
          <div style={{"fontSize":"24px","lineHeight":"1.4","textWrap":"pretty"}}>
            <strong style={{"color":"#F2A54E"}}>
              {"Nunca comas"}
            </strong>
            {" una fruta o planta del monte sin preguntar a un adulto."}
          </div>
        </div>
      </section>
      <section className="g-pad" data-screen-label="P4 Juego plantas" style={{"position":"relative","overflow":"hidden","width":"100%","maxWidth":"980px","boxSizing":"border-box","background":"#F4EBD9","border":"2px solid #2C3B30","borderRadius":"22px","boxShadow":"0 6px 0 #06100B","display":"flex","flexDirection":"column","gap":"28px"}}>
        <div style={{"position":"absolute","top":"0","left":"0","right":"0","height":"8px","background":"repeating-linear-gradient(90deg,#E08A2E 0 22px,transparent 22px 34px)"}} />
        <div style={{"position":"absolute","top":"8px","right":"28px","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"140px","lineHeight":"1","color":"rgba(224,138,46,.15)"}}>
          {"4"}
        </div>
        <div style={{"display":"flex","flexDirection":"column","gap":"10px","position":"relative","maxWidth":"680px"}}>
          <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"15px","letterSpacing":".16em","textTransform":"uppercase","color":"#8A4510"}}>
            {"Juego"}
          </div>
          <h2 style={{"margin":"0","fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"44px","lineHeight":"1.1","textWrap":"balance"}}>
            {"¿Qué harías?"}
          </h2>
          <p style={{"margin":"0","fontSize":"22px","lineHeight":"1.5","color":"#4A4636","textWrap":"pretty"}}>
            {"Elige una respuesta en cada tarjeta. Si aciertas todas, ¡ganas la insignia!"}
          </p>
          <div style={{"alignSelf":"flex-start","display":"flex","alignItems":"center","gap":"8px","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"18px","color":"#FFFFFF","background":"#17271D","borderRadius":"999px","padding":"8px 16px"}}>
            {quiz.score}
          </div>
        </div>
        <div style={{"display":"grid","gridTemplateColumns":"repeat(auto-fit,minmax(min(200px, 100%), 1fr))","gap":"16px"}}>
          <div style={{"font":"inherit","color":"inherit","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"space-between","gap":"18px","padding":"24px 20px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA","textAlign":"center"}}>
            <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"24px","lineHeight":"1.25","textWrap":"balance"}}>
              {"¿Puedo agarrar una rama de tala?"}
            </div>
            {quiz.c[1].right && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"8px"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#3B6B42"}}>
                  {"✓ ¡Muy bien!"}
                </div>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","lineHeight":"1.25","color":"#FFFFFF","background":"#B0402C","borderRadius":"14px","padding":"8px 14px","textWrap":"balance"}}>
                  {"No: tiene espinas."}
                </div>
              </div>
            </>)}
            {quiz.c[1].open && (<>
              <div style={{"display":"grid","gridTemplateColumns":"minmax(0,1fr)","gap":"8px","width":"100%"}}>
                <button className="quiz-opt" onClick={quiz.c[1].pick1} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[1].o1}
                </button>
                <button className="quiz-opt" onClick={quiz.c[1].pick2} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[1].o2}
                </button>
              </div>
            </>)}
            {quiz.c[1].wrong && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"10px","width":"100%"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#B0402C"}}>
                  {"Casi… ¡prueba otra vez!"}
                </div>
                <button onClick={quiz.c[1].retry} style={{"font":"inherit","cursor":"pointer","minHeight":"48px","padding":"0 20px","borderRadius":"999px","border":"2px solid #B0402C","background":"transparent","color":"#B0402C","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"18px"}}>
                  {"Intentar de nuevo"}
                </button>
              </div>
            </>)}
          </div>
          <div style={{"font":"inherit","color":"inherit","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"space-between","gap":"18px","padding":"24px 20px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA","textAlign":"center"}}>
            <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"24px","lineHeight":"1.25","textWrap":"balance"}}>
              {"¿Puedo jugar con hojas de aruera?"}
            </div>
            {quiz.c[2].right && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"8px"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#3B6B42"}}>
                  {"✓ ¡Muy bien!"}
                </div>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","lineHeight":"1.25","color":"#FFFFFF","background":"#B0402C","borderRadius":"14px","padding":"8px 14px","textWrap":"balance"}}>
                  {"No: dan picazón."}
                </div>
              </div>
            </>)}
            {quiz.c[2].open && (<>
              <div style={{"display":"grid","gridTemplateColumns":"minmax(0,1fr)","gap":"8px","width":"100%"}}>
                <button className="quiz-opt" onClick={quiz.c[2].pick1} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[2].o1}
                </button>
                <button className="quiz-opt" onClick={quiz.c[2].pick2} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[2].o2}
                </button>
              </div>
            </>)}
            {quiz.c[2].wrong && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"10px","width":"100%"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#B0402C"}}>
                  {"Casi… ¡prueba otra vez!"}
                </div>
                <button onClick={quiz.c[2].retry} style={{"font":"inherit","cursor":"pointer","minHeight":"48px","padding":"0 20px","borderRadius":"999px","border":"2px solid #B0402C","background":"transparent","color":"#B0402C","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"18px"}}>
                  {"Intentar de nuevo"}
                </button>
              </div>
            </>)}
          </div>
          <div style={{"font":"inherit","color":"inherit","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"space-between","gap":"18px","padding":"24px 20px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA","textAlign":"center"}}>
            <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"24px","lineHeight":"1.25","textWrap":"balance"}}>
              {"¿Me apoyo en cualquier piedra?"}
            </div>
            {quiz.c[3].right && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"8px"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#3B6B42"}}>
                  {"✓ ¡Muy bien!"}
                </div>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","lineHeight":"1.25","color":"#FFFFFF","background":"#B0402C","borderRadius":"14px","padding":"8px 14px","textWrap":"balance"}}>
                  {"No: primero mira si hay cactus."}
                </div>
              </div>
            </>)}
            {quiz.c[3].open && (<>
              <div style={{"display":"grid","gridTemplateColumns":"minmax(0,1fr)","gap":"8px","width":"100%"}}>
                <button className="quiz-opt" onClick={quiz.c[3].pick1} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[3].o1}
                </button>
                <button className="quiz-opt" onClick={quiz.c[3].pick2} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[3].o2}
                </button>
              </div>
            </>)}
            {quiz.c[3].wrong && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"10px","width":"100%"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#B0402C"}}>
                  {"Casi… ¡prueba otra vez!"}
                </div>
                <button onClick={quiz.c[3].retry} style={{"font":"inherit","cursor":"pointer","minHeight":"48px","padding":"0 20px","borderRadius":"999px","border":"2px solid #B0402C","background":"transparent","color":"#B0402C","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"18px"}}>
                  {"Intentar de nuevo"}
                </button>
              </div>
            </>)}
          </div>
          <div style={{"font":"inherit","color":"inherit","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"space-between","gap":"18px","padding":"24px 20px","border":"2px solid #CDBB98","borderRadius":"16px","background":"#FBF5EA","textAlign":"center"}}>
            <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"24px","lineHeight":"1.25","textWrap":"balance"}}>
              {"¿Puedo comer una pitanga?"}
            </div>
            {quiz.c[4].right && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"8px"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#3B6B42"}}>
                  {"✓ ¡Muy bien!"}
                </div>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","lineHeight":"1.25","color":"#FFFFFF","background":"#3B6B42","borderRadius":"14px","padding":"8px 14px","textWrap":"balance"}}>
                  {"Sí, si un adulto te dice que sí."}
                </div>
              </div>
            </>)}
            {quiz.c[4].open && (<>
              <div style={{"display":"grid","gridTemplateColumns":"minmax(0,1fr)","gap":"8px","width":"100%"}}>
                <button className="quiz-opt" onClick={quiz.c[4].pick1} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[4].o1}
                </button>
                <button className="quiz-opt" onClick={quiz.c[4].pick2} style={{"font":"inherit","cursor":"pointer","minHeight":"52px","minWidth":"0","padding":"8px 12px","borderRadius":"14px","border":"2px solid #2C3B30","background":"#F4EBD9","color":"#1F2A22","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"19px","lineHeight":"1.2","textWrap":"balance","transition":"background 140ms cubic-bezier(.2,0,0,1)"}}>
                  {quiz.c[4].o2}
                </button>
              </div>
            </>)}
            {quiz.c[4].wrong && (<>
              <div style={{"display":"flex","flexDirection":"column","alignItems":"center","gap":"10px","width":"100%"}}>
                <div style={{"fontFamily":"'Fredoka',sans-serif","fontWeight":"700","fontSize":"20px","color":"#B0402C"}}>
                  {"Casi… ¡prueba otra vez!"}
                </div>
                <button onClick={quiz.c[4].retry} style={{"font":"inherit","cursor":"pointer","minHeight":"48px","padding":"0 20px","borderRadius":"999px","border":"2px solid #B0402C","background":"transparent","color":"#B0402C","fontFamily":"'Fredoka',sans-serif","fontWeight":"600","fontSize":"18px"}}>
                  {"Intentar de nuevo"}
                </button>
              </div>
            </>)}
          </div>
        </div>
      </section>
    </>
  );
}
