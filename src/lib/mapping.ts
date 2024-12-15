export const hiragana2roman: Map<string, string> = new Map([
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

	// K + yōon
	['きゃ', 'kya'],
	['きゅ', 'kyu'],
	['きょ', 'kyo'],

	// K + dakuten
	['が', 'ga'],
	['ぎ', 'gi'],
	['ぐ', 'gu'],
	['げ', 'ge'],
	['ご', 'go'],

	// K + dakuten + yōon
	['ぎゃ', 'gya'],
	['ぎゅ', 'gyu'],
	['ぎょ', 'gyo'],

	// S
	['さ', 'sa'],
	['し', 'shi'],
	['す', 'su'],
	['せ', 'se'],
	['そ', 'so'],

	// S + yōon
	['しゃ', 'sha'],
	['しゅ', 'shu'],
	['しょ', 'sho'],

	// S + dakuten
	['ざ', 'za'],
	['じ', 'ji'],
	['ず', 'zu'],
	['ぜ', 'ze'],
	['ぞ', 'zo'],

	// S + dakuten + yōon
	['じゃ', 'ja'],
	['じゅ', 'ju'],
	['じょ', 'jo'],

	// T
	['た', 'ta'],
	['ち', 'chi'],
	['つ', 'tsu'],
	['て', 'te'],
	['と', 'to'],

	// T + yōon
	['ちゃ', 'cha'],
	['ちゅ', 'chu'],
	['ちょ', 'cho'],

	// T + dakuten
	['だ', 'da'],
	['ぢ', 'ji'],
	['づ', 'zu'],
	['で', 'de'],
	['ど', 'do'],

	// T + dakuten + yōon
	['ぢゃ', 'dya'],
	['ぢゅ', 'dyu'],
	['ぢょ', 'dyo'],

	// N
	['な', 'na'],
	['に', 'ni'],
	['ぬ', 'nu'],
	['ね', 'ne'],
	['の', 'no'],

	// N + yōon
	['にゃ', 'nya'],
	['にゅ', 'nyu'],
	['にょ', 'nyo'],

	// H
	['は', 'ha'],
	['ひ', 'hi'],
	['ふ', 'fu'],
	['へ', 'he'],
	['ほ', 'ho'],

	// H + yōon
	['ひゃ', 'hya'],
	['ひゅ', 'hyu'],
	['ひょ', 'hyo'],

	// H + dakuten
	['ば', 'ba'],
	['び', 'bi'],
	['ぶ', 'bu'],
	['べ', 'be'],
	['ぼ', 'bo'],

	// H + dakuten + yōon
	['びゃ', 'bya'],
	['びゅ', 'byu'],
	['びょ', 'byo'],

	// H + handakuten
	['ぱ', 'pa'],
	['ぴ', 'pi'],
	['ぷ', 'pu'],
	['ぺ', 'pe'],
	['ぽ', 'po'],

	// H + handakuten + yōon
	['ぴゃ', 'pya'],
	['ぴゅ', 'pyu'],
	['ぴょ', 'pyo'],

	// M
	['ま', 'ma'],
	['み', 'mi'],
	['む', 'mu'],
	['め', 'me'],
	['も', 'mo'],

	// M + yōon
	['みゃ', 'mya'],
	['みゅ', 'myu'],
	['みょ', 'myo'],

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

	// R + yōon
	['りゃ', 'rya'],
	['りゅ', 'ryu'],
	['りょ', 'ryo'],

	// W
	['わ', 'wa'],
	['ゐ', 'wi'],
	['ゑ', 'we'],
	['を', 'wo'],

	// N
	['ん', 'n']
]);

export const hiragana2romanKeys: string[] = Array.from(hiragana2roman.keys());
export const hiragana2romanValues: string[] = Array.from(hiragana2roman.values());
