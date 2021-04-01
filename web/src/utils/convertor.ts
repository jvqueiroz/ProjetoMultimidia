export const secondsToTime = (timeInSeconds: number)=>{
    const minutos = Math.trunc(timeInSeconds/60);
    const segundos = Math.trunc(timeInSeconds % 60);

    return `${('0' + minutos).slice(-2)}:${('0'+segundos).slice(-2)}`
} 