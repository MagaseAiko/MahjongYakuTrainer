/**
 * Mahjong Yaku Trainer - Enhanced Version
 * Modern JavaScript architecture with comprehensive yaku database
 */

// ===== CONSTANTS AND CONFIGURATION =====

const CONFIG = {
    TILE_PATHS: {
        BLACK: 'MahjongTiles/Black/',
        WHITE: 'MahjongTiles/Regular/',
        BACK_BLACK: 'MahjongTiles/Export/Black/Back.png',
        BACK_WHITE: 'MahjongTiles/Export/Regular/Back.png'
    },
    THEMES: {
        LIGHT: 'light',
        DARK: 'dark'
    },
    DIFFICULTIES: {
        EASY: 'easy',
        MEDIUM: 'medium',
        HARD: 'hard'
    },
    SCORING: {
        BASE_SCORE: 100,
        HAN_MULTIPLIERS: { 1: 1, 2: 2, 3: 4, 6: 8 },
        YAKUMAN_SCORE: 1000,
        DORA_BONUS: 50,
        STREAK_BONUS: 25,
        PERFECT_BONUS: 200
    }
};

// Tile mapping for image paths
const TILE_MAP = {
    'Man1': 0, 'Man2': 1, 'Man3': 2, 'Man4': 3, 'Man5': 4, 'Man5-Dora': 5,
    'Man6': 6, 'Man7': 7, 'Man8': 8, 'Man9': 9,
    'Pin1': 10, 'Pin2': 11, 'Pin3': 12, 'Pin4': 13, 'Pin5': 14, 'Pin5-Dora': 15,
    'Pin6': 16, 'Pin7': 17, 'Pin8': 18, 'Pin9': 19,
    'Sou1': 20, 'Sou2': 21, 'Sou3': 22, 'Sou4': 23, 'Sou5': 24, 'Sou5-Dora': 25,
    'Sou6': 26, 'Sou7': 27, 'Sou8': 28, 'Sou9': 29,
    'Ton': 30, 'Nan': 31, 'Shaa': 32, 'Pei': 33,
    'Haku': 34, 'Hatsu': 35, 'Chun': 36
};

// ===== YAKU DEFINITIONS =====

const YAKU_DATABASE = {
    'yakuhai': { name: '役牌', reading: 'やくはい', han: 1, description: '風牌または三元牌の刻子または槓子を1つ持つ', category: 'basic' },
    'menzentsumo': { name: '門前清自模和', reading: 'メンゼンツモ', han: 1, description: '鳴かずに自力でツモ和了する', category: 'basic' },
    'riichi': { name: '立直', reading: 'リーチ', han: 1, description: '聴牌時にリーチを宣言して和了する', category: 'basic' },
    'pinfu': { name: '平和', reading: 'ピンフ', han: 1, description: '順子のみで、雀頭が役牌でない形', category: 'basic' },
    'tanyao': { name: '断么九', reading: 'タンヤオ', han: 1, description: '2〜8の数牌のみで和了する', category: 'basic' },
    'iipeikou': { name: '一盃口', reading: 'イーペーコー', han: 1, description: '同じ順子を2つ持つ（門前役）', category: 'sequence' },
    'ippatsu': { name: '一発', reading: 'イッパツ', han: 1, description: 'リーチ後、他家の鳴きが入る前の巡目で和了', category: 'circumstantial' },
    'haitei': { name: '海底撈月', reading: 'ハイテイ', han: 1, description: '最後の山牌でツモ和了する', category: 'circumstantial' },
    'houtei': { name: '河底撈魚', reading: 'ホウテイ', han: 1, description: '最後の捨て牌でロン和了する', category: 'circumstantial' },
    'rinshan': { name: '嶺上開花', reading: 'リンシャン', han: 1, description: 'カンした後の嶺上牌でツモ和了する', category: 'circumstantial' },
    'chankan': { name: '搶槓', reading: 'チャンカン', han: 1, description: '相手の加槓にロンする', category: 'circumstantial' },
    'doubleriichi': { name: 'ダブル立直', reading: 'ダブルリーチ', han: 2, description: '配牌で聴牌していて最初の捨て牌でリーチ', category: 'special' },
    'sanshoku': { name: '三色同順', reading: 'サンショク', han: 2, description: '萬子、筒子、索子で同じ順子を持つ', category: 'sequence' },
    'ittsuu': { name: '一気通貫', reading: 'イッツウ', han: 2, description: '同一種で123、456、789の順子を持つ', category: 'sequence' },
    'toitoi': { name: '対々和', reading: 'トイトイ', han: 2, description: '4つの面子がすべて刻子または槓子', category: 'triplets' },
    'chiitoitsu': { name: '七対子', reading: 'チートイツ', han: 2, description: '7つの対子で和了する特殊形', category: 'special' },
    'chanta': { name: '混全帯么九', reading: 'チャンタ', han: 2, description: 'すべての面子と雀頭に么九牌が含まれる', category: 'terminals' },
    'sanankou': { name: '三暗刻', reading: 'サンアンコー', han: 2, description: '暗刻を3つ持つ', category: 'triplets' },
    'honroutou': { name: '混老頭', reading: 'ホンロートー', han: 2, description: '么九牌のみで構成される（対々和の複合）', category: 'terminals' },
    'sankantsu': { name: '三槓子', reading: 'サンカンツ', han: 2, description: '槓子を3つ持つ', category: 'kans' },
    'shousangen': { name: '小三元', reading: 'ショウサンゲン', han: 2, description: '三元牌2種を刻子、1種を雀頭にする', category: 'honors' },
    'sanshokudoukou': { name: '三色同刻', reading: 'サンショクドーコー', han: 2, description: '萬筒索で同じ数の刻子を持つ', category: 'triplets' },
    'honitsu': { name: '混一色', reading: 'ホンイツ', han: 3, description: '字牌と1種類の数牌のみで構成', category: 'suits' },
    'ryanpeikou': { name: '二盃口', reading: 'リャンペーコー', han: 3, description: '2つの一盃口（門前役）', category: 'sequence' },
    'junchan': { name: '純全帯么九', reading: 'ジュンチャン', han: 3, description: 'すべての面子と雀頭に1,9牌が含まれる', category: 'terminals' },
    'chinitsu': { name: '清一色', reading: 'チンイツ', han: 6, description: '1種類の数牌のみで構成', category: 'suits' },
    'kokushimusou': { name: '国士無双', reading: 'コクシムソウ', han: 'yakuman', description: '13種の么九牌を1枚ずつ＋1枚の対子', category: 'yakuman' },
    'suuankou': { name: '四暗刻', reading: 'スーアンコー', han: 'yakuman', description: '4つの暗刻で和了', category: 'yakuman' },
    'daisangen': { name: '大三元', reading: 'ダイサンゲン', han: 'yakuman', description: '三元牌3種すべてを刻子にする', category: 'yakuman' },
    'tsuuiisou': { name: '字一色', reading: 'ツーイーソー', han: 'yakuman', description: '字牌のみで構成', category: 'yakuman' },
    'ryuuiisou': { name: '緑一色', reading: 'リューイーソー', han: 'yakuman', description: '緑色の牌のみで構成（索子の2,3,4,6,8と発）', category: 'yakuman' },
    'shousuushii': { name: '小四喜', reading: 'ショウスーシー', han: 'yakuman', description: '風牌3種を刻子、1種を雀頭にする', category: 'yakuman' },
    'daisuushii': { name: '大四喜', reading: 'ダイスーシー', han: 'yakuman', description: '風牌4種すべてを刻子にする', category: 'yakuman' },
    'chuurennpoutou': { name: '九蓮宝燈', reading: 'チューレンポートー', han: 'yakuman', description: '同一種で1112345678999の形', category: 'yakuman' },
    'chinnroutou': { name: '清老頭', reading: 'チンロートー', han: 'yakuman', description: '1,9牌のみで構成', category: 'yakuman' },
    'suukantsu': { name: '四槓子', reading: 'スーカンツ', han: 'yakuman', description: '4つの槓子で和了', category: 'yakuman' },
    'tenhou': { name: '天和', reading: 'テンホウ', han: 'yakuman', description: '親の配牌で和了', category: 'yakuman' },
    'chiihou': { name: '地和', reading: 'チーホウ', han: 'yakuman', description: '子の第一ツモで和了', category: 'yakuman' }
};

// ===== HAND DATABASE =====

const HAND_DATABASE = [
    {
        bakaze: 'Ton', jikaze: 'Ton',
        tiles: ['Man1', 'Man2', 'Man3', 'Pin4', 'Pin5', 'Pin6', 'Sou7', 'Sou8', 'Sou9', 'Haku', 'Haku', 'Haku', 'Chun', 'Chun'],
        winningTile: 'Chun', isRon: false, isRiichi: false,
        doraIndicators: ['Man5'], uraDoraIndicators: [],
        correctYaku: ['yakuhai'], correctDora: 0,
        difficulty: 'easy', description: 'Basic yakuhai (honor tiles) example'
    },
    {
        bakaze: 'Ton', jikaze: 'Nan',
        tiles: ['Man2', 'Man3', 'Man4', 'Pin5', 'Pin6', 'Pin7', 'Sou1', 'Sou2', 'Sou3', 'Man8', 'Man8', 'Pei', 'Pei', 'Pei'],
        winningTile: 'Man8', isRon: false, isRiichi: true,
        doraIndicators: ['Sou9'], uraDoraIndicators: ['Man7'],
        correctYaku: ['menzentsumo', 'riichi', 'tanyao'], correctDora: 0,
        difficulty: 'easy', description: 'Multiple basic yaku combination'
    },
    {
        bakaze: 'Nan', jikaze: 'Shaa',
        tiles: ['Man2', 'Man3', 'Man4', 'Pin2', 'Pin3', 'Pin4', 'Sou2', 'Sou3', 'Sou4', 'Man5', 'Man5', 'Pin6', 'Pin7', 'Pin8'],
        winningTile: 'Pin8', isRon: true, isRiichi: false,
        doraIndicators: ['Hatsu'], uraDoraIndicators: [],
        correctYaku: ['sanshoku', 'tanyao'], correctDora: 0,
        difficulty: 'medium', description: 'Sanshoku doujun (three color straight)'
    },
    {
        bakaze: 'Ton', jikaze: 'Pei',
        tiles: ['Man3', 'Man4', 'Man5', 'Pin1', 'Pin2', 'Pin3', 'Sou6', 'Sou7', 'Sou8', 'Man7', 'Man8', 'Man9', 'Hatsu', 'Hatsu'],
        winningTile: 'Man6', isRon: false, isRiichi: true,
        doraIndicators: ['Pin9'], uraDoraIndicators: ['Sou3'],
        correctYaku: ['menzentsumo', 'riichi', 'pinfu'], correctDora: 0,
        difficulty: 'easy', description: 'Classic pinfu pattern'
    },
    {
        bakaze: 'Shaa', jikaze: 'Ton',
        tiles: ['Man2', 'Man2', 'Pin4', 'Pin4', 'Sou6', 'Sou6', 'Man8', 'Man8', 'Ton', 'Ton', 'Haku', 'Haku', 'Chun', 'Chun'],
        winningTile: 'Chun', isRon: false, isRiichi: false,
        doraIndicators: ['Nan'], uraDoraIndicators: [],
        correctYaku: ['chiitoitsu', 'menzentsumo'], correctDora: 0,
        difficulty: 'medium', description: 'Seven pairs (chiitoi)'
    }
];

// ===== GAME STATE MANAGEMENT =====

class GameState {
    constructor() {
        this.currentHandIndex = 0;
        this.score = parseInt(localStorage.getItem('yakuTrainerScore')) || 0;
        this.streak = 0;
        this.totalQuestions = 0;
        this.correctAnswers = 0;
        this.difficulty = localStorage.getItem('yakuTrainerDifficulty') || CONFIG.DIFFICULTIES.MEDIUM;
        this.theme = localStorage.getItem('yakuTrainerTheme') || CONFIG.THEMES.LIGHT;
        
        this.availableHands = this.filterHandsByDifficulty();
        this.shuffleHands();
    }

    filterHandsByDifficulty() {
        switch (this.difficulty) {
            case CONFIG.DIFFICULTIES.EASY:
                return HAND_DATABASE.filter(hand => hand.difficulty === 'easy');
            case CONFIG.DIFFICULTIES.MEDIUM:
                return HAND_DATABASE.filter(hand => hand.difficulty !== 'hard');
            case CONFIG.DIFFICULTIES.HARD:
                return HAND_DATABASE;
            default:
                return HAND_DATABASE;
        }
    }

    shuffleHands() {
        for (let i = this.availableHands.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.availableHands[i], this.availableHands[j]] = [this.availableHands[j], this.availableHands[i]];
        }
    }

    getCurrentHand() {
        if (this.currentHandIndex >= this.availableHands.length) {
            this.shuffleHands();
            this.currentHandIndex = 0;
        }
        return this.availableHands[this.currentHandIndex];
    }

    nextHand() {
        this.currentHandIndex++;
        return this.getCurrentHand();
    }

    updateScore(points) {
        this.score += points;
        localStorage.setItem('yakuTrainerScore', this.score.toString());
    }

    updateStats(correct) {
        this.totalQuestions++;
        if (correct) {
            this.correctAnswers++;
            this.streak++;
        } else {
            this.streak = 0;
        }
    }

    getAccuracy() {
        return this.totalQuestions > 0 ? Math.round((this.correctAnswers / this.totalQuestions) * 100) : 0;
    }
}

// ===== TILE MANAGEMENT =====

class TileManager {
    constructor() {
        this.theme = localStorage.getItem('yakuTrainerTheme') || CONFIG.THEMES.LIGHT;
    }

    getTileImagePath(tileName) {
        const basePath = this.theme === CONFIG.THEMES.DARK ? 
            CONFIG.TILE_PATHS.BLACK : 
            CONFIG.TILE_PATHS.WHITE;
        return `${basePath}${tileName}.svg`;
    }

    setTileImage(elementId, tileName) {
        const element = document.getElementById(elementId);
        if (element && tileName) {
            element.src = this.getTileImagePath(tileName);
            element.alt = tileName;
        }
    }

    updateTheme(newTheme) {
        this.theme = newTheme;
    }
}

// ===== SCORING SYSTEM =====

class ScoringSystem {
    static calculateScore(userYaku, correctYaku, userDora, correctDora) {
        let score = 0;
        let feedback = {
            correctYaku: [],
            incorrectYaku: [],
            missedYaku: [],
            doraCorrect: userDora === correctDora
        };

        const correctYakuSet = new Set(correctYaku);
        
        userYaku.forEach(yaku => {
            if (correctYakuSet.has(yaku)) {
                const yakuInfo = YAKU_DATABASE[yaku];
                feedback.correctYaku.push(yaku);
                
                if (yakuInfo.han === 'yakuman') {
                    score += CONFIG.SCORING.YAKUMAN_SCORE;
                } else {
                    score += CONFIG.SCORING.BASE_SCORE * (CONFIG.SCORING.HAN_MULTIPLIERS[yakuInfo.han] || 1);
                }
            } else {
                feedback.incorrectYaku.push(yaku);
                score -= CONFIG.SCORING.BASE_SCORE / 2;
            }
        });

        correctYaku.forEach(yaku => {
            if (!userYaku.includes(yaku)) {
                feedback.missedYaku.push(yaku);
            }
        });

        if (feedback.doraCorrect) {
            score += correctDora * CONFIG.SCORING.DORA_BONUS;
        }

        const isPerfect = feedback.incorrectYaku.length === 0 && 
                         feedback.missedYaku.length === 0 && 
                         feedback.doraCorrect;

        if (isPerfect) {
            score += CONFIG.SCORING.PERFECT_BONUS;
        }

        return {
            score: Math.max(0, score),
            feedback: feedback,
            isPerfect: isPerfect
        };
    }
}

// ===== MAIN GAME CLASS =====

class MahjongYakuTrainer {
    constructor() {
        this.gameState = new GameState();
        this.tileManager = new TileManager();
        
        this.initializeElements();
        this.setupEventListeners();
        this.applyTheme();
        this.updateUI();
        this.displayCurrentHand();
    }

    initializeElements() {
        this.elements = {
            score: document.getElementById('score'),
            streak: document.getElementById('streak'),
            accuracy: document.getElementById('accuracy'),
            nextHandBtn: document.getElementById('next-hand'),
            themeToggleBtn: document.getElementById('theme-toggle'),
            submitBtn: document.getElementById('submit-answer'),
            winTypeLabel: document.getElementById('win-type'),
            riichiStick: document.getElementById('riichi-stick'),
            yakuCheckboxes: document.querySelectorAll('.yaku-checkbox'),
            doraSelect: document.getElementById('dora-count'),
            resultsPanel: document.getElementById('results-panel'),
            userAnswerContent: document.getElementById('user-answer-content'),
            correctAnswerContent: document.getElementById('correct-answer-content'),
            roundScore: document.getElementById('round-score')
        };
    }

    setupEventListeners() {
        this.elements.nextHandBtn?.addEventListener('click', () => this.nextHand());
        this.elements.themeToggleBtn?.addEventListener('click', () => this.toggleTheme());
        this.elements.submitBtn?.addEventListener('click', () => this.submitAnswer());

        document.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') {
                if (this.elements.resultsPanel?.style.display === 'none') {
                    e.preventDefault();
                    this.submitAnswer();
                } else {
                    e.preventDefault();
                    this.nextHand();
                }
            }
        });
    }

    applyTheme() {
        document.documentElement.setAttribute('data-theme', this.gameState.theme);
        this.tileManager.updateTheme(this.gameState.theme);
    }

    updateUI() {
        if (this.elements.score) this.elements.score.textContent = this.gameState.score.toLocaleString();
        if (this.elements.streak) this.elements.streak.textContent = this.gameState.streak;
        if (this.elements.accuracy) this.elements.accuracy.textContent = `${this.gameState.getAccuracy()}%`;
    }

    displayCurrentHand() {
        const hand = this.gameState.getCurrentHand();
        
        this.hideResults();
        this.clearUserSelections();

        this.tileManager.setTileImage('Kaze_1', hand.bakaze);
        this.tileManager.setTileImage('Kaze_2', hand.jikaze);

        hand.tiles.forEach((tile, index) => {
            this.tileManager.setTileImage(`Tile_${index + 1}`, tile);
        });

        this.tileManager.setTileImage('Tile_14', hand.winningTile);
        
        if (this.elements.winTypeLabel) {
            this.elements.winTypeLabel.textContent = hand.isRon ? 'ロン' : 'ツモ';
        }

        if (this.elements.riichiStick) {
            this.elements.riichiStick.style.visibility = hand.isRiichi ? 'visible' : 'hidden';
        }

        this.displayDoraIndicators(hand.doraIndicators, hand.uraDoraIndicators, hand.isRiichi);
    }

    displayDoraIndicators(doraIndicators, uraDoraIndicators, showUra) {
        doraIndicators.forEach((dora, index) => {
            if (index < 5) {
                this.tileManager.setTileImage(`Dora_${index + 3}`, dora);
            }
        });

        if (showUra && uraDoraIndicators.length > 0) {
            uraDoraIndicators.forEach((dora, index) => {
                if (index < 5) {
                    this.tileManager.setTileImage(`uraDora_${index + 3}`, dora);
                }
            });
        }
    }

    nextHand() {
        this.gameState.nextHand();
        this.displayCurrentHand();
    }

    toggleTheme() {
        const newTheme = this.gameState.theme === CONFIG.THEMES.LIGHT ? 
            CONFIG.THEMES.DARK : CONFIG.THEMES.LIGHT;
        
        this.gameState.theme = newTheme;
        localStorage.setItem('yakuTrainerTheme', newTheme);
        this.applyTheme();
        this.displayCurrentHand();
    }

    submitAnswer() {
        const userAnswer = this.getUserAnswer();
        const hand = this.gameState.getCurrentHand();
        
        const result = ScoringSystem.calculateScore(
            userAnswer.yaku,
            hand.correctYaku,
            userAnswer.dora,
            hand.correctDora
        );

        this.gameState.updateStats(result.isPerfect);
        this.gameState.updateScore(result.score);
        this.displayResults(userAnswer, hand, result);
        this.updateUI();
    }

    getUserAnswer() {
        const selectedYaku = [];
        this.elements.yakuCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                selectedYaku.push(checkbox.id);
            }
        });

        const selectedDora = parseInt(this.elements.doraSelect?.value || '0');
        return { yaku: selectedYaku, dora: selectedDora };
    }

    displayResults(userAnswer, hand, result) {
        if (this.elements.resultsPanel) {
            this.elements.resultsPanel.style.display = 'block';
        }

        this.renderAnswerSection(
            this.elements.userAnswerContent,
            userAnswer.yaku,
            userAnswer.dora,
            result.feedback,
            true
        );

        this.renderAnswerSection(
            this.elements.correctAnswerContent,
            hand.correctYaku,
            hand.correctDora,
            result.feedback,
            false
        );

        if (this.elements.roundScore) {
            this.elements.roundScore.textContent = `+${result.score}`;
        }
    }

    renderAnswerSection(container, yakuList, doraCount, feedback, isUserAnswer) {
        if (!container) return;

        container.innerHTML = '';

        const doraItem = document.createElement('div');
        doraItem.className = 'answer-item';
        doraItem.innerHTML = `ドラ: ${doraCount}`;
        
        if (isUserAnswer) {
            doraItem.classList.add(feedback.doraCorrect ? 'correct' : 'incorrect');
        }
        
        container.appendChild(doraItem);

        yakuList.forEach(yakuId => {
            const yaku = YAKU_DATABASE[yakuId];
            if (!yaku) return;

            const yakuItem = document.createElement('div');
            yakuItem.className = 'answer-item';
            yakuItem.innerHTML = yaku.name;

            if (isUserAnswer) {
                if (feedback.correctYaku.includes(yakuId)) {
                    yakuItem.classList.add('correct');
                } else if (feedback.incorrectYaku.includes(yakuId)) {
                    yakuItem.classList.add('incorrect');
                }
            } else {
                if (yaku.han === 'yakuman') {
                    yakuItem.classList.add('yaku-yakuman');
                } else {
                    yakuItem.classList.add(`yaku-${yaku.han}han`);
                }
            }

            container.appendChild(yakuItem);
        });
    }

    hideResults() {
        if (this.elements.resultsPanel) {
            this.elements.resultsPanel.style.display = 'none';
        }
    }

    clearUserSelections() {
        this.elements.yakuCheckboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        if (this.elements.doraSelect) {
            this.elements.doraSelect.value = '0';
        }
    }
}

// ===== INITIALIZATION =====

document.addEventListener('DOMContentLoaded', () => {
    window.yakuTrainer = new MahjongYakuTrainer();
    console.log('🀄 Mahjong Yaku Trainer initialized successfully!');
});