{
    function removeDuplicates(num: number[]): number[] {
        const withoutDuplicate = num?.filter((item, index) => num.indexOf(item) === index);

        return withoutDuplicate;
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}