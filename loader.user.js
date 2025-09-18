// ==UserScript==
// @name         Realism Location Marker
// @namespace    https://missionchief-unofficial.com
// @version      6.3.1
// @description  RLM with multi-language support and server-specific building IDs
// @author       Richard Cameron (Madpugs) - Norbit.Online / MissionChief Unofficial Team
// @license      GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @copyright    Copyright (C) 2025 Norbit.Online
// @icon         https://rlm.missionchief-unofficial.com/static/assets/images/RLM-Marker.png
// @match        https://www.missionchief.com/*
// @match        https://www.missionchief.co.uk/*
// @match        https://www.missionchief.com.au/*
// @match        https://www.missionchief-japan.com/*
// @match        https://www.missionchief.ru/*
// @match        https://www.operateur112.fr/*
// @match        https://www.operatore112.it/*
// @match        https://www.nodsentralspillet.com/*
// @match        https://www.meldkamerspel.com/*
// @match        https://www.centro-de-mando.es/*
// @match        https://www.centro-de-mando.mx/*
// @match        https://www.missionchief-korea.com/*
// @match        https://www.jogo-operador112.com/*
// @match        https://www.hatakeskuspeli.com/*
// @match        https://www.operatorratunkowy.pl/*
// @match        https://www.dispetcher112.ru/*
// @match        https://www.alarmcentral-spil.dk/*
// @match        https://www.larmcentralen-spelet.se/*
// @match        https://www.operacni-stredisko.cz/*
// @match        https://www.112-merkez.com/*
// @match        https://www.dyspetcher101-game.com/*
// @match        https://www.operador112.com/*
// @match        https://www.operateur112.be/*
// @match        https://www.dispecerske-centrum.com/*
// @downloadURL  https://raw.githubusercontent.com/Missionchiefunofficial/Realism-Location-Marker/main/loader.user.js
// @updateURL    https://raw.githubusercontent.com/Missionchiefunofficial/Realism-Location-Marker/main/loader.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('RLM V6 Loader starting...');

    // Domain mapping for MissionChief
    const domainMapping = {
        "https://www.missionchief.com/*": {
            country: "US",
            gameUrl: "missionchief.com"
        },
        "https://police.missionchief.com/*": {
            country: "US",
            gameUrl: "police.missionchief.com"
        },
        "https://www.missionchief.co.uk/*": {
            country: "UK",
            gameUrl: "missionchief.co.uk"
        },
        "https://police.missionchief.co.uk/*": {
            country: "UK",
            gameUrl: "police.missionchief.co.uk"
        },
        "https://www.missionchief-australia.com/*": {
            country: "AU",
            gameUrl: "missionchief-australia.com"
        },
        "https://police.missionchief-australia.com/*": {
            country: "AU",
            gameUrl: "police.missionchief-australia.com"
        },
        "https://www.leitstellenspiel.de/*": {
            country: "DE",
            gameUrl: "leitstellenspiel.de"
        },
        "https://polizei.leitstellenspiel.de/*": {
            country: "DE",
            gameUrl: "polizei.leitstellenspiel.de"
        },
        "https://www.jogo-operador112.com/*": {
            country: "PT",
            gameUrl: "jogo-operador112.com"
        },
        "https://policia.jogo-operador112.com/*": {
            country: "PT",
            gameUrl: "policia.jogo-operador112.com"
        },
        "https://www.centro-de-mando.es/*": {
            country: "ES",
            gameUrl: "centro-de-mando.es"
        },
        "https://www.meldkamerspel.com/*": {
            country: "NL",
            gameUrl: "meldkamerspel.com"
        },
        "https://politie.meldkamerspel.com/*": {
            country: "NL",
            gameUrl: "politie.meldkamerspel.com"
        },
        "https://www.operatorratunkowy.pl/*": {
            country: "PL",
            gameUrl: "operatorratunkowy.pl"
        },
        "https://policja.operatorratunkowy.pl/*": {
            country: "PL",
            gameUrl: "policja.operatorratunkowy.pl"
        },
        "https://www.larmcentralen-spelet.se/*": {
            country: "SE",
            gameUrl: "larmcentralen-spelet.se"
        },
        "https://polis.larmcentralen-spelet.se/*": {
            country: "SE",
            gameUrl: "polis.larmcentralen-spelet.se"
        },
        "https://www.operatore112.it/*": {
            country: "IT",
            gameUrl: "operatore112.it"
        },
        "https://polizia.operatore112.it/*": {
            country: "IT",
            gameUrl: "polizia.operatore112.it"
        },
        "https://www.operateur112.fr/*": {
            country: "FR",
            gameUrl: "operateur112.fr"
        },
        "https://police.operateur112.fr/*": {
            country: "FR",
            gameUrl: "police.operateur112.fr"
        },
        "https://www.dispetcher112.ru/*": {
            country: "RU",
            gameUrl: "dispetcher112.ru"
        },
        "https://www.operacni-stredisko.cz/*": {
            country: "CZ",
            gameUrl: "operacni-stredisko.cz"
        },
        "https://police.operacni-stredisko.cz/*": {
            country: "CZ",
            gameUrl: "police.operacni-stredisko.cz"
        },
        "https://www.alarmcentral-spil.dk/*": {
            country: "DK",
            gameUrl: "alarmcentral-spil.dk"
        },
        "https://politi.alarmcentral-spil.dk/*": {
            country: "DK",
            gameUrl: "politi.alarmcentral-spil.dk"
        },
        "https://www.missionchief-japan.com/*": {
            country: "JP",
            gameUrl: "missionchief-japan.com"
        },
        "https://www.missionchief-korea.com/*": {
            country: "KR",
            gameUrl: "missionchief-korea.com"
        },
        "https://www.nodsentralspillet.com/*": {
            country: "NO",
            gameUrl: "nodsentralspillet.com"
        },
        "https://politiet.nodsentralspillet.com/*": {
            country: "NO",
            gameUrl: "politiet.nodsentralspillet.com"
        },
        "https://www.jocdispecerat112.com/*": {
            country: "RO",
            gameUrl: "jocdispecerat112.com"
        },
        "https://www.dispecerske-centrum.com/*": {
            country: "SK",
            gameUrl: "dispecerske-centrum.com"
        },
        "https://www.112-merkez.com/*": {
            country: "TR",
            gameUrl: "112-merkez.com"
        },
        "https://www.operador193.com/*": {
            country: "BR",
            gameUrl: "operador193.com"
        },
        "https://www.centro-de-mando.mx/*": {
            country: "MX",
            gameUrl: "centro-de-mando.mx"
        },
        "https://www.dyspetcher101-game.com/*": {
            country: "UA",
            gameUrl: "dyspetcher101-game.com"
        },
        "https://www.hatakeskuspeli.com/*": {
            country: "FI",
            gameUrl: "hatakeskuspeli.com"
        },
        "https://poliisi.hatakeskuspeli.com/*": {
            country: "FI",
            gameUrl: "poliisi.hatakeskuspeli.com"
        }
    };

    // Function to get game configuration based on current domain
    function getGameConfig() {
        const currentDomain = window.location.href;
        console.log('RLM Loader: Current domain:', currentDomain);
        
        for (const [domain, config] of Object.entries(domainMapping)) {
            if (currentDomain.includes(domain.replace("*", ""))) {
                console.log('RLM Loader: Matched game config:', {
                    domain: domain,
                    country: config.country,
                    gameUrl: config.gameUrl
                });
                return config;
            }
        }
        console.error('RLM Loader: No matching game config found for domain:', currentDomain);
        return null;
    }

    // Configuration
    const config = {
        apiBaseUrl: 'https://rlm.missionchief-unofficial.com',
        apiEndpoints: {
            pois: '/api/pois',
            reverseGeocode: '/api/reverse-geocode',
            poiTypes: '/api/poi-types',
            version: '/api/version',
            buildingTypes: '/api/building-types',
            dispatchCenters: '/api/dispatch-centers'
        },
        version: '6.3.1',
        status: 'Production'
    };

    function loadServerScript() {
        console.log('RLM Loader: Loading server script...');
        
        // Get game configuration
        const gameConfig = getGameConfig();
        if (!gameConfig) {
            console.error('RLM Loader: Could not determine game configuration');
            return;
        }

        // Add configuration before loading the server script
        window.RLMConfig = {
            ...config,
            country: gameConfig.country,
            gameUrl: gameConfig.gameUrl
        };
        
        console.log('RLM Loader: Full config:', window.RLMConfig);

        // Load the server script with cache busting
        const timestamp = Date.now();
        GM_xmlhttpRequest({
            method: 'GET',
            url: `https://rlm.missionchief-unofficial.com/api/script/main?_t=${timestamp}`,
            onload: function(response) {
                try {
                    console.log('RLM Loader: Server script loaded, length:', response.responseText.length);
                    eval(response.responseText);
                    console.log('RLM Loader: Server script evaluated successfully');
                } catch (error) {
                    console.error('RLM Loader: Error evaluating server script:', error);
                }
            },
            onerror: function(error) {
                console.error('RLM Loader: Error loading server script:', error);
            }
        });
    }

    // Wait for document to be ready
    if (document.readyState === 'loading') {
        console.log('RLM Loader: Document loading, waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', loadServerScript);
    } else {
        console.log('RLM Loader: Document already loaded, executing immediately...');
        loadServerScript();
    }
})(); 