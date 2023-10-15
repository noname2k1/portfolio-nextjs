const useChunk = <T,>(array: T[], quantity: number): T[][] => {
    const result: T[][] = [];
    for (let i = 0; i < array.length; i += quantity) {
        result.push(array.slice(i, i + quantity));
    }
    return result;
};

export default useChunk;
