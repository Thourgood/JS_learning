function solution(string) {
    let answer = ""
    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[A-Z]/g)) {
            answer += " "
            answer += string[i]
        } else {
            answer += string[i]
        }
    }
    return answer
}