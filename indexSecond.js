const func = (s, a, b) => {
	if (s.match(/^$/)) return false;
	const aIndex = s.indexOf(a);
	const bIndex = s.indexOf(b);
	return aIndex || bIndex ? Math.max(aIndex, bIndex) : false;
};
