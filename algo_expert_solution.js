function longestIncreasingSubsequence(array) {
	// keeps count of longest subsequence ending in x index
  const lengths = new Array(array.length).fill(1)
	// keeps track of index right before that makes longest sequence
	const sequences = new Array(array.length)
	let maxLengInd = 0
	
	for(let i = 0; i < array.length; i++){
		for(let j = 0; j < i; j++){
			if(array[j] < array[i] && lengths[i] <= lengths[j] + 1){
					lengths[i] = lengths[j] + 1
					sequences[i] = j
			}
		}
		if(lengths[i] >= lengths[maxLengInd]) maxLengInd = i
	}
	
	console.log('1', sequences, maxLengInd)
	
	return buildSequence(array, sequences, maxLengInd)
}

function buildSequence(array, sequences, maxInd){
	const sequence = []
	while(maxInd !== undefined){
		console.log('2', array[maxInd])
		sequence.push(array[maxInd])
		maxInd = sequences[maxInd]
	}
	console.log('sequences', sequence)
	
	return sequence.reverse()
}
