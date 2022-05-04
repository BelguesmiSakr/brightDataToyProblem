const verify = (text) => {
	const symbols = { "]": "[", ")": "(", ">": "<" };
	const symbols_backUp = [];
	for (const char of text) {
		if ("([<".includes(char)) {
			symbols_backUp.push(char);
		} else if (
			")]>".includes(char) &&
			symbols_backUp.pop() !== symbols[char]
		) {
			return false;
		}
	}
	return true;
};