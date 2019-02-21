import React, { Component } from 'react';
import logo from './logo.svg';
import './index.css';

  
  class Form extends React.Component {
    componentDidMount(){
        this.nameInput.focus(); 
    }
    render(){
      return (
        <div>
          <input 
            ref={(input) => { this.nameInput = input; }}  
            type="text" value={this.props.inputField} 
            onChange={this.props.onChange}
            onKeyPress={this.props.onKeyPress}
          />
          <button onClick={this.props.onClick}>Submit</button>
          <button onClick={this.props.onClickClear}>Clear</button>
        </div>
      );
    }
  }

  function Description(props) {
    return (
      <div>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
  }

  class Master extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputField: '',
        title: '',
        description: ''
      };
    }

    changeInput(e){
      this.setState({
        inputField: e.target.value
      })
    }
    // callBackendAPI = async (total) => {
    //     const response = fetch('/dbconn/'+total,{
    //       method: 'POST',
    //       headers: {"Content-Type": "application/json"}
    //     }).then(res => this.setState({ 
    //         title: response.title, 
    //         description: response.description
    //     })).catch(err => console.log(err));;
    //   };   
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async (total) => {
        const response = await fetch('/dbconn/'+total,{
            method: 'POST',
            headers: {"Content-Type": "application/json"}
          });
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };

    Submit=()=>{
      let inputFieldNow= this.state.inputField.toUpperCase().trim();

      let total = 0;
      for(let i=0;i<inputFieldNow.length;i++){
        let x = inputFieldNow[i];
        if(x === 'A' || x==='J'||x==='S')total+=1;
        else if(x === 'B' || x==='K'||x==='T')total+=2;
        else if(x === 'C' || x==='L'||x==='U')total+=3;
        else if(x === 'D' || x==='M'||x==='V')total+=4;
        else if(x === 'E' || x==='N'||x==='W')total+=5;
        else if(x === 'F' || x==='O'||x==='X')total+=6;
        else if(x === 'G' || x==='P'||x==='Y')total+=7;
        else if(x === 'H' || x==='Q'||x==='Z')total+=8;
        else if(x === 'I' || x==='R')total+=9;
        else if(!isNaN(x)) total+=parseInt(x,10);                    
        if(total>81)total%=80;          
      }
      // console.log(total);

      let title = "";
      let descr = "";
    //   if(total === 1){
    //       title = "SEMPURNA";
    //       descr = "Dengan upaya yang tekun dan tekad yang kuat, usaha yang di jalankan akan mendapat reputasi dan nama baik. Kejujuran akan menuai kepercayaan sehingga karier akan sukses dan lancar. Sebaiknya, bersikaplah tenang dan jangan terlalu banyak merasa bimbang/perubahan."
    //   }
    //   else if(total === 2){
    //       title = "LENYAP/ SIRNA";
    //       descr = "nasib tidak menentu, kemajuan hanya pada waktu awal dan kemusian memudar. Cita-cita sulit terwujud dan banyak problem di semua sektor. Bekerja keras tetapi tidak mendapat hasil.";
    //   }
    //   else if(total === 3){
    //       title = "KEBAIKAN";
    //       descr = "Bisa memiliki reputasi baik dan nama terkenal. Dengan tekad dan usaha yang benar, akhirnya bisa mengubah yang buruk menjadi bernasib baik. Utamakan sikap toleransi dan kebijaksanaan agar selalu mendapat dukungan/bantuan sehingga harapan bisa terwujud.";
    //   }
    //   else if(total === 4){
    //       title = "BERUBAH TIDAK BAIK";
    //       descr = "Tidak bisa mandiri karena bimbang mengambil keputusan. Kalau menemui siklus yang buruk, bisa mengubah keadaan menjadi semakin terpuruk. Usaha hanya jalan di tempat, maju tidak mati pun segan.";
    //   }
    //   else if(total === 5){
    //       title = "PANJANG UMUR";
    //       descr = "Ada kesempatan baik untuk meraih sukses, segala yang dikerjakan akan lancar kalau dilakukan dengan pikiran/logika yang sehat dan semangat yang tinggi. Di mana pun usaha dikembangkan akan menuai reputasi yang baik dan menguntungkan.";
    //   }
    //   else if(total === 6){
    //       title = "STABIL";
    //       descr = "Dibutuhkan pikiran dan tindakan yang tenang (namun penuh perhitungan) untuk meraih sukses, selanjutnya nasib akan berubah baik selamanya. Kalau waktunya tepat, pertolongan/bantuan akan di dapat sehingga usaha akan berkembang dengan sangat maju.";
    //   }
    //   else if(total === 7){
    //       title = "SENDIRIAN";
    //       descr = "Punya semangat, kuasa, dan jiwa kepemimpinan yang tinggi unutk meraih keberhasilan, sayangnya terlalu individual atau bertindak mengikuti ide yang subjektif. Kalau bisa membuka diri, sukses akan diraih.";
    //   }
    //   else if(total === 8){
    //       title = "TEKAD TINGGI";
    //       descr = "Dengan tekad yang kuat dan mau bekerja keras, sukses besar akan di dapat. Walaupun perjalanan tidak mulus, asalkan punya kesabaran, semua rintangan dapat dilalui dan nasib pun menjadi baik.";
    //   }
    //   else if(total === 9){
    //       title = "TIDAK BAIK";
    //       descr = "Ada bakat tetapi tidak punya kesempatan, ada keberhasilan tetapi tidak bisa mengelola sehingga kembali gagal. Tidak mendapat bantuan dan sering menghadapi kendala. Usaha sulit berkembang.";
    //   }
    //   else if(total === 10){
    //       title = "GELAP";
    //       descr = "Segala usaha dan tindakan sulit berhasil bahkan memungkinkan untuk gagal total. Sulit berkembang dan harapan tidak sesuai dengan impian karena terlalu berpikir dengan cara yang salah.";
    //   }
    //   else if(total === 11){
    //       title = "KEMBALI";
    //       descr = "kalau punya telad yang kuat, keberhasilan dengan mudah bisa didapat. Dengan kemauan, nasib buruk bisa diubah menjadi baik. Angka ini cocok untuk yang punya tekad baja.";
    //   }
    //   else if(total === 12){
    //       title = "TIDAK CUKUP";
    //       descr = "Tidak bisa mberjalan dengan lancar karena harapan tidak sesuai kenyataan. Kekuatan dan kemampuan tidak memadai sehingga usaha sulit berhasil. Bekerjalah sesuai realitas bukan berdasarkan keinginan.";
    //   }
    //   else if(total === 13){
    //       title = "BIJAKSANA";
    //       descr = "";
    //   }
    //   else if(total === 14){
    //       title = "RUSAK";
    //       descr = "";
    //   }
    //   else if(total === 15){
    //       title = "UMUR PANJANG";
    //       descr = "";
    //   }
    //   else if(total === 16){
    //       title = "MURAH HATI";
    //       descr = "";
    //   }
    //   else if(total === 17){
    //       title = "BAJA";
    //       descr = "";
    //   }
    //   else if(total === 18){
    //       title = "BERHASIL/SUKSES";
    //       descr = "";
    //   }
    //   else if(total === 19){
    //       title = "BANYAK KESULITAN";
    //       descr = "";
    //   }
    //   else if(total === 20){
    //       title = "NASIB JELEK";
    //       descr = "";
    //   }
    //   else if(total === 21){
    //       title = "TERANG BULAN";
    //       descr = "";
    //   }
    //   else if(total === 22){
    //       title = "RUMPUT MUSIM GUGUR";
    //       descr = "";
    //   }
    //   else if(total === 23){
    //       title = "KUAT";
    //       descr = "";
    //   }
    //   else if(total === 24){
    //       title = "MELIMPAH";
    //       descr = "";
    //   }
    //   else if(total === 25){
    //       title = "CAKAP";
    //       descr = "";
    //   }
    //   else if(total === 26){
    //       title = "BERUBAH ANEH";
    //       descr = "";
    //   }
    //   else if(total === 27){
    //       title = "BERGELOMBANG";
    //       descr = "";
    //   }
    //   else if(total === 28){
    //       title = "BERPISAH";
    //       descr = "";
    //   }
    //   else if(total === 29){
    //       title = "DAYA HIDUP";
    //       descr = "";
    //   }
    //   else if(total === 30){
    //       title = "NASIB BURUK";
    //       descr = "";
    //   }

      this.callBackendAPI(total)
        .then(res => this.setState({ 
            title: res.title,
            description: res.description
        }))
        .catch(err => console.log(err));
    
      
    //   this.setState({
    //     title: title,
    //     description: descr
    //   })
    }

    Clear = ()=>{
      this.setState({
        inputField:'',
        title: '',
        description: ''
      })
    }

    _handleKeyPress = (e) => {
      if (e.key === 'Enter') {
        this.Submit();
      }
    }

    render() {     
      return (
        <div>          
          <Form 
            onClick={this.Submit} 
            onClickClear={this.Clear}
            inputField = {this.state.inputField}
            onChange={(e)=>this.changeInput(e)}
            onKeyPress={this._handleKeyPress}
          />
          <Description 
            title={this.state.title}
            description={this.state.description} 
          />
        </div>
      );
    }
  }


  // ========================================
  
  class App extends Component {
    state = {
        title: null, 
        description: null
      };
    
      componentDidMount() {
          // Call our fetch function below once the component mounts
        this.callBackendAPI()
          .then(res => this.setState({ 
              title: res.title, 
              description: res.description
            }))
          .catch(err => console.log(err));
      }
        // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
      callBackendAPI = async () => {
        const response = await fetch('/dbconn');
        const body = await response.json();
    
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
      };
    
      render() {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            {/* Render the newly fetched data inside of this.state.data  */}
            <p className="App-intro">{this.state.title}</p>
          </div>
        );
      }
    }
    
    // export default App;
    export default Master;