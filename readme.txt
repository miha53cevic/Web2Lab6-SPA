Deploy link: https://web2lab6-spa.onrender.com/

interpolation/one-way binding - Da, src/components/pollDisplay.vue varijabla poll (:10) se prikazuje pomoću {{ }} notacije (:45,:46,:51,:56,:61)
two-way binding - Da, src/views/LoginView.vue varijabla username (:7) je dvosmjerno povezana s inputom (:28) pomoću v-model te se mjenjanjem inputa mjenjanjem i varijabla
methods - Da, src/views/LoginView.vue funkcija login() (:15) i mapActions() (:14) su oboje definirane kao methods, također i u src/views/pollContainer.vue openPoll (:5)
computed properties - Da, src/views/HomeView.vue (:6) mapState() koristi computed, također i u src/views/CreatePollView, ListView...
barem jedan scoped style - Da, src/App.vue (:35) te src/views/Home.vue (:33), App.vue prikazuje Home.vue i radi scoped se ne miješa css između njih
koristiti barem jedan lifecycle hook - Da, koristi se mounted lifecycle hook src/views/Home.vue (:12)
routing (više stranica) - Da, src/router/index.js mogu se vidjeti rute: /, create-poll, list, login, poll/id

    aplikacija mora biti bookmarkable, tako da rade linkovi (ne samo na root, već i moj-web.com/stranica1, moj-web.com/stranica2) - Da radi i na deploy verziji
    dinamičko usmjeravanje s 404 stranicom ("catch all") - Da unutar src/router/index.js i vraća src/views/NotFoundView.vue

(barem) dvije komponente - Da, src/components/ mainContainer, pollContainer, pollDisplay

    komponenta bez stanja, koristiti properties - src/components/pollContainer.vue (:3) koristi 3 props: id, title, creator, voteCount i nema unutarnjeg stanja
    komponenta sa stanjem - src/components/pollDisplay.vue (:10) sadrži unutarne stanje poll koji mjenja ovisno o store-u kasnije

barem jedna komponenta mora emitirati barem jedan event - Da, src/components/pollDisplay.vue (:7) šalje event sa id i odabirom vote-a prema src/views/PollView.vue (:11)
store (Pinia) - Da, /src/stores/ authStore, pollStore prvi služi za authentikaciju korisnika, a drugi za asikorni dohvat i rad s poll-ovima.
asinkroni dohvat podataka s backenda. - Da, /src/stores/pollStore.js (:14) funkcija fetchPolls asikrono dohvaća podatke.
Lazy loading nekog dijela aplikacije - Da, /src/router/index.js (:17, :22, :32, :37) radi se lazy loading view-ova odnosno dohvaća se tek dok je potrebno odnosno korisnik prelazi na tu podstranicu