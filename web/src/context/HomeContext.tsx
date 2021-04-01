import { config } from "node:process";
import { createContext, ReactNode, useState } from "react";


interface HomeContextData{
    isPlaying: boolean;
    isMute: boolean;
    volume: number;
    tempoInicial: number;
    tempoFinal: number;
    configAudio: () => void;
    tooglePlayPause:()=> void;
    toongleMute: ()=> void;
    configVolume: (value: number) => void;
    configTempoInical: (value: number) => void;
}

interface HomeContextProviderProps{
    children: ReactNode;
}

export const HomeContext = createContext({} as HomeContextData);

const HomeContextProvider = ({children}:HomeContextProviderProps)=>{ 
    const [audio, setAudio] = useState<HTMLAudioElement>();
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMute, setIsMute]= useState(false);
    const [volume, setVolume]= useState (1);
    const [tempoInicial, setTempoInicial] =useState(0);
    const [tempoFinal, setTempoFinal] = useState(0);

    const configAudio = () =>{
        const audioInicial = new Audio("/audios/rap2.mp3");
        setAudio(audioInicial);

        audioInicial.onloadeddata = () =>{
            setTempoFinal(audioInicial.duration);
        }

        audioInicial.ontimeupdate =()=>{
            setTempoInicial(audioInicial.currentTime);
        }

    }

    const play =()=>{
        audio.play();
    }
    const tooglePlayPause =()=>{
        if(isPlaying){
            pause();
            setIsPlaying(false);
        }
        else{
            play();
            setIsPlaying(true);
        }
    }

    const pause=()=>{
        audio.pause();
        
    }

    const toongleMute= () =>{
        const muted= !audio.muted;
        setIsMute(muted);
        audio.muted= muted;
    }

    const configVolume =(value: number)=>{
        setVolume(value);
        audio.volume = value;
    }

    const configTempoInical =(value: number)=>{
        setTempoInicial(value);
        audio.currentTime= value;
    }
    return (
        <HomeContext.Provider value={{
            isPlaying, isMute, volume, tempoInicial, tempoFinal, configAudio, tooglePlayPause, toongleMute,
            configVolume, configTempoInical
        }}>
            {children}
        </HomeContext.Provider>
    );
}

export default HomeContextProvider;

