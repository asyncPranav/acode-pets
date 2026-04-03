
"use strict";

const PLUGIN_ID = "com.asyncpranav.acodepets";

// ═══════════════════════════════════════════════════════
//  SVG SPRITES
// ═══════════════════════════════════════════════════════

const SPRITES = {
  cat: {
    skins: {
      orange: { body: "#f4a460", dark: "#e8935a", ear: "#ffb6c1" },
      grey:   { body: "#9e9e9e", dark: "#757575", ear: "#f8bbd0" },
      black:  { body: "#333333", dark: "#1a1a1a", ear: "#ff80ab" },
      white:  { body: "#f5f5f5", dark: "#e0e0e0", ear: "#fce4ec" },
      cream:  { body: "#ffe0b2", dark: "#ffcc80", ear: "#f8bbd0" },
    },
    frames: {
      idle: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="22" rx="9" ry="7" fill="${c.body}"/>
        <circle cx="16" cy="13" r="7" fill="${c.body}"/>
        <polygon points="10,8 7,2 13,7" fill="${c.body}"/>
        <polygon points="22,8 25,2 19,7" fill="${c.body}"/>
        <polygon points="10,8 8,4 12,7" fill="${c.ear}"/>
        <polygon points="22,8 24,4 20,7" fill="${c.ear}"/>
        <ellipse cx="13" cy="12" rx="2" ry="2.5" fill="#2d2d2d"/>
        <ellipse cx="19" cy="12" rx="2" ry="2.5" fill="#2d2d2d"/>
        <circle cx="13.7" cy="11.3" r="0.6" fill="white"/>
        <circle cx="19.7" cy="11.3" r="0.6" fill="white"/>
        <ellipse cx="16" cy="14.5" rx="1" ry="0.7" fill="#ff9999"/>
        <path d="M14.5 15.2 Q16 16.5 17.5 15.2" stroke="#cc6666" stroke-width="0.5" fill="none"/>
        <line x1="8" y1="14" x2="13" y2="14.5" stroke="#888" stroke-width="0.4"/>
        <line x1="8" y1="15.5" x2="13" y2="15.2" stroke="#888" stroke-width="0.4"/>
        <line x1="19" y1="14.5" x2="24" y2="14" stroke="#888" stroke-width="0.4"/>
        <line x1="19" y1="15.2" x2="24" y2="15.5" stroke="#888" stroke-width="0.4"/>
        <path d="M25 22 Q30 18 28 14" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <ellipse cx="11" cy="27" rx="2.5" ry="2" fill="${c.dark}"/>
        <ellipse cx="21" cy="27" rx="2.5" ry="2" fill="${c.dark}"/>
      </svg>`,

      walk: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="22" rx="9" ry="6" fill="${c.body}"/>
        <circle cx="16" cy="13" r="7" fill="${c.body}"/>
        <polygon points="10,8 7,2 13,7" fill="${c.body}"/>
        <polygon points="22,8 25,2 19,7" fill="${c.body}"/>
        <polygon points="10,8 8,4 12,7" fill="${c.ear}"/>
        <polygon points="22,8 24,4 20,7" fill="${c.ear}"/>
        <ellipse cx="13" cy="12" rx="2" ry="2.5" fill="#2d2d2d"/>
        <ellipse cx="19" cy="12" rx="2" ry="2.5" fill="#2d2d2d"/>
        <circle cx="13.7" cy="11.3" r="0.6" fill="white"/>
        <circle cx="19.7" cy="11.3" r="0.6" fill="white"/>
        <ellipse cx="16" cy="14.5" rx="1" ry="0.7" fill="#ff9999"/>
        <path d="M14.5 15.2 Q16 16.5 17.5 15.2" stroke="#cc6666" stroke-width="0.5" fill="none"/>
        <line x1="8" y1="14" x2="13" y2="14.5" stroke="#888" stroke-width="0.4"/>
        <line x1="19" y1="14.5" x2="24" y2="14" stroke="#888" stroke-width="0.4"/>
        <path d="M25 21 Q31 15 27 11" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <ellipse cx="10" cy="28" rx="2.5" ry="1.8" fill="${c.dark}" transform="rotate(-15,10,28)"/>
        <ellipse cx="20" cy="26" rx="2.5" ry="1.8" fill="${c.dark}" transform="rotate(15,20,26)"/>
        <ellipse cx="13" cy="26" rx="2" ry="1.8" fill="${c.dark}" transform="rotate(10,13,26)"/>
        <ellipse cx="22" cy="28" rx="2" ry="1.8" fill="${c.dark}" transform="rotate(-10,22,28)"/>
      </svg>`,

      run: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="21" rx="10" ry="5.5" fill="${c.body}" transform="rotate(-10,16,21)"/>
        <circle cx="16" cy="12" r="7" fill="${c.body}"/>
        <polygon points="10,7 7,1 13,6" fill="${c.body}"/>
        <polygon points="22,7 25,1 19,6" fill="${c.body}"/>
        <polygon points="10,7 8,3 12,6" fill="${c.ear}"/>
        <polygon points="22,7 24,3 20,6" fill="${c.ear}"/>
        <ellipse cx="13" cy="11" rx="2" ry="2.5" fill="#2d2d2d"/>
        <ellipse cx="19" cy="11" rx="2" ry="2.5" fill="#2d2d2d"/>
        <circle cx="13.7" cy="10.3" r="0.6" fill="white"/>
        <circle cx="19.7" cy="10.3" r="0.6" fill="white"/>
        <ellipse cx="16" cy="13.5" rx="1" ry="0.7" fill="#ff9999"/>
        <line x1="8" y1="13" x2="13" y2="13.5" stroke="#888" stroke-width="0.4"/>
        <line x1="19" y1="13.5" x2="24" y2="13" stroke="#888" stroke-width="0.4"/>
        <path d="M25 20 Q32 18 31 14" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <ellipse cx="8" cy="26" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(-30,8,26)"/>
        <ellipse cx="14" cy="28" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(20,14,28)"/>
        <ellipse cx="19" cy="25" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(-20,19,25)"/>
        <ellipse cx="25" cy="27" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(30,25,27)"/>
      </svg>`,

      sleep: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="17" cy="23" rx="10" ry="6" fill="${c.body}"/>
        <circle cx="11" cy="20" r="6" fill="${c.body}"/>
        <polygon points="7,15 5,10 10,14" fill="${c.body}"/>
        <polygon points="14,15 16,10 11,14" fill="${c.body}"/>
        <polygon points="7,15 6,12 9,14" fill="${c.ear}"/>
        <polygon points="14,15 15,12 12,14" fill="${c.ear}"/>
        <path d="M9 19.5 Q11 18.5 13 19.5" stroke="#2d2d2d" stroke-width="1" fill="none" stroke-linecap="round"/>
        <text x="19" y="14" font-size="5" fill="#888" font-family="sans-serif">z</text>
        <text x="22" y="10" font-size="6" fill="#888" font-family="sans-serif">z</text>
        <text x="25" y="6"  font-size="7" fill="#888" font-family="sans-serif">Z</text>
        <path d="M27 23 Q30 20 27 17 Q24 14 26 20" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`,

      jump: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="18" rx="9" ry="6" fill="${c.body}" transform="rotate(-20,16,18)"/>
        <circle cx="16" cy="9" r="7" fill="${c.body}"/>
        <polygon points="10,4 7,-2 13,3" fill="${c.body}"/>
        <polygon points="22,4 25,-2 19,3" fill="${c.body}"/>
        <polygon points="10,4 8,0 12,3" fill="${c.ear}"/>
        <polygon points="22,4 24,0 20,3" fill="${c.ear}"/>
        <ellipse cx="13" cy="8" rx="2" ry="2.5" fill="#2d2d2d"/>
        <ellipse cx="19" cy="8" rx="2" ry="2.5" fill="#2d2d2d"/>
        <circle cx="13.7" cy="7.3" r="0.6" fill="white"/>
        <circle cx="19.7" cy="7.3" r="0.6" fill="white"/>
        <ellipse cx="16" cy="10.5" rx="1" ry="0.7" fill="#ff9999"/>
        <path d="M14.5 11.5 Q16 13 17.5 11.5" stroke="#cc6666" stroke-width="0.5" fill="none"/>
        <path d="M25 17 Q32 13 30 7" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <ellipse cx="8" cy="24" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(-40,8,24)"/>
        <ellipse cx="13" cy="27" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(30,13,27)"/>
        <ellipse cx="20" cy="26" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(-25,20,26)"/>
        <ellipse cx="25" cy="23" rx="2.5" ry="1.5" fill="${c.dark}" transform="rotate(40,25,23)"/>
        <text x="3" y="8" font-size="8" fill="#FFD700">✨</text>
      </svg>`,

      sit: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <circle cx="16" cy="13" r="7" fill="${c.body}"/>
        <polygon points="10,8 7,2 13,7" fill="${c.body}"/>
        <polygon points="22,8 25,2 19,7" fill="${c.body}"/>
        <polygon points="10,8 8,4 12,7" fill="${c.ear}"/>
        <polygon points="22,8 24,4 20,7" fill="${c.ear}"/>
        <ellipse cx="13" cy="12" rx="2" ry="2.5" fill="#2d2d2d"/>
        <ellipse cx="19" cy="12" rx="2" ry="2.5" fill="#2d2d2d"/>
        <circle cx="13.7" cy="11.3" r="0.6" fill="white"/>
        <circle cx="19.7" cy="11.3" r="0.6" fill="white"/>
        <ellipse cx="16" cy="14.5" rx="1" ry="0.7" fill="#ff9999"/>
        <path d="M14.5 15.2 Q16 16.5 17.5 15.2" stroke="#cc6666" stroke-width="0.5" fill="none"/>
        <line x1="8" y1="14" x2="13" y2="14.5" stroke="#888" stroke-width="0.4"/>
        <line x1="19" y1="14.5" x2="24" y2="14" stroke="#888" stroke-width="0.4"/>
        <ellipse cx="16" cy="25" rx="9" ry="5" fill="${c.dark}"/>
        <path d="M25 22 Q28 26 26 29" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      </svg>`,

      happy: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="22" rx="9" ry="7" fill="${c.body}"/>
        <circle cx="16" cy="13" r="7" fill="${c.body}"/>
        <polygon points="10,8 7,2 13,7" fill="${c.body}"/>
        <polygon points="22,8 25,2 19,7" fill="${c.body}"/>
        <polygon points="10,8 8,4 12,7" fill="${c.ear}"/>
        <polygon points="22,8 24,4 20,7" fill="${c.ear}"/>
        <path d="M11 11 Q13 9.5 15 11" stroke="#2d2d2d" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M17 11 Q19 9.5 21 11" stroke="#2d2d2d" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <ellipse cx="16" cy="14.5" rx="1" ry="0.7" fill="#ff9999"/>
        <path d="M13.5 15.5 Q16 18 18.5 15.5" stroke="#cc6666" stroke-width="0.8" fill="none"/>
        <ellipse cx="16" cy="17" rx="2" ry="1.2" fill="#ff6b8a"/>
        <line x1="8" y1="14" x2="13" y2="14.5" stroke="#888" stroke-width="0.4"/>
        <line x1="19" y1="14.5" x2="24" y2="14" stroke="#888" stroke-width="0.4"/>
        <path d="M25 22 Q30 16 27 11" stroke="${c.body}" stroke-width="2.5" fill="none" stroke-linecap="round"/>
        <ellipse cx="11" cy="27" rx="2.5" ry="2" fill="${c.dark}"/>
        <ellipse cx="21" cy="27" rx="2.5" ry="2" fill="${c.dark}"/>
        <text x="1" y="10" font-size="7" fill="#FF69B4">♡</text>
        <text x="24" y="8" font-size="6" fill="#FFD700">★</text>
      </svg>`,
    },
  },

  dog: {
    skins: {
      brown:  { body: "#d2a679", dark: "#c49060", ear: "#b8864e" },
      golden: { body: "#ffc87a", dark: "#e8a855", ear: "#d4883a" },
      white:  { body: "#f5f5f5", dark: "#e0e0e0", ear: "#ccc" },
      black:  { body: "#333",    dark: "#1a1a1a", ear: "#222" },
      spot:   { body: "#f5f5f5", dark: "#333",    ear: "#ccc" },
    },
    frames: {
      idle: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="22" rx="10" ry="7" fill="${c.body}"/>
        <circle cx="16" cy="12" r="8" fill="${c.body}"/>
        <ellipse cx="9" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(15,9,14)"/>
        <ellipse cx="23" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(-15,23,14)"/>
        <ellipse cx="16" cy="15" rx="4" ry="3" fill="${c.dark}"/>
        <circle cx="13" cy="10" r="2.2" fill="#2d2d2d"/>
        <circle cx="19" cy="10" r="2.2" fill="#2d2d2d"/>
        <circle cx="13.7" cy="9.3" r="0.7" fill="white"/>
        <circle cx="19.7" cy="9.3" r="0.7" fill="white"/>
        <ellipse cx="16" cy="14" rx="1.5" ry="1" fill="#1a1a1a"/>
        <path d="M14 15.5 Q16 17 18 15.5" stroke="#8b5e3c" stroke-width="0.6" fill="none"/>
        <ellipse cx="16" cy="17" rx="1.5" ry="1.2" fill="#ff6b8a"/>
        <path d="M26 20 Q31 15 29 11" stroke="${c.body}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="11" cy="27" rx="3" ry="2" fill="${c.dark}"/>
        <ellipse cx="21" cy="27" rx="3" ry="2" fill="${c.dark}"/>
      </svg>`,

      walk: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="22" rx="10" ry="6.5" fill="${c.body}"/>
        <circle cx="16" cy="12" r="8" fill="${c.body}"/>
        <ellipse cx="9" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(15,9,14)"/>
        <ellipse cx="23" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(-15,23,14)"/>
        <ellipse cx="16" cy="15" rx="4" ry="3" fill="${c.dark}"/>
        <circle cx="13" cy="10" r="2.2" fill="#2d2d2d"/>
        <circle cx="19" cy="10" r="2.2" fill="#2d2d2d"/>
        <circle cx="13.7" cy="9.3" r="0.7" fill="white"/>
        <circle cx="19.7" cy="9.3" r="0.7" fill="white"/>
        <ellipse cx="16" cy="14" rx="1.5" ry="1" fill="#1a1a1a"/>
        <path d="M14 15.5 Q16 17 18 15.5" stroke="#8b5e3c" stroke-width="0.6" fill="none"/>
        <ellipse cx="16" cy="17" rx="1.5" ry="1.2" fill="#ff6b8a"/>
        <path d="M26 19 Q32 13 28 9" stroke="${c.body}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="10" cy="28" rx="3" ry="1.8" fill="${c.dark}" transform="rotate(-15,10,28)"/>
        <ellipse cx="20" cy="26" rx="3" ry="1.8" fill="${c.dark}" transform="rotate(15,20,26)"/>
        <ellipse cx="13" cy="26" rx="2.5" ry="1.8" fill="${c.dark}" transform="rotate(10,13,26)"/>
        <ellipse cx="23" cy="28" rx="2.5" ry="1.8" fill="${c.dark}" transform="rotate(-10,23,28)"/>
      </svg>`,

      run: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="21" rx="11" ry="5.5" fill="${c.body}" transform="rotate(-8,16,21)"/>
        <circle cx="15" cy="11" r="8" fill="${c.body}"/>
        <ellipse cx="8" cy="13" rx="3" ry="5" fill="${c.ear}" transform="rotate(20,8,13)"/>
        <ellipse cx="22" cy="13" rx="3" ry="5" fill="${c.ear}" transform="rotate(-20,22,13)"/>
        <ellipse cx="15" cy="14" rx="4" ry="3" fill="${c.dark}"/>
        <circle cx="12" cy="9" r="2.2" fill="#2d2d2d"/>
        <circle cx="18" cy="9" r="2.2" fill="#2d2d2d"/>
        <circle cx="12.7" cy="8.3" r="0.7" fill="white"/>
        <circle cx="18.7" cy="8.3" r="0.7" fill="white"/>
        <ellipse cx="15" cy="13" rx="1.5" ry="1" fill="#1a1a1a"/>
        <ellipse cx="15" cy="16" rx="1.5" ry="1.2" fill="#ff6b8a"/>
        <path d="M26 19 Q32 17 31 12" stroke="${c.body}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="7" cy="26" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(-35,7,26)"/>
        <ellipse cx="14" cy="28" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(20,14,28)"/>
        <ellipse cx="19" cy="25" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(-20,19,25)"/>
        <ellipse cx="26" cy="27" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(35,26,27)"/>
      </svg>`,

      sleep: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="17" cy="24" rx="11" ry="5.5" fill="${c.body}"/>
        <circle cx="10" cy="20" r="7" fill="${c.body}"/>
        <ellipse cx="5" cy="21" rx="3" ry="4.5" fill="${c.ear}" transform="rotate(20,5,21)"/>
        <ellipse cx="15" cy="21" rx="3" ry="4.5" fill="${c.ear}" transform="rotate(-10,15,21)"/>
        <ellipse cx="10" cy="22" rx="3.5" ry="2.5" fill="${c.dark}"/>
        <path d="M7.5 18.5 Q10 17.5 12.5 18.5" stroke="#2d2d2d" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <ellipse cx="10" cy="23" rx="1.2" ry="0.8" fill="#1a1a1a"/>
        <text x="18" y="15" font-size="5" fill="#888" font-family="sans-serif">z</text>
        <text x="21" y="11" font-size="6" fill="#888" font-family="sans-serif">z</text>
        <text x="24" y="6"  font-size="7" fill="#888" font-family="sans-serif">Z</text>
      </svg>`,

      jump: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="17" rx="10" ry="6" fill="${c.body}" transform="rotate(-15,16,17)"/>
        <circle cx="15" cy="8" r="8" fill="${c.body}"/>
        <ellipse cx="8" cy="10" rx="3" ry="5" fill="${c.ear}" transform="rotate(25,8,10)"/>
        <ellipse cx="22" cy="10" rx="3" ry="5" fill="${c.ear}" transform="rotate(-25,22,10)"/>
        <ellipse cx="15" cy="11" rx="4" ry="3" fill="${c.dark}"/>
        <circle cx="12" cy="6" r="2.2" fill="#2d2d2d"/>
        <circle cx="18" cy="6" r="2.2" fill="#2d2d2d"/>
        <circle cx="12.7" cy="5.3" r="0.7" fill="white"/>
        <circle cx="18.7" cy="5.3" r="0.7" fill="white"/>
        <ellipse cx="15" cy="10" rx="1.5" ry="1" fill="#1a1a1a"/>
        <path d="M13 11.5 Q15 13.5 17 11.5" stroke="#8b5e3c" stroke-width="0.6" fill="none"/>
        <ellipse cx="15" cy="14" rx="1.5" ry="1.2" fill="#ff6b8a"/>
        <path d="M25 16 Q32 14 30 8" stroke="${c.body}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="7" cy="24" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(-40,7,24)"/>
        <ellipse cx="13" cy="27" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(30,13,27)"/>
        <ellipse cx="20" cy="26" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(-25,20,26)"/>
        <ellipse cx="26" cy="23" rx="3" ry="1.5" fill="${c.dark}" transform="rotate(40,26,23)"/>
        <text x="2" y="8" font-size="8" fill="#FFD700">✨</text>
      </svg>`,

      sit: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="25" rx="9" ry="5" fill="${c.dark}"/>
        <circle cx="16" cy="12" r="8" fill="${c.body}"/>
        <ellipse cx="9" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(15,9,14)"/>
        <ellipse cx="23" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(-15,23,14)"/>
        <ellipse cx="16" cy="15" rx="4" ry="3" fill="${c.dark}"/>
        <circle cx="13" cy="10" r="2.2" fill="#2d2d2d"/>
        <circle cx="19" cy="10" r="2.2" fill="#2d2d2d"/>
        <circle cx="13.7" cy="9.3" r="0.7" fill="white"/>
        <circle cx="19.7" cy="9.3" r="0.7" fill="white"/>
        <ellipse cx="16" cy="14" rx="1.5" ry="1" fill="#1a1a1a"/>
        <path d="M14 15.5 Q16 17 18 15.5" stroke="#8b5e3c" stroke-width="0.6" fill="none"/>
        <ellipse cx="16" cy="17" rx="1.5" ry="1.2" fill="#ff6b8a"/>
        <path d="M26 23 Q29 27 27 30" stroke="${c.body}" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>`,

      happy: (c) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
        <ellipse cx="16" cy="22" rx="10" ry="7" fill="${c.body}"/>
        <circle cx="16" cy="12" r="8" fill="${c.body}"/>
        <ellipse cx="9" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(15,9,14)"/>
        <ellipse cx="23" cy="14" rx="3" ry="5" fill="${c.ear}" transform="rotate(-15,23,14)"/>
        <ellipse cx="16" cy="15" rx="4" ry="3" fill="${c.dark}"/>
        <path d="M11 9.5 Q13 8 15 9.5" stroke="#2d2d2d" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <path d="M17 9.5 Q19 8 21 9.5" stroke="#2d2d2d" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <ellipse cx="16" cy="14" rx="1.5" ry="1" fill="#1a1a1a"/>
        <path d="M13 15.5 Q16 18.5 19 15.5" stroke="#8b5e3c" stroke-width="0.8" fill="none"/>
        <ellipse cx="16" cy="18" rx="2.5" ry="1.5" fill="#ff6b8a"/>
        <path d="M26 19 Q32 13 28 8" stroke="${c.body}" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="11" cy="27" rx="3" ry="2" fill="${c.dark}"/>
        <ellipse cx="21" cy="27" rx="3" ry="2" fill="${c.dark}"/>
        <text x="1" y="10" font-size="7" fill="#FF69B4">♡</text>
        <text x="24" y="8" font-size="6" fill="#FFD700">★</text>
      </svg>`,
    },
  },
};

// ═══════════════════════════════════════════════════════
//  MOOD & STATE SYSTEM
// ═══════════════════════════════════════════════════════

const MOOD = { HAPPY: "happy", NORMAL: "normal", BORED: "bored", SLEEPY: "sleepy" };
const ANIM = { IDLE: "idle", WALK: "walk", RUN: "run", SLEEP: "sleep", JUMP: "jump", SIT: "sit", HAPPY: "happy" };

// ═══════════════════════════════════════════════════════
//  PET CLASS
// ═══════════════════════════════════════════════════════

class Pet {
  constructor(opts, container, manager) {
    this.id        = opts.id || Math.random().toString(36).slice(2);
    this.type      = opts.type  || "cat";
    this.skin      = opts.skin  || Object.keys(SPRITES[this.type].skins)[0];
    this.size      = opts.size  || 48;
    this.speed     = opts.speed || 1.2;
    this.container = container;
    this.manager   = manager;

    // Position
    this.x  = opts.x || 40;
    this.y  = 0;
    this.vx = this.speed;

    // State
    this.anim      = ANIM.IDLE;
    this.mood      = MOOD.NORMAL;
    this.el        = null;
    this.raf       = null;

    // Timers
    this._typingCombo   = 0;
    this._lastType      = 0;
    this._idleTime      = 0;
    this._stateTimer    = 0;
    this._nextStateDue  = 3000 + Math.random() * 4000;
    this._jumpTimer     = null;
    this._typeStopTimer = null;

    // Dragging
    this._dragging   = false;
    this._dragOffX   = 0;
    this._dragOffY   = 0;
    this._dragStartX = 0;
    this._dragStartY = 0;
    this._tapCount   = 0;
    this._tapTimer   = null;

    this._mount();
    this._startLoop();
  }

  // ── Getters ──────────────────────────────────────────
  get colors() { return SPRITES[this.type].skins[this.skin]; }
  get frames()  { return SPRITES[this.type].frames; }

  // ── Mount DOM ────────────────────────────────────────
  _mount() {
    this.el = document.createElement("div");
    Object.assign(this.el.style, {
      position:      "absolute",
      bottom:        "4px",
      left:          this.x + "px",
      width:         this.size + "px",
      height:        this.size + "px",
      zIndex:        "9998",
      cursor:        "pointer",
      userSelect:    "none",
      touchAction:   "none",
      transition:    "filter 0.2s",
    });

    // Mood indicator
    this._moodEl = document.createElement("div");
    Object.assign(this._moodEl.style, {
      position:  "absolute",
      top:       "-14px",
      left:      "50%",
      transform: "translateX(-50%)",
      fontSize:  "12px",
      opacity:   "0",
      transition:"opacity 0.4s",
      pointerEvents: "none",
    });
    this.el.appendChild(this._moodEl);

    this._render();
    this._bindEvents();
    this.container.appendChild(this.el);
  }

  _render() {
    const frameFn = this.frames[this.anim] || this.frames[ANIM.IDLE];
    const svgStr  = frameFn(this.colors);
    // Replace existing SVG only
    const old = this.el.querySelector("svg");
    if (old) old.remove();
    const tmp = document.createElement("div");
    tmp.innerHTML = svgStr;
    const svg = tmp.querySelector("svg");
    if (svg) {
      svg.setAttribute("width",  this.size);
      svg.setAttribute("height", this.size);
      this.el.appendChild(svg);
    }
  }

  // ── Events ───────────────────────────────────────────
  _bindEvents() {
    // Touch tap / double tap / drag
    this.el.addEventListener("touchstart", (e) => this._onTouchStart(e), { passive: false });
    this.el.addEventListener("touchmove",  (e) => this._onTouchMove(e),  { passive: false });
    this.el.addEventListener("touchend",   (e) => this._onTouchEnd(e),   { passive: false });

    // Mouse click / drag
    this.el.addEventListener("mousedown",  (e) => this._onMouseDown(e));
  }

  _onTouchStart(e) {
    e.preventDefault();
    const t = e.touches[0];
    this._dragStartX = t.clientX;
    this._dragStartY = t.clientY;
    const rect = this.el.getBoundingClientRect();
    this._dragOffX = t.clientX - rect.left;
    this._dragOffY = t.clientY - rect.top;
    this._dragging = false;
  }

  _onTouchMove(e) {
    e.preventDefault();
    const t = e.touches[0];
    const dx = Math.abs(t.clientX - this._dragStartX);
    const dy = Math.abs(t.clientY - this._dragStartY);
    if (dx > 5 || dy > 5) {
      this._dragging = true;
      this._moveTo(t.clientX, t.clientY);
    }
  }

  _onTouchEnd(e) {
    e.preventDefault();
    if (!this._dragging) {
      this._handleTap();
    }
    this._dragging = false;
  }

  _onMouseDown(e) {
    const startX = e.clientX, startY = e.clientY;
    const rect = this.el.getBoundingClientRect();
    this._dragOffX = e.clientX - rect.left;
    this._dragOffY = e.clientY - rect.top;

    const onMove = (ev) => {
      const dx = Math.abs(ev.clientX - startX);
      const dy = Math.abs(ev.clientY - startY);
      if (dx > 5 || dy > 5) {
        this._dragging = true;
        this._moveTo(ev.clientX, ev.clientY);
      }
    };
    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup",   onUp);
      if (!this._dragging) this._handleTap();
      this._dragging = false;
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup",   onUp);
  }

  _moveTo(clientX, clientY) {
    const rect = this.container.getBoundingClientRect();
    let nx = clientX - rect.left - this._dragOffX;
    let ny = clientY - rect.top;
    const maxX = this.container.offsetWidth  - this.size;
    nx = Math.max(0, Math.min(nx, maxX));
    this.x = nx;
    this.el.style.left   = nx + "px";
    // Save position
    this._savePos();
  }

  _handleTap() {
    this._tapCount++;
    if (this._tapTimer) clearTimeout(this._tapTimer);
    this._tapTimer = setTimeout(() => {
      if (this._tapCount >= 2) {
        // Double tap → run burst
        this._doRunBurst();
      } else {
        // Single tap → jump
        this._doJump();
      }
      this._tapCount = 0;
    }, 280);
  }

  _doJump() {
    this._setAnim(ANIM.JUMP);
    this._showMood("🎉");
    if (this._jumpTimer) clearTimeout(this._jumpTimer);
    this._jumpTimer = setTimeout(() => {
      this._setAnim(ANIM.IDLE);
    }, 600);
  }

  _doRunBurst() {
    this._setAnim(ANIM.RUN);
    this.vx = this.vx > 0 ? this.speed * 4 : -this.speed * 4;
    this._showMood("💨");
    if (this._jumpTimer) clearTimeout(this._jumpTimer);
    this._jumpTimer = setTimeout(() => {
      this.vx = this.vx > 0 ? this.speed : -this.speed;
      this._setAnim(ANIM.WALK);
    }, 1500);
  }

  // ── Mood display ─────────────────────────────────────
  _showMood(emoji, duration = 1200) {
    this._moodEl.textContent  = emoji;
    this._moodEl.style.opacity = "1";
    clearTimeout(this._moodHideTimer);
    this._moodHideTimer = setTimeout(() => {
      this._moodEl.style.opacity = "0";
    }, duration);
  }

  // ── Animation ────────────────────────────────────────
  _setAnim(a) {
    if (this.anim === a) return;
    this.anim = a;
    this._render();
    // Mirror sprite direction
    this.el.style.transform = this.vx < 0 ? "scaleX(-1)" : "scaleX(1)";
  }

  // ── Typing reaction ──────────────────────────────────
  onType() {
    const now = Date.now();
    const gap = now - this._lastType;
    this._lastType = now;
    this._idleTime = 0;

    this._typingCombo = gap < 400
      ? Math.min(this._typingCombo + 1, 20)
      : 1;

    // Update mood based on combo
    if (this._typingCombo >= 15) {
      this.mood = MOOD.HAPPY;
      this._showMood("🔥", 600);
    } else if (this._typingCombo >= 8) {
      this.mood = MOOD.HAPPY;
    } else {
      this.mood = MOOD.NORMAL;
    }

    if (this._typingCombo >= 12) {
      this._setAnim(ANIM.RUN);
      this.vx = this.vx > 0 ? this.speed * 3 : -this.speed * 3;
    } else if (this._typingCombo >= 4) {
      this._setAnim(ANIM.WALK);
      this.vx = this.vx > 0 ? this.speed * 2 : -this.speed * 2;
    } else {
      this._setAnim(ANIM.WALK);
    }

    clearTimeout(this._typeStopTimer);
    this._typeStopTimer = setTimeout(() => {
      this._typingCombo = 0;
      this.vx = this.vx > 0 ? this.speed : -this.speed;
      this._setAnim(ANIM.WALK);
    }, 1000);
  }

  // ── Main loop ────────────────────────────────────────
  _startLoop() {
    let last = Date.now();
    const tick = () => {
      this.raf = requestAnimationFrame(tick);
      const now  = Date.now();
      const dt   = now - last;
      last = now;
      this._update(dt);
    };
    this.raf = requestAnimationFrame(tick);
  }

  _update(dt) {
    if (this._dragging) return;
    if (this.anim === ANIM.SLEEP) {
      this._idleTime += dt;
      return;
    }
    if (this.anim === ANIM.JUMP) return;

    this._idleTime   += dt;
    this._stateTimer += dt;

    // Move
    if (this.anim !== ANIM.SIT && this.anim !== ANIM.IDLE) {
      this.x += this.vx;
      const maxX = this.container.offsetWidth - this.size;
      if (this.x <= 0) {
        this.x = 0;
        this.vx = Math.abs(this.vx);
        this.el.style.transform = "scaleX(1)";
        this._maybeSocialize();
      } else if (this.x >= maxX) {
        this.x = maxX;
        this.vx = -Math.abs(this.vx);
        this.el.style.transform = "scaleX(-1)";
        this._maybeSocialize();
      }
      this.el.style.left = this.x + "px";
    }

    // Idle → sleep check
    if (this._idleTime > 20000 && this.anim !== ANIM.SLEEP) {
      this.mood = MOOD.SLEEPY;
      this._goSleep();
      return;
    }

    // Bored check
    if (this._idleTime > 10000 && this.mood !== MOOD.SLEEPY) {
      this.mood = MOOD.BORED;
      if (Math.random() < 0.001) this._showMood("😒");
    }

    // Auto state machine
    if (this._stateTimer >= this._nextStateDue) {
      this._stateTimer   = 0;
      this._nextStateDue = 2000 + Math.random() * 5000;
      this._autoState();
    }
  }

  _autoState() {
    if (this.anim === ANIM.RUN || this.anim === ANIM.JUMP || this._dragging) return;

    const roll = Math.random();
    if (roll < 0.12) {
      // Sit for a bit
      this._setAnim(ANIM.SIT);
      this.vx = 0;
      if (this.mood === MOOD.HAPPY) this._showMood("😸");
      setTimeout(() => {
        if (this.anim === ANIM.SIT) {
          this.vx = Math.random() > 0.5 ? this.speed : -this.speed;
          this.el.style.transform = this.vx < 0 ? "scaleX(-1)" : "scaleX(1)";
          this._setAnim(ANIM.WALK);
        }
      }, 2000 + Math.random() * 3000);
    } else if (roll < 0.22) {
      // Idle pause
      this._setAnim(ANIM.IDLE);
      this.vx = 0;
      setTimeout(() => {
        if (this.anim === ANIM.IDLE) {
          this.vx = Math.random() > 0.5 ? this.speed : -this.speed;
          this.el.style.transform = this.vx < 0 ? "scaleX(-1)" : "scaleX(1)";
          this._setAnim(ANIM.WALK);
        }
      }, 1000 + Math.random() * 2000);
    } else if (roll < 0.28 && this.mood === MOOD.HAPPY) {
      // Happy burst
      this._setAnim(ANIM.HAPPY);
      this._showMood("💖");
      setTimeout(() => {
        if (this.anim === ANIM.HAPPY) this._setAnim(ANIM.WALK);
      }, 1200);
    } else if (roll < 0.32) {
      // Random direction change
      this.vx = Math.random() > 0.5 ? this.speed : -this.speed;
      this.el.style.transform = this.vx < 0 ? "scaleX(-1)" : "scaleX(1)";
      this._setAnim(ANIM.WALK);
    } else {
      // Keep walking
      if (this.anim === ANIM.IDLE || this.anim === ANIM.SIT) {
        this._setAnim(ANIM.WALK);
        this.vx = this.vx === 0
          ? (Math.random() > 0.5 ? this.speed : -this.speed)
          : this.vx;
        this.el.style.transform = this.vx < 0 ? "scaleX(-1)" : "scaleX(1)";
      }
    }
  }

  _goSleep() {
    this.vx = 0;
    this._setAnim(ANIM.SLEEP);
    this._showMood("💤", 3000);
    setTimeout(() => {
      if (this.anim === ANIM.SLEEP) {
        this.mood      = MOOD.NORMAL;
        this._idleTime = 0;
        this.vx = Math.random() > 0.5 ? this.speed : -this.speed;
        this.el.style.transform = this.vx < 0 ? "scaleX(-1)" : "scaleX(1)";
        this._setAnim(ANIM.WALK);
      }
    }, 6000 + Math.random() * 6000);
  }

  // ── Pet interaction ───────────────────────────────────
  _maybeSocialize() {
    if (!this.manager) return;
    const others = this.manager.pets.filter(p => p !== this);
    for (const other of others) {
      const dist = Math.abs(this.x - other.x);
      if (dist < 60) {
        // They met — both show happy
        this._showMood("👋");
        other._showMood("👋");
        this.mood  = MOOD.HAPPY;
        other.mood = MOOD.HAPPY;
      }
    }
  }

  _savePos() {
    try {
      const key = `${PLUGIN_ID}.pos.${this.id}`;
      localStorage.setItem(key, JSON.stringify({ x: this.x }));
    } catch (_) {}
  }

  _loadPos() {
    try {
      const key = `${PLUGIN_ID}.pos.${this.id}`;
      const r = localStorage.getItem(key);
      if (r) { const d = JSON.parse(r); this.x = d.x || 40; }
    } catch (_) {}
  }

  destroy() {
    if (this.raf) cancelAnimationFrame(this.raf);
    clearTimeout(this._typeStopTimer);
    clearTimeout(this._jumpTimer);
    clearTimeout(this._tapTimer);
    clearTimeout(this._moodHideTimer);
    this.el?.remove();
  }
}

// ═══════════════════════════════════════════════════════
//  PET MANAGER
// ═══════════════════════════════════════════════════════

class PetManager {
  constructor(container) {
    this.container = container;
    this.pets      = [];
  }

  add(opts) {
    const pet = new Pet(opts, this.container, this);
    pet._loadPos();
    this.pets.push(pet);
    return pet;
  }

  remove(id) {
    const i = this.pets.findIndex(p => p.id === id);
    if (i !== -1) {
      this.pets[i].destroy();
      this.pets.splice(i, 1);
    }
  }

  removeAll() {
    this.pets.forEach(p => p.destroy());
    this.pets = [];
  }

  onType() {
    this.pets.forEach(p => p.onType());
  }
}

// ═══════════════════════════════════════════════════════
//  SETTINGS PAGE
// ═══════════════════════════════════════════════════════

function buildSettingsPage($page, settings, onChange) {
  $page.settitle("Acode Pets 🐾");

  const catSkins = Object.keys(SPRITES.cat.skins);
  const dogSkins = Object.keys(SPRITES.dog.skins);

  $page.innerHTML = `
    <style>
      .ps { padding:16px; font-family:monospace; color:var(--primary-text-color,#eee); }
      .ps-section { font-size:10px; text-transform:uppercase; letter-spacing:1px;
        opacity:.35; margin:16px 0 8px; }
      .ps-row { display:flex; align-items:center; justify-content:space-between;
        padding:10px 0; border-bottom:1px solid rgba(255,255,255,.05); gap:8px; }
      .ps-label { font-size:13px; }
      .ps-sub { font-size:11px; opacity:.4; margin-top:2px; }
      .tog { width:40px; height:22px; background:rgba(255,255,255,.12);
        border-radius:11px; position:relative; cursor:pointer;
        transition:background .2s; flex-shrink:0; }
      .tog.on { background:#50fa7b; }
      .tog::after { content:''; position:absolute; top:3px; left:3px;
        width:16px; height:16px; border-radius:50%; background:#fff;
        transition:transform .2s; }
      .tog.on::after { transform:translateX(18px); }
      .ps-chips { display:flex; flex-wrap:wrap; gap:6px; }
      .ps-chip { padding:5px 12px; background:rgba(255,255,255,.08);
        border:1px solid rgba(255,255,255,.12); border-radius:20px;
        cursor:pointer; font-size:12px; color:inherit; transition:all .2s; }
      .ps-chip.active { background:rgba(80,250,123,.2);
        border-color:#50fa7b; color:#50fa7b; }
      .ps-slider { display:flex; align-items:center; gap:10px; }
      .ps-slider input { flex:1; accent-color:#50fa7b; }
      .ps-slider span { font-size:12px; opacity:.6; min-width:28px; text-align:right; }
      .ps-add-btn { width:100%; padding:10px; margin-top:12px;
        background:rgba(80,250,123,.15); border:1px solid rgba(80,250,123,.3);
        border-radius:8px; color:#50fa7b; font-family:monospace;
        font-size:13px; cursor:pointer; }
      .ps-pet-list { margin-top:8px; }
      .ps-pet-item { display:flex; align-items:center; justify-content:space-between;
        padding:8px 0; border-bottom:1px solid rgba(255,255,255,.05); }
      .ps-del-btn { background:rgba(255,85,85,.15); border:1px solid rgba(255,85,85,.3);
        color:#ff5555; border-radius:6px; padding:3px 10px;
        font-size:11px; cursor:pointer; font-family:monospace; }
    </style>
    <div class="ps">

      <div class="ps-section">General</div>
      <div class="ps-row">
        <div><div class="ps-label">Enable Pets</div><div class="ps-sub">Show pets in editor</div></div>
        <div class="tog ${settings.enabled ? 'on' : ''}" id="tog-enabled"></div>
      </div>

      <div class="ps-section">Add Pet</div>
      <div class="ps-row">
        <div><div class="ps-label">Type</div></div>
        <div class="ps-chips" id="type-chips">
          <button class="ps-chip ${settings._newType==='cat'?'active':''}" data-type="cat">🐱 Cat</button>
          <button class="ps-chip ${settings._newType==='dog'?'active':''}" data-type="dog">🐶 Dog</button>
        </div>
      </div>
      <div class="ps-row" id="skin-row">
        <div><div class="ps-label">Skin</div></div>
        <div class="ps-chips" id="skin-chips"></div>
      </div>
      <div class="ps-row">
        <div><div class="ps-label">Size</div><div class="ps-sub">Pet size in px</div></div>
        <div class="ps-slider">
          <input type="range" id="size-range" min="32" max="96" value="${settings._newSize||48}">
          <span id="size-val">${settings._newSize||48}</span>
        </div>
      </div>
      <div class="ps-row">
        <div><div class="ps-label">Speed</div><div class="ps-sub">Movement speed</div></div>
        <div class="ps-slider">
          <input type="range" id="speed-range" min="1" max="5" step="0.5" value="${settings._newSpeed||1.2}">
          <span id="speed-val">${settings._newSpeed||1.2}</span>
        </div>
      </div>
      <button class="ps-add-btn" id="add-btn">+ Add Pet</button>

      <div class="ps-section">Active Pets</div>
      <div class="ps-pet-list" id="pet-list"></div>

    </div>`;

  // Render skin chips
  function renderSkins(type) {
    const skins = Object.keys(SPRITES[type].skins);
    const chips  = $page.querySelector("#skin-chips");
    chips.innerHTML = skins.map(s =>
      `<button class="ps-chip ${settings._newSkin===s?'active':''}" data-skin="${s}">${s}</button>`
    ).join("");
    chips.querySelectorAll(".ps-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        settings._newSkin = btn.dataset.skin;
        chips.querySelectorAll(".ps-chip").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });
  }
  renderSkins(settings._newType || "cat");

  // Render pet list
  function renderList() {
    const list = $page.querySelector("#pet-list");
    if (!settings.pets || !settings.pets.length) {
      list.innerHTML = `<div style="opacity:.4;font-size:12px;padding:8px 0">No pets yet — add one above!</div>`;
      return;
    }
    list.innerHTML = settings.pets.map(p => `
      <div class="ps-pet-item">
        <div>
          <span style="font-size:13px">${p.type === 'cat' ? '🐱' : '🐶'} ${p.type} · ${p.skin}</span>
          <span style="font-size:11px;opacity:.4;margin-left:8px">${p.size||48}px</span>
        </div>
        <button class="ps-del-btn" data-id="${p.id}">Remove</button>
      </div>
    `).join("");
    list.querySelectorAll(".ps-del-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        settings.pets = settings.pets.filter(p => p.id !== btn.dataset.id);
        onChange(settings);
        renderList();
      });
    });
  }
  renderList();

  // Toggle enabled
  $page.querySelector("#tog-enabled").addEventListener("click", function() {
    settings.enabled = !settings.enabled;
    this.classList.toggle("on", settings.enabled);
    onChange(settings);
  });

  // Type chips
  $page.querySelectorAll("#type-chips .ps-chip").forEach(btn => {
    btn.addEventListener("click", () => {
      settings._newType = btn.dataset.type;
      settings._newSkin = Object.keys(SPRITES[btn.dataset.type].skins)[0];
      $page.querySelectorAll("#type-chips .ps-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderSkins(btn.dataset.type);
    });
  });

  // Size
  const sizeRange = $page.querySelector("#size-range");
  const sizeVal   = $page.querySelector("#size-val");
  sizeRange.addEventListener("input", () => {
    settings._newSize = parseInt(sizeRange.value);
    sizeVal.textContent = sizeRange.value;
  });

  // Speed
  const speedRange = $page.querySelector("#speed-range");
  const speedVal   = $page.querySelector("#speed-val");
  speedRange.addEventListener("input", () => {
    settings._newSpeed = parseFloat(speedRange.value);
    speedVal.textContent = speedRange.value;
  });

  // Add pet
  $page.querySelector("#add-btn").addEventListener("click", () => {
    if (!settings.pets) settings.pets = [];
    settings.pets.push({
      id:    Math.random().toString(36).slice(2),
      type:  settings._newType  || "cat",
      skin:  settings._newSkin  || "orange",
      size:  settings._newSize  || 48,
      speed: settings._newSpeed || 1.2,
    });
    onChange(settings);
    renderList();
  });
}

// ═══════════════════════════════════════════════════════
//  PLUGIN
// ═══════════════════════════════════════════════════════

class AcodePets {
  constructor() {
    this.settings = this._load();
    this._manager  = null;
    this._listener = null;
    this.$page     = null;
  }

  async init(baseUrl, $page, { firstInit }) {
    this.$page = $page;

    const container = editorManager.container;
    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    this._manager = new PetManager(container);

    if (this.settings.enabled) this._spawnAll();

    this._listener = () => {
      if (this._manager) this._manager.onType();
    };
    editorManager.on("file-content-changed", this._listener);

    const commands = acode.require("commands");
    commands.addCommand({
      name:        "acode-pets:settings",
      description: "Acode Pets: Settings",
      exec: () => {
        buildSettingsPage(this.$page, this.settings, s => {
          this.settings = s;
          this._save();
          this._manager.removeAll();
          if (s.enabled) this._spawnAll();
        });
        this.$page.show();
      },
    });

    // Default pet on first install
    if (firstInit && (!this.settings.pets || !this.settings.pets.length)) {
      this.settings.pets = [{
        id: "default", type: "cat", skin: "orange", size: 48, speed: 1.2,
      }];
      this._save();
      this._spawnAll();
    }
  }

  _spawnAll() {
    if (!this.settings.pets) return;
    this.settings.pets.forEach(p => this._manager.add(p));
  }

  _save() {
    try { localStorage.setItem(PLUGIN_ID + ".s", JSON.stringify(this.settings)); } catch (_) {}
  }

  _load() {
    try {
      const r = localStorage.getItem(PLUGIN_ID + ".s");
      if (r) return JSON.parse(r);
    } catch (_) {}
    return {
      enabled:   true,
      pets:      [],
      _newType:  "cat",
      _newSkin:  "orange",
      _newSize:  48,
      _newSpeed: 1.2,
    };
  }

  async destroy() {
    if (this._manager) this._manager.removeAll();
    if (this._listener) {
      editorManager.off("file-content-changed", this._listener);
      this._listener = null;
    }
    const commands = acode.require("commands");
    commands.removeCommand("acode-pets:settings");
  }
}

if (window.acode) {
  const plugin = new AcodePets();
  acode.setPluginInit(PLUGIN_ID, (baseUrl, $page, cache) => plugin.init(baseUrl, $page, cache));
  acode.setPluginUnmount(PLUGIN_ID, () => plugin.destroy());
}