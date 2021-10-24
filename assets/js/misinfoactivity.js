var chars = [
'You are Myron Ebell. Myron Ebell is the director of energy and global warming policy at CEI and director of Freedom Action, a “web-based grassroots activist organization loosely affiliated with CEI.” He is also the chair of the Cooler Heads Coalition, which describes itself as “focused on dispelling the myths of global warming.”',
'You are Steve Milloy. Steve Milloy is, most recently, the Director of External Policy and Strategy at Murray Energy Corp, which claims to be the largest privately-owned coal producer in the United States. Milloy is the publisher of the websites JunkScience.com, a former columnist for Fox News, co-creator and manager of the Free Enterprise Action Fund, an adjunct scholar with the Competitive Enterprise Institute and the president of the business consulting firm Steven J. Milloy, Inc. Milloy is also a Senior Policy Fellow at the Energy & Environment Legal Institute. Steve Milloy has been associated with the major American tobacco companies since at least 1997.',
'You are Patrick Michaels. Pat Michaels is the director of the Center for the Study of Science at the conservative Cato Institute. Michaels is a regular commentator on climate change issues on Fox News and Forbes and contributes opinion articles to US newspapers and has written several books critical of climate change science and the risks of rising greenhouse gas emissions. Michaels once estimated that “40 percent” of his funding comes from the oil industry.',
'You are Bjørn Lomborg. Bjørn Lomborg is a political scientist, economist and the founder and president of the Copenhagen Consensus Center (CCC). Lomborg is the author of The Skeptical Environmentalist and Cool It, two books that downplay the risks of global warming. Lomborg is a regular critic of renewable energy and claims that fighting global warming is too expensive to warrant taking action. He also advocates for the expansion of fossil fuel usage in developing countries, particularly natural gas fracking, and claims “there is a lot of positives to global warming right now.”',
'You are Matt Ridley. Viscount Matthew White Ridley is a Conservative hereditary peer in the British House of Lords, a science writer, journalist, author, and advisor to the Global Warming Policy Foundation (GWPF). He was a strong advocate for the “Brexit” campaign to pull Britain out of the European Union. Ridley benefits financially from coal mining on his family’s land, advocates for expanded gas fracking and criticizes renewable energy technologies. “I am a climate lukewarmer. That means I think recent global warming is real, mostly man-made and will continue but I no longer think it is likely to be dangerous…” Ridley says.',
'You are Roy W. Spencer. Roy W. Spencer is a research scientist at the University of Alabama, Huntsville, and self-describes as a climatologist, author, and former NASA scientist. He has received funding from the coal company Peabody Energy to testify at a Minnesota state hearing on the impacts of carbon dioxide. Spencer’s position on climate change is: “There’s probably a natural reason for global warming […] We will look back on it as a gigantic false alarm […] The Earth isn’t that sensitive to how much CO2 we put into the atmosphere. I think we need to consider the possibility that more carbon dioxide is better than less.”',
'You are Christopher Monckton. Christopher Walter Monckton, the third Viscount Monckton of Brenchely, is a former British politician affiliated with the UK Independence Party. He holds a degree in classics and a diploma in journalism. Monckton claims that “global warming will not affect us for the next 2,000 years, and if it does, it won’t have been caused by us.” He once led a Tea Party crowd in a call-and-response that “Global warming is? BULLSH**T.”'
]

var TechniqueA = [
'Use "ad hominem". Attack a person/group instead of addressing their arguments.',
'Use "ambiguity". Use ambiguous language in order to lead to a misleading conclusion.',
'Use "anecdote". Use personal experience or isolated examples instead of sound arguments or compelling evidence.',
'Use "slippery slope". Suggest that taking a minor action will inevitably lead to major consequences.',
]

var TechniqueB = ['Use "cherry picking". Carefully select data that appear to confirm one position while ignoring other data that contradicts that position.',
'Use "conspiracy theory". Propose that a secret plan exists to implement a nefarious scheme such as hiding a truth.',
'Use "fake debate". Present science and pseudoscience in an adversarial format to give the false impression of an ongoing scientific debate.',
'Use "fake experts". Presenting an unqualified person or institution as a source of credible information.',
]

var TechniqueC = ['Use "false analogy". Assume that because two things are alike in some ways, they are alike in some other respect.',
'Use "false choice". Present two options as the only possibilities, when other possibilities exist.',
'Use "misrepresentation". Misrepresent a situation or an opponent’s position in such a way as to distort understanding.',
'Use "nefarious intent". Assume that the motivations behind any presumed conspiracy are nefarious.',
]

function newChar() {
	var randomNumber = Math.floor(Math.random() * 7);
	document.getElementById('CharDisplay').innerHTML = chars[randomNumber];

}

function newTechniqueA() {
	var randomNumber = Math.floor(Math.random() * 4);
	document.getElementById('techniqueDisplayA').innerHTML = TechniqueA[randomNumber];

}

function newTechniqueB() {
	var randomNumber = Math.floor(Math.random() * 4);
	document.getElementById('techniqueDisplayB').innerHTML = TechniqueB[randomNumber];

}

function newTechniqueC() {
	var randomNumber = Math.floor(Math.random() * 4);
	document.getElementById('techniqueDisplayC').innerHTML = TechniqueC[randomNumber];

}
