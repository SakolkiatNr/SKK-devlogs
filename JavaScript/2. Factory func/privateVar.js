function createUser(name) {
    const discordName = '@' + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;

    return {name, discordName, getReputation, giveReputation};
    // reputation is not return so we cannot directly edit the value
}

const josh = createUser('josh');
josh.giveReputation();
josh.giveReputation();

console.log({
    discordName: josh.discordName,
    reputation: josh.getReputation()
});