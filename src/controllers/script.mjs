import Graph from "../modules/graph.mjs";

const grafo = new Graph();

window.addStation = () => {
    const stationInput = document.getElementById('stationInput');
    const stationName = stationInput.value.trim();
    if (stationName) {
        grafo.addNode(stationName);
        stationInput.value = '';
        displayOutput(`Estación añadida: ${stationName}`);
    }
};

window.addconex = () => {
    const startStationInput = document.getElementById('startStationInput');
    const endStationInput = document.getElementById('endStationInput');
    const startStation = startStationInput.value.trim();
    const endStation = endStationInput.value.trim();
    if (startStation && endStation) {
        grafo.addEdge(startStation, endStation);
        startStationInput.value = '';
        endStationInput.value = '';
        displayOutput(`Conexion creada ${startStation} to ${endStation}`);
    }
};

window.perform = () => {
    const dfsInput = document.getElementById('dfsInput');
    const startStation = dfsInput.value.trim();
    if (startStation) {
        const result = grafo.recorrido(startStation);
        dfsInput.value = '';
        displayOutput(`empieza desde: ${startStation}: ${result.join(' -> ')}`);
    }
};

function displayOutput(message) {
    const outputElement = document.getElementById('output');
    outputElement.textContent += message + '\n';
}

