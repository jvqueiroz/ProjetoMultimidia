import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import {useContext, useEffect, useState } from 'react';
import {HomeContext } from '../context/HomeContext'
import {secondsToTime} from  '../utils/convertor';

export default function Home() {
  
  const {isPlaying, 
        isMute,
        volume,
        tempoInicial,
        tempoFinal,
        configAudio, 
        tooglePlayPause,
        toongleMute,
        configVolume,
        configTempoInical

  }= useContext(HomeContext);
  useEffect(()=>{

  configAudio();
  
  }, []);


  return (
    <div className={styles.container}>
      <Head>
        <title>Nerd Hits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <article className={styles.menuLateral} >
          <section className={styles.perfil}>
            <Image className={styles.img}
              src="/imagens/perfil.jpg"
              alt="My Image"
              width={50}
              height={50}
            />
            <div className={styles.h6}>João Victor Queiroz</div>
            <div className={styles.descricao}>jvyctor12@gmail.com</div>
          </section>
          <section className={styles.opsMenuLateral}>
            
            <div className={styles.lista}>
            <p className={styles.descricao}>DESCORBERTA</p>
              <p className={styles.opMenu}>Recomendadas</p>
              <p className={styles.opMenu}>Top 10</p>
              <p className={styles.opMenu}>Albuns</p>
              <p className={styles.opMenu2}>Artistas</p>
              <p className={styles.opMenu}>MV</p>
            </div>

            <div className={styles.lista}>
            <p className={styles.descricao}>MINHAS MÚSICAS</p>
              <p className={styles.opMenu}>Favoritas</p>
              <p className={styles.opMenu}>Músicas baixadas</p>
              <p className={styles.opMenu}>Histórico</p>
            </div>

            <div className={styles.lista}>
            <p className={styles.descricao}>MINHAS PLAYLISTS</p>
              <p className={styles.opMenu}>Aleatorias</p>
            </div>
          </section>
          <section>
          </section>
        </article>   
        <article className={styles.main}>
          <section className={styles.cabecalho}>
            <div className={styles.main}>
              <div className={styles.navbar}>
                <img className={styles.iconNext} src="/imagens/next1.png"/>
                <img className={styles.iconNext} src="/imagens/next2.png"/>
                <form>
                <input className={styles.input} id="name" type="text"  placeholder="Pesquisar" required />
                </form>
                <img className={styles.iconConfig} src="/imagens/settings.png"/>
              </div>
              <div className={styles.camptitulo}>
                <div className={styles.campinfo}> 
                  <a className={styles.card}>Artista</a>
                  <div className={styles.h3}>7 minutoz</div>
                  <div className={styles.descricao2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar porttitor nulla, ut ultrices tellus.
                  </div>
                  <div>
                  <img className={styles.iconNext} src="/imagens/add.png"/>
                  <img className={styles.iconNext} src="/imagens/share.png"/>
                  {isPlaying}
                  <img className={styles.iconNext} src="/imagens/menu.png"/>
                  </div>
                </div>
                <div className={styles.campelemento}>
                 
                </div>
              </div>
            </div>
          </section>
          <section className={styles.body}>
            <div className={styles.tituloBody}>Músicas</div>
            <div className={styles.faixas}>

              <div className={styles.controlefaixa}>
                <div className={styles.titulofaixa}><samp className={styles.numFaixa}>01</samp> Rap dos Rokages</div>
                <div className={styles.tituloAlbum}> Nerd Hits</div>
                <div className={styles.iconFaixa}>
                  <img className={styles.iconBody} src="/imagens/get_app.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/favorite 2.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/reply.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/ops.png" width={25} height={25}/>
                </div>
                <div className={styles.tituloAlbum}>09:30</div>
              </div>

              <div className={styles.controlefaixa2}>
                <div className={styles.titulofaixa}><samp className={styles.numFaixa}>02</samp> Rap do Tobirama</div>
                <div className={styles.tituloAlbum}> Nerd Hits</div>
                <div className={styles.iconFaixa}>
                  <img className={styles.iconBody} src="/imagens/get_app.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/favorite.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/reply.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/ops.png" width={25} height={25}/>
                </div>
                <div className={styles.tituloAlbum}>03:09</div>
              </div>

              <div className={styles.controlefaixa}>
                <div className={styles.titulofaixa}><samp className={styles.numFaixa}>03</samp> Rap dos Rokages</div>
                <div className={styles.tituloAlbum}> Nerd Hits</div>
                <div className={styles.iconFaixa}>
                  <img className={styles.iconBody} src="/imagens/get_app.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/favorite 2.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/reply.png" width={18} height={18}/>
                  <img className={styles.iconBody} src="/imagens/ops.png" width={25} height={25}/>
                </div>
                <div className={styles.tituloAlbum}>09:30</div>
              </div>

              
              
            </div>
          </section>
        </article>
        
        <article className={styles.controles2}>

        <section className={styles.controles}>
            <section className={styles.infomusica}>
                <img className={styles.capacd} src="/imagens/capacd.jpg" 
                width={55}
                height={40}
                />
                <div className={styles.titulomusica}>
                  <div className={styles.h6}>Rap do Tobirama (Naruto)</div>
                  <div className={styles.descricao}>Nerd Hits</div>
                </div>
                <img className={styles.iconControles} src="/imagens/favorite.png" width={15} height={15}/>
                <img src="/imagens/reply.png" width={15} height={15}/>
            </section>
            <section className={styles.controlesmusica}>
                <button className={styles.buttonskip_previous}></button>
                {isPlaying ? (<button onClick={tooglePlayPause} className={styles.buttonpause}></button>): 
                (<button onClick={tooglePlayPause} className={styles.buttonplay}></button>)}
                <button className={styles.buttonskip_next}></button>
              </section>
              <section className={styles.controlesvol}>
              <div className={styles.tempomusica}>
                <div className={styles.tempoinicial}>{secondsToTime(tempoInicial)}/</div><div className={styles.tempofinal}>{secondsToTime(tempoFinal)}</div>
              </div>
              <img className={styles.iconvol} src="/imagens/queue_music.png" width={20} height={20}/>
              {isMute ? <img className={styles.iconvol} onClick={toongleMute} src="/imagens/volume_off.png" width={20} height={20}/> :
              <img className={styles.iconvol} onClick={toongleMute} src="/imagens/volume_up.png" width={20} height={20}/>}
              
              <input className={styles.barravolume} type="range" min="0" max="1" step="0.01" value={volume} onChange={e => configVolume(Number(e.target.value))}></input>
            
            </section>
        </section>
        <section className={styles.campoBarraPlay}>
          <input className={styles.barraplay} type="range" min="0" max={tempoFinal} step="0.01" value={tempoInicial} onChange={e => configTempoInical(Number(e.target.value))}></input>
        </section>
        
          
          
        </article>
    </div>
    
  )
}
function convertor(tempoInicial: number): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal {
  throw new Error('Function not implemented.');
}

