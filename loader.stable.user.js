// ==UserScript==
// @name         Realism Location Marker (STABLE)
// @namespace    https://realism-location-marker.com
// @version      7.3.0
// @description  Stable version of RLM V7.3.0 with multi-language support and server-specific building IDs
// @author       Richard Cameron (Madpugs) - Norbit.Online / MissionChief Unofficial Team
// @license      GPL-3.0-or-later; https://www.gnu.org/licenses/gpl-3.0.txt
// @copyright    Copyright (C) 2025 Norbit.Online
// @icon         https://realism-location-marker.com/static/assets/images/RLM-Marker.png
// @match        https://www.missionchief.com/*
// @match        https://police.missionchief.com/*
// @match        https://www.missionchief.co.uk/*
// @match        https://police.missionchief.co.uk/*
// @match        https://www.missionchief-australia.com/*
// @match        https://police.missionchief-australia.com/*
// @match        https://www.leitstellenspiel.de/*
// @match        https://polizei.leitstellenspiel.de/*
// @match        https://www.jogo-operador112.com/*
// @match        https://policia.jogo-operador112.com/*
// @match        https://www.centro-de-mando.es/*
// @match        https://www.meldkamerspel.com/*
// @match        https://politie.meldkamerspel.com/*
// @match        https://www.operatorratunkowy.pl/*
// @match        https://policja.operatorratunkowy.pl/*
// @match        https://www.larmcentralen-spelet.se/*
// @match        https://polis.larmcentralen-spelet.se/*
// @match        https://www.operatore112.it/*
// @match        https://polizia.operatore112.it/*
// @match        https://www.operateur112.fr/*
// @match        https://police.operateur112.fr/*
// @match        https://www.dispetcher-112.com/*
// @match        https://www.operacni-stredisko.cz/*
// @match        https://policie.operacni-stredisko.cz/*
// @match        https://www.alarmcentral-spil.dk/*
// @match        https://politi.alarmcentral-spil.dk/*
// @match        https://www.missionchief-japan.com/*
// @match        https://www.missionchief-korea.com/*
// @match        https://www.nodsentralspillet.com/*
// @match        https://politiet.nodsentralspillet.com/*
// @match        https://www.jocdispecerat112.com/*
// @match        https://www.dispecerske-centrum.com/*
// @match        https://www.112-merkez.com/*
// @match        https://www.operador193.com/*
// @match        https://www.centro-de-mando.mx/*
// @match        https://www.dyspetcher101-game.com/*
// @match        https://www.hatakeskuspeli.com/*
// @match        https://poliisi.hatakeskuspeli.com/*
// @downloadURL  https://raw.githubusercontent.com/Norbit-Online/Realism-Location-Marker/main/loader.stable.user.js
// @updateURL    https://raw.githubusercontent.com/Norbit-Online/Realism-Location-Marker/main/loader.stable.user.js
// @grant        GM_xmlhttpRequest
// @grant        GM_info
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    console.log('RLM V7 Stable Loader starting...');

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
        "https://www.dispetcher-112.com/*": {
            country: "RU",
            gameUrl: "dispetcher-112.com"
        },
        "https://www.operacni-stredisko.cz/*": {
            country: "CZ",
            gameUrl: "operacni-stredisko.cz"
        },
        "https://policie.operacni-stredisko.cz/*": {
            country: "CZ",
            gameUrl: "policie.operacni-stredisko.cz"
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
        console.log('RLM V7 Stable Loader: Current domain:', currentDomain);
        
        for (const [domain, config] of Object.entries(domainMapping)) {
            if (currentDomain.includes(domain.replace("*", ""))) {
                console.log('RLM V7 Stable Loader: Matched game config:', {
                    domain: domain,
                    country: config.country,
                    gameUrl: config.gameUrl
                });
                return config;
            }
        }
        console.error('RLM V7 Stable Loader: No matching game config found for domain:', currentDomain);
        return null;
    }

    // Configuration
    const config = {
        apiBaseUrl: 'https://realism-location-marker.com',
        apiEndpoints: {
            pois: '/api/pois',
            reverseGeocode: '/api/reverse-geocode',
            poiTypes: '/api/poi-types',
            version: '/api/version',
            buildingTypes: '/api/building-types',
            dispatchCenters: '/api/dispatch-centers'
        },
        version: '7.3.0',
        status: 'Production'
    };

    // Function to get common headers for API requests
    function getCommonHeaders() {
        // Try to read the global variables from the page
        let userId = window.user_id || (typeof user_id !== 'undefined' ? user_id : null);
        let username = window.username || null;
        let allianceId = window.alliance_id || null;

        // Try to get username from global scope if not in window
        if (!username && typeof window.username !== 'undefined') {
            username = window.username;
        }
        
        // Try to get alliance_id from global scope if not in window
        if (!allianceId && typeof window.alliance_id !== 'undefined') {
            allianceId = window.alliance_id;
        }

        // Try to find username in the page source directly if not found in variables
        if (!username) {
            try {
                const pageSource = document.documentElement.outerHTML;
                const usernameMatch = pageSource.match(/var username = "([^"]+)"/);
                if (usernameMatch && usernameMatch[1]) {
                    username = usernameMatch[1];
                }
            } catch (e) {
                // Silently fail
            }
        }

        return {
            'X-RLM-Script': 'true',
            'X-RLM-Version': GM_info.script.version,
            ...(userId && { 'X-RLM-UserID': userId }),
            ...(username && { 'X-RLM-Username': username }),
            ...(allianceId && { 'X-RLM-AllianceID': allianceId })
        };
    }

    function loadModularSystem() {
        console.log('RLM V7 Stable Loader: Loading modular system...');
        
        // Get game configuration
        const gameConfig = getGameConfig();
        if (!gameConfig) {
            console.error('RLM V7 Stable Loader: Could not determine game configuration');
            return;
        }

        // Add configuration before loading the modular system
        window.RLMConfig = {
            ...config,
            country: gameConfig.country,
            gameUrl: gameConfig.gameUrl
        };
        
        console.log('RLM V7 Stable Loader: Full config:', window.RLMConfig);

        // Load the stable entry point
        loadStableEntryPoint();
    }

    function loadStableEntryPoint() {
        const timestamp = Date.now();
        
        // Get common headers for RLM tracking
        const headers = getCommonHeaders();
        
        GM_xmlhttpRequest({
            method: 'GET',
            url: `https://realism-location-marker.com/api/stable-entry-point?_t=${timestamp}`,
            headers: headers,
            onload: function(response) {
                try {
                    console.log('RLM V7 Stable Loader: Stable entry point loaded, length:', response.responseText.length);
                    eval(response.responseText);
                    console.log('RLM V7 Stable Loader: Stable entry point evaluated successfully');
                } catch (error) {
                    console.error('RLM V7 Stable Loader: Error evaluating stable entry point:', error);
                }
            },
            onerror: function(error) {
                console.error('RLM V7 Stable Loader: Error loading stable entry point:', error);
            }
        });
    }

    // Wait for document to be ready
    if (document.readyState === 'loading') {
        console.log('RLM V7 Stable Loader: Document loading, waiting for DOMContentLoaded...');
        document.addEventListener('DOMContentLoaded', loadModularSystem);
    } else {
        console.log('RLM V7 Stable Loader: Document already loaded, executing immediately...');
        loadModularSystem();
    }
})(); 