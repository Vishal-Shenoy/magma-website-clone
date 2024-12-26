let frames = [];
function handleAllFrames(){
    for(let i=0;i<=53;i++){
        frames.push(require(`../frames/frames${i}.png`));
    }
    return frames;
}
export default handleAllFrames;