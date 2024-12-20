export type Column = {
	base: [string, string][];
	dakuten: [string, string][];
	handakuten: [string, string][];
	yoon: [string, string][];
	dakutenYoon: [string, string][];
	handakutenYoon: [string, string][];
};

export const column: Column = {
	base: [
		//
		['あ', 'a'],
		['い', 'i'],
		['う', 'u'],
		['え', 'e'],
		['お', 'o'],

		// K
		['か', 'ka'],
		['き', 'ki'],
		['く', 'ku'],
		['け', 'ke'],
		['こ', 'ko'],

		// S
		['さ', 'sa'],
		['し', 'shi'],
		['す', 'su'],
		['せ', 'se'],
		['そ', 'so'],

		// T
		['た', 'ta'],
		['ち', 'chi'],
		['つ', 'tsu'],
		['て', 'te'],
		['と', 'to'],

		// N
		['な', 'na'],
		['に', 'ni'],
		['ぬ', 'nu'],
		['ね', 'ne'],
		['の', 'no'],

		// H
		['は', 'ha'],
		['ひ', 'hi'],
		['ふ', 'fu'],
		['へ', 'he'],
		['ほ', 'ho'],

		// M
		['ま', 'ma'],
		['み', 'mi'],
		['む', 'mu'],
		['め', 'me'],
		['も', 'mo'],

		// Y
		['や', 'ya'],
		['ゆ', 'yu'],
		['よ', 'yo'],

		// R
		['ら', 'ra'],
		['り', 'ri'],
		['る', 'ru'],
		['れ', 're'],
		['ろ', 'ro'],

		// W
		['わ', 'wa'],
		['ゐ', 'wi'],
		['ゑ', 'we'],
		['を', 'wo'],

		// N
		['ん', 'n']
	],
	dakuten: [
		// K + dakuten
		['が', 'ga'],
		['ぎ', 'gi'],
		['ぐ', 'gu'],
		['げ', 'ge'],
		['ご', 'go'],

		// S + dakuten
		['ざ', 'za'],
		['じ', 'ji'],
		['ず', 'zu'],
		['ぜ', 'ze'],
		['ぞ', 'zo'],

		// T + dakuten
		['だ', 'da'],
		['ぢ', 'ji'],
		['づ', 'zu'],
		['で', 'de'],
		['ど', 'do'],

		// H + dakuten
		['ば', 'ba'],
		['び', 'bi'],
		['ぶ', 'bu'],
		['べ', 'be'],
		['ぼ', 'bo']
	],
	handakuten: [
		// H + handakuten
		['ぱ', 'pa'],
		['ぴ', 'pi'],
		['ぷ', 'pu'],
		['ぺ', 'pe'],
		['ぽ', 'po']
	],
	yoon: [
		// K + yōon
		['きゃ', 'kya'],
		['きゅ', 'kyu'],
		['きょ', 'kyo'],

		// S + yōon
		['しゃ', 'sha'],
		['しゅ', 'shu'],
		['しょ', 'sho'],

		// T + yōon
		['ちゃ', 'cha'],
		['ちゅ', 'chu'],
		['ちょ', 'cho'],

		// N + yōon
		['にゃ', 'nya'],
		['にゅ', 'nyu'],
		['にょ', 'nyo'],

		// H + yōon
		['ひゃ', 'hya'],
		['ひゅ', 'hyu'],
		['ひょ', 'hyo'],

		// M + yōon
		['みゃ', 'mya'],
		['みゅ', 'myu'],
		['みょ', 'myo'],

		// R + yōon
		['りゃ', 'rya'],
		['りゅ', 'ryu'],
		['りょ', 'ryo']
	],
	dakutenYoon: [
		// K + dakuten + yōon
		['ぎゃ', 'gya'],
		['ぎゅ', 'gyu'],
		['ぎょ', 'gyo'],

		// S + dakuten + yōon
		['じゃ', 'ja'],
		['じゅ', 'ju'],
		['じょ', 'jo'],

		// T + dakuten + yōon
		['ぢゃ', 'dya'],
		['ぢゅ', 'dyu'],
		['ぢょ', 'dyo'],

		// H + dakuten + yōon
		['びゃ', 'bya'],
		['びゅ', 'byu'],
		['びょ', 'byo']
	],
	handakutenYoon: [
		// H + handakuten + yōon
		['ぴゃ', 'pya'],
		['ぴゅ', 'pyu'],
		['ぴょ', 'pyo']
	]
};

export const filterColumn = (daku: boolean, handa: boolean, yoon: boolean) => {
	let characters = [...column.base];

	if (daku) {
		characters = characters.concat(column.dakuten);
	}

	if (handa) {
		characters = characters.concat(column.handakuten);
	}

	if (yoon) {
		characters = characters.concat(column.yoon);
	}

	if (daku && yoon) {
		characters = characters.concat(column.dakutenYoon);
	}

	if (handa && yoon) {
		characters = characters.concat(column.handakutenYoon);
	}

	const hiragana2roman = new Map(characters);

	return {
		hiragana2roman,
		keys: Array.from(hiragana2roman.keys()),
		values: Array.from(hiragana2roman.values())
	};
};
