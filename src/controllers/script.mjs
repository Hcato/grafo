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
        displayOutput(`Conexión creada: ${startStation} -> ${endStation}`);
    }
};

window.performDFS = () => {
    const dfsInput = document.getElementById('dfsInput');
    const startStation = dfsInput.value.trim();
    if (startStation) {
        const result = [];
        grafo.dfs((vertex) => result.push(vertex));
        dfsInput.value = '';
        displayOutput(`Recorrido DFS desde ${startStation}: ${result.join(' -> ')}`);
    }
};

window.performBFS = () => {
    const bfsInput = document.getElementById('bfsInput');
    const startStation = bfsInput.value.trim();
    if (startStation) {
        const result = [];
        grafo.bfs((vertex) => result.push(vertex));
        bfsInput.value = '';
        displayOutput(`Recorrido BFS desde ${startStation}: ${result.join(' -> ')}`);
    }
};

function displayOutput(message) {
    const outputElement = document.getElementById('output');
    outputElement.textContent += message + '\n';
}

