{
    function countWordOccurrences(sentence: string, word: string): number{

        const caseSensitiveSentence = sentence.toUpperCase();
        const caseSensitiveWord = word.toUpperCase();

        const splitedSentence = caseSensitiveSentence.split(" ");

        const result = splitedSentence?.filter(item  => item === caseSensitiveWord).length;

        return result;
    }

    console.log(countWordOccurrences("I love typescript", "typeScript"));
}
