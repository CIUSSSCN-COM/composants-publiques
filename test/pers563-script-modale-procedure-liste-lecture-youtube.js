const pers563modaleRootDiv = document.getElementById('pers563-root-modale-procedure-liste-lecture-youtube');

pers563modaleRootDiv.innerHTML = 
`
<a href="javascript:;" id="pers563-trigger-modale-procedure-lly"
        >Comment utiliser l'interface</a
      >
      <style type="text/css">
        #pers563-modale-procedure-lly {
          display: none;
          position: fixed;
          z-index: 1000;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          overflow: auto;
          background-color: rgb(0, 0, 0);
          background-color: rgba(0, 0, 0, 0.4);
        }

        #pers563-modale-procedure-lly__content {
          background-color: #fefefe;
          margin: 100px auto;
          padding: 20px;
          border: 1px solid #888;
          max-width: 750px;
        }

        #pers563-modale-procedure-lly__content__header {
          display: flex;
          justify-content: space-between;
        }

        #pers563-modale-procedure-lly__content__header-fermer {
          color: #aaaaaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
        }

        #pers563-modale-procedure-lly__content__header-fermer:hover,
        #pers563-modale-procedure-lly__content__header-fermer:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }

        #pers563-modale-procedure-lly__content__body p {
          padding: 1rem 0;
          font-size: 1.2rem;
        }
        #pers563-modale-procedure-lly__content__body ol {
          list-style-type: none;
          padding-left:0;
        }
        #pers563-modale-procedure-lly__content__body li {
          margin-bottom:2rem;
        }
        #pers563-modale-procedure-lly__content__body img {
          width: 100%;
        }
      </style>

      <div id="pers563-modale-procedure-lly">
        <div id="pers563-modale-procedure-lly__content">
          <div id="pers563-modale-procedure-lly__content__header">
            <span><h2>Comment utiliser l'interface de lecture vidéo?</h2></span>
            <span id="pers563-modale-procedure-lly__content__header-fermer">×</span>
          </div>
          <div id="pers563-modale-procedure-lly__content__body">
              <p>
                Les explications prennent exemple de la liste de lecture des <a href="https://www.ciusss-capitalenationale.gouv.qc.ca/antipoison/professionnels-de-la-sante/webinaires" target="_blank">webinaires du centre antipoison</a>. 
              </p>
            <ol>
              <li>
                <h3>
                  1) Vous pouvez choisir la vidéo désirée en accédant à la liste
                  de lecture via le bouton en haut à droite:
                </h3>
                <img
                  alt="Capture d'écran avec une flèche pointant sur le menu de la liste de lecture en haut à droite"
                  src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-1.jpg"
                />
              </li>
              <li>
                <h3>
                  2) Vous pourrez ainsi choisir la vidéo désirée en cliquant
                  dessus:
                </h3>
                <img
                  alt="Capture d'écran avec une flèche pointant sur le deuxième choix de la liste de lecture"
                  src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-2.jpg"
                />
              </li>
              <li>
                <h3>
                  3) Vous pouvez passer à la vidéo suivante via les boutons de
                  lecture ou le raccourci clavier Shift + N:
                </h3>
                <img
                  alt="Capture d'écran avec deux fleches pointant sur les bouton de passer à la vidéo suivante et montrant le raccourci Shift+N"
                  src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-3.jpg"
                />
              </li>
              <li>
                <h3>
                  4-5) Si vous regardez les vidéos sur YouTube, la liste de
                  lecture sera à droite et les documents reliés à la vidéo
                  seront dans la description en dessous:
                </h3>
                <img
                  alt="Capture d'écran sur l'interface de YouTube montrant la liste de lecture à droite et les liens des documents en bas"
                  src="https://www.ciusss-capitalenationale.gouv.qc.ca/sites/d8/files/Microsites/CAPQ/Webinaires/capture-ecran-webinaires-4.jpg"
                />
              </li>
            </ol>
          </div>
        </div>
      </div>
`;

const pers563modaleLly = document.getElementById(
  "pers563-modale-procedure-lly"
);
const pers563btnLly = document.getElementById(
  "pers563-trigger-modale-procedure-lly"
);
const pers563spanLly = document.getElementById(
  "pers563-modale-procedure-lly__content__header-fermer"
);

pers563btnLly.onclick = function () {
  pers563modaleLly.style.display = "block";
  event.preventDefault;
};
pers563spanLly.onclick = function () {
  pers563modaleLly.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == pers563modaleLly) {
    pers563modaleLly.style.display = "none";
  }
};
