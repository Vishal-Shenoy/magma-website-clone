let bridges = [];
function handleAllBridges(){
    for(let i=0;i<=53;i++){
        bridges.push(require(`./bridges${i}.png`));
    }
    return bridges;
}
export default handleAllBridges;