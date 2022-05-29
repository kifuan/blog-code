function countWords(str) {
    const chinese = Array.from(str)
        .filter(ch => /[\u4e00-\u9fa5]/.test(ch))
        .length
    
    const english = Array.from(str)
        .map(ch => /[a-zA-Z0-9\s]/.test(ch) ? ch : ' ')
        .join('').split(/\s+/).filter(s => s)
        .length

    return chinese + english
}

console.log(countWords('Hello, world, 你好, 世界'))
// 4
