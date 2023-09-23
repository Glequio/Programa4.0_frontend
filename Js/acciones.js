// accion experiencia laboral
document.getElementById("trabajos").addEventListener("click", function() {
    let parrafo = document.createElement("p");  //Creo parrafo
    const salto = document.createElement("br")  //Creo Salto
    let lista = document.createElement("ul");   //creo lista
    let item1 = document.createElement("li");   //creo items
    let item2 = document.createElement("li");   //creo items
    let item3 = document.createElement("li");   //creo items
    let listas1 = document.createElement("ul");
    listas1.style.marginLeft ="2rem";
    listas1.style.fontSize = "10px";
    listas1.style.paddingBottom = "1rem";
    let listas2 = document.createElement("ul");
    listas2.style.marginLeft ="2rem";
    listas2.style.fontSize = "10px";
    listas2.style.paddingBottom = "1rem";
    let listas3 = document.createElement("ul");
    listas3.style.marginLeft ="2rem";
    listas3.style.fontSize = "10px";
    listas3.style.paddingBottom = "1rem";
    let items11 = document.createElement("li");    
    let items12 = document.createElement("li");
    let items13 = document.createElement("li");
    let items21 = document.createElement("li");    
    let items22 = document.createElement("li");
    let items23 = document.createElement("li");
    let items31 = document.createElement("li");    
    let items32 = document.createElement("li");
    let items33 = document.createElement("li");

    parrafo.textContent = "EXPERIENCIA LABORAL";
    item1.textContent = "Ingeniero de telecomunicaciones Telecom 03/2018 07/2022";
    items11.textContent = "Diseño de redes informáticas.";
    items12.textContent = "Utilización de controladores de borde de sección.";
    items13.textContent = "Cálculo del coste de la instalación de dispositivos de telecomunicaciones.";

    item2.textContent = "Ingeniero de telecomunicaciones Grupo AI Consultoría Girona 04/2012 12/2017";
    items21.textContent = "Desarrollo de sistemas de comunicaciones y soporte a los usuarios del sistema.";
    items22.textContent = "Definición de los requisitos técnicos para la gestión de proyectos a través de metodología Agile.";
    items23.textContent = "Diseño de redes informáticas y análisis de los requisitos del ancho de banda.";     
    
    item3.textContent = "Técnico de telecomunicación CT Solutions Girona 11/2010 01/2012";
    items31.textContent = "Desarrollo de proyectos de instalación y sistemas de telecomunicaciones según las especificaciones de cada cliente.";
    items32.textContent = "Organizacion del despliegue y gestión de redes, sistemas e infraestructuras de telecomunicación.";
    items33.textContent = "Soporte y gestión de redes e incidencias remotas."; 

    lista.appendChild(item1);
    item1.appendChild(listas1);
    listas1.appendChild(items11);
    listas1.appendChild(items12);
    listas1.appendChild(items13);

    lista.appendChild(item2);
    item2.appendChild(listas2);
    listas2.appendChild(items21);
    listas2.appendChild(items22);
    listas2.appendChild(items23);
    
    lista.appendChild(item3);
    item3.appendChild(listas3);
    listas3.appendChild(items31);
    listas3.appendChild(items32);
    listas3.appendChild(items33);

    document.getElementById("texto").innerHTML = "";  //limpio pantyalla

    document.getElementById("texto").appendChild(parrafo);
    document.getElementById("texto").appendChild(salto);  
    document.getElementById("texto").appendChild(lista);
  });

  // ACCION FORMACION ACADEMICA
  document.getElementById("educa").addEventListener("click", function() {

    let parrafo = document.createElement("p");  //Creo parrafo
    const salto = document.createElement("br")  //Creo Salto
    let lista = document.createElement("ul");
    let item1 = document.createElement("li");
    item1.style.paddingBottom = "1rem";
    let item2 = document.createElement("li");
    item2.style.paddingBottom = "1rem";
    let item3 = document.createElement("li");
    item3.style.paddingBottom = "1rem";

    parrafo.textContent = "FORMACIÓN ACADÉMICA";
    item1.textContent = "Universitat Politécnica de Catalunya Máster en Ingeniería de Telecomunicación (MET) Barcelona 09/2010";
    item2.textContent = "Ingeniería de Telecomunicaciones Universidad Autónoma de Barcelona - Barcelona 09/2008";
    item3.textContent = "Técnico de telecomunicación CT Solutions Girona 11/2010 01/2012"
  
    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);
    document.getElementById("texto").innerHTML = "";
    document.getElementById("texto").appendChild(parrafo); 
    document.getElementById("texto").appendChild(salto);  
    document.getElementById("texto").appendChild(lista);
  });
  //ACCION APTITUD
  document.getElementById("aptitud").addEventListener("click", function() {
    
    let parrafo = document.createElement("p");  //Creo parrafo
    const salto = document.createElement("br")  //Creo Salto
    let lista = document.createElement("ul");
    let item1 = document.createElement("li");
    item1.style.paddingBottom = "1rem";
    let item2 = document.createElement("li");
    item2.style.paddingBottom = "1rem";
    let item3 = document.createElement("li");
    item3.style.paddingBottom = "1rem";
    let item4 = document.createElement("li");
    item4.style.paddingBottom = "1rem";
    let item5 = document.createElement("li");
    item5.style.paddingBottom = "1rem";
    let item6 = document.createElement("li");  
    item6.style.paddingBottom = "1rem";

    parrafo.textContent = "APTITUDES";
    item1.textContent = "Gestión y organización de redes";
    item2.textContent = "Programación e informática";
    item3.textContent = "Manejo de sistemas informáticos"
    item4.textContent = "Planificación de recursos"  
    item5.textContent = "Especialista en parámetros de instalación"
    item6.textContent = "Gestión de incidencias"

    lista.appendChild(item1);
    lista.appendChild(item2);
    lista.appendChild(item3);
    lista.appendChild(item4);
    lista.appendChild(item5);
    lista.appendChild(item6);    

    document.getElementById("texto").innerHTML = "";
    document.getElementById("texto").appendChild(parrafo);
    document.getElementById("texto").appendChild(salto);   
    document.getElementById("texto").appendChild(lista);
  });
  //ACCION PERFIL PROFECIONAL
  document.getElementById("perfil").addEventListener("click", function() {

    let parrafo1 = document.createElement("p");  //Creo parrafo
    let parrafo2 = document.createElement("p");
    const salto = document.createElement("br");  //Creo Salto

    parrafo1.textContent = "PERFIL PROFESIONAL";
    parrafo2.textContent = "Ingeniero de telecomunicaciones con 12 años de experiencia en gestión de redes informáticas Reconocido por evaluar las necesidades operativas de los sistemas informáticos y desarrollar soluciones para ahorrar costes y aumentar la satisfacción del cliente";

    document.getElementById("texto").innerHTML = "";
    document.getElementById("texto").appendChild(parrafo1); 
    document.getElementById("texto").appendChild(salto);  
    document.getElementById("texto").appendChild(parrafo2);
  });