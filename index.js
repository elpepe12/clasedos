
// DOC: https://firebase.google.com/docs/firestore/quickstart?authuser=2

        // inicializa la librería de firebase, con los identificadores de nuestros proyectos en firebase.google.com
        firebase.initializeApp({
            apiKey: 'AIzaSyAHFyLKWTKe3U_hsSGchsDmcnEtNuSuxNU',
            authDomain: 'prueba-dd54b.firebaseapp.com',
            projectId: 'prueba-dd54b'
        });
        // en este punto firebase está listo para ser usado

        // se crea un objeto "referencia" para poder darle instrucciones al firestore de nuestro proyecto
        var db = firebase.firestore();

        writeSomething = () => db.collection("users").add({
                first: document.getElementById("name").value,
                last: document.getElementById("lastname").value,
                born: 1990,
                son: {
                    first: "odu",
                    last: "Livinting",
                    born: 1990
                }
            })
            .then(function(docRef) {
                console.log("El  Documento con ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error EN EL DOCUMENTO: ", error);     
            });

        readAll = () => db.collection("users").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data().first}`);
                });
            });